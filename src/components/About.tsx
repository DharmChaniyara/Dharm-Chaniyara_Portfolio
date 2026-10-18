import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  BrainCircuit, 
  Users, 
  Code, 
  Sparkles, 
  MapPin, 
  Calendar,
  CheckCircle,
  FileCheck
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-dark-950/60 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan mb-2">
            <span>// 01. BACKGROUND &amp; PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A grounded overview of my academic foundation, hands-on development experience, and what drives my work in software and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-sm shadow-card">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-cyan" />
                <span>Computer Science at GSFC University</span>
              </h3>
              <p>
                I am currently in my 3rd semester pursuing a B.Tech in Computer Science and Engineering at 
                <span className="text-white font-medium"> GSFC University</span> in Vadodara, Gujarat. 
                My coursework provides a strong foundation in core software fundamentals: object-oriented programming (Java and C++), 
                data structures, computer hardware, and web technologies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-sm shadow-card">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-brand-blue" />
                <span>Practical Web Development &amp; AI Workflows</span>
              </h3>
              <p>
                During my 1-month internship at <span className="text-white font-medium">IdeaFolks (Rajkot)</span>, I stepped out of purely theoretical coursework to build real-world web interfaces. 
                Crucially, I learned how to integrate AI tools directly into engineering workflows—using LLMs for prompt engineering, 
                architecting API contracts, accelerating test case generation, and debugging complex front-end states.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-sm shadow-card">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-brand-purple" />
                <span>Building Software That Solves Real Problems</span>
              </h3>
              <p>
                Rather than collecting unused tutorials, I focus on building projects with clear utility:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">JobGuard AI:</strong> Built to protect job seekers by combining OpenAI text analysis with VirusTotal API domain scanning.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Deal Intelligence Agent:</strong> Hack Baroda 2026 finalist prototype with Team CODE BUSTERS exploring sales memory and D3.js stakeholder graphs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">StudyShare:</strong> Deployed a centralized course repository to solve the messy sharing of notes and syllabi for fellow GSFC students.
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Quick Facts & Key Attributes (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Profile Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-dark-900 to-dark-950 border border-white/[0.08] shadow-card">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Quick Profile Snapshot
              </h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-brand-cyan" />
                    University
                  </span>
                  <span className="text-white font-medium text-right">GSFC University</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-cyan" />
                    Graduation Year
                  </span>
                  <span className="text-white font-medium">2029 (Current: 3rd Sem)</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-cyan" />
                    Location
                  </span>
                  <span className="text-white font-medium">Vadodara / Rajkot, Gujarat</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-brand-cyan" />
                    Internship
                  </span>
                  <span className="text-white font-medium">Idealfolks (1 Month)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-brand-cyan" />
                    Certifications
                  </span>
                  <span className="text-brand-cyan font-medium">Cisco Python Essentials 2</span>
                </div>
              </div>
            </div>

            {/* What I Bring to a Team */}
            <div className="p-5 rounded-2xl bg-dark-900/60 border border-white/[0.08]">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                How I Work
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Curious &amp; Fast Learner</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Quickly grasps new APIs, documentation, and frameworks to deliver working prototypes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Collaborative Team Player</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Experience in team hackathons (Hack Baroda) and open student projects (Campus Copilot).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 mt-0.5">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Realistic &amp; Grounded</h5>
                    <p className="text-xs text-slate-400 mt-0.5">Focused on demonstrable, working software over inflated claims or unverified claims.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
