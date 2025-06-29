import React from 'react';
import '../styles/about.css'

const gradients = (
  <defs>
    <linearGradient id="about-gold-gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#b88746" />
      <stop offset="100%" stopColor="#fdf5a6" />
    </linearGradient>
  </defs>
);

type IconType = 'check' | 'circles' | 'globe' | 'book' | 'hat';

const AboutFeatureIcon: React.FC<{ type: IconType }> = ({ type }) => {
  // Use prefers-color-scheme or document.documentElement to detect dark mode
  const isDark = typeof window !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark';
  const colorClass = isDark ? 'about-icon-dark' : 'about-icon-light';
  switch (type) {
    case 'check':
      return (
        <span className={`about-icon about-icon-animate ${colorClass}`}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            {gradients}
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        </span>
      );
    case 'circles':
      return (
        <span className={`about-icon about-icon-animate ${colorClass}`}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            {gradients}
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </span>
      );
    case 'globe':
      return (
        <span className={`about-icon about-icon-animate ${colorClass}`}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            {gradients}
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
          </svg>
        </span>
      );
    case 'book':
      return (
        <span className={`about-icon about-icon-animate ${colorClass}`}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            {gradients}
            <path d="M2 7v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
            <path d="M16 3v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3" />
            <line x1="8" y1="21" x2="8" y2="3" />
            <line x1="16" y1="21" x2="16" y2="3" />
          </svg>
        </span>
      );
    case 'hat':
      return (
        <span className={`about-icon about-icon-animate ${colorClass}`}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            {gradients}
            <path d="M2 7l10 5 10-5-10-5-10 5z" />
            <path d="M12 22V12" />
            <path d="M7 12v5a5 5 0 0 0 10 0v-5" />
          </svg>
        </span>
      );
    default:
      return null;
  }
};

export default AboutFeatureIcon;
