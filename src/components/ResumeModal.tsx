import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText,
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#0F161E]/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[92vh] bg-[#F5EFEB] border-2 border-[#2F4156] shadow-edge-navy rounded-xl flex flex-col overflow-hidden text-[#2F4156]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 bg-white border-b border-[#2F4156]/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#2F4156] text-white flex items-center justify-center border border-[#2F4156]">
              <FileText className="w-4 h-4 text-[#C8D9E6]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#2F4156] tracking-tight">
                Curriculum Vitae &bull; {PERSONAL_INFO.name}
              </h3>
              <p className="text-[11px] text-[#567C8D] font-mono">
                Official Curriculum Vitae (PDF)
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="/resume/Dharm_Chaniyara_CV.pdf"
              download="Dharm_Chaniyara_CV.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#2F4156] text-white text-xs font-semibold hover:bg-[#233243] border border-[#2F4156] shadow-edge-xs hover:shadow-edge active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-[#C8D9E6]" />
                  <span>Download PDF</span>
                </>
              )}
            </a>

            <a
              href="/resume/Dharm_Chaniyara_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-md text-[#2F4156] hover:bg-[#C8D9E6]/50 border border-[#2F4156]/20 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#2F4156] hover:bg-red-50 hover:text-red-700 hover:border-red-300 border border-transparent transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Container */}
        <div className="flex-1 w-full bg-[#323639] relative flex flex-col">
          <iframe 
            src="/resume/Dharm_Chaniyara_CV.pdf#toolbar=1&navpanes=0&scrollbar=1" 
            title="Dharm Chaniyara Curriculum Vitae"
            className="w-full h-full border-none"
          />
        </div>

      </div>
    </div>
  );
};
