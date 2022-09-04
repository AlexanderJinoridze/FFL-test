import { motion } from "framer-motion";

export default function MotionPage(props) {

    const scale = props.noScale ? 1 : 0.98;
    const fadeOut = { opacity: 0, scale }
    const fadeIn = { opacity: 1, scale: 1 }

    return (
        <motion.div
            initial={fadeOut}
            animate={fadeIn}
            exit={fadeOut}
            transition={{ duration: 0.2 }}
            className={props.className}
        >
            {props.children}
        </motion.div>
    );
}