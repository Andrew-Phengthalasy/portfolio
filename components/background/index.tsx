"use client";
import { useEffect, useRef } from "react";

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Particles
        const particles = Array.from({ length: 60 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.4 + 0.1,
        }));

        // Glows
        const glows = [
            { x: canvas.width * 0.3, y: canvas.height * 0.4, radius: 400, color: "157, 110, 255", speedX: 0.15, speedY: 0.1 },
            { x: canvas.width * 0.7, y: canvas.height * 0.6, radius: 300, color: "201, 168, 76", speedX: -0.1, speedY: 0.12 },
        ];

        let animFrame: number;
        let tick = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            tick += 0.005;

            // Draw glows
            glows.forEach((glow) => {
                glow.x += Math.sin(tick * glow.speedX) * 0.8;
                glow.y += Math.cos(tick * glow.speedY) * 0.8;

                const gradient = ctx.createRadialGradient(
                    glow.x, glow.y, 0,
                    glow.x, glow.y, glow.radius
                );
                gradient.addColorStop(0, `rgba(${glow.color}, 0.12)`);
                gradient.addColorStop(1, `rgba(${glow.color}, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(glow.x, glow.y, glow.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw particles
            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(157, 110, 255, ${p.opacity})`;
                ctx.fill();
            });

            animFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animFrame);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}