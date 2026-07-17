/**
 * Global page background: deep navy base, subtle grid, animated glow orbs
 * and a dezenter Mouse-Follow-Glow. Purely decorative -> aria-hidden.
 */
import { useEffect, useRef } from "react";

export default function Background() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip pointer glow on touch / small screens for performance.
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${e.clientX - 300}px, ${
            e.clientY - 300
          }px)`;
        }
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base */}
      <div className="absolute inset-0 bg-ink-950" />

      {/* grid */}
      <div className="absolute inset-0 bg-grid-lines bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

      {/* static gradient orbs */}
      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-electric-500/20 blur-[130px] animate-float" />
      <div className="absolute right-[-10%] top-[30%] h-[460px] w-[460px] rounded-full bg-violet-500/20 blur-[130px] animate-float [animation-delay:-3s]" />
      <div className="absolute bottom-[-15%] left-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px] animate-float [animation-delay:-5s]" />

      {/* top fade for header legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950 to-transparent" />

      {/* mouse follow glow */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full bg-electric-500/10 blur-[120px] will-change-transform md:block"
      />
    </div>
  );
}
