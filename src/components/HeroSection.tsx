import React from 'react';
import { useTranslation } from '../TranslationContext';
import RotatingText from './RotatingText';
import BlurText from './BlurText';
import { motion } from 'framer-motion';
import Aurora from './Aurora';
import '../styles/hero.css'
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section id="home" className="hero-section">
      <Aurora
        colorStops={["#38b6ff", "#4A90E2", "#7B68EE", "#141253"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="hero-section-inner">
        <BlurText
          text={t('hero-title-part1')}
          delay={120}
          animateBy="words"
          direction="top"
          className="hero-title"
        />
        <div className="hero-highlight">
          <RotatingText
            texts={[t('hero-title-part2'), t('hero-title-part3')]}
            mainClassName="px-12 py-4 bg-cyan-300 text-black font-extrabold text-[4rem] rounded-3xl shadow-xl overflow-hidden justify-center"
            staggerFrom={"last"}
            initial={{ y: "100%", opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: "-120%", opacity: 0, filter: 'blur(8px)' }}
            staggerDuration={0.02}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 32, stiffness: 420, mass: 1.1 }}
            rotationInterval={2200}
          />
        </div>
        <BlurText
          text={t('hero-subtitle')}
          delay={60}
          animateBy="words"
          direction="top"
          className="hero-description"
        />
        <div className="hero-buttons">
          <motion.button
            className="cta-button bg-dark-blue my-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.06, boxShadow: "0 4px 32px rgba(90,138,255,0.18)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/register')}
          >
            {t('Register for free')}
          </motion.button>
        </div>
        <div className="trust-badge">
          <span className="trust-badge-icon">✓</span>
          <span>{t('trust-badge')}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 