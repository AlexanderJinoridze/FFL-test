import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Test() {
    const navigate = useNavigate();

    const [fields, setFields] = useState({
        sex: "",
        read: "",
        age: "",
        height: "",
        weight: "",
    });
    const [validationActive, setValidationActive] = useState(false);
    const [errors, setErrors] = useState({});

    const errorMessages = {
        "sex": "Pick a gender of yours",
        "read": "Pick the answer to the question",
        "age": "This field can not be empty",
        "height": "This field can not be empty",
        "weight": "This field can not be empty"
    }

    const isEmpty = fieldValue => {
        return !!fieldValue;
    }

    const isFormValid = () => {
        let errors = {};
        let formIsValid = true;

        for (const [key, value] of Object.entries(fields)) {
            if (!isEmpty(value)) {
                formIsValid = false;
                errors[key] = errorMessages[key];
            }
        }

        setErrors(errors);
        return formIsValid;
    }

    const handleFormChange = (event, field) => {
        const target = event.target;
        const value = target.value;

        if (target.validity.valid) {

            setFields(prevState => {
                const newState = { ...prevState };

                newState[field] = value;

                return newState;
            })

            if (validationActive) {
                if (isEmpty(value)) {
                    setErrors(prevState => {
                        const newState = { ...prevState };
                        newState[field] = "";
                        return newState;
                    })
                } else {
                    setErrors(prevState => {
                        const newState = { ...prevState };
                        newState[field] = errorMessages[field];
                        return newState;
                    })
                }
            }
        }
    }

    const handleSubmit = event => {
        if (isFormValid()) {
            navigate("/results", { state: fields })
        } else {
            setValidationActive(true);
        }
    }

    useEffect(() => {
        console.log(fields)
    }, [fields])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page"
        >
            <div>
                <h4>Gender</h4>
                <strong>Select your sex</strong>
                <div onChange={event => handleFormChange(event, "sex")}>
                    <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" value="male" name="gender" />
                    </div>
                    <div>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" value="female" name="gender" />
                    </div>
                </div>

                <span style={{ color: "red" }}>{errors["sex"]}</span>
            </div>

            <div>
                <h4>Ability of read and write</h4>
                <strong>Are you able to read and write on your native language?</strong>
                <div onChange={event => handleFormChange(event, "read")}>
                    <div>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="yes" value="yes" name="read" />
                    </div>
                    <div>
                        <label htmlFor="no">No</label>
                        <input type="radio" id="no" value="no" name="read" />
                    </div>
                </div>

                <span style={{ color: "red" }}>{errors["read"]}</span>
            </div>

            <div>
                <h4>Age</h4>
                <label htmlFor="age">
                    <strong>How old are you?</strong>
                </label>
                <input
                    type="text"
                    id="age"
                    pattern="[0-9]*"
                    onInput={event => handleFormChange(event, "age")}
                    value={fields.age}
                />
                <span>Years</span>

                <span style={{ color: "red" }}>{errors["age"]}</span>
            </div>

            <div>
                <h4>Height</h4>
                <label htmlFor="height">
                    <strong>What is your height in centimeters?</strong>
                </label>
                <input
                    type="text"
                    id="height"
                    pattern="[0-9]*"
                    onInput={event => handleFormChange(event, "height")}
                    value={fields.height}
                />
                <span>cm</span>

                <span style={{ color: "red" }}>{errors["height"]}</span>
            </div>

            <div>
                <h4>Weight</h4>
                <label htmlFor="weight">
                    <strong>What is your weight in centimeters?</strong>
                </label>
                <input
                    type="text"
                    id="weight"
                    pattern="[0-9]*"
                    onInput={event => handleFormChange(event, "weight")}
                    value={fields.weight}
                />
                <span>Kg</span>

                <span style={{ color: "red" }}>{errors["weight"]}</span>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </motion.div>
    );
}