// components/TechStack.tsx
import { Cpu, Globe, Database, Cloud, Shield } from 'lucide-react';

const techStacks = [
  { category: "Frontend", items: ["React", "Next.js", "React Native", "JavaScript"], icon: <Globe size={20}/> },
  { category: "Backend & DB", items: ["Python", "PostgreSQL"], icon: <Database size={20}/> },
  { category: "Cloud & Infrastructure", items: ["AWS", "Cisco Networking"], icon: <Cloud size={20}/> },
  { category: "Specialized", items: ["Cybersecurity", "ElGamal Encryption", "Blender 3D"], icon: <Shield size={20}/> },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Technical Arsenal</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack) => (
            <div key={stack.category} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4 text-blue-600">
                {stack.icon}
                <h3 className="font-semibold text-slate-700">{stack.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {stack.items.map(item => (
                  <li key={item} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}