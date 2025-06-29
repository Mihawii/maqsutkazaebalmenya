import React from 'react';
import Carousel from './Carousel';
import { useTranslation } from '../TranslationContext';
import '../styles/Carousel.css'

const WhatWillLearnSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="what-will-learn-section" data-animate="fade-in-up">
      <div className="what-will-learn-container">
        <div data-animate="center" className="what-will-learn-header">
          <p className="section-subheader">{t('learn-subtitle')}</p>
          <h2>{t('learn-title')}</h2>
        </div>
        <Carousel baseWidth={800} autoplay autoplayDelay={3000} pauseOnHover loop />
      </div>
    </section>
  );
};

export default WhatWillLearnSection;