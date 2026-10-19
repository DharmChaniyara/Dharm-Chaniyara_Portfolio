import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const exp = WORK_EXPERIENCE[0];

  return (
    <section id="experience" className="py-20 relative bg-[#F5EFEB] border-b border-[#2F4156]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#567C8D] mb-2">
            Industry Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2F4156]">
            Work Experience
          </h2>
          <p className="text-[#2F4156]/80 text-base mt-2 max-w-2xl leading-relaxed">
            Verified professional internship focusing on hands-on front-end engineering and AI developer workflows.
          </p>
        </div>

        {/* Experience Card with Edgy / Precision Edges */}
        <div className="edgy-card rounded-xl p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2F4156]/12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C8D9E6]/70 border border-[#567C8D]/40 text-[#2F4156] text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#567C8D]" />
                <span>Verified Certificate on Record</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#2F4156] tracking-tight">
                {exp.role}
              </h3>
              <div className="text-base text-[#567C8D] font-bold mt-0.5">
                {exp.company} &bull; <span className="text-[#2F4156]/70 font-normal">Web Development Division</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#2F4156]">
              <div className="flex items-center gap-1.5 bg-[#C8D9E6]/50 px-3 py-1.5 rounded-md border border-[#2F4156]/15">
                <Calendar className="w-3.5 h-3.5 text-[#567C8D]" />
                <span>{exp.verifiedPeriod}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#C8D9E6]/50 px-3 py-1.5 rounded-md border border-[#2F4156]/15">
                <MapPin className="w-3.5 h-3.5 text-[#567C8D]" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <div className="py-6 border-b border-[#2F4156]/12">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold mb-3">
              Responsibilities &amp; Work Done
            </h4>
            <ul className="space-y-3 text-sm text-[#2F4156]/85">
              {exp.highlights.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#567C8D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-[#567C8D] uppercase tracking-wider font-bold mb-2">
                Technologies &amp; Tools Used
              </div>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#C8D9E6]/60 text-[#2F4156] font-semibold border border-[#2F4156]/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={exp.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="edgy-btn-primary px-4 py-2 rounded-md text-xs font-semibold inline-flex items-center gap-1.5"
              >
                <span>View Certificate (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
