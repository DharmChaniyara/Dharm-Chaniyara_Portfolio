import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Terminal, 
  Brain, 
  Code2, 
  Sparkles, 
  Cpu, 
  Layers,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial-gradient"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-medium text-slate-300 mb-6 backdrop-blur-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>3rd Sem B.Tech CSE @ GSFC University</span>
              <span className="text-slate-500">|</span>
              <span className="text-brand-cyan">Internship-Ready</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I'm{' '}
              <span className="text-gradient-cyan relative">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Positioning Role */}
            <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl font-semibold text-slate-300 mb-5">
              <span className="text-brand-cyan">&lt;</span>
              <span>Computer Science Student &amp; Aspiring AI/ML Developer</span>
              <span className="text-brand-cyan">/&gt;</span>
            </div>

            {/* Original Headline & Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl font-normal">
              Building practical software applications and exploring AI-augmented systems. 
              Grounded with a <span className="text-white font-medium">web development internship at IdeaFolks</span> and 
              experience shipping projects like <span className="text-brand-cyan font-medium">JobGuard AI</span>, 
              the <span className="text-brand-blue font-medium">Deal Intelligence Agent</span> (Hack Baroda 2026 finalist), 
              and student tools for <span className="text-white font-medium">GSFC University</span>.
            </p>

            {/* Quick Metrics Bar (Honest & Evidence-Based) */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xl mb-8 p-3.5 rounded-xl bg-dark-900/60 border border-white/[0.06] backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-mono">Hands-on Work</span>
                <span className="text-sm font-bold text-white mt-0.5">IdeaFolks Intern</span>
                <span className="text-[11px] text-slate-400">AI-Assisted Web Dev</span>
              </div>
              <div className="flex flex-col border-l border-white/[0.08] pl-3">
                <span className="text-xs text-slate-400 font-mono">Hackathons</span>
                <span className="text-sm font-bold text-white mt-0.5">Offline Finalist</span>
                <span className="text-[11px] text-brand-cyan">Hack Baroda 2026</span>
              </div>
              <div className="flex flex-col border-l border-white/[0.08] pl-3">
                <span className="text-xs text-slate-400 font-mono">Cisco Certified</span>
                <span className="text-sm font-bold text-white mt-0.5">Python Essentials 2</span>
                <span className="text-[11px] text-emerald-400">Oct 2026 Credential</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-cyan text-dark-950 font-bold text-sm tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-glow-cyan"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/[0.12] transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </button>

              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-brand-blue/20 hover:text-brand-blue hover:border-brand-blue/40 border border-white/[0.08] text-slate-300 transition-all"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/10 hover:text-white hover:border-white/20 border border-white/[0.08] text-slate-300 transition-all"
                  aria-label="View GitHub profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual AI & Software Engineering Node Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-cyan/20 via-brand-blue/20 to-brand-purple/20 blur-xl opacity-75" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-dark-900/90 border border-white/[0.12] p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Brain className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>ai-dev-pipeline.ts</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active Stack
                  </div>
                </div>

                {/* Architecture Visual Node Diagram */}
                <div className="space-y-3 font-mono text-xs">
                  
                  {/* Step 1: Input Layer */}
                  <div className="p-3 rounded-lg bg-dark-950/70 border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">1. Web Interface &amp; Ingestion</div>
                        <div className="text-[10px] text-slate-400">React + Vite • Tailwind • Node/Express</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  </div>

                  {/* Connecting Line */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-3 bg-gradient-to-b from-brand-cyan to-brand-blue" />
                  </div>

                  {/* Step 2: Processing & Extraction */}
                  <div className="p-3 rounded-lg bg-dark-950/70 border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">2. Document &amp; Stream Pipeline</div>
                        <div className="text-[10px] text-slate-400">Multer • pdf-parse • Supabase PostgreSQL</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>

                  {/* Connecting Line */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-3 bg-gradient-to-b from-brand-blue to-brand-purple" />
                  </div>

                  {/* Step 3: AI Intelligence Layer */}
                  <div className="p-3 rounded-lg bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border border-brand-cyan/30 flex items-center justify-between shadow-glow-cyan">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-brand-purple">
                        <Sparkles className="w-4 h-4 text-brand-cyan" />
                      </div>
                      <div>
                        <div className="text-white font-semibold flex items-center gap-1.5">
                          <span>3. AI Reasoning Engine</span>
                          <span className="text-[9px] bg-brand-cyan/20 text-brand-cyan px-1.5 py-0.2 rounded">LLM + API</span>
                        </div>
                        <div className="text-[10px] text-slate-300">OpenAI API Prompts • VirusTotal • RAG</div>
                      </div>
                    </div>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                    </span>
                  </div>
                </div>

                {/* Real Code Snippet Box */}
                <div className="mt-4 p-3 rounded-lg bg-dark-950/90 border border-white/[0.06] text-[11px] font-mono text-slate-300">
                  <div className="text-slate-500 mb-1">// Real snippet: JobGuard AI evaluation controller</div>
                  <div>
                    <span className="text-brand-purple">const</span> verdict = <span className="text-brand-purple">await</span> evaluateJobOffer&#40;{'{'}
                  </div>
                  <div className="pl-4 text-slate-400">
                    extractedText, hasMaliciousLinks: <span className="text-emerald-400">false</span>
                  </div>
                  <div>&#125;&#41;; <span className="text-emerald-400">// returns risk score &amp; explanation</span></div>
                </div>

                {/* Card Footer Status */}
                <div className="mt-3.5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Focus: AI-Powered Apps</span>
                  </span>
                  <a 
                    href="#projects" 
                    className="text-brand-cyan hover:underline inline-flex items-center gap-1"
                  >
                    <span>Inspect projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
