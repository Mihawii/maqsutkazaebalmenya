import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/assets/img/dark-logo.png" alt="Maqsadly Logo" className="footer-logo" />
          <span className="footer-tagline">Empowering students to achieve their dreams.</span>
        </div>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#teachers">Teachers</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-socials">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03C7.69 5.36 4.07 3.6 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.95 2.04c8.36 0 12.94-6.93 12.94-12.94 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.1 9.1 0 0 1-2.6.71z"/></svg>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 