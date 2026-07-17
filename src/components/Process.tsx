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
    title: "Erstgespräch",
    text: "Wir verstehen dein Ziel, deine aktuellen Abläufe und die größten Engpässe.",
  },
  {
    icon: ClipboardList,
    title: "Analyse & Konzept",
    text: "Wir definieren, welche Lösung technisch und wirtschaftlich Sinn ergibt.",
  },
  {
    icon: FlaskConical,
    title: "Prototyp / MVP",
    text: "Wir bauen eine erste testbare Version, damit du schnell Feedback geben kannst.",
  },
  {
    icon: Code2,
    title: "Entwicklung",
    text: "Wir setzen die Lösung sauber, performant und skalierbar um.",
  },
  {
    icon: Rocket,
    title: "Launch & Optimierung",
    text: "Wir begleiten den Start, verbessern Workflows und erweitern das System bei Bedarf.",
  },
];

export default function Process() {
  return (
    <section id="prozess" className="section-pad scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Prozess</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              So läuft ein Projekt mit{" "}
              <span className="gradient-text">OMLU KI PRO</span> ab.
            </h2>
            <p className="mt-5 text-base text-slate-400 sm:text-lg">
              Strukturiert, transparent und mit Fokus auf schnell sichtbare
              Ergebnisse.
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
