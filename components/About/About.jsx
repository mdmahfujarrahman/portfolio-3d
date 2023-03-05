import { motion } from "framer-motion";

import { services } from "../constants/content";
import { fadeIn, textVariant } from "@/styles/Motion";
import { ServiceCard } from "../constants";
import SectionWrapper from "@/HOC/SectionWrapper";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    Introduction
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    OverView.
                </h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Writing well-designed, testable, efficient code by using best
                software development practices Creating website layout/user
                interfaces by using standard HTML/CSS, JavaScript, and React.js
                practices. Integrating data from various back-end services and
                also i'm a quick learner.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
