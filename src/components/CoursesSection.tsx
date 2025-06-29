import React from 'react';
import { useTranslation } from '../TranslationContext';
import '../styles/courses.css'
// import './styles.css'

const CoursesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="courses" className="courses" data-animate="fade-in-up">
      <div className="courses-container">
        <div data-animate="center">
          <h2>{t('courses-title')}</h2>
        </div>
        <div className="courses-grid">
          {/* Basic Course */}
          <div className="course-card basic" data-animate="card" data-animate-delay="100">
            <h3>{t('course-english')}</h3>
            <div className="price">$299</div>
            <ul>
              <li>{t('english-feature1')}</li>
              <li>{t('english-feature2')}</li>
              <li>{t('english-feature3')}</li>
              <li>{t('english-feature4')}</li>
            </ul>
            <button className="course-btn">{t('choose-plan')}</button>
          </div>
          {/* Premium Course */}
          <div className="course-card premium" data-animate="card" data-animate-delay="200">
            <div className="badge black">{t('popular')}</div>
            <h3>{t('course-full')}</h3>
            <div className="price">$499</div>
            <ul>
              <li>{t('full-feature1')}</li>
              <li>{t('full-feature2')}</li>
              <li>{t('full-feature3')}</li>
              <li>{t('full-feature4')}</li>
              <li>{t('full-feature5')}</li>
            </ul>
            <button className="course-btn">{t('choose-plan')}</button>
          </div>
          {/* Ultimate Course */}
          <div className="course-card ultimate" data-animate="card" data-animate-delay="300">
            <div className="badge gold">{t('best-value')}</div>
            <h3>{t('course-ultimate')}</h3>
            <div className="price">$799</div>
            <ul>
              <li>{t('ultimate-feature1')}</li>
              <li>{t('ultimate-feature2')}</li>
              <li>{t('ultimate-feature3')}</li>
              <li>{t('ultimate-feature4')}</li>
              <li>{t('ultimate-feature5')}</li>
              <li>{t('ultimate-feature6')}</li>
            </ul>
            <button className="course-btn">{t('choose-plan')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection; 