import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  BrainCircuit, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  FileCheck2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#F5EFEB] border-b border-[#2F4156]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#567C8D] mb-2">
            Background &amp; Perspective
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2F4156]">
            About Me
          </h2>
          <p className="text-[#2F4156]/80 text-base mt-2 max-w-2xl leading-relaxed">
            A grounded overview of my academic foundation at GSFC University, hands-on engineering experience, and technical focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#2F4156]/85 text-sm sm:text-base leading-relaxed">
            
            <div className="edgy-card rounded-xl p-6 sm:p-7">
              <h3 className="text-base font-bold text-[#2F4156] mb-2 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-[#C8D9E6]/60 border border-[#2F4156]/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#2F4156]" />
                </div>
                <span>Computer Science at GSFC University</span>
              </h3>
              <p className="text-[#2F4156]/80 text-sm leading-relaxed">
                I am currently in my 3rd semester of B.Tech Computer Science and Engineering at 
                <strong className="text-[#2F4156] font-bold"> GSFC University</strong> in Vadodara, Gujarat. 
                My coursework centers on core computing fundamentals: object-oriented programming (Java and C++), 
                data structures, computer hardware architecture, and web technologies.
              </p>
            </div>

            <div className="edgy-card rounded-xl p-6 sm:p-7">
              <h3 className="text-base font-bold text-[#2F4156] mb-2 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-[#C8D9E6]/60 border border-[#2F4156]/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-[#2F4156]" />
                </div>
                <span>Practical Web Development &amp; AI-Assisted Workflows</span>
              </h3>
              <p className="text-[#2F4156]/80 text-sm leading-relaxed">
                During my 1-month internship at <strong className="text-[#2F4156] font-bold">IdeaFolks (Rajkot)</strong>, 
                I gained real-world front-end engineering experience. I learned to use modern AI developer tools for faster component 
                prototyping, prompt engineering, drafting API schemas, and debugging front-end states with confidence.
              </p>
            </div>

            <div className="edgy-card rounded-xl p-6 sm:p-7">
              <h3 className="text-base font-bold text-[#2F4156] mb-2 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-[#C8D9E6]/60 border border-[#2F4156]/10 flex items-center justify-center shrink-0">
                  <BrainCircuit className="w-4 h-4 text-[#2F4156]" />
                </div>
                <span>Focus on Utility &amp; Practical Implementation</span>
              </h3>
              <p className="text-[#2F4156]/80 text-sm mb-3">
                I prioritize building software that solves genuine problems:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#2F4156]/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#567C8D] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2F4156]">JobGuard AI:</strong> Protects job seekers by combining text classification with VirusTotal API domain checking.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#567C8D] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2F4156]">Deal Intelligence Agent:</strong> Hack Baroda 2026 finalist prototype with Team CODE BUSTERS exploring persistent sales memory and graph analytics.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#567C8D] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2F4156]">StudyShare:</strong> Centralized university academic resource hub for sharing syllabi and past-year question papers.
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Quick Profile Details */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="edgy-card rounded-xl p-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold mb-4">
                Education &amp; Details
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between pb-3 border-b border-[#2F4156]/10">
                  <span className="text-[#567C8D] flex items-center gap-1.5 text-xs">
                    <GraduationCap className="w-4 h-4 text-[#567C8D]" />
                    University
                  </span>
                  <span className="text-[#2F4156] font-bold text-xs text-right">GSFC University</span>
                </div>
                <div className="flex items-start justify-between pb-3 border-b border-[#2F4156]/10">
                  <span className="text-[#567C8D] flex items-center gap-1.5 text-xs">
                    <Calendar className="w-4 h-4 text-[#567C8D]" />
                    Graduation Year
                  </span>
                  <span className="text-[#2F4156] font-bold text-xs">2029 (Currently 3rd Sem)</span>
                </div>
                <div className="flex items-start justify-between pb-3 border-b border-[#2F4156]/10">
                  <span className="text-[#567C8D] flex items-center gap-1.5 text-xs">
                    <MapPin className="w-4 h-4 text-[#567C8D]" />
                    Location
                  </span>
                  <span className="text-[#2F4156] font-bold text-xs text-right">Vadodara, Gujarat (Open across Gujarat)</span>
                </div>
                <div className="flex items-start justify-between pb-3 border-b border-[#2F4156]/10">
                  <span className="text-[#567C8D] flex items-center gap-1.5 text-xs">
                    <Briefcase className="w-4 h-4 text-[#567C8D]" />
                    Internship
                  </span>
                  <span className="text-[#2F4156] font-bold text-xs">IdeaFolks (1 Month)</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#567C8D] flex items-center gap-1.5 text-xs">
                    <FileCheck2 className="w-4 h-4 text-[#567C8D]" />
                    Cisco Credential
                  </span>
                  <span className="text-[#2F4156] font-bold text-xs">Python Essentials 2</span>
                </div>
              </div>
            </div>

            <div className="edgy-card rounded-xl p-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold mb-3">
                Core Coursework
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Object-Oriented Programming (Java/C++)',
                  'Data Structures',
                  'Web Technology',
                  'Database Systems',
                  'Computer Hardware Basics'
                ].map((course, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#C8D9E6]/50 text-[#2F4156] border border-[#2F4156]/15 font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
