import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ArrowUpRight, 
  MapPin, 
  Mail,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GmailColoredIcon, LinkedinColoredIcon, GithubColoredIcon } from './BrandIcons';
import { TechGroveAnimation } from './TechGroveAnimation';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const contactLinks = [
    {
      id: 'email',
      label: 'Email',
      href: `mailto:${PERSONAL_INFO.email}`,
      target: undefined,
      rel: undefined,
      Icon: GmailColoredIcon,
      hoverClass: 'hover:border-red-200 hover:bg-white',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: PERSONAL_INFO.linkedin,
      target: '_blank',
      rel: 'noreferrer noopener',
      Icon: LinkedinColoredIcon,
      hoverClass: 'hover:border-blue-200 hover:bg-white',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: PERSONAL_INFO.github,
      target: '_blank',
      rel: 'noreferrer noopener',
      Icon: GithubColoredIcon,
      hoverClass: 'hover:border-purple-200 hover:bg-white',
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 relative bg-[#F5EFEB] border-t border-b border-[#2F4156]/15 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Row */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-sm font-bold tracking-wide text-[#2F4156]">
            Open to work &bull; India
          </span>
        </div>

        {/* Main Editorial Headline */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#2F4156] leading-[1.08]">
            Let&apos;s build <br className="hidden sm:inline" />
            something real.
          </h2>
          <p className="text-[#2F4156]/80 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            I&apos;m looking for student internship opportunities where I can build production systems, 
            contribute AI-enabled features, and learn from experienced engineering teams.
          </p>
        </div>

        {/* Main Content Row: Colored Channels (Left) & Pixel Animation (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8">
          
          {/* Left Column: Direct Colored Links */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {contactLinks.map((item) => {
                const IconComponent = item.Icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    className="group inline-flex items-center gap-2.5 px-4 py-2.5 edgy-card text-[#2F4156] text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    aria-label={`Open ${item.label}`}
                  >
                    <IconComponent className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    <span className="tracking-tight">{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#567C8D] transition-all duration-200 group-hover:text-[#2F4156] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}

              {/* Quick Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 edgy-card text-[#2F4156] text-sm font-semibold hover:bg-[#F5EFEB] transition-all duration-200 active:scale-95"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold text-xs sm:text-sm">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#567C8D]" />
                    <span className="text-xs sm:text-sm">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Recruiter direct address display */}
            <div className="text-xs font-mono text-[#567C8D] pt-1">
              Direct inbox: <span className="text-[#2F4156] font-bold select-all">{PERSONAL_INFO.email}</span>
            </div>
          </div>

          {/* Right Column: Custom Pixel Animation Scene */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <TechGroveAnimation />
          </div>

        </div>

        {/* Bottom Banner: Location & Availability (Warm white elevated card) */}
        <div className="mt-6 p-4 sm:p-5 edgy-card flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#2F4156]/90">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <div className="w-7 h-7 bg-[#F5EFEB] border border-[#2F4156]/20 flex items-center justify-center shrink-0 text-[#2F4156]">
              <MapPin className="w-4 h-4 text-[#2F4156]" />
            </div>
            <span>
              Based in <strong>Vadodara &amp; Rajkot, Gujarat, India</strong> &bull; Open to on-site, hybrid, or remote roles
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C8D9E6]/40 border border-[#567C8D]/40 text-xs font-bold text-[#2F4156] shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Available for Summer &amp; Semester Internships</span>
          </div>
        </div>

      </div>
    </section>
  );
};
