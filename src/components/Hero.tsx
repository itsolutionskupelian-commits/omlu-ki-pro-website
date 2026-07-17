import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import AICoreDemo from "./AICoreDemo";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24 lg:pt-44"
    >
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                AI-First Development · Enterprise Automation · Apps · Consulting
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              AI systems, apps &amp; automation for{" "}
              <span className="gradient-text">companies</span> that want to
              grow faster.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              OMLU KI PRO builds custom AI software, internal apps,
              automation, and enterprise systems that reduce manual work,
              cut costs, and give teams more control.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-primary">
                Request a project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary">
                View services
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 text-sm text-slate-500"
            >
              Custom development · AI consulting · Automation · Live training
            </motion.p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            <div className="absolute inset-0 rounded-full bg-electric-500/10 blur-3xl" />
            <div className="relative h-full w-full">
              <AICoreDemo />
            </div>

            {/* floating holographic stat cards */}
            <motion.div
              className="absolute left-0 top-8 hidden sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="glass-card gradient-border rounded-xl px-4 py-3">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Automated workflows
                </p>
                <p className="mt-1 text-lg font-bold text-white">–70% effort</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-0 hidden sm:block"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="glass-card gradient-border rounded-xl px-4 py-3">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Real-time insight
                </p>
                <p className="mt-1 text-lg font-bold gradient-text">
                  Live dashboards
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
