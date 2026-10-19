import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Info,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { GithubColoredIcon } from './BrandIcons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack & Web', 'AI & Machine Learning'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(selectedCategory as any));

  return (
    <section id="projects" className="py-20 relative bg-[#F5EFEB] border-b border-[#2F4156]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#567C8D] mb-2 block">
              Verified Code &amp; Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2F4156]">
              Featured Projects
            </h2>
            <p className="text-[#2F4156]/80 text-base mt-2 max-w-2xl leading-relaxed">
              Real implementations inspected directly from my GitHub repositories. Filter by domain or open any project card for a full deep dive.
            </p>
          </div>

          {/* Filter Pills with Precision Edge */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-md bg-white/90 border border-[#2F4156]/15 shadow-edge-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#2F4156] text-white shadow-xs'
                    : 'text-[#2F4156]/75 hover:text-[#2F4156] hover:bg-[#C8D9E6]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Edgy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="edgy-card rounded-xl p-6 flex flex-col justify-between"
            >
              {/* Top status & badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${
                    project.status.includes('Finalist')
                      ? 'bg-[#C8D9E6] text-[#2F4156] border-[#567C8D]/40'
                      : project.status.includes('Completed')
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-[#F5EFEB] text-[#2F4156] border-[#2F4156]/20'
                  }`}>
                    {project.status}
                  </span>

                  {project.badge && (
                    <span className="text-[11px] text-[#567C8D] font-bold font-mono">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-[#2F4156] tracking-tight">
                  {project.name}
                </h3>

                <p className="text-xs text-[#567C8D] font-mono mt-1 line-clamp-1 font-semibold">
                  {project.tagline}
                </p>

                {/* Problem snippet */}
                <div className="mt-4 p-3 rounded-md bg-[#F5EFEB] border border-[#2F4156]/12 text-xs text-[#2F4156]/85 leading-relaxed">
                  <span className="text-[#567C8D] font-mono block text-[10px] uppercase font-bold mb-0.5">Problem:</span>
                  <p className="line-clamp-3">{project.problem}</p>
                </div>

                {/* Key features preview */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-[10px] font-mono text-[#567C8D] uppercase tracking-wider font-bold block">
                    Highlights:
                  </span>
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#2F4156]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D] mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Tech Stack & Actions */}
              <div className="mt-6 pt-4 border-t border-[#2F4156]/12 space-y-4">
                
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#C8D9E6]/50 border border-[#2F4156]/15 text-[#2F4156] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-white text-[#567C8D] border border-[#2F4156]/15 font-bold">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#567C8D] hover:text-[#2F4156] transition-colors py-1"
                  >
                    <Info className="w-4 h-4 text-[#567C8D]" />
                    <span>Deep Dive</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="edgy-btn-primary px-3 py-1.5 rounded-md text-xs font-semibold inline-flex items-center gap-1.5"
                        aria-label={`View ${project.name} source code on GitHub`}
                      >
                        <GithubColoredIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                        <ArrowUpRight className="w-3 h-3 text-[#C8D9E6]" />
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
