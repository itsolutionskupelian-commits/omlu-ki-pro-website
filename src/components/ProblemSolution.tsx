import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const problems = [
  "Manual work costs valuable time every day.",
  "Spreadsheets become messy and error-prone.",
  "Tools aren't connected to each other.",
  "Data is scattered across many systems.",
  "Decisions take too long to make.",
  "Teams repeat the same tasks every day.",
  "Service, sales, and admin scale poorly.",
  "Management has no real-time overview.",
];

const solutions = [
  "Automated workflows instead of repetitive manual work.",
  "Structured, reliable data in one place.",
  "Connected systems with clean interfaces.",
  "Clear dashboards with real-time metrics.",
  "Faster, data-driven decisions.",
  "AI assistants for routine tasks.",
  "Processes that grow with your business.",
  "Operational control over every workflow.",
];

export default function ProblemSolution() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Problem &amp; Solution</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              As processes grow, so does the{" "}
              <span className="gradient-text">chaos.</span>
            </h2>
            <p className="mt-5 text-base text-slate-400 sm:text-lg">
              OMLU KI PRO analyzes these workflows and builds custom AI
              systems, apps, and automation that structure, speed up, and
              measurably simplify the work.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* Before */}
          <Reveal>
            <div className="glass-card h-full rounded-2xl p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-red-500/20 bg-red-500/10">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Before
                  </p>
                  <p className="font-semibold text-white">
                    Manual, scattered, little control
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Arrow */}
          <div className="hidden items-center justify-center lg:flex">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-electric-500 to-violet-500 shadow-glow">
              <ArrowRight className="h-6 w-6 text-white" />
            </span>
          </div>

          {/* After */}
          <Reveal delay={0.1}>
            <div className="glass-card gradient-border h-full rounded-2xl p-7 shadow-glow">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    After
                  </p>
                  <p className="font-semibold text-white">
                    Automated, clear, manageable
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {solutions.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
