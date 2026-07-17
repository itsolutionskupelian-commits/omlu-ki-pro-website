import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Lösungen", href: "#loesungen" },
  { label: "Prozess", href: "#prozess" },
  { label: "Kurse", href: "#kurse" },
  { label: "Kontakt", href: "#kontakt" },
];

const legal = [
  { label: "Impressum", href: "#impressum" },
  { label: "Datenschutz", href: "#datenschutz" },
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
              AI-First Development &amp; Enterprise Automation. Individuelle
              KI-Systeme, Apps und Automationen für Unternehmen, Creator und
              moderne Teams.
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
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:kontakt@omlu-ki-pro.de"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-electric-400" />
                  kontakt@omlu-ki-pro.de
                </a>
              </li>
              <li>
                <a
                  href="tel:+49000000000"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-electric-400" />
                  +49 000 000000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-electric-400" />
                Deutschland
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} OMLU KI PRO. Alle Rechte vorbehalten.
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
