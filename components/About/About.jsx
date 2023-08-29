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
                Highly skilled and motivated Software Developer with a strong
                background in writing well-designed, testable, and efficient
                code, adhering to the best software development practices.
                Proficient in creating captivating website layouts and intuitive
                user interfaces by utilizing standard HTML, CSS, and JavaScript,
                as well as expertise in building dynamic web applications using
                React.js, Next.js, React Native and Node.js
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
