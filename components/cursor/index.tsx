"use client";
import {useEffect, useState} from "react";

export default function Cursor() {

    const [position, setPosition] = useState({x: 0, y: 0});
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            setPosition({x: e.clientX, y: e.clientY});
            if (!visible) setVisible(true);
        }

        const onEnter = () => setHovered(true);
        const onLeave = () => setHovered(false);

        // Tracking where mouse is
        window.addEventListener("mousemove", onMove);

        // tracking UI elements that are hoverable

        const addListener = () => {
            const targets = document.querySelectorAll(
                "a, button, [role = 'button']"
            );
            targets.forEach(el => {
                el.addEventListener("mouseenter", onEnter);
                el.addEventListener("mouseleave", onLeave);
            });
        }
        addListener();

        //dynamic content changes

        const observer = new MutationObserver(addListener)
        observer.observe(document.body, {childList: true, subtree: true});

        return () => {
            window.removeEventListener("mousemove", onMove);
            observer.disconnect();
        };
    }, [visible]);
    if (!visible) return null;

    return (
        <div className="fixed top-0 left-0 z-[9999] pointer-events-none"
             style={{
                 transform: `translate(${position.x}px, ${position.y}px, 0)`,
             }}>
            <div className="rounded-full bg-accent transition-all duration-150 ease-out"
                 style={{
                     width: hovered ? "40px" : "10px",
                     height: hovered ? "40px" : "10px",
                     opacity: hovered ? 0.3 : 1,
                     transform: `translate(-50%, -50%)`,
                 }}
            />
        </div>
    );
}