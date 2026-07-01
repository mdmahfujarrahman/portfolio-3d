import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";

import { fadeIn, textVariant } from "@/styles/Motion";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt
            className="xs:w-[250px] w-full"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1}
            transitionSpeed={450}
        >
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card"
            >
                <div
                    className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
                >
                    <img
                        src={icon.src}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

export default ServiceCard;
