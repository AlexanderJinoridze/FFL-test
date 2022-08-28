import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Results(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const passedData = location.state;

    const [loading, setLoading] = useState(true);

    const [genderPass, setGenderPass] = useState();
    const [readPass, setReadPass] = useState();
    const [agePass, setAgePass] = useState();
    const [bmiPass, setBmiPass] = useState();

    const [testPass, setTestPass] = useState();

    const [bmi, setBmi] = useState(0);

    const isValidBMI = bmi => {
        return bmi > 20 && bmi < 30;
    }

    const isValidAge = age => {
        return age > 17.5 && age < 39.5;
    }

    const isValidGender = gender => {
        return gender === "male";
    }

    const isValidRead = read => {
        return read === "yes";
    }

    const getBMI = (weight, height) => parseFloat((weight / Math.pow(height / 100, 2)).toFixed(1))

    useEffect(() => {
        if (passedData) {
            const { weight, height } = passedData;

            setBmi(getBMI(weight, height))
        } else {
            navigate("/")
        }
    }, []);

    useEffect(() => {
        if (passedData) {
            const { sex, read, age } = passedData;

            setGenderPass(isValidGender(sex));
            setReadPass(isValidRead(read));
            setAgePass(isValidAge(age));
            setBmiPass(isValidBMI(bmi));
        }
    }, [bmi])

    useEffect(() => {
        if (passedData) {
            setTestPass([genderPass, readPass, agePass, bmiPass].every(elem => elem));
            setLoading(false)
        }
    }, [genderPass, readPass, agePass, bmiPass])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page"
        >
            {
                loading ?
                    <span>LOADING</span>
                    :
                    <>
                        {testPass ? <h1>TEST PASSED</h1> : <h1>TEST FAILED</h1>}
                        <div className={genderPass ? "eligible" : "ineligible"}>
                            <h2>GENDER: {passedData.sex}</h2>
                        </div>
                        <div className={readPass ? "eligible" : "ineligible"}>
                            <h2>READ: {passedData.read}</h2>
                        </div>
                        <div className={agePass ? "eligible" : "ineligible"}>
                            <h2>AGE: {passedData.age}</h2>
                        </div>
                        <div className={bmiPass ? "eligible" : "ineligible"}>
                            <h2>BMI: {bmi}</h2>
                        </div>
                    </>
            }
        </motion.div>
    );
}
