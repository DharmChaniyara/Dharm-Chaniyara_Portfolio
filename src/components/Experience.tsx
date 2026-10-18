import React from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Award,
  ShieldCheck
} from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const exp = WORK_EXPERIENCE[0];

  return (
    <section id="experience" className="py-20 relative bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Industry Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Work Experience
          </h2>
          <p className="text-slate-600 text-base mt-2 max-w-2xl">
            Verified professional internship focusing on hands-on front-end engineering and AI developer workflows.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Certificate on Record</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                {exp.role}
              </h3>
              <div className="text-base text-slate-700 font-medium mt-0.5">
                {exp.company} &bull; <span className="text-slate-500 font-normal">Web Development Division</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{exp.verifiedPeriod}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Description & Responsibilities */}
          <div className="mt-6 space-y-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {exp.description}
            </p>

            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Key Responsibilities &amp; Learnings:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-500 mr-1 font-semibold">Technologies:</span>
              {exp.technologies.map((t, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Verification Link */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-slate-500 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Signed by Founder <strong>Mr. Hardik Mandir</strong></span>
              </div>

              <a
                href={exp.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-medium transition-colors"
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
