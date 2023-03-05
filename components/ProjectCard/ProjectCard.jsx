import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { github } from "../../assets";
import { fadeIn } from "@/styles/Motion";
import Image from "next/image";

const ProjectCard = ({ project, index }) => {
    debugger;
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <Image
                        src={project.image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() =>
                                window.open(project.source_code_link, "_blank")
                            }
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <Image
                                src={github}
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">
                        {project.name}
                    </h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {project.description}
                    </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <p
                            key={`${project.name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

export default ProjectCard;
