import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Gender from "../components/Gender";
import Literacy from "../components/Literacy";
import Age from "../components/Age";
import BMI from "../components/BMI";
import MotionPage from "../components/MotionPage";

export default function Test(props) {
    const navigate = useNavigate();

    const testMap = {
        "gender": [
            "gender"
        ],
        "literacy": [
            "literacy"
        ],
        "age": [
            "age"
        ],
        "bmi": [
            "height",
            "weight"
        ]
    };
    const testSteps = Object.keys(testMap);
    const errorMessages = {
        "gender": "Pick a gender of yours",
        "literacy": "Pick the answer to the question",
        "age": "Enter your age",
        "height": "Enter your height in centimeters",
        "weight": "Enter your weight in kilograms"
    };
    const getBmi = (height, weight) => parseFloat((weight / Math.pow(height / 100, 2)).toFixed(1));
    const notEmpty = fieldValue => !(fieldValue + "");
    const checks = {
        gender: gender => gender === "male",
        literacy: literacy => literacy === "yes",
        age: age => age >= 17.5 && age <= 39.5,
        bmi: (height, weight) => {
            const bmi = getBmi(height, weight);
            return bmi >= 20 && bmi <= 30
        }
    };


    const [testStep, setTestStep] = useState(testSteps[0]);
    const [fieldValues, setFieldValues] = useState({
        gender: "",
        literacy: "",
        age: "",
        height: "",
        weight: ""
    });
    const [validationActive, setValidationActive] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => { document.title = props.title }, [])

    const isFormValid = step => {
        let currentStepFields = testMap[step];
        let errors = {};
        let isFormValid = true;

        currentStepFields.forEach(fieldName => {
            const fieldValue = fieldValues[fieldName];
            if (notEmpty(fieldValue)) {
                isFormValid = false;
                errors[fieldName] = errorMessages[fieldName];
            }
        });

        setErrors(errors);
        return isFormValid;
    }

    const handleFieldChange = (event) => {
        const target = event.target;
        const fieldName = target.name;
        const value = target.value;

        if (target.validity.valid) {
            setFieldValues(prevState => ({ ...prevState, [fieldName]: value }))

            if (validationActive) {
                setErrors(prevState => ({ ...prevState, [fieldName]: notEmpty(value) ? errorMessages[fieldName] : "" }))
            }
        }
    }

    const handleSubmit = () => {
        if (isFormValid(testStep)) {
            const currentStepIndex = testSteps.indexOf(testStep);
            const nextStepIndex = currentStepIndex + 1;
            const nextStep = testSteps[nextStepIndex];

            const args = testMap[testStep].map(fieldName => fieldValues[fieldName]);

            if (checks[testStep](...args)) {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTestStep(nextStep);

                if (!nextStep) {
                    navigate("/results", { state: { success: true } })
                }
            } else {
                navigate("/results", { state: { success: false, reason: testStep } })
            }
        } else {
            setValidationActive(true);
        }
    }

    return (
        <MotionPage className="page">
            <div className="page__main">
                {
                    testStep === "gender" &&
                    <MotionPage noScale={true}>
                        <Gender onChange={handleFieldChange} error={errors["gender"]} />
                    </MotionPage>
                }

                {
                    testStep === "literacy" &&
                    <MotionPage noScale={true}>
                        <Literacy onChange={handleFieldChange} error={errors["literacy"]} />
                    </MotionPage>
                }

                {
                    testStep === "age" &&
                    <MotionPage noScale={true}>
                        <Age onInput={handleFieldChange} value={fieldValues["age"]} error={errors["age"]} />
                    </MotionPage>
                }

                {
                    testStep === "bmi" &&
                    <MotionPage noScale={true}>
                        <BMI
                            onInput={handleFieldChange}
                            values={{
                                height: fieldValues["height"],
                                weight: fieldValues["weight"]
                            }}
                            errors={{
                                height: errors["height"],
                                weight: errors["weight"]
                            }}
                        />
                    </MotionPage>
                }
            </div>
            <div className="page__footer">
                <button className="btn btn--green" onClick={handleSubmit}>Submit</button>
            </div>
        </MotionPage >
    );
}