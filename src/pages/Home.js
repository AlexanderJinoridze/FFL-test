import { useLinkClickHandler } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    let toTest = useLinkClickHandler("/test");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page"
        >
            <h3>See if you are eligibile to even start your path to be a part of elit, to be Legionaire</h3>

            <button onClick={event => {
                event.preventDefault();
                toTest(event);
            }}>Take the Test</button>
        </motion.div>
    );
}