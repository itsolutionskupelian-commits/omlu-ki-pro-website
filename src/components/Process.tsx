import { PhoneCall, ClipboardList, FlaskConical, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Phase = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const phases: Phase[] = [
  {
    icon: PhoneCall,
    title: "Initial call",
    text: "We understand your goal, your current workflows, and your biggest bottlenecks.",
  },
  {
    icon: ClipboardList,
    title: "Analysis & concept",
    text: "We define which solution makes sense both technically and economically.",
  },
  {
    icon: FlaskConical,
    title: "Prototype / MVP",
    text: "We build a first testable version so you can give feedback quickly.",
  },
  {
    icon: Code2,
    title: "Development",
    text: "We implement the solution cleanly, performantly, and at scale.",
  },
  {
    icon: Rocket,
    title: "Launch & optimization",
    text: "We support the launch, improve workflows, and extend the system as needed.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Process</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              How a project with{" "}
              <span className="gradient-text">OMLU KI PRO</span> works.
            </h2>
            <p className="mt-5 text-base text-slate-400 sm:text-lg">
              Structured, transparent, and focused on results you can see
              quickly.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {phases.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="relative flex h-full flex-col items-center text-center">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-electric-500 to-violet-500 text-white shadow-glow">
                    <p.icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full border border-white/20 bg-ink-900 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
