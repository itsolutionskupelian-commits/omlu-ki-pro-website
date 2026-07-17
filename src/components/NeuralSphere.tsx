/**
 * Lightweight canvas-based "AI Core" / Neural-Sphere.
 * A rotating 3D point cloud on a sphere with proximity-based connections,
 * projected to 2D. Chosen over three.js to keep the bundle small and to
 * guarantee stable, dependency-free rendering with good performance.
 *
 * Optimisations:
 *  - DPR capped at 2
 *  - node count reduced on small screens
 *  - respects prefers-reduced-motion
 *  - pauses when off-screen (IntersectionObserver)
 *  - subtle parallax reacting to pointer position
 */
import { useEffect, useRef } from "react";

type Node = { x: number; y: number; z: number };

export default function NeuralSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmall = window.innerWidth < 640;

    const NODE_COUNT = isSmall ? 90 : 150;
    const RADIUS_BASE = isSmall ? 130 : 190;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Distribute nodes evenly on a sphere (Fibonacci sphere).
    const nodes: Node[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (i / (NODE_COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      nodes.push({
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
      });
    }

    let angleX = 0.4;
    let angleY = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetPX = 0;
    let targetPY = 0;

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetPX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      targetPY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    let running = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) loop();
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    const project = (n: Node, radius: number) => {
      // rotate around Y then X
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      let x = n.x * cosY - n.z * sinY;
      let z = n.x * sinY + n.z * cosY;
      let y = n.y * cosX - z * sinX;
      z = n.y * sinX + z * cosX;

      const perspective = 420 / (420 + z * radius);
      return {
        sx: width / 2 + x * radius * perspective,
        sy: height / 2 + y * radius * perspective,
        depth: (z + 1) / 2, // 0..1
        scale: perspective,
      };
    };

    let raf = 0;
    const render = () => {
      const radius = Math.min(RADIUS_BASE, width * 0.42);
      ctx.clearRect(0, 0, width, height);

      // smooth pointer parallax
      pointerX += (targetPX - pointerX) * 0.05;
      pointerY += (targetPY - pointerY) * 0.05;

      if (!reduceMotion) {
        angleY += 0.0022;
        angleX = 0.4 + pointerY;
      }
      const spinOffset = pointerX;

      const projected = nodes.map((n) => project(n, radius));

      // connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius * 0.38) {
            const alpha = (1 - dist / (radius * 0.38)) * 0.35 * a.depth;
            ctx.strokeStyle = `rgba(90,140,255,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.sx + spinOffset * 20, a.sy);
            ctx.lineTo(b.sx + spinOffset * 20, b.sy);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const p of projected) {
        const size = (0.8 + p.depth * 2.2) * p.scale;
        const alpha = 0.35 + p.depth * 0.65;
        // color mix by depth: cyan (near) -> violet (far)
        const r = Math.round(60 + p.depth * 60);
        const g = Math.round(120 + p.depth * 80);
        const bl = 255;
        ctx.fillStyle = `rgba(${r},${g},${bl},${alpha})`;
        ctx.beginPath();
        ctx.arc(p.sx + spinOffset * 20, p.sy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // glowing core
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        radius * 0.7
      );
      grad.addColorStop(0, "rgba(120,90,255,0.25)");
      grad.addColorStop(0.5, "rgba(47,92,255,0.08)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius * 0.7, 0, Math.PI * 2);
      ctx.fill();
    };

    const loop = () => {
      if (!running) return;
      render();
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      role="img"
      aria-label="Abstrakte Visualisierung eines KI-Neural-Cores mit vernetzten Datenpunkten"
    />
  );
}
