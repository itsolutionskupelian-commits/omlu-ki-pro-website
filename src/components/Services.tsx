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
    title: "AI Software Development",
    text: "Custom AI tools, internal assistants, intelligent workflows, document processing, research systems, and data-driven decision-making.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    text: "Mobile-first web apps, internal staff apps, customer portals, MVPs, creator platforms, and scalable business applications.",
  },
  {
    icon: Workflow,
    title: "Enterprise Automation",
    text: "Automating recurring tasks, system integrations, automated reports, CRM/ERP-adjacent workflows, and process optimization.",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Dashboards",
    text: "Real-time overview of operational figures, processes, teams, customers, inventory, sales, purchasing, or management KPIs.",
  },
  {
    icon: Compass,
    title: "AI Consulting & Strategy",
    text: "Analysis of existing workflows, identification of meaningful AI opportunities, tool selection, architecture advice, and implementation planning.",
  },
  {
    icon: GraduationCap,
    title: "Live Courses & Training",
    text: "Hands-on AI workshops for companies, teams, and decision-makers. Clear, practical, and directly relevant to daily work.",
  },
  {
    icon: Users,
    title: "Creator & Course Platforms",
    text: "Custom apps and platforms for influencers, coaches, and experts to sell courses, communities, and digital products.",
  },
  {
    icon: Factory,
    title: "Industry Solutions",
    text: "AI and automation systems for industry, e-commerce, real estate, trades, sales, customer service, logistics, administration, and more.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Services</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              AI development, automation, and apps —{" "}
              <span className="gradient-text">all from one team.</span>
            </h2>
            <p className="mt-5 text-base text-slate-400 sm:text-lg">
              From the first analysis to a running system — we combine AI,
              software engineering, and business understanding into
              solutions with real impact.
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
