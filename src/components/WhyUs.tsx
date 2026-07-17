import {
  Cpu,
  Fingerprint,
  Target,
  Layers,
  Rocket,
  RefreshCw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Reason = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const reasons: Reason[] = [
  {
    icon: Cpu,
    title: "AI-first, not a classic agency",
    text: "We don't think in terms of standard websites, but in intelligent systems, processes, and automation.",
  },
  {
    icon: Fingerprint,
    title: "Custom-built, not off-the-shelf",
    text: "Every solution is tailored to your specific workflow, data, and business goal.",
  },
  {
    icon: Target,
    title: "Business focus, not tech for tech's sake",
    text: "We only build what delivers real value: less effort, better visibility, more speed.",
  },
  {
    icon: Layers,
    title: "Modern technical execution",
    text: "Scalable apps, clean interfaces, high-performance frontends, and future-proof architecture.",
  },
  {
    icon: Rocket,
    title: "Fast prototypes",
    text: "Ideas become testable MVPs quickly, so you can see what's possible early on.",
  },
  {
    icon: RefreshCw,
    title: "Long-term optimization",
    text: "After launch, systems can be extended, improved, and adapted to new requirements.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">Why OMLU KI PRO</span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Why companies work with{" "}
                <span className="gradient-text">OMLU KI PRO</span>.
              </h2>
              <p className="mt-5 max-w-md text-base text-slate-400 sm:text-lg">
                We combine AI, software engineering, automation, and business
                understanding — and build solutions for real operational
                problems.
              </p>
              <a href="#contact" className="btn-primary mt-8">
                Get in touch
              </a>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.08}>
                <article className="glass-card gradient-border h-full rounded-2xl p-6">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-violet-500/20 text-violet-400">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {r.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
