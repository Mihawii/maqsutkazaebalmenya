import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeachersSection from './components/TeachersSection';
import MissionSection from './components/MissionSection';
import WhyDifferentSection from './components/WhyDifferentSection';
import WhatWillLearnSection from './components/WhatWillLearnSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection'
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Registration from './components/Registration';
import { TranslationProvider } from './TranslationContext';
import { useAnimateOnScroll } from './useAnimateOnScroll';
import BrochureModal from './components/BrochureModal';

function MainPage() {
  useAnimateOnScroll();
  return (
    <>
      <BrochureModal />
      <Navbar />
      <HeroSection />
      <MissionSection />
      <WhyDifferentSection />
      <TeachersSection />
      <WhatWillLearnSection />
      <AboutSection />
      <CoursesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function RegistrationPage() {
  return (
    <>
      <Navbar />
      <Registration />
      <Footer />
    </>
  );
}

function App() {
  return (
    <TranslationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </TranslationProvider>
  );
}

export default App;
