import {
  Brain,
  Smartphone,
  Workflow,
  LayoutDashboard,
  Compass,
  GraduationCap,
  Users,
  Factory,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const services: Service[] = [
  {
    icon: Brain,
    title: "KI-Softwareentwicklung",
    text: "Individuelle KI-Tools, interne Assistenten, intelligente Workflows, Dokumentenverarbeitung, Recherche-Systeme und datenbasierte Entscheidungsprozesse.",
  },
  {
    icon: Smartphone,
    title: "App-Entwicklung",
    text: "Mobile-first Web Apps, interne Mitarbeiter-Apps, Kundenportale, MVPs, Creator-Plattformen und skalierbare Business-Anwendungen.",
  },
  {
    icon: Workflow,
    title: "Enterprise Automation",
    text: "Automatisierung wiederkehrender Aufgaben, Systemverbindungen, automatische Reports, CRM-/ERP-nahe Workflows und Prozessoptimierung.",
  },
  {
    icon: LayoutDashboard,
    title: "Interne Dashboards",
    text: "Echtzeit-Übersicht über operative Zahlen, Prozesse, Teams, Kunden, Lager, Vertrieb, Einkauf oder Management-Kennzahlen.",
  },
  {
    icon: Compass,
    title: "KI-Beratung & Strategie",
    text: "Analyse bestehender Abläufe, Identifikation sinnvoller KI-Potenziale, Tool-Auswahl, Architekturberatung und Umsetzungsplanung.",
  },
  {
    icon: GraduationCap,
    title: "Live-Kurse & Schulungen",
    text: "Praxisnahe KI-Workshops für Unternehmen, Teams und Entscheider. Verständlich, konkret und direkt auf den Arbeitsalltag bezogen.",
  },
  {
    icon: Users,
    title: "Creator- & Kursplattformen",
    text: "Eigene Apps und Plattformen für Influencer, Coaches und Experten zum Verkauf von Kursen, Communities und digitalen Produkten.",
  },
  {
    icon: Factory,
    title: "Branchenlösungen",
    text: "KI- und Automationssysteme für Industrie, E-Commerce, Immobilien, Handwerk, Vertrieb, Kundenservice, Logistik, Verwaltung und mehr.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section-pad scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Leistungen</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              KI-Entwicklung, Automatisierung und Apps aus{" "}
              <span className="gradient-text">einer Hand.</span>
            </h2>
            <p className="mt-5 text-base text-slate-400 sm:text-lg">
              Von der ersten Analyse bis zum laufenden System – wir verbinden
              KI, Softwareentwicklung und Business-Verständnis zu Lösungen mit
              echtem Nutzen.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <article className="glass-card gradient-border group h-full rounded-2xl p-6 hover:-translate-y-1 hover:shadow-card">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-violet-500/20 text-electric-400 transition-colors group-hover:text-cyan-400">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {s.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
