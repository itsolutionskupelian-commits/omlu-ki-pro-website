import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Search, Lightbulb, Boxes, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const steps: Step[] = [
  {
    icon: Search,
    title: "Prozesse verstehen",
    text: "Wir analysieren deine Abläufe, Tools, Datenquellen und Engpässe.",
  },
  {
    icon: Lightbulb,
    title: "KI-Potenziale erkennen",
    text: "Wir identifizieren, welche Aufgaben automatisiert, beschleunigt oder neu gedacht werden können.",
  },
  {
    icon: Boxes,
    title: "System entwickeln",
    text: "Wir bauen Apps, Dashboards, Automationen oder KI-Agenten, die exakt zu deinem Geschäft passen.",
  },
  {
    icon: TrendingUp,
    title: "Skalieren & verbessern",
    text: "Nach dem Launch optimieren wir weiter, damit dein System mit deinem Unternehmen wächst.",
  },
];

/** Abstract workflow visual: scattered nodes gradually connect into a system. */
function WorkflowVisual({ active }: { active: number }) {
  const nodes = [
    { x: 20, y: 25 },
    { x: 78, y: 18 },
    { x: 50, y: 45 },
    { x: 22, y: 72 },
    { x: 80, y: 70 },
    { x: 52, y: 88 },
  ];
  // how many connections revealed by step
  const connections = [
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [0, 1],
    [3, 4],
  ];
  const revealCount = Math.round(((active + 1) / steps.length) * connections.length);

  return (
    <div className="relative aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-3xl bg-electric-500/10 blur-3xl" />
      <div className="glass-card gradient-border relative h-full w-full overflow-hidden rounded-3xl p-6">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4d7cff" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          {connections.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="url(#lineGrad)"
              strokeWidth={0.6}
              initial={false}
              animate={{ opacity: i < revealCount ? 0.8 : 0.06 }}
              transition={{ duration: 0.6 }}
            />
          ))}

          {nodes.map((n, i) => (
            <g key={i}>
              <motion.circle
                cx={n.x}
                cy={n.y}
                animate={{
                  r: i <= active + 1 ? 2.6 : 1.8,
                  opacity: i <= active + 2 ? 1 : 0.4,
                }}
                transition={{ duration: 0.5 }}
                fill="#a855f7"
              />
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={5}
                fill="none"
                stroke="#4d7cff"
                strokeWidth={0.4}
                initial={false}
                animate={{ opacity: i <= active + 1 ? 0.5 : 0 }}
              />
            </g>
          ))}
        </svg>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Von Chaos</span>
            <span className="gradient-text font-semibold">zu Kontrolle</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-electric-500 to-cyan-400"
              animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Scrollytelling() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length));
    setActive(idx < 0 ? 0 : idx);
  });

  return (
    <section id="loesungen" className="section-pad scroll-mt-24">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Vorgehen</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Von Chaos zu <span className="gradient-text">Kontrolle</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 sm:text-lg">
            Wir verwandeln komplexe Abläufe in klare digitale Systeme.
          </p>
        </div>

        <div ref={ref} className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Sticky visual */}
          <div className="hidden lg:block">
            <div className="sticky top-28 flex justify-center">
              <WorkflowVisual active={active} />
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-6">
            {/* mobile visual */}
            <div className="flex justify-center lg:hidden">
              <WorkflowVisual active={active} />
            </div>

            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <div
                  key={s.title}
                  className={`glass-card rounded-2xl p-6 transition-all duration-500 ${
                    isActive
                      ? "border-electric-400/40 shadow-glow"
                      : "opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                        isActive
                          ? "bg-gradient-to-br from-electric-500 to-violet-500 text-white"
                          : "bg-white/5 text-slate-400"
                      }`}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-electric-400">
                          Schritt {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
