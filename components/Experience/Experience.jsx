import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants/content";
import SectionWrapper from "../../HOC/SectionWrapper";
import { textVariant } from "@/styles/Motion";
import { ExperienceCard } from "../constants";

const Experience = () => {
    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    What I've done
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Experience.
                </h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={experience.date}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, "experience");
