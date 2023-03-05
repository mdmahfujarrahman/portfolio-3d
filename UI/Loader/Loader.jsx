import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html as="div" center className="loader-div">
            <span className="canvas-load"></span>
            <p className="loader-style">{progress.toFixed(2)}%</p>
        </Html>
    );
};

export default CanvasLoader;
