import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Authentic Google Mail colored "M" vector icon.
 */
export const GmailColoredIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path d="M2.5 6.8V17.5C2.5 18.33 3.17 19 4 19H6.5V10.2L2.5 6.8Z" fill="#4285F4" />
    <path d="M17.5 19H20C20.83 19 21.5 18.33 21.5 17.5V6.8L17.5 10.2V19Z" fill="#34A853" />
    <path d="M17.5 10.2L21.5 6.8C21.16 5.73 19.96 5 18.7 5H17.5V10.2Z" fill="#FBBC04" />
    <path d="M6.5 10.2V5H5.3C4.04 5 2.84 5.73 2.5 6.8L6.5 10.2Z" fill="#C5221F" />
    <path d="M6.5 5H17.5V10.2L12 14.1L6.5 10.2V5Z" fill="#EA4335" />
  </svg>
);

/**
 * Authentic LinkedIn brand blue (#0A66C2) vector icon.
 */
export const LinkedinColoredIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="4.5" fill="#0A66C2" />
    <path
      d="M7.15 9.15H4.65V17.5H7.15V9.15ZM5.9 5.62C5.1 5.62 4.45 6.27 4.45 7.07C4.45 7.87 5.1 8.52 5.9 8.52C6.7 8.52 7.35 7.87 7.35 7.07C7.35 6.27 6.7 5.62 5.9 5.62ZM19.35 12.82C19.35 10.42 18.07 9.32 16.35 9.32C14.98 9.32 14.37 10.08 14.02 10.62V9.15H11.52C11.55 9.85 11.52 17.5 11.52 17.5H14.02V12.82C14.02 11.7 14.23 10.62 15.62 10.62C16.98 10.62 17.05 11.9 17.05 12.9V17.5H19.55L19.35 12.82Z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * Authentic GitHub colored brand icon featuring GitHub's signature violet gradient (#8250DF -> #58A6FF)
 * and sharp Octocat silhouette.
 */
export const GithubColoredIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="github-brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8250DF" />
        <stop offset="60%" stopColor="#6E40C9" />
        <stop offset="100%" stopColor="#4078C0" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="4.5" fill="url(#github-brand-gradient)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4.2C7.69 4.2 4.2 7.69 4.2 12C4.2 15.45 6.44 18.37 9.54 19.4C9.93 19.47 10.07 19.23 10.07 19.03C10.07 18.84 10.06 18.23 10.06 17.57C8.1 17.93 7.57 17.07 7.42 16.63C7.33 16.4 6.96 15.72 6.63 15.54C6.36 15.39 5.97 15.03 6.62 15.02C7.22 15.01 7.66 15.58 7.8 15.81C8.49 16.98 9.59 16.65 10.03 16.45C10.1 15.95 10.3 15.62 10.52 15.42C8.83 15.23 7.04 14.58 7.04 11.65C7.04 10.82 7.34 10.14 7.83 9.6C7.75 9.41 7.49 8.63 7.91 7.58C7.91 7.58 8.55 7.38 10.02 8.37C10.63 8.2 11.29 8.11 11.94 8.11C12.59 8.11 13.25 8.2 13.86 8.37C15.33 7.37 15.97 7.58 15.97 7.58C16.39 8.63 16.13 9.41 16.05 9.6C16.54 10.14 16.84 10.81 16.84 11.65C16.84 14.59 15.04 15.23 13.35 15.42C13.63 15.66 13.88 16.13 13.88 16.86C13.88 17.91 13.87 18.76 13.87 19.03C13.87 19.23 14.01 19.48 14.41 19.4C17.52 18.37 19.76 15.44 19.76 12C19.76 7.69 16.27 4.2 12 4.2Z"
      fill="#FFFFFF"
    />
  </svg>
);
