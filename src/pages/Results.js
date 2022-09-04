import { useEffect, useState } from "react";
import { useLinkClickHandler } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import MotionPage from "../components/MotionPage";
import PageTitle from "../components/PageTitle";

export default function Results(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const passedData = location.state;


    const failReasons = {
        gender: "Only males can join the French Foreign Legion",
        literacy: "You have to be able to read and write on your native language to join the Legion",
        age: "Your age has to be between 17.5 and 39.5 years",
        bmi: "Your body mass index has to be between 20 and 30"
    }

    const toHome = useLinkClickHandler("/");

    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState();
    const [failReason, setFailReason] = useState(null);

    useEffect(() => {
        document.title = props.title;

        if (passedData) {
            const { success, reason } = passedData;

            navigate(location.pathname, { replace: true });
            setSuccess(success);
            setFailReason(reason);
        } else {
            navigate("/");
        }
    }, []);

    useEffect(() => {
        if (passedData) {
            setLoading(false);
        }
    }, [success, failReason, passedData])

    return (
        <MotionPage className="page">
            <div className="page__main">
                {
                    loading ?
                        <span>LOADING</span>
                        :
                        <div className="results">
                            <div className={`results__icon ${success ? "results__icon--success" : "results__icon--fail"}`}></div>
                            <PageTitle
                                title={
                                    success ?
                                        "Test Passed"
                                        :
                                        "Test Failed"
                                }
                                subtitle={
                                    failReason ?
                                        failReasons[failReason]
                                        :
                                        "Congrats! you are eligible to start your path to become a legionnaire"
                                }
                            />
                        </div>
                }
            </div>
            <div className="page__footer">
                <button className="btn btn--red" onClick={toHome}>Go to Home</button>
            </div>
        </MotionPage>
    );
}
