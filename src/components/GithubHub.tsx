import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  ArrowUpRight
} from 'lucide-react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';

export const GithubHub: React.FC = () => {
  return (
    <section id="github" className="py-20 relative bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
              Open Source &amp; Repositories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
              <span>GitHub Repositories</span>
              <Github className="w-6 h-6 text-slate-700 inline" />
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              Direct access to my public GitHub repositories. Browse the active code, commit history, and application structures.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-300 transition-colors shadow-sm"
          >
            <Github className="w-4 h-4 text-slate-700" />
            <span>Visit @{PERSONAL_INFO.github.split('/').pop()}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GITHUB_REPOS.map((repo, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {repo.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{repo.language}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight font-mono">
                  {repo.displayName}
                </h3>

                <div className="text-xs text-slate-400 font-mono mt-0.5 truncate">
                  {repo.name}
                </div>

                <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] font-mono text-slate-400">
                  Public Repo
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
