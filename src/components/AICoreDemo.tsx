/**
 * Interactive "AI Core" widget for the hero visual.
 *
 * Replaces the previously empty, purely decorative rotating sphere with
 * a content-rich, user-interactive demo: visitors click a task chip and
 * see a short, simulated preview of how OMLU KI PRO would approach it.
 * The whole panel also tilts gently with the cursor (kept from the
 * original ball interaction), but now wraps something meaningful.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import NeuralSphere from "./NeuralSphere";

type Prompt = {
  label: string;
  response: string;
};

const PROMPTS: Prompt[] = [
  {
    label: "Automate invoicing",
    response:
      "Invoices get scanned, matched to orders, and booked automatically — no manual data entry.",
  },
  {
    label: "Build a live dashboard",
    response:
      "Every key metric from your systems, combined into one real-time view for your team.",
  },
  {
    label: "Qualify leads with AI",
    response:
      "New leads are scored and routed automatically, so your team follows up faster.",
  },
  {
    label: "Summarize documents",
    response:
      "Long contracts and reports get condensed into the key facts in seconds.",
  },
];

export default function AICoreDemo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (activeIndex === null) return;
    const fullText = PROMPTS[activeIndex].response;
    let i = 0;
    setDisplayedText("");

    const typeNext = () => {
      i += 1;
      setDisplayedText(fullText.slice(0, i));
      if (i < fullText.length) {
        timeoutRef.current = setTimeout(typeNext, 18);
      }
    };
    timeoutRef.current = setTimeout(typeNext, 18);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(py * -10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const isIdle = activeIndex === null;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="relative h-full w-full"
    >
      {/* ambient rotating core stays as backdrop */}
      <div className="absolute inset-0 opacity-70">
        <NeuralSphere />
      </div>

      {/* interactive holographic panel floating in front of the core */}
      <div className="absolute inset-0 grid place-items-center p-4 sm:p-8">
        <div className="glass-card gradient-border w-full max-w-sm rounded-2xl p-5 shadow-glow">
          {/* terminal-style header */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-2 flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <Bot className="h-3.5 w-3.5 text-cyan-400" />
              AI Core — try it
            </span>
          </div>

          {/* prompt chips */}
          <div className="flex flex-wrap gap-2">
            {PROMPTS.map((p, i) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-pressed={activeIndex === i}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                  activeIndex === i
                    ? "border-electric-400/60 bg-electric-500/20 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* response area */}
          <div
            aria-live="polite"
            className="mt-4 min-h-[92px] rounded-xl border border-white/5 bg-black/20 p-4"
          >
            {isIdle ? (
              <p className="flex items-start gap-2 text-sm text-slate-500">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                Pick a task above to see how OMLU KI PRO would approach it.
              </p>
            ) : (
              <>
                <span className="sr-only">{PROMPTS[activeIndex].response}</span>
                <p aria-hidden="true" className="text-sm leading-relaxed text-slate-200">
                  {displayedText}
                  <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-cyan-400 align-middle" />
                </p>
              </>
            )}
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            Simulated preview — real systems are built around your data.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
