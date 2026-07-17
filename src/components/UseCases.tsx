import {
  Building2,
  ShoppingCart,
  Megaphone,
  Package,
  Handshake,
  BarChart3,
  Headphones,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type UseCase = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const useCases: UseCase[] = [
  {
    icon: Building2,
    title: "Unternehmen & interne Teams",
    text: "Interne Apps zur Steuerung, Dokumentation und Auswertung von Arbeitsprozessen.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    text: "Automatisierte Produktdaten, Kundenservice-Prozesse, Retourenmanagement und Performance-Dashboards.",
  },
  {
    icon: Megaphone,
    title: "Creator, Coaches & Influencer",
    text: "Eigene Plattformen für Kurse, Communities, Mitgliederbereiche und digitale Produkte.",
  },
  {
    icon: Package,
    title: "Industrie & Einkauf",
    text: "Systeme für Einkauf, Lager, Ersatzteile, Preisfindung, Dokumentation und Prozessüberwachung.",
  },
  {
    icon: Handshake,
    title: "Vertrieb & CRM",
    text: "KI-gestützte Lead-Qualifizierung, automatische Follow-ups, CRM-Automation und bessere Pipeline-Übersicht.",
  },
  {
    icon: BarChart3,
    title: "Management & Controlling",
    text: "Dashboards, Reports und Entscheidungsgrundlagen in Echtzeit.",
  },
  {
    icon: Headphones,
    title: "Kundenservice",
    text: "Chatbots, Voicebots, Ticket-Vorqualifizierung und intelligente Antwortsysteme.",
  },
  {
    icon: FileText,
    title: "Verwaltung & Dokumente",
    text: "Automatisierte Dokumentenprüfung, Datenextraktion, Formularverarbeitung und interne Assistenzsysteme.",
  },
];

export default function UseCases() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Use Cases</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Lösungen für echte{" "}
              <span className="gradient-text">Geschäftsprobleme.</span>
            </h2>
            <p className="mt-5 text-base text-slate-400 sm:text-lg">
              Branchenübergreifend – dort, wo Zeit, Geld oder Übersicht verloren
              gehen, entsteht das größte Potenzial.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u, i) => (
            <Reveal key={u.title} delay={(i % 4) * 0.08}>
              <article className="glass-card gradient-border group flex h-full flex-col rounded-2xl p-6 hover:-translate-y-1">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-cyan-400 transition-transform group-hover:scale-110">
                  <u.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-white">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {u.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
