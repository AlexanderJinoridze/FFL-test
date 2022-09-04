import { useEffect } from "react";
import { useLinkClickHandler } from "react-router-dom";
import MotionPage from "../components/MotionPage";
import PageTitle from "../components/PageTitle";

export default function NotFound(props) {
    const toHome = useLinkClickHandler("/");

    useEffect(() => { document.title = props.title }, [])

    return (
        <MotionPage className="page">
            <div className="page__main">
                <PageTitle title="404 Not Found" subtitle="This page doesn’t exist" />
            </div>
            <div className="page__footer">
                <button className="btn btn--red" onClick={toHome}>Go to Home</button>
            </div>
        </MotionPage>
    );
}