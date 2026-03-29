// components/Projects.tsx
const projects = [
  {
    title: "Learning Management System",
    description: "A full-stack educational platform designed for streamlined course management and student interaction.",
    tech: ["React", "Next.js", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Lost and Found Mobile App",
    description: "A community-driven React Native application to help users track and recover lost items within campus.",
    tech: ["React Native", "JavaScript", "Python"],
  },
  {
    title: "ElGamal Encryption Web App",
    description: "A specialized tool demonstrating public-key cryptography and secure data transmission.",
    tech: ["React", "Python", "Cybersecurity"],
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-slate-800">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-blue-500 transition-all">
            <div className="h-48 bg-slate-200 group-hover:bg-blue-50 transition-colors flex items-center justify-center">
              {/* Placeholder for project image */}
              <span className="text-slate-400 group-hover:text-blue-300 font-medium">Project Preview</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-blue-600">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}