import { useEffect } from "react";
import { useLinkClickHandler } from "react-router-dom";

import MotionPage from "../components/MotionPage";

export default function Home(props) {
    let toTest = useLinkClickHandler("/test");

    useEffect(() => { document.title = props.title }, []);

    return (
        <MotionPage className="welcome">
            <div className="welcome__content">
                <h1>See if you are eligible to even start your path to be a part of The elite, to be Legionnaire</h1>
                <button className="btn btn--red" onClick={event => { toTest(event) }}>Take the Test</button>
            </div>
        </MotionPage>
    );
}