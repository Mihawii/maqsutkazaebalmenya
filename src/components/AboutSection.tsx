import React from 'react';
import { useTranslation } from '../TranslationContext';
import AboutFeatureIcon from './AboutFeatureIcon';
import { animateOnScroll } from '../animations';
import '../styles/about.css'

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  React.useEffect(() => { animateOnScroll(); }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header" data-animate="center">
          <h2>{t('about-title')}</h2>
          <p>{t('about-subtitle')}</p>
        </div>
        <div className="about-content">
          <div className="about-text" data-animate="left">
            {/* <p>{t('about-description')}</p>
            <h3>{t('who-for-title')}</h3> */}
            <div className="about-features">
              <div className="about-feature about-feature-card" data-animate="left">
                <AboutFeatureIcon type='check' />
                <span><b>{t('for-item1')}</b></span>
              </div>
              <div className="about-feature about-feature-card" data-animate="left">
                <AboutFeatureIcon type='circles' />
                <span><b>{t('for-item2')}</b></span>
              </div>
              <div className="about-feature about-feature-card" data-animate="left">
                <AboutFeatureIcon type='globe' />
                <span><b>{t('for-item3')}</b></span>
              </div>
              <div className="about-feature about-feature-card" data-animate="left">
                <AboutFeatureIcon type='book' />
                <span><b>{t('for-item4')}</b></span>
              </div>
            </div>
          </div>
          <div className="about-form" data-animate="right">
            <h3>{t('get-started')}</h3>
            <form>
              <input type="text" placeholder={t('name-placeholder')} required />
              <input type="tel" placeholder={t('phone-placeholder')} required />
              <button type="submit">{t('start-journey')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 