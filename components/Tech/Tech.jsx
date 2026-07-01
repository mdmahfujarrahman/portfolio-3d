import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import { technologies } from "../constants/content";
import SectionWrapper from "../../HOC/SectionWrapper";
import { Ball } from "../Ball/Ball";
import CanvasLoader from "../../UI/Loader/Loader";

const TechBall = ({ icon, position }) => {
    return (
        <group position={position}>
            <Ball imgUrl={icon} />
        </group>
    );
};

const Tech = () => {
    const cols = 5;
    const spacing = 4;

    return (
        <div className="w-full h-[500px]">
            <Canvas
                frameloop="demand"
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                camera={{ position: [0, 0, 15], fov: 45 }}
            >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={false} />
                    {technologies.map((tech, index) => {
                        const col = index % cols;
                        const row = Math.floor(index / cols);
                        const x = (col - (cols - 1) / 2) * spacing;
                        const y = -(row - 1) * spacing;
                        return (
                            <TechBall
                                key={tech.name}
                                icon={tech.icon}
                                position={[x, y, 0]}
                            />
                        );
                    })}
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default SectionWrapper(Tech, "");
