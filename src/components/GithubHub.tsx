import React from 'react';
import { 
  ExternalLink, 
  Code2, 
  ArrowUpRight
} from 'lucide-react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';
import { GithubColoredIcon } from './BrandIcons';

export const GithubHub: React.FC = () => {
  return (
    <section id="github" className="py-20 relative bg-[#F5EFEB] border-b border-[#2F4156]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#567C8D] mb-2 block">
              Open Source &amp; Repositories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2F4156] flex items-center gap-3">
              <span>GitHub Repositories</span>
              <GithubColoredIcon className="w-7 h-7 inline shadow-xs" />
            </h2>
            <p className="text-[#2F4156]/80 text-base mt-2 max-w-2xl">
              Direct access to my public GitHub repositories. Browse the active code, commit history, and application structures.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="edgy-card inline-flex items-center gap-2 px-4 py-2.5 hover:bg-[#F5EFEB] text-[#2F4156] text-xs sm:text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            <GithubColoredIcon className="w-4 h-4" />
            <span>Visit @{PERSONAL_INFO.github.split('/').pop()}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#567C8D]" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GITHUB_REPOS.map((repo, idx) => (
            <div
              key={idx}
              className="edgy-card p-5 flex flex-col justify-between hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#C8D9E6]/35 text-[#2F4156] border border-[#567C8D]/30">
                    {repo.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#567C8D] flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-[#567C8D]" />
                    <span>{repo.language}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#2F4156] tracking-tight font-mono">
                  {repo.displayName}
                </h3>

                <div className="text-xs text-[#567C8D] font-mono mt-0.5 truncate">
                  {repo.name}
                </div>

                <p className="text-xs text-[#2F4156]/80 mt-2.5 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#2F4156]/10 flex items-center justify-between">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#567C8D] hover:text-[#2F4156] hover:underline"
                >
                  <GithubColoredIcon className="w-3.5 h-3.5" />
                  <span>Inspect Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] font-mono text-[#567C8D]">
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
