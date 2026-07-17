import { Sparkles, Mail } from "lucide-react";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

const legal = [
  { label: "Imprint", href: "#imprint" },
  { label: "Privacy Policy", href: "#privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16">
      <div className="container-x">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-500 shadow-glow">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-base font-extrabold text-white">
                OMLU <span className="gradient-text">KI PRO</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              AI-First Development &amp; Enterprise Automation. Custom AI
              systems, apps, and automation for companies, creators, and
              modern teams.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:it.solutions.kupelian@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-electric-400" />
                  it.solutions.kupelian@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} OMLU KI PRO. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legal.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs text-slate-500 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
