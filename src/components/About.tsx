import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  BrainCircuit, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  FileCheck2,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Background &amp; Perspective
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <p className="text-slate-600 text-base mt-2 max-w-2xl">
            A grounded overview of my academic foundation at GSFC University, hands-on engineering experience, and career trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Computer Science at GSFC University</span>
              </h3>
              <p className="text-slate-600">
                I am currently in my 3rd semester of B.Tech Computer Science and Engineering at 
                <strong className="text-slate-900 font-medium"> GSFC University</strong> in Vadodara, Gujarat. 
                My coursework centers on core computing fundamentals: object-oriented programming (Java and C++), 
                data structures, computer hardware architecture, and web technologies.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span>Practical Web Development &amp; AI-Assisted Workflows</span>
              </h3>
              <p className="text-slate-600">
                During my 1-month internship at <strong className="text-slate-900 font-medium">IdeaFolks (Rajkot)</strong>, 
                I gained real-world front-end engineering experience. I learned to use modern AI developer tools for faster component 
                prototyping, prompt engineering, drafting API schemas, and debugging front-end states without relying on guesswork.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-blue-600" />
                <span>Focus on Utility &amp; Practical Implementation</span>
              </h3>
              <p className="text-slate-600 mb-3">
                I prioritize building software that solves genuine problems:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">JobGuard AI:</strong> Protects job seekers by combining OpenAI text analysis with VirusTotal API domain checking.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Deal Intelligence Agent:</strong> Hack Baroda 2026 finalist prototype with Team CODE BUSTERS exploring persistent sales memory and D3.js stakeholder graphs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">StudyShare:</strong> Centralized university academic resource hub for sharing syllabi and past-year question papers.
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Quick Profile Details */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-4">
                Education &amp; Details
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between pb-3 border-b border-slate-200/60">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                    University
                  </span>
                  <span className="text-slate-900 font-medium text-right">GSFC University</span>
                </div>
                <div className="flex items-start justify-between pb-3 border-b border-slate-200/60">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    Graduation Year
                  </span>
                  <span className="text-slate-900 font-medium">2029 (Currently 3rd Sem)</span>
                </div>
                <div className="flex items-start justify-between pb-3 border-b border-slate-200/60">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    Location
                  </span>
                  <span className="text-slate-900 font-medium text-right">Vadodara / Rajkot, Gujarat</span>
                </div>
                <div className="flex items-start justify-between pb-3 border-b border-slate-200/60">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    Internship
                  </span>
                  <span className="text-slate-900 font-medium">IdeaFolks (1 Month)</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-slate-400" />
                    Cisco Credential
                  </span>
                  <span className="text-blue-600 font-medium">Python Essentials 2</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
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
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 border border-slate-200"
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
