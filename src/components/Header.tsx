import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const NAV = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Lösungen", href: "#loesungen" },
  { label: "Prozess", href: "#prozess" },
  { label: "Kurse", href: "#kurse" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-500 shadow-glow">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-extrabold tracking-tight text-white sm:text-base">
              OMLU <span className="gradient-text">KI PRO</span>
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              AI Systems &amp; Enterprise Automation
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#kontakt" className="btn-primary">
            Projekt anfragen
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div className="container-x pb-6">
              <nav
                className="glass flex flex-col gap-1 rounded-2xl p-3"
                aria-label="Mobile Navigation"
              >
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 w-full"
                >
                  Projekt anfragen
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
