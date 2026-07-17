import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import Scrollytelling from "./components/Scrollytelling";
import UseCases from "./components/UseCases";
import WhyUs from "./components/WhyUs";
import Capabilities from "./components/Capabilities";
import Courses from "./components/Courses";
import Process from "./components/Process";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Scrollytelling />
        <UseCases />
        <WhyUs />
        <Capabilities />
        <Courses />
        <Process />

        {/* Neutral reference placeholder – no fabricated clients */}
        <section className="section-pad">
          <div className="container-x">
            <Reveal>
              <div className="glass-card rounded-2xl px-6 py-10 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  References
                </p>
                <p className="mt-3 text-lg font-medium text-slate-300">
                  References and project examples coming soon.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
