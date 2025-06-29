import React, { useState } from 'react';
import { useTranslation } from '../TranslationContext';
import '../styles/contact.css'

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      alert(t('contact-success') || 'Thank you for your interest! We will contact you soon.');
      setName('');
      setPhone('');
    } else {
      alert(t('contact-error') || 'Please fill in all fields.');
    }
  };

  return (
    <section id="contact" className="contact" data-animate="fade-in-up">
      <div className="contact-container">
        <div className="contact-left" data-animate="left">
          <h2>{t('contact-title')}</h2>
          <div className="contact-info">
            <div className="contact-item">
              <strong>{t('email')}</strong>
              <span>info@maqsadly.com</span>
            </div>
            <div className="contact-item">
              <strong>{t('phone')}</strong>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
        <div className="contact-right" data-animate="right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t('name-placeholder')}
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder={t('phone-placeholder')}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
            <button type="submit">{t('send-message')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 