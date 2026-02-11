"use client";

import { useEffect, useRef } from "react";

export default function SplashCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (window.innerWidth < 768) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        let hearts: {
            x: number;
            y: number;
            size: number;
            life: number;
            dx: number;
            dy: number;
        }[] = [];

        const createHeart = (x: number, y: number) => {
            hearts.push({
                x,
                y,
                size: 20 + Math.random() * 10,
                life: 1,
                dx: (Math.random() - 0.5) * 2,
                dy: -1 - Math.random() * 1.5, // float upward
            });
        };

        const handleMove = (e: MouseEvent) => {
            createHeart(e.clientX, e.clientY);
        };

        window.addEventListener("mousemove", handleMove);

        const drawHeart = (
            x: number,
            y: number,
            size: number,
            alpha: number
        ) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(size / 20, size / 20);

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-10, -10, -20, 5, 0, 20);
            ctx.bezierCurveTo(20, 5, 10, -10, 0, 0);
            ctx.closePath();

            ctx.fillStyle = `rgba(255, 0, 100, ${alpha})`;
            ctx.shadowColor = "rgba(255,0,100,0.6)";
            ctx.shadowBlur = 15;
            ctx.fill();

            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = hearts.length - 1; i >= 0; i--) {
                const h = hearts[i];

                h.x += h.dx;
                h.y += h.dy;
                h.life -= 0.02;
                h.size *= 0.98;

                if (h.life <= 0) {
                    hearts.splice(i, 1);
                    continue;
                }

                drawHeart(h.x, h.y, h.size, h.life);
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
        />
    );
}
