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
    title: "Companies & internal teams",
    text: "Internal apps for managing, documenting, and analyzing work processes.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Automated product data, customer service workflows, returns management, and performance dashboards.",
  },
  {
    icon: Megaphone,
    title: "Creators, coaches & influencers",
    text: "Custom platforms for courses, communities, membership areas, and digital products.",
  },
  {
    icon: Package,
    title: "Industry & procurement",
    text: "Systems for purchasing, inventory, spare parts, pricing, documentation, and process monitoring.",
  },
  {
    icon: Handshake,
    title: "Sales & CRM",
    text: "AI-powered lead qualification, automatic follow-ups, CRM automation, and better pipeline visibility.",
  },
  {
    icon: BarChart3,
    title: "Management & controlling",
    text: "Dashboards, reports, and decision-making data in real time.",
  },
  {
    icon: Headphones,
    title: "Customer service",
    text: "Chatbots, voice bots, ticket pre-qualification, and intelligent response systems.",
  },
  {
    icon: FileText,
    title: "Administration & documents",
    text: "Automated document review, data extraction, form processing, and internal assistant systems.",
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
              Solutions for real{" "}
              <span className="gradient-text">business problems.</span>
            </h2>
            <p className="mt-5 text-base text-slate-400 sm:text-lg">
              Across every industry — the biggest potential lies wherever
              time, money, or visibility gets lost.
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
