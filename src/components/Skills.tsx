import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  BrainCircuit, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'Used in Projects', 'Certified / Coursework', 'Actively Learning'];

  const categoryIcons = [
    <Code2 key="code" className="w-5 h-5 text-[#2F4156]" />,
    <Globe key="globe" className="w-5 h-5 text-[#2F4156]" />,
    <Database key="db" className="w-5 h-5 text-[#2F4156]" />,
    <BrainCircuit key="ai" className="w-5 h-5 text-[#2F4156]" />,
    <Wrench key="wrench" className="w-5 h-5 text-[#2F4156]" />
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#F5EFEB] border-b border-[#2F4156]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#567C8D] mb-2 block">
              Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2F4156]">
              Skills &amp; Technologies
            </h2>
            <p className="text-[#2F4156]/80 text-base mt-2 max-w-2xl leading-relaxed">
              An evidence-based breakdown of my toolset, grouped by domain and categorized by whether they are deployed in projects, certified through coursework, or actively being studied.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-md bg-white/90 border border-[#2F4156]/15 shadow-edge-xs">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
                  activeFilter === f
                    ? 'bg-[#2F4156] text-white shadow-xs'
                    : 'text-[#2F4156]/75 hover:text-[#2F4156] hover:bg-[#C8D9E6]/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Legend Notice */}
        <div className="mb-8 p-4 rounded-xl edgy-card flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-[#567C8D] font-mono font-bold uppercase tracking-wider">Proficiency Criteria:</span>
          <div className="flex flex-wrap items-center gap-4 text-[#2F4156]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <strong className="font-bold">Used in Projects:</strong> Built and shipped in functional code
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#567C8D]" />
              <strong className="font-bold">Certified / Coursework:</strong> Validated via Cisco or university exams
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C8D9E6]" />
              <strong className="font-bold">Actively Learning:</strong> Current study focus &amp; exploration
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
                className="edgy-card rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-md bg-[#C8D9E6]/60 border border-[#2F4156]/15 flex items-center justify-center shrink-0">
                      {categoryIcons[idx % categoryIcons.length]}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#2F4156] tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-xs text-[#567C8D] font-medium mb-5">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5">
                    {filteredSkills.map((s, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-md bg-[#F5EFEB]/90 border border-[#2F4156]/12 hover:border-[#2F4156]/30 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold text-[#2F4156]">
                            {s.name}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                            s.level === 'Used in Projects'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : s.level === 'Certified / Coursework'
                              ? 'bg-[#C8D9E6] text-[#2F4156] border-[#567C8D]/40'
                              : 'bg-white text-[#567C8D] border-[#2F4156]/15'
                          }`}>
                            {s.level}
                          </span>
                        </div>
                        {s.details && (
                          <div className="text-xs text-[#2F4156]/75 mt-1 font-sans leading-relaxed">
                            {s.details}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2F4156]/12 text-[11px] font-mono text-[#567C8D] text-right font-semibold">
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
