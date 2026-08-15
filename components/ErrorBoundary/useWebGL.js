import { useEffect, useState } from "react";

/**
 * Reports whether this browser can give us a WebGL context.
 *
 * three.js throws from its own render loop when the context is missing, which
 * is outside React's call stack, so an error boundary never sees it and the
 * whole page dies with "Application error". Checking first and skipping the
 * Canvas keeps the failure contained.
 *
 * Returns null until the check runs, so nothing renders differently between
 * the server and the first client paint.
 */
const useWebGL = () => {
    const [supported, setSupported] = useState(null);

    useEffect(() => {
        try {
            const canvas = document.createElement("canvas");
            const gl =
                canvas.getContext("webgl2") ||
                canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl");
            setSupported(Boolean(gl));
        } catch {
            setSupported(false);
        }
    }, []);

    return supported;
};

export default useWebGL;
