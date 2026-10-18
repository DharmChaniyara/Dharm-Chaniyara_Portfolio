import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  BrainCircuit, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Used in Projects' | 'Certified / Coursework' | 'Actively Learning'>('All');

  const filterOptions = ['All', 'Used in Projects', 'Certified / Coursework', 'Actively Learning'] as const;

  const categoryIcons = [
    <Code2 className="w-5 h-5 text-brand-cyan" />,
    <Globe className="w-5 h-5 text-brand-blue" />,
    <Database className="w-5 h-5 text-emerald-400" />,
    <BrainCircuit className="w-5 h-5 text-brand-purple" />,
    <Wrench className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section id="skills" className="py-20 relative bg-dark-900/50 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan mb-2">
              <span>// 04. TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              An honest, evidence-based breakdown of my toolset. Grouped by domain and tagged by whether they are deployed in projects, certified through coursework, or actively being studied.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-dark-950 border border-white/[0.08]">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === f
                    ? 'bg-brand-cyan text-dark-950 font-semibold shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Legend Notice */}
        <div className="mb-8 p-3 rounded-xl bg-dark-950/80 border border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-slate-400 font-mono">Proficiency Criteria:</span>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <strong className="text-white">Used in Projects:</strong> Built and shipped in functional code
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              <strong className="text-white">Certified / Coursework:</strong> Validated via Cisco or university exams
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-purple" />
              <strong className="text-white">Actively Learning:</strong> Current study focus &amp; exploration
            </span>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const filteredSkills = activeFilter === 'All'
              ? cat.skills
              : cat.skills.filter(s => s.level === activeFilter);

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-sm shadow-card hover:border-white/[0.15] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-dark-950 border border-white/[0.08]">
                      {categoryIcons[idx % categoryIcons.length]}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-400 mb-5">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    {filteredSkills.map((s, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-dark-950/70 border border-white/[0.04] hover:border-brand-cyan/20 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-white">
                            {s.name}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${
                            s.level === 'Used in Projects'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                              : s.level === 'Certified / Coursework'
                              ? 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20'
                              : 'bg-brand-purple/10 text-brand-purple border-brand-purple/20'
                          }`}>
                            {s.level}
                          </span>
                        </div>
                        {s.details && (
                          <div className="text-xs text-slate-400 mt-1.5 font-sans leading-normal">
                            {s.details}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-slate-400 text-right">
                  {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'} in category
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
