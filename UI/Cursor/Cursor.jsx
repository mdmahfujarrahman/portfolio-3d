import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.pageX, y: e.pageY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    const { x, y } = cursorPosition;
    return (
        <div
            className="circle-out"
            style={{ top: `${y}px`, left: `${x}px` }}
        ></div>
    );
};

export default Cursor;
