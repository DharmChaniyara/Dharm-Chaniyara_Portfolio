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
    <section id="achievements" className="py-20 relative bg-[#F5EFEB] border-b border-[#2F4156]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#567C8D] mb-2 block">
            Credentials &amp; Recognitions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2F4156]">
            Hackathons &amp; Certifications
          </h2>
          <p className="text-[#2F4156]/80 text-base mt-2 max-w-2xl">
            Verifiable milestones from student competitions, authorized Cisco certifications, and technical workshops.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="edgy-card p-6 sm:p-7 flex flex-col justify-between hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className={`px-2.5 py-0.5 text-xs font-mono font-bold border ${
                    ach.type === 'Award / Finalist'
                      ? 'bg-[#C8D9E6]/50 text-[#2F4156] border-[#567C8D]/40'
                      : ach.type === 'Certification'
                      ? 'bg-[#567C8D]/15 text-[#2F4156] border-[#567C8D]/30'
                      : 'bg-[#F5EFEB] text-[#2F4156] border-[#2F4156]/20'
                  }`}>
                    {ach.badgeText}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-[#567C8D] font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#567C8D]" />
                    <span>{ach.date}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#2F4156] tracking-tight">
                  {ach.title}
                </h3>

                {/* Issuing Organization */}
                <div className="flex items-center gap-1.5 text-xs text-[#567C8D] font-medium mt-1 mb-3">
                  <Building className="w-3.5 h-3.5 text-[#567C8D]" />
                  <span>{ach.organization}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#2F4156]/80 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Action / Certificate Link */}
              <div className="mt-6 pt-4 border-t border-[#2F4156]/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#567C8D]">
                  Verified Record
                </span>

                {ach.credentialUrl && (
                  <a
                    href={ach.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#567C8D] hover:text-[#2F4156] transition-colors"
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
