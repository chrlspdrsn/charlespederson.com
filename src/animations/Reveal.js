import React, { useRef, useEffect }from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import FadeIn from "./FadeIn";
import "./Animations.css";

const Reveal = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            slideControls.start("visible");
        }
    }, [isInView])

    return(
        <div ref={ref} className="reveal">
            <FadeIn>
                {children}
            </FadeIn>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="revealScreen"
            >
            </motion.div>
        </div>
    )
}

export default Reveal;