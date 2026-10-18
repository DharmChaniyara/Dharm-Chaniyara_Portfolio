import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[94vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-white border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Curriculum Vitae &bull; {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Canva Template Format &bull; 2-Column ATS Optimized &bull; 1-Page PDF
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Dharm_Chaniyara_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="p-3 sm:p-6 md:p-8 overflow-y-auto bg-slate-100/80 flex justify-center">
          
          {/* Canva Template Paper Card */}
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-md border border-slate-200/90 p-6 sm:p-8 md:p-10 font-sans text-slate-800">
            
            {/* Top Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1b365d] uppercase">
                DHARM CHANIYARA
              </h1>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                Computer Science &amp; Engineering Student | Aspiring Software Developer
              </div>
              <div className="text-xs text-slate-600 mt-2">
                Vadodara, Gujarat, India &nbsp;|&nbsp; dharmchaniyara@gmail.com
              </div>
              <div className="text-xs text-slate-600 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                <span>
                  GitHub:{' '}
                  <a 
                    href="https://github.com/DharmChaniyara" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    github.com/DharmChaniyara
                  </a>
                </span>
                <span>
                  LinkedIn:{' '}
                  <a 
                    href="https://www.linkedin.com/in/dharm-chaniyara-b51b9137a/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    linkedin.com/in/dharm-chaniyara-b51b9137a
                  </a>
                </span>
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Portfolio:{' '}
                <a 
                  href="https://github.com/DharmChaniyara/Dharm-Chaniyara_Portfolio" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  github.com/DharmChaniyara/Dharm-Chaniyara_Portfolio
                </a>
              </div>
            </div>

            {/* 2-Column Section */}
            <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Column (62% approx) */}
              <div className="md:col-span-7 space-y-5 md:pr-4 md:border-r md:border-slate-200">
                
                {/* Summary */}
                <div>
                  <h3 className="flex items-center gap-1.5 text-xs font-bold text-[#1b365d] uppercase tracking-wider mb-2">
                    <span className="text-[#2b6cb0] text-sm leading-none">&#9632;</span>
                    <span>SUMMARY</span>
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify">
                    B.Tech Computer Science &amp; Engineering student at GSFC University with practical exposure to full-stack web development, AI-assisted development workflows, and Python programming. Completed a one-month AI web development internship at Idealfolks, Rajkot, gaining hands-on experience leveraging modern AI developer tools. Built practical projects in fraud detection (JobGuard AI), sales intelligence copilots (offline finalist at Hack Baroda 2026 with Team CODE BUSTERS), and campus academic resource platforms. Interested in software engineering, backend systems, and building useful AI-powered applications through collaborative, project-based engineering.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="flex items-center gap-1.5 text-xs font-bold text-[#1b365d] uppercase tracking-wider mb-2">
                    <span className="text-[#2b6cb0] text-sm leading-none">&#9632;</span>
                    <span>EXPERIENCE</span>
                  </h3>
                  <div>
                    <div className="text-xs font-bold text-[#1b365d]">
                      AI Web Developer Intern &mdash; Idealfolks
                    </div>
                    <div className="text-[11px] text-slate-500 mb-1.5">
                      05 June 2026 &ndash; 05 July 2026 &nbsp;|&nbsp; Rajkot, Gujarat
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Completed a one-month project internship focused on web development and AI-assisted workflows.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Leveraged modern AI developer tools for rapid component prototyping, API design, and debugging.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Developed responsive front-end user interfaces using HTML, CSS, and JavaScript.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Technology: HTML, CSS, JavaScript, AI Developer Tools</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Selected Projects */}
                <div>
                  <h3 className="flex items-center gap-1.5 text-xs font-bold text-[#1b365d] uppercase tracking-wider mb-2.5">
                    <span className="text-[#2b6cb0] text-sm leading-none">&#9632;</span>
                    <span>SELECTED PROJECTS</span>
                  </h3>
                  
                  {/* Project 1 */}
                  <div className="mb-3.5">
                    <div className="text-xs font-bold text-[#1b365d]">
                      JobGuard AI &mdash; Fake Job Offer &amp; Scam Detector
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700 mt-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Developed a full-stack security application to detect fraudulent job offers using OpenAI for text analysis and VirusTotal API for malicious link scanning.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Built automated PDF text extraction using Multer and pdf-parse; designed prompt-engineered scoring model returning explainable scam indicators.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Technologies: React, Node.js, Express, Supabase, OpenAI API, VirusTotal API</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="mb-3.5">
                    <div className="text-xs font-bold text-[#1b365d]">
                      Deal Intelligence Agent &mdash; Hack Baroda 2026
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700 mt-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Collaborated with Team CODE BUSTERS at Hack Baroda 2026 to develop the Deal Intelligence Agent, an AI-powered sales copilot designed to organize sales knowledge and make prior deal experience useful.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Focused on organizing deal interactions and presenting stakeholder relationships using D3.js; explored objection insights and similar-deal retrieval.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Technologies: HTML, CSS, JavaScript, React, Node.js, Express, D3.js</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span className="font-medium text-slate-800">Team selected for the final offline round.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div>
                    <div className="text-xs font-bold text-[#1b365d]">
                      StudyShare &mdash; Campus Academic Resource Platform
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700 mt-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Developed a centralized academic sharing web platform for GSFC University students to access course syllabi, lecture notes, and past-year question papers.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Designed Supabase PostgreSQL schemas, document upload pipelines, and access control.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-0.5">&bull;</span>
                        <span>Technologies: JavaScript, HTML5, CSS3, Node.js, Supabase, Vercel</span>
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

              {/* Right Column (38% approx) */}
              <div className="md:col-span-5 space-y-5 md:pl-2">
                
                {/* Education */}
                <div>
                  <h3 className="flex items-center gap-1.5 text-xs font-bold text-[#1b365d] uppercase tracking-wider mb-2">
                    <span className="text-[#2b6cb0] text-sm leading-none">&#9632;</span>
                    <span>EDUCATION</span>
                  </h3>
                  <div className="text-xs font-bold text-[#1b365d]">
                    B.Tech &mdash; Computer Science &amp; Engineering
                  </div>
                  <div className="text-xs text-slate-700">
                    GSFC University, Gujarat
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Currently in the 3rd semester (2025&ndash;2029).
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className="flex items-center gap-1.5 text-xs font-bold text-[#1b365d] uppercase tracking-wider mb-2">
                    <span className="text-[#2b6cb0] text-sm leading-none">&#9632;</span>
                    <span>TECHNICAL SKILLS</span>
                  </h3>
                  
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="font-bold text-[#1b365d] text-[11px]">Programming Languages:</div>
                      <div className="text-slate-700 text-[11px]">Python (Certified), JavaScript (ES6+), Java, C/C++</div>
                    </div>
                    <div>
                      <div className="font-bold text-[#1b365d] text-[11px]">Web Development:</div>
                      <div className="text-slate-700 text-[11px]">React.js, Vite, Tailwind CSS, HTML, CSS, Node.js, Express.js</div>
                    </div>
                    <div>
                      <div className="font-bold text-[#1b365d] text-[11px]">Databases &amp; BaaS:</div>
                      <div className="text-slate-700 text-[11px]">Supabase, PostgreSQL, SQL</div>
                    </div>
                    <div>
                      <div className="font-bold text-[#1b365d] text-[11px]">AI &amp; Modern Tools:</div>
                      <div className="text-slate-700 text-[11px]">OpenAI API, RAG Concepts, Prompt Engineering, AI Dev Workflows</div>
                    </div>
                    <div>
                      <div className="font-bold text-[#1b365d] text-[11px]">Tools &amp; Version Control:</div>
                      <div className="text-slate-700 text-[11px]">Git, GitHub, Vercel, VS Code</div>
                    </div>
                  </div>
                </div>

                {/* Hackathon */}
                <div>
                  <h3 className="flex items-center gap-1.5 text-xs font-bold text-[#1b365d] uppercase tracking-wider mb-2">
                    <span className="text-[#2b6cb0] text-sm leading-none">&#9632;</span>
                    <span>HACKATHON &amp; AWARDS</span>
                  </h3>
                  <div className="text-xs font-bold text-[#1b365d]">
                    Hack Baroda 2026 &mdash; Offline Finalist
                  </div>
                  <div className="text-xs text-slate-700 mt-0.5">
                    Selected in final offline round with Team CODE BUSTERS for Deal Intelligence Agent.
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="flex items-center gap-1.5 text-xs font-bold text-[#1b365d] uppercase tracking-wider mb-2">
                    <span className="text-[#2b6cb0] text-sm leading-none">&#9632;</span>
                    <span>CERTIFICATIONS</span>
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="font-bold text-[#1b365d]">Python Essentials 2</div>
                      <div className="text-[11px] text-slate-600">Cisco Networking Academy &amp; OpenEDG Python Institute (Oct 2026)</div>
                    </div>
                    <div>
                      <div className="font-bold text-[#1b365d]">Computer Hardware Basics</div>
                      <div className="text-[11px] text-slate-600">Cisco Networking Academy (Sep 2026)</div>
                    </div>
                    <div>
                      <div className="font-bold text-[#1b365d]">SSIP Drone Workshop</div>
                      <div className="text-[11px] text-slate-600">Student Start-up and Innovation Policy, Gujarat</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 hidden sm:block font-mono">
            Direct Download: /resume/Dharm_Chaniyara_CV.pdf (1 Page)
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Dharm_Chaniyara_CV.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
