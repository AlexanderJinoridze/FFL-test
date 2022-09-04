import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop(props) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

    return (
        <>
            {
                props.children
            }
        </>
    )
}