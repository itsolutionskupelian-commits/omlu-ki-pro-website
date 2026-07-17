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
    title: "KI-first statt klassische Agentur",
    text: "Wir denken nicht in Standard-Websites, sondern in intelligenten Systemen, Prozessen und Automationen.",
  },
  {
    icon: Fingerprint,
    title: "Individuell statt Baukasten",
    text: "Jede Lösung wird auf den konkreten Ablauf, die Daten und das Ziel des Unternehmens abgestimmt.",
  },
  {
    icon: Target,
    title: "Business-Fokus statt Technik-Spielerei",
    text: "Wir entwickeln nur das, was echten Nutzen bringt: weniger Aufwand, bessere Übersicht, mehr Geschwindigkeit.",
  },
  {
    icon: Layers,
    title: "Moderne technische Umsetzung",
    text: "Skalierbare Apps, saubere Schnittstellen, performante Frontends und zukunftsfähige Architekturen.",
  },
  {
    icon: Rocket,
    title: "Schnelle Prototypen",
    text: "Aus Ideen entstehen schnell testbare MVPs, damit Unternehmen früh sehen, was möglich ist.",
  },
  {
    icon: RefreshCw,
    title: "Langfristige Optimierung",
    text: "Nach dem Launch können Systeme erweitert, verbessert und an neue Anforderungen angepasst werden.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">Warum OMLU KI PRO</span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Warum Unternehmen mit{" "}
                <span className="gradient-text">OMLU KI PRO</span> arbeiten.
              </h2>
              <p className="mt-5 max-w-md text-base text-slate-400 sm:text-lg">
                Wir verbinden KI, Softwareentwicklung, Automatisierung und
                Business-Verständnis – und entwickeln Lösungen für echte
                operative Probleme.
              </p>
              <a href="#kontakt" className="btn-primary mt-8">
                Unverbindlich anfragen
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
