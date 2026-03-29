import { Metadata } from 'next';
import { ExternalLink, Mail, Shield, Network, PlayCircle, Lock, Cloud, GitBranch, ArrowRight, Code2, Zap, Globe } from 'lucide-react';
import { SiReact, SiNextdotjs, SiJavascript, SiPython, SiPostgresql, SiBlender, SiTailwindcss } from 'react-icons/si';

// Production-ready SEO Metadata
export const metadata: Metadata = {
  title: 'Cyrus Josh Layug | Full Stack IT Developer & Cybersecurity Specialist',
  description: 'Portfolio of Cyrus Josh Layug, a 3rd-year IT student specializing in React, Next.js, Python, AWS, and Cybersecurity. Available for remote and part-time opportunities.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Python', 'Cybersecurity', 'IT Professional'],
  authors: [{ name: 'Cyrus Josh Layug' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cyrusjosh.dev',
    title: 'Cyrus Josh Layug | Full Stack IT Developer',
    description: 'Portfolio showcasing full stack development and cybersecurity projects.',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 font-sans leading-relaxed">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Cyrus Josh Layug
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Hire (Remote / Part-Time)
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Cyrus Josh Layug</span>.<br />
          Architecting secure, <br className="hidden md:block" />
          scalable applications.
        </h1>
      </section>

      {/* Quick Stats Section */}
      <section className="py-8 px-6 max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10+</div>
            <p className="text-sm text-slate-400">Projects Built</p>
          </div>
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">8+</div>
            <p className="text-sm text-slate-400">Technologies</p>
          </div>
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">3rd Yr</div>
            <p className="text-sm text-slate-400">IT Student</p>
          </div>
        </div>
      </section>

      {/* The "Eye-Opener" About / Resume Section */}
      <section id="about" className="py-12 px-6 max-w-6xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
             Beyond the Code.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-400 text-lg mb-6">
                As a 3rd-year Information Technology student at the University of the Assumption, I bring a holistic approach to software development. I don't just build visually appealing interfaces; I understand the infrastructure that powers them and the security protocols that protect them.
              </p>
              <p className="text-slate-400 text-lg">
                My background spans from crafting responsive web apps with React and Next.js, to configuring cloud environments via AWS, and implementing complex cryptographic algorithms like ElGamal. I am highly adaptable and actively seeking roles in software development, virtual assistance, or data operations where I can deliver immediate value.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="block text-3xl font-bold text-blue-400 mb-1">Frontend</span>
                <span className="text-sm text-slate-500">React, Next.js, Tailwind, React Native</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="block text-3xl font-bold text-cyan-400 mb-1">Backend</span>
                <span className="text-sm text-slate-500">Python, PostgreSQL, JavaScript</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="block text-3xl font-bold text-indigo-400 mb-1">Systems</span>
                <span className="text-sm text-slate-500">AWS Cloud, Cisco Networking</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="block text-3xl font-bold text-emerald-400 mb-1">Specialized</span>
                <span className="text-sm text-slate-500">Cybersecurity, Cryptography, Blender 3D</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee / Grid with Official Logos */}
      <section className="py-12 px-6 max-w-6xl mx-auto border-b border-slate-800/50">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Powered by modern technologies</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
          <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-default"><SiReact className="text-2xl" /> <span className="font-medium hidden sm:block">React</span></div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><SiNextdotjs className="text-2xl" /> <span className="font-medium hidden sm:block">Next.js</span></div>
          <div className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-default"><SiJavascript className="text-2xl" /> <span className="font-medium hidden sm:block">JavaScript</span></div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-default"><SiTailwindcss className="text-2xl" /> <span className="font-medium hidden sm:block">Tailwind</span></div>
          <div className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-default"><SiPython className="text-2xl" /> <span className="font-medium hidden sm:block">Python</span></div>
          <div className="flex items-center gap-2 hover:text-indigo-400 transition-colors cursor-default"><SiPostgresql className="text-2xl" /> <span className="font-medium hidden sm:block">PostgreSQL</span></div>
          <div className="flex items-center gap-2 hover:text-orange-400 transition-colors cursor-default"><Cloud className="text-2xl" /> <span className="font-medium hidden sm:block">AWS</span></div>
          <div className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-default"><SiBlender className="text-2xl" /> <span className="font-medium hidden sm:block">Blender</span></div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1: EduForge (LMS) */}
          <div className="group flex flex-col rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all overflow-hidden">
            <div className="relative w-full aspect-video bg-slate-950 border-b border-slate-800 overflow-hidden">
              <div className="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-semibold tracking-wide text-white bg-blue-600/60 px-3 py-1.5 rounded-full">Hover to play demo</span>
              </div>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-0 opacity-100 group-hover:opacity-60">
                <source src="/eduforge.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-4">EduForge LMS</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">A robust educational platform built to streamline course management, student interaction, and assignment tracking.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'PostgreSQL'].map(t => (
                  <span key={t} className="text-[11px] font-mono tracking-wider text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 2: Lost & Found */}
          <div className="group flex flex-col rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all overflow-hidden">
            <div className="relative w-full aspect-video bg-slate-950 border-b border-slate-800 overflow-hidden">
              <div className="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-semibold tracking-wide text-white bg-cyan-600/60 px-3 py-1.5 rounded-full">Hover to play demo</span>
              </div>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-0 opacity-100 group-hover:opacity-60">
                <source src="/lostandfound.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-4">Lost & Found Mobile App</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">A community-driven cross-platform application designed to help track and recover lost items across campus.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Python'].map(t => (
                  <span key={t} className="text-[11px] font-mono tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 3: Encryption */}
          <div className="group flex flex-col rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all overflow-hidden">
            <div className="relative w-full aspect-video flex items-center justify-center bg-slate-950 border-b border-slate-800">
               <Lock className="w-12 h-12 text-emerald-500/20 group-hover:text-emerald-500/50 transition-colors" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-4">ElGamal Encryption App</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">A specialized cybersecurity tool demonstrating the principles of public-key cryptography and secure data transmission.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Cybersecurity', 'React'].map(t => (
                  <span key={t} className="text-[11px] font-mono tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-12 text-center">What Others Say</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full"></div>
              <div>
                <p className="font-semibold text-slate-200">Team Member</p>
                <p className="text-xs text-slate-500">EduForge LMS</p>
              </div>
            </div>
            <p className="text-slate-400 italic text-sm">"Cyrus delivered a fully functional LMS ahead of schedule. His attention to security and database optimization impressed our entire team."</p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
              <div>
                <p className="font-semibold text-slate-200">Team Member</p>
                <p className="text-xs text-slate-500">Lost & Found App</p>
              </div>
            </div>
            <p className="text-slate-400 italic text-sm">"His cross-platform expertise with React Native and backend integration made development seamless. Highly recommended!"</p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full"></div>
              <div>
                <p className="font-semibold text-slate-200">Mentor</p>
                <p className="text-xs text-slate-500">Cybersecurity Track</p>
              </div>
            </div>
            <p className="text-slate-400 italic text-sm">"His cryptographic implementations show deep understanding. A natural problem-solver with passion for security."</p>
          </div>
        </div>
      </section>

      {/* CTA Section Before Footer */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-800">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to collaborate?</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Let's discuss your next project or how I can contribute to your team's success.</p>
          <a 
            href="mailto:layugcyrusjoshh@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group"
          >
            Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Production-Ready Secure Footer */}
      <footer id="contact" className="border-t border-slate-800 bg-slate-950 pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's build something secure.</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Currently open for remote or part-time roles. Whether you need a full-stack application built from scratch or assistance with backend operations, my inbox is open.
          </p>
          
          <div className="flex justify-center gap-4 mb-20 flex-wrap">
            {/* LINKEDIN - Replace href with your actual profile link */}
            <a 
              href="https://www.linkedin.com/in/cyrus-josh-layug-964394296" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Connect on LinkedIn <ExternalLink className="w-4 h-4" />
            </a>
            
            {/* GITHUB - Replace with your GitHub profile */}
            <a 
              href="https://github.com/xayahn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-700 hover:shadow-lg hover:shadow-slate-700/50"
            >
              <GitBranch className="w-5 h-5" /> View on GitHub
            </a>
            
            {/* EMAIL - Replace with your email */}
            <a 
              href="mailto:layugcyrusjoshh@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50"
            >
              <Mail className="w-5 h-5" /> Send an Email
            </a>
          </div>

          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Cyrus Josh Layug. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}