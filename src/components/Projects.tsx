import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Info
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
    <section id="projects" className="py-20 relative bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
              Verified Code &amp; Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Featured Projects
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              Real implementations inspected directly from my GitHub repositories. Filter by domain or open any project card for a full deep dive.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
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
              className="flex flex-col justify-between rounded-xl bg-white border border-slate-200 p-6 hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              {/* Top status & badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${
                    project.status.includes('Finalist')
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : project.status.includes('Completed')
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {project.status}
                  </span>

                  {project.badge && (
                    <span className="text-[11px] text-slate-500 font-medium">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {project.name}
                </h3>

                <p className="text-xs text-slate-500 font-mono mt-1 line-clamp-1">
                  {project.tagline}
                </p>

                {/* Problem snippet */}
                <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                  <span className="text-slate-400 font-mono block text-[10px] uppercase font-semibold mb-0.5">Problem:</span>
                  <p className="line-clamp-3">{project.problem}</p>
                </div>

                {/* Key features preview */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                    Highlights:
                  </span>
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Tech Stack & Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
                
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-50 text-slate-500 border border-slate-200/60">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors py-1"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-sm"
                        aria-label={`View ${project.name} source code on GitHub`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-300" />
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
