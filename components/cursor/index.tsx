"use client";
import {useEffect, useState, useRef} from "react";

export default function Cursor() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            setPosition({x: e.clientX, y: e.clientY});
        };

        const onEnter = () => setHovered(true);
        const onLeave = () => setHovered(false);

        window.addEventListener("mousemove", onMove);

        const targets = document.querySelectorAll("a, button, [role='button']");
        targets.forEach((el) => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        return () => {
            window.removeEventListener("mousemove", onMove);
            targets.forEach((el) => {
                el.removeEventListener("mouseenter", onEnter);
                el.removeEventListener("mouseleave", onLeave);
            });
        };
    }, []);

    //dynamic content changes

    return (
        <div
            className="fixed z-[9999] pointer-events-none"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div
                className="rounded-full bg-accent transition-all duration-150 ease-out"
                style={{
                    width: hovered ? "40px" : "10px",
                    height: hovered ? "40px" : "10px",
                    opacity: hovered ? 0.3 : 1,
                    transform: "translate(-50%, -50%)",
                }}
            />
        </div>
    );
}