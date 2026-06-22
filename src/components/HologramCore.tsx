"use client";
import { useEffect, useRef } from "react";

export default function HologramCore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{ x: number; y: number; r: number; origX: number; origY: number; angle: number; speed: number }> = [];
    const particleCount = 55;
    const sphereRadius = Math.min(width, height) * 0.24;

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);

      particles.push({
        x: width / 2 + x,
        y: height / 2 + y,
        origX: x,
        origY: y,
        r: Math.random() * 1.8 + 1,
        angle: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.003
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const renderLoop = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(99, 102, 241, 0.09)";
      ctx.lineWidth = 0.8;
      
      particles.forEach((p, index) => {
        p.angle += p.speed;
        const cos = Math.cos(p.speed);
        const sin = Math.sin(p.speed);
        
        const nextX = p.origX * cos - p.origY * sin;
        const nextY = p.origX * sin + p.origY * cos;
        p.origX = nextX;
        p.origY = nextY;

        p.x = width / 2 + nextX;
        p.y = height / 2 + nextY;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(129, 140, 248, 0.5)";
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none bg-black" />;
}
