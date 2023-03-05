import React from "react";

import { technologies } from "../constants/content";
import SectionWrapper from "../../HOC/SectionWrapper";
import BallCanvas from "../Ball/Ball";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");
