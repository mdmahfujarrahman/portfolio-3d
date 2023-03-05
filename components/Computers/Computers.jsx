import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../../UI/Loader/Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                intensity={1}
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                castShadow
                shadow-mapSize={1024}
            />
            <directionalLight intensity={0.5} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setMobile(mediaQuery.matches);

        const handleMediaQueryResize = (e) => {
            setMobile(e.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryResize);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryResize);
        };
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>
        </Canvas>
    );
};

export default ComputersCanvas;
