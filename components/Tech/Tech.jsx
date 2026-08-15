import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import { technologies } from "../constants/content";
import SectionWrapper from "../../HOC/SectionWrapper";
import { Ball } from "../Ball/Ball";
import CanvasLoader from "../../UI/Loader/Loader";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import useWebGL from "../ErrorBoundary/useWebGL";

const TechBall = ({ icon, position }) => {
    return (
        <group position={position}>
            <Ball imgUrl={icon} />
        </group>
    );
};

const Tech = () => {
    const webgl = useWebGL();
    const cols = 5;
    // Balls are radius 1 at scale 1.5, so keep spacing comfortably above 3 or
    // they overlap into one blob.
    const spacing = 4.2;

    // Shown instead of the 3D scene when WebGL is unavailable.
    const fallback = (
        <div className="w-full flex flex-wrap justify-center gap-3 py-10">
            {technologies.map((tech) => (
                <span
                    key={tech.name}
                    className="bg-tertiary text-secondary rounded-full px-5 py-2 text-[16px]"
                >
                    {tech.name}
                </span>
            ))}
        </div>
    );

    // Only mount the Canvas once support is confirmed. `webgl` is null until
    // the check runs, and mounting on null would race the detection.
    if (webgl !== true) {
        return fallback;
    }

    return (
        <div className="w-full h-[500px]">
          <ErrorBoundary fallback={fallback}>
            <Canvas
                frameloop="demand"
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                camera={{ position: [0, 0, 15], fov: 45 }}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 10]} intensity={1.2} />
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
          </ErrorBoundary>
        </div>
    );
};

export default SectionWrapper(Tech, "");
