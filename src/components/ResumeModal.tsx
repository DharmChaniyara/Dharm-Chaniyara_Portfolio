import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText,
  Eye,
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'template' | 'pdf'>('template');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

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

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#0F161E]/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[95vh] bg-[#F5EFEB] border-2 border-[#2F4156] shadow-edge-navy rounded-xl flex flex-col overflow-hidden text-[#2F4156]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 bg-white border-b border-[#2F4156]/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#2F4156] text-white flex items-center justify-center border border-[#2F4156]">
              <FileText className="w-4 h-4 text-[#C8D9E6]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#2F4156] tracking-tight">
                Curriculum Vitae &bull; {PERSONAL_INFO.name}
              </h3>
              <p className="text-[11px] text-[#567C8D] font-mono">
                Canva A4 Template &bull; Blue &amp; Cream Minimalist Format
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:inline-flex items-center p-0.5 rounded-md bg-[#F5EFEB] border border-[#2F4156]/20 text-xs font-semibold">
              <button
                onClick={() => setViewMode('template')}
                className={`px-2.5 py-1 rounded transition-all ${
                  viewMode === 'template'
                    ? 'bg-[#2F4156] text-white shadow-xs'
                    : 'text-[#2F4156]/70 hover:text-[#2F4156]'
                }`}
              >
                Template
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-[#2F4156] text-white shadow-xs'
                    : 'text-[#2F4156]/70 hover:text-[#2F4156]'
                }`}
              >
                High-Res PDF
              </button>
            </div>

            <a
              href="/resume/Dharm_Chaniyara_CV.pdf"
              download="Dharm_Chaniyara_CV.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#2F4156] text-white text-xs font-semibold hover:bg-[#233243] border border-[#2F4156] shadow-edge-xs hover:shadow-edge active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-[#C8D9E6]" />
                  <span>Download PDF</span>
                </>
              )}
            </a>

            <a
              href="/resume/Dharm_Chaniyara_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-md text-[#2F4156] hover:bg-[#C8D9E6]/50 border border-[#2F4156]/20 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#2F4156] hover:bg-red-50 hover:text-red-700 hover:border-red-300 border border-transparent transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="p-3 sm:p-6 md:p-8 overflow-y-auto bg-[#EAE3DC]/60 flex justify-center">
          
          {viewMode === 'pdf' ? (
            /* High-Res Rendered Image from PDF */
            <div className="w-full max-w-2xl bg-white rounded-md shadow-edge-navy border border-[#2F4156]/20 overflow-hidden">
              <img 
                src="/images/dharm_cv_preview.png" 
                alt="Dharm Chaniyara CV" 
                className="w-full h-auto"
              />
            </div>
          ) : (
            /* Interactive HTML Replication of the exact Canva Template */
            <div className="w-full max-w-2xl bg-white shadow-edge-navy border border-[#2F4156]/25 rounded-sm overflow-hidden font-sans text-[#1E293B] relative select-text">
              
              {/* Top Navy Header Block (#2F4156) */}
              <div className="bg-[#2F4156] text-white pt-8 pb-10 px-6 sm:px-8 relative">
                <div className="grid grid-cols-12 gap-4 items-center">
                  
                  {/* Left Column Spacer for overlapping photo */}
                  <div className="col-span-4 sm:col-span-4 hidden sm:block"></div>

                  {/* Right Header Text */}
                  <div className="col-span-12 sm:col-span-8 sm:pl-4">
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-none">
                      DHARM<br />CHANIYARA
                    </h1>
                    <div className="text-xs sm:text-sm font-bold tracking-wider text-[#C8D9E6] uppercase mt-2.5 font-sans">
                      Computer Science &amp; AI/ML Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Arch Photo (Matches exact Canva placement) */}
              <div className="relative">
                <div className="sm:absolute sm:-top-28 sm:left-6 z-10 flex justify-center sm:block pt-4 sm:pt-0">
                  <div className="w-36 sm:w-44 h-48 sm:h-58 rounded-t-full overflow-hidden border-4 border-white shadow-edge bg-[#2F4156]">
                    <img 
                      src="/images/dharm_arch_photo.png" 
                      alt="Dharm Chaniyara Portrait" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* 2-Column Body Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[640px]">
                
                {/* Left Column (Soft Blue #EBEEF4) */}
                <div className="sm:col-span-4 bg-[#EBEEF4] pt-4 sm:pt-28 pb-8 px-6 border-r border-[#CBD5E1]/60 text-xs">
                  
                  {/* Contact */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-5 h-[2.5px] bg-[#2F4156] -ml-6 inline-block" />
                      <h4 className="font-serif text-base font-bold text-[#2F4156]">Contact</h4>
                    </div>
                    <div className="space-y-1.5 text-[11px] text-[#2F4156]">
                      <div>
                        <span className="font-bold block">Phone:</span>
                        <a href="tel:+917383015150" className="hover:text-[#567C8D]">
                          +91 73830 15150
                        </a>
                      </div>
                      <div>
                        <span className="font-bold block">Email:</span>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#567C8D] hover:underline break-all">
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                      <div>
                        <span className="font-bold block">Location:</span>
                        <span>Vadodara (Open in Gujarat)</span>
                      </div>
                      <div>
                        <span className="font-bold block">LinkedIn:</span>
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer noopener" className="text-[#567C8D] hover:underline font-medium">
                          dharm-chaniyara-b51b9137a
                        </a>
                      </div>
                      <div>
                        <span className="font-bold block">GitHub:</span>
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer noopener" className="text-[#567C8D] hover:underline font-medium">
                          @DharmChaniyara
                        </a>
                      </div>
                      <div>
                        <span className="font-bold block">Portfolio:</span>
                        <a href={PERSONAL_INFO.portfolioUrl || "https://dharm-chaniyara-portfolio.vercel.app"} target="_blank" rel="noreferrer noopener" className="text-[#567C8D] hover:underline font-medium break-all">
                          dharm-chaniyara.vercel.app
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-5 h-[2.5px] bg-[#2F4156] -ml-6 inline-block" />
                      <h4 className="font-serif text-base font-bold text-[#2F4156]">Education</h4>
                    </div>
                    <div className="space-y-3 text-[11px]">
                      <div>
                        <div className="font-bold text-[#2F4156]">GSFC University</div>
                        <div className="text-[#475569]">B.Tech Computer Science &amp; Eng.</div>
                        <div className="font-semibold text-[#567C8D]">2025 – 2029 (Current 3rd Sem)</div>
                      </div>
                      <div>
                        <div className="font-bold text-[#2F4156]">The Vatsalya School, Rajkot</div>
                        <div className="text-[#475569]">Higher Secondary (GSEB Science)</div>
                        <div className="font-semibold text-[#567C8D]">Foundation CS &amp; Mathematics</div>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-5 h-[2.5px] bg-[#2F4156] -ml-6 inline-block" />
                      <h4 className="font-serif text-base font-bold text-[#2F4156]">Skills</h4>
                    </div>
                    <ul className="space-y-1 text-[11px] text-[#2F4156]">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>Python Programming</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>React.js &amp; TypeScript</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>Node.js &amp; Express</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>Full-Stack Web Dev</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>AI Developer Workflows</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>REST APIs &amp; JSON</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>Git, GitHub &amp; Linux</span>
                      </li>
                    </ul>
                  </div>

                  {/* Language */}
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-5 h-[2.5px] bg-[#2F4156] -ml-6 inline-block" />
                      <h4 className="font-serif text-base font-bold text-[#2F4156]">Language</h4>
                    </div>
                    <ul className="space-y-1 text-[11px] text-[#2F4156]">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>English (Professional)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>Gujarati (Native)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                        <span>Hindi (Fluent)</span>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Right Column (Pure White #FFFFFF) */}
                <div className="sm:col-span-8 bg-white py-6 px-6 sm:px-8 text-xs">
                  
                  {/* About Me */}
                  <div className="mb-6">
                    <div className="border-b border-[#CBD5E1] pb-1 mb-2.5">
                      <h4 className="font-serif text-lg font-bold text-[#2F4156]">About Me</h4>
                    </div>
                    <p className="text-[11px] text-[#334155] leading-relaxed text-justify">
                      Dedicated B.Tech Computer Science student at GSFC University with practical experience in AI-assisted web development, modern full-stack web applications, and Python. Completed industry internship at IdeaFolks, built real-world scam detection and sales copilots, and qualified as offline finalist at Hack Baroda 2026. Eager to contribute to meaningful engineering teams through internship opportunities.
                    </p>
                  </div>

                  {/* Work Experience */}
                  <div className="mb-6">
                    <div className="border-b border-[#CBD5E1] pb-1 mb-2.5">
                      <h4 className="font-serif text-lg font-bold text-[#2F4156]">Work Experience</h4>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-[#2F4156]">AI Web Developer Intern</span>
                        <span className="font-semibold text-[11px] text-[#567C8D]">June 2026 – July 2026</span>
                      </div>
                      <div className="font-semibold text-[11px] text-[#567C8D] mb-1.5">
                        IdeaFolks &bull; Rajkot, Gujarat
                      </div>
                      <ul className="space-y-1 text-[11px] text-[#334155]">
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#567C8D] mt-0.5">&bull;</span>
                          <span>Completed a one-month project internship focused on web development and AI-assisted workflows.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#567C8D] mt-0.5">&bull;</span>
                          <span>Leveraged modern AI developer tools for rapid component prototyping, API design, and debugging.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-[#567C8D] mt-0.5">&bull;</span>
                          <span>Developed responsive front-end user interfaces using HTML, CSS, JavaScript, and modern component tooling.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Key Projects & Hackathons */}
                  <div className="mb-6">
                    <div className="border-b border-[#CBD5E1] pb-1 mb-2.5">
                      <h4 className="font-serif text-lg font-bold text-[#2F4156]">Key Projects &amp; Hackathons</h4>
                    </div>
                    <div className="space-y-3 text-[11px]">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#2F4156]">Deal Intelligence Agent (Sales Copilot)</span>
                          <span className="font-semibold text-[#567C8D]">Hack Baroda Finalist</span>
                        </div>
                        <p className="text-[#475569] mt-0.5">
                          Built an AI sales intelligence copilot analyzing calls, buyer sentiment, and risk signals with Team CODE BUSTERS.
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#2F4156]">JobGuard AI (Scam Job Offer Detector)</span>
                          <span className="font-semibold text-[#567C8D]">Python &bull; ML &bull; NLP</span>
                        </div>
                        <p className="text-[#475569] mt-0.5">
                          Engineered an automated scam detector evaluating offer letters with domain verification and NLP heuristic scoring.
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#2F4156]">StudyShare (Campus Academic Platform)</span>
                          <span className="font-semibold text-[#567C8D]">React &bull; Node.js</span>
                        </div>
                        <p className="text-[#475569] mt-0.5">
                          Peer-to-peer syllabus and notes platform with semester filtering and fast document access.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications & Achievements */}
                  <div>
                    <div className="border-b border-[#CBD5E1] pb-1 mb-2.5">
                      <h4 className="font-serif text-lg font-bold text-[#2F4156]">Certifications &amp; Achievements</h4>
                    </div>
                    <div className="space-y-2 text-[11px]">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#2F4156]">Python Essentials 2</span>
                          <span className="font-semibold text-[#567C8D]">Cisco Academy (Oct 2026)</span>
                        </div>
                        <div className="text-[#475569]">Advanced OOP, modules, exception handling, and file processing.</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#2F4156]">Computer Hardware Basics</span>
                          <span className="font-semibold text-[#567C8D]">Cisco Academy (Sept 2026)</span>
                        </div>
                        <div className="text-[#475569]">Core computer architecture, system diagnostics, and hardware.</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#2F4156]">Hack Baroda 2026 Finalist</span>
                          <span className="font-semibold text-[#567C8D]">Offline Finalist</span>
                        </div>
                        <div className="text-[#475569]">Selected as finalist with Team CODE BUSTERS among 100+ student teams.</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
