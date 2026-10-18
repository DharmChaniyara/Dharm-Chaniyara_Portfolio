import React from 'react';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  Star, 
  GitFork, 
  Code2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';

export const GithubHub: React.FC = () => {
  return (
    <section id="github" className="py-20 relative bg-dark-900/60 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan mb-2">
              <span>// 06. OPEN SOURCE &amp; REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
              <span>GitHub Repositories Hub</span>
              <Github className="w-7 h-7 text-brand-cyan inline" />
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Direct access to my public GitHub repositories. Browse the active code, commit history, and application structures.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-semibold border border-white/[0.1] transition-all hover:border-brand-cyan/40"
          >
            <Github className="w-4 h-4 text-brand-cyan" />
            <span>Visit @{PERSONAL_INFO.github.split('/').pop()}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GITHUB_REPOS.map((repo, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-dark-950/80 border border-white/[0.08] hover:border-brand-cyan/30 transition-all flex flex-col justify-between group shadow-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    {repo.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{repo.language}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors tracking-tight font-mono">
                  {repo.displayName}
                </h3>

                <div className="text-xs text-slate-500 font-mono mt-0.5 truncate">
                  {repo.name}
                </div>

                <p className="text-xs text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-brand-cyan hover:underline"
                >
                  <span>Inspect Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {repo.liveUrl && (
                  <a
                    href={repo.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:underline"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3 h-3" />
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
