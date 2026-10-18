import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MapPin, 
  MessageCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Work &bull; India</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Let's build something real.
          </h2>
          
          <p className="text-slate-600 text-base mt-2 max-w-2xl leading-relaxed">
            I'm interested in learning, building, and contributing to meaningful software engineering and AI-enabled projects through internship opportunities. Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Contact Cards Grid (Recruiter-friendly & Minimalist) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Email Card */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                Email
              </div>
              <div className="text-sm font-semibold text-slate-900 select-all break-all">
                {PERSONAL_INFO.email}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Fastest way to reach me for recruitment or discussions.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-xs text-slate-700 transition-colors shadow-sm"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4 border border-blue-100">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                LinkedIn
              </div>
              <div className="text-sm font-semibold text-slate-900">
                Dharm Chaniyara
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Connect professionally, review experience, and message directly.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center mb-4">
                <Github className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                GitHub
              </div>
              <div className="text-sm font-semibold text-slate-900 font-mono">
                @DharmChaniyara
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Inspect public repositories, source code, and commit history.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Location & Availability Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Based in <strong>Vadodara &amp; Rajkot, Gujarat, India</strong> &bull; Open to on-site, hybrid, and remote opportunities</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-700 font-medium">Available for Summer / Semester Internships</span>
          </div>
        </div>

      </div>
    </section>
  );
};
