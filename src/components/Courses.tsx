import { GraduationCap, ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

const modules = [
  "AI fundamentals for businesses",
  "Automation in everyday work",
  "Prompting for business",
  "Tool workflows",
  "Internal AI processes",
  "AI for sales, admin, marketing, and customer service",
  "Custom team training",
  "Hands-on live sessions instead of dry theory",
];

export default function Courses() {
  return (
    <section id="courses" className="section-pad scroll-mt-24">
      <div className="container-x">
        <div className="glass-card gradient-border overflow-hidden rounded-3xl">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <span className="eyebrow">
                  <GraduationCap className="h-3.5 w-3.5 text-cyan-400" />
                  Live Courses &amp; Training
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Understand AI. Apply automation.{" "}
                  <span className="gradient-text">Empower your team.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                  We offer live courses and workshops for companies, teams,
                  and business owners who want to use AI in practice, not
                  just in theory.
                </p>
                <a href="#contact" className="btn-primary mt-8">
                  Request a workshop
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {modules.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-electric-500 to-violet-500">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span className="text-sm text-slate-300">{m}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
