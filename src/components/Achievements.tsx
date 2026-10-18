import React from 'react';
import { 
  Trophy, 
  Award, 
  ExternalLink, 
  Calendar, 
  Building
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
            Credentials &amp; Recognitions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Hackathons &amp; Certifications
          </h2>
          <p className="text-slate-600 text-base mt-2 max-w-2xl">
            Verifiable milestones from student competitions, authorized Cisco certifications, and technical workshops.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
                    ach.type === 'Award / Finalist'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : ach.type === 'Certification'
                      ? 'bg-blue-50 text-blue-800 border-blue-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {ach.badgeText}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ach.date}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {ach.title}
                </h3>

                {/* Issuing Organization */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mt-1 mb-3">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ach.organization}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Action / Certificate Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Verified Record
                </span>

                {ach.credentialUrl && (
                  <a
                    href={ach.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Inspect Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
