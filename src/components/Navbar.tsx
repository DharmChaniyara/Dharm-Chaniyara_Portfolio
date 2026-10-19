import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'github', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F5EFEB]/95 backdrop-blur-md border-b border-[#2F4156]/15 shadow-edge-xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F4156] rounded-md p-1"
          >
            <div className="w-8 h-8 rounded-md bg-white border border-[#2F4156]/30 shadow-edge-xs text-[#2F4156] font-mono font-bold text-xs flex items-center justify-center transition-transform group-hover:scale-105">
              DC
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#2F4156]">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-[#567C8D] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                Available for Internships
              </span>
            </div>
          </a>

          {/* Desktop Navigation with Precision Edges */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 p-1 rounded-full border border-[#2F4156]/15 shadow-edge-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all ${
                    isActive
                      ? 'bg-[#2F4156] text-white shadow-xs font-semibold'
                      : 'text-[#2F4156]/75 hover:text-[#2F4156] hover:bg-[#C8D9E6]/40'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md bg-[#2F4156] text-white hover:bg-[#233243] border border-[#2F4156] shadow-edge-xs hover:shadow-edge active:translate-x-0.5 active:translate-y-0.5 transition-all"
              aria-label="View or download resume"
            >
              <FileText className="w-4 h-4 text-[#C8D9E6]" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-white border border-[#2F4156]/20 text-[#2F4156] hover:bg-[#F5EFEB] focus:outline-none focus:ring-2 focus:ring-[#2F4156]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-4 rounded-xl bg-white border border-slate-200 shadow-lg animate-fade-in">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
              <span className="text-xs font-medium text-slate-400">Navigation</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Open to Internships
              </span>
            </div>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-100 text-slate-900 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg bg-slate-900 text-white"
              >
                <FileText className="w-4 h-4" />
                <span>View / Download Resume (PDF)</span>
              </button>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-slate-600 hover:text-slate-900 bg-slate-50 rounded-lg border border-slate-200"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
