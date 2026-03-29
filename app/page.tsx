import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-bold text-xl tracking-tighter">IT.PORTFOLIO</div>
        <div className="space-x-8 text-sm font-medium text-slate-600">
          <a href="#projects" className="hover:text-blue-600">Work</a>
          <a href="#about" className="hover:text-blue-600">Skills</a>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Hire Me
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 text-center">
        <span className="text-blue-600 font-semibold tracking-widest text-xs uppercase mb-4 block">
          3rd Year IT Student @ University of the Assumption
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          Building digital solutions <br /> with <span className="text-blue-600">precision.</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-10">
          Specializing in React, Next.js, and Python. From cloud infrastructure to 
          cryptographic applications, I bridge the gap between complex IT principles and clean user interfaces.
        </p>
      </section>

      <div id="projects">
        <Projects />
      </div>
      
      <div id="about">
        <TechStack />
      </div>

      <footer className="py-10 text-center text-slate-400 text-sm border-t">
        © {new Date().getFullYear()} — Designed with Next.js & PostgreSQL
      </footer>
    </main>
  );
}