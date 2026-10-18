import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  Info, 
  Filter, 
  Cpu, 
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & ML', 'Full Stack Web', 'Collaborative / Hackathon', 'Academic & Mobile'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(selectedCategory as any));

  return (
    <section id="projects" className="py-20 relative bg-dark-950/70 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan mb-2">
              <span>// 03. VERIFIED CODE &amp; APPLICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Real implementations inspected directly from my GitHub repositories. Filter by domain or click any project card for a full architectural deep dive.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-white/[0.08] backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-cyan text-dark-950 font-semibold shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-dark-900/80 border border-white/[0.08] p-6 hover:border-brand-cyan/40 hover:bg-dark-900/95 transition-all duration-300 shadow-card hover:shadow-2xl relative overflow-hidden"
            >
              {/* Top status & badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${
                    project.status === 'Live Deployed'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : project.status.includes('Finalist')
                      ? 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/30'
                      : 'bg-white/[0.04] text-slate-400 border-white/[0.08]'
                  }`}>
                    {project.status}
                  </span>

                  {project.badge && (
                    <span className="text-[10px] text-slate-400 font-mono">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors tracking-tight">
                  {project.name}
                </h3>

                <p className="text-xs text-slate-400 font-mono mt-1 line-clamp-1">
                  {project.tagline}
                </p>

                {/* Problem Statement snippet */}
                <div className="mt-4 p-3 rounded-xl bg-dark-950/70 border border-white/[0.04] text-xs text-slate-300 leading-relaxed">
                  <span className="text-slate-400 font-mono block text-[10px] uppercase mb-0.5">Problem Solved:</span>
                  <p className="line-clamp-3">{project.problem}</p>
                </div>

                {/* Key features preview */}
                <div className="mt-3.5 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Key Features:
                  </span>
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Tech Stack & Actions */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-4">
                
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] border border-white/[0.06] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.02] text-slate-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:text-white transition-colors p-1"
                  >
                    <Info className="w-4 h-4" />
                    <span>Deep Dive</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
                        aria-label={`View ${project.name} source code on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-cyan/15 hover:bg-brand-cyan text-brand-cyan hover:text-dark-950 text-xs font-bold border border-brand-cyan/30 transition-all"
                        aria-label={`Launch live demo for ${project.name}`}
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
};
