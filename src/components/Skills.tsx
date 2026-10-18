import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  BrainCircuit, 
  Wrench
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Used in Projects' | 'Certified / Coursework' | 'Actively Learning'>('All');

  const filterOptions = ['All', 'Used in Projects', 'Certified / Coursework', 'Actively Learning'] as const;

  const categoryIcons = [
    <Code2 className="w-5 h-5 text-slate-700" />,
    <Globe className="w-5 h-5 text-slate-700" />,
    <Database className="w-5 h-5 text-slate-700" />,
    <BrainCircuit className="w-5 h-5 text-slate-700" />,
    <Wrench className="w-5 h-5 text-slate-700" />
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
              Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Skills &amp; Technologies
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              An evidence-based breakdown of my toolset, grouped by domain and categorized by whether they are deployed in projects, certified through coursework, or actively being studied.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-sm">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === f
                    ? 'bg-slate-900 text-white font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Legend Notice */}
        <div className="mb-8 p-4 rounded-xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs shadow-sm">
          <span className="text-slate-500 font-mono font-semibold">Proficiency Criteria:</span>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <strong className="text-slate-800">Used in Projects:</strong> Built and shipped in functional code
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <strong className="text-slate-800">Certified / Coursework:</strong> Validated via Cisco or university exams
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <strong className="text-slate-800">Actively Learning:</strong> Current study focus &amp; exploration
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
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                      {categoryIcons[idx % categoryIcons.length]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-500 mb-5">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5">
                    {filteredSkills.map((s, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-slate-900">
                            {s.name}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${
                            s.level === 'Used in Projects'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : s.level === 'Certified / Coursework'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}>
                            {s.level}
                          </span>
                        </div>
                        {s.details && (
                          <div className="text-xs text-slate-500 mt-1 font-sans leading-relaxed">
                            {s.details}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400 text-right">
                  {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
