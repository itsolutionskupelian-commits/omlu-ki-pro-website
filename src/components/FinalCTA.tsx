import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="kontakt" className="section-pad scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-electric-600/25 via-violet-500/15 to-cyan-500/15 p-8 text-center sm:p-14 lg:p-20">
            {/* decorative */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-electric-500/30 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/30 blur-[100px]"
            />

            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Bereit, dein Unternehmen mit KI auf das{" "}
                <span className="gradient-text">nächste Level</span> zu bringen?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
                Erzähl uns, wo Prozesse Zeit, Geld oder Übersicht kosten. Wir
                zeigen dir, welche KI-Lösung daraus entstehen kann.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:kontakt@omlu-ki-pro.de"
                  className="btn-primary"
                >
                  Jetzt Projekt anfragen
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#leistungen" className="btn-secondary">
                  Leistungen ansehen
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-400">
                Für Unternehmen, Creator, Teams und Entscheider, die KI praktisch
                einsetzen möchten.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
