import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "../../UI/Loader/Loader";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl.src]);
    // Lights live on the Canvas, not here. One pair per ball meant fifteen of
    // each in the grid, and the light stacked up until every ball washed out.
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <mesh castShadow receiveShadow scale={1.5}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

export { Ball };
