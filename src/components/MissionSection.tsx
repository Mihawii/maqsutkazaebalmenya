import React from 'react';
import { useTranslation } from '../TranslationContext';
import '../styles/mission.css'

const MissionSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id='mission' className="mission-section-minimal">
      <div className="mission-container-minimal">
        <div className="mission-icon">
          <svg width="48" height="48" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M2 7l10 5 10-5-10-5-10 5z" />
            <path d="M12 22V12" />
            <path d="M7 12v5a5 5 0 0 0 10 0v-5" />
          </svg>
        </div>
        <h2 className="mission-title">{t('mission-headline')}</h2>
        <div className="mission-underline"></div>
        <p className="mission-statement">{t('mission-subtext')}</p>
      </div>
    </section>
  );
};

export default MissionSection; 