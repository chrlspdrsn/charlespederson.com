import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Animations.css";

const FadeIn = ({ children, width="fit-content", duration=1.25, delay=0.5 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return(
        <div ref={ref} className="reveal">
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default FadeIn;