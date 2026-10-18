import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  MessageSquare,
  MapPin,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Internship Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#38bdf8', '#8b5cf6']
    });

    setSubmitted(true);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `[Portfolio Inquiry - ${formData.opportunityType}] from ${formData.name || 'Recruiter'}`
  )}&body=${encodeURIComponent(
    `Hi Dharm,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
  )}`;

  return (
    <section id="contact" className="py-20 relative bg-dark-950 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan mb-2">
            <span>// 07. CONNECT &amp; COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Currently seeking internship and early-career opportunities in AI/ML, software development, and full-stack engineering. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Contact Card */}
            <div className="p-6 rounded-2xl bg-dark-900/90 border border-white/[0.08] shadow-card">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-cyan" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* Email Copier */}
              <div className="p-3.5 rounded-xl bg-dark-950 border border-white/[0.06] mb-4">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">
                  Email Address
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono text-white select-all break-all">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-all shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <div className="text-[11px] text-emerald-400 font-mono mt-1.5 animate-fade-in flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Copied to clipboard!</span>
                  </div>
                )}
              </div>

              {/* Social Link Buttons */}
              <div className="space-y-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-950 border border-white/[0.06] hover:border-brand-blue/40 text-slate-300 hover:text-white group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-blue/15 text-brand-blue">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">LinkedIn Profile</div>
                      <div className="text-xs text-slate-400">linkedin.com/in/dharm-chaniyara</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-blue transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-950 border border-white/[0.06] hover:border-white/30 text-slate-300 hover:text-white group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.08] text-white">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">GitHub Profile</div>
                      <div className="text-xs text-slate-400">github.com/DharmChaniyara</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Location Stamp */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Vadodara &amp; Rajkot, Gujarat, India (Open to on-site &amp; remote)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-dark-900/90 border border-white/[0.08] shadow-card">
              
              <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-cyan" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to initiate contact directly or open your default mail client.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-dark-950 border border-brand-cyan/30 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-brand-cyan">{formData.name}</strong>. You can dispatch this directly via your email client using the button below, or reach out on LinkedIn.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan text-dark-950 font-bold text-xs sm:text-sm shadow-glow-cyan"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch Email Client</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.06] text-slate-300 hover:text-white text-xs font-semibold"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Subject / Opportunity Type
                    </label>
                    <select
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                    >
                      <option value="Internship Opportunity">Internship Opportunity (AI/ML / Web Dev)</option>
                      <option value="Entry-Level Role">Entry-Level Role</option>
                      <option value="Student Project / Collaboration">Student Project / Collaboration</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Dharm, we came across your work on JobGuard AI and Deal Intelligence Agent..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      * Required fields
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-dark-950 font-bold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-glow-cyan"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare &amp; Send Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
