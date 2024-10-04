

import React from 'react';
import { motion, useInView } from "framer-motion";
import { styles } from "../../styles";
import { staggerContainer } from "../utils/motion";
import { useRef } from "react";

interface SectionWrapperProps {
    idName: string;
}

const SectionWrapper = <P extends object>(Component: React.ComponentType<P>, idName: string) => {
    const HOC: React.FC<P & SectionWrapperProps> = (props) => {
        const sectionRef = useRef<HTMLElement>(null);
        const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

        return (
            <motion.section
                ref={sectionRef}
                variants={staggerContainer(0.1, 0.1)} // Added arguments to fix the error
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component {...props} />
            </motion.section>
        );
    };

    return HOC;
};

export default SectionWrapper;