import { motion } from "framer-motion";

import SectionWrapper from "../../HOC/SectionWrapper";
import { fadeIn, textVariant } from "@/styles/Motion";
import { projects } from "../constants/content";
import { ProjectCard } from "../constants";

const Work = () => {
    return (
        <div id="work">
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    My Work
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Projects.
                </h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience
                    through real-world examples of my work. Each project is
                    briefly described with links to code repositories and live
                    demos in it. It reflects my ability to solve complex
                    problems, work with different technologies, and manage
                    projects effectively.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-col md:flex-row flex-warp gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.name}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Work, "");
