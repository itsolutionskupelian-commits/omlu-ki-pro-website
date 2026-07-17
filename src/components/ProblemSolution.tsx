import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const problems = [
  "Manuelle Arbeit kostet täglich wertvolle Zeit.",
  "Excel-Listen werden unübersichtlich und fehleranfällig.",
  "Tools sind nicht miteinander verbunden.",
  "Daten liegen verstreut in vielen Systemen.",
  "Entscheidungen dauern zu lange.",
  "Teams wiederholen jeden Tag dieselben Aufgaben.",
  "Service, Vertrieb und Verwaltung skalieren schlecht.",
  "Das Management hat keinen Echtzeit-Überblick.",
];

const solutions = [
  "Automatisierte Workflows statt wiederkehrender Handarbeit.",
  "Strukturierte, verlässliche Daten an einem Ort.",
  "Verbundene Systeme mit sauberen Schnittstellen.",
  "Klare Dashboards mit Echtzeit-Kennzahlen.",
  "Schnellere, datenbasierte Entscheidungen.",
  "KI-Assistenten für Routineaufgaben.",
  "Prozesse, die mit dem Unternehmen mitwachsen.",
  "Operative Kontrolle über alle Abläufe.",
];

export default function ProblemSolution() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Problem &amp; Lösung</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Wenn Prozesse wachsen, wächst oft auch das{" "}
              <span className="gradient-text">Chaos.</span>
            </h2>
            <p className="mt-5 text-base text-slate-400 sm:text-lg">
              OMLU KI PRO analysiert diese Abläufe und entwickelt daraus
              individuelle KI-Systeme, Apps und Automationen, die Arbeit
              strukturieren, beschleunigen und messbar vereinfachen.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* Vorher */}
          <Reveal>
            <div className="glass-card h-full rounded-2xl p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-red-500/20 bg-red-500/10">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Vorher
                  </p>
                  <p className="font-semibold text-white">
                    Manuell, verstreut, wenig Kontrolle
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

          {/* Nachher */}
          <Reveal delay={0.1}>
            <div className="glass-card gradient-border h-full rounded-2xl p-7 shadow-glow">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Nachher
                  </p>
                  <p className="font-semibold text-white">
                    Automatisiert, klar, steuerbar
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
