import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from '../TranslationContext';
import '../styles/navbar.css' 
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { t, lang, switchLanguage } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownMobileOpen, setDropdownMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Dynamic Island scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => {
      document.body.style.overflow = !open ? 'hidden' : '';
      return !open;
    });
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Language dropdowns
  const toggleLanguageDropdown = () => setDropdownOpen((open) => !open);
  const toggleLanguageDropdownMobile = () => setDropdownMobileOpen((open) => !open);
  const handleSwitchLanguage = (l: string) => {
    switchLanguage(l as any);
    setDropdownOpen(false);
    setDropdownMobileOpen(false);
  };

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    const href = e.currentTarget.getAttribute('href') || e.currentTarget.getAttribute('data-href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileMenu();
      }
    }
  };

  // Home click handler
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMobileMenu && closeMobileMenu();
  };

  return (
    <nav className={`dynamic-island-navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <img className="logo-img" src="/assets/img/light-logo.png" alt="Logo" />
            <span>aqsadly</span>
          </div>
        </div>
        <div className="nav-center">
          <ul className="nav-menu">
            <li><a href="#home" onClick={handleHomeClick}>{t('home')}</a></li>
            <li><a href="#mission" onClick={handleNavClick}>{t('about')}</a></li>
            <li><a href="#teachers" onClick={handleNavClick}>{t('teachers')}</a></li>
            <li><a href="#courses" onClick={handleNavClick}>{t('courses')}</a></li>
            <li><a href="#contact" onClick={handleNavClick}>{t('contact')}</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="faq-badge" data-href="#faq" onClick={handleNavClick} tabIndex={0} role="button">{t('faq')}</div>
          <div className={`language-dropdown${dropdownOpen ? ' active' : ''}`}> 
            <button className="lang-dropdown-btn" onClick={toggleLanguageDropdown}>
              <span id="current-lang">{lang === 'en' ? '🇺🇸 EN' : lang === 'ru' ? '🇷🇺 RU' : '🇺🇿 UZ'}</span>
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="lang-dropdown-menu" id="langDropdown" style={{ display: dropdownOpen ? 'block' : 'none' }}>
              <button className="lang-option" onClick={() => handleSwitchLanguage('en')}>🇺🇸 English</button>
              <button className="lang-option" onClick={() => handleSwitchLanguage('ru')}>🇷🇺 Русский</button>
              <button className="lang-option" onClick={() => handleSwitchLanguage('uz')}>🇺🇿 O'zbek</button>
            </div>
          </div>
        </div>
        <div className={`hamburger${mobileMenuOpen ? ' active' : ''}`} onClick={toggleMobileMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>
      {/* Mobile Menu */}
      <div 
        className={`mobile-menu${mobileMenuOpen ? ' active' : ''}${scrolled ? ' scrolled' : ''}`}
      >
        <ul className="mobile-nav-menu">
          <li><a href="#home" onClick={handleHomeClick}>{t('home')}</a></li>
          <li><a href="#about" onClick={e => { handleNavClick(e); }}>{t('about')}</a></li>
          <li><a href="#courses" onClick={e => { handleNavClick(e); }}>{t('courses')}</a></li>
          <li><a href="#teachers" onClick={e => { handleNavClick(e); }}>{t('teachers')}</a></li>
          <li><a href="#contact" onClick={e => { handleNavClick(e); }}>{t('contact')}</a></li>
        </ul>
        <div className="mobile-controls">
          <div className="faq-badge" data-href="#faq" onClick={handleNavClick} tabIndex={0} role="button">{t('faq')}</div>
          <div className={`language-dropdown${dropdownMobileOpen ? ' active' : ''}`}> 
            <button className="lang-dropdown-btn" onClick={toggleLanguageDropdownMobile}>
              <span id="current-lang-mobile">{lang === 'en' ? '🇺🇸 EN' : lang === 'ru' ? '🇷🇺 RU' : '🇺🇿 UZ'}</span>
              <span className="dropdown-arrow">▼</span>
            </button>
            <div className="lang-dropdown-menu" id="langDropdownMobile" style={{ display: dropdownMobileOpen ? 'block' : 'none' }}>
              <button className="lang-option" onClick={() => handleSwitchLanguage('en')}>🇺🇸 English</button>
              <button className="lang-option" onClick={() => handleSwitchLanguage('ru')}>🇷🇺 Русский</button>
              <button className="lang-option" onClick={() => handleSwitchLanguage('uz')}>🇺🇿 O'zbek</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 