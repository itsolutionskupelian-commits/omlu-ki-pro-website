import Reveal from "./Reveal";

const row1 = [
  "AI Agents",
  "LLM Integration",
  "API Integration",
  "Workflow Automation",
  "Web Apps",
  "Mobile-first Apps",
  "Dashboards",
  "CRM-Anbindungen",
];

const row2 = [
  "ERP-nahe Prozesse",
  "Dokumenten-KI",
  "Voice AI",
  "Chatbots",
  "Datenanalyse",
  "Reporting",
  "Cloud-Systeme",
  "Kundenportale",
];

const row3 = [
  "Creator-Plattformen",
  "Automatische E-Mail-Prozesse",
  "Produktdaten-Automation",
  "Interne Assistenzsysteme",
  "Monitoring-Systeme",
];

function Chip({ label }: { label: string }) {
  return (
    <span className="mx-2 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-xl">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-electric-400 to-cyan-400" />
      {label}
    </span>
  );
}

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="group relative flex overflow-hidden py-1">
      <div
        className={`flex min-w-full shrink-0 items-center ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {items.map((label, i) => (
          <Chip key={`a-${i}`} label={label} />
        ))}
        {items.map((label, i) => (
          <Chip key={`b-${i}`} label={label} />
        ))}
      </div>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Was wir technisch{" "}
              <span className="gradient-text">möglich machen.</span>
            </h2>
            <p className="mt-5 text-base text-slate-400 sm:text-lg">
              Ein modularer Baukasten aus KI, Automatisierung und Softwaretechnik
              – kombiniert zu Lösungen, die zu deinem Geschäft passen.
            </p>
          </div>
        </Reveal>
      </div>

      {/* full-bleed marquee with edge fade */}
      <Reveal>
        <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex flex-col gap-4">
            <Marquee items={row1} />
            <Marquee items={row2} reverse />
            <Marquee items={row3} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
