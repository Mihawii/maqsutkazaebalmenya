import React, { useState } from 'react';
import { useTranslation } from '../TranslationContext';
import '../styles/faq.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      id: 2,
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      id: 3,
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      id: 4,
      question: t('faq.question4'),
      answer: t('faq.answer4')
    },
    {
      id: 5,
      question: t('faq.question5'),
      answer: t('faq.answer5')
    },
    {
      id: 6,
      question: t('faq.question6'),
      answer: t('faq.answer6')
    }
  ];

  const toggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const leftColumnFAQs = faqData.slice(0, 3);
  const rightColumnFAQs = faqData.slice(3, 6);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2>{t('faq.title')}</h2>
          <p>{t('faq.subtitle')}</p>
        </div>
        
        <div className="faq-grid">
          {/* Left Column */}
          <div className="faq-column">
            {leftColumnFAQs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${activeFAQ === faq.id ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={activeFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <h3>{faq.question}</h3>
                  <div className="faq-toggle" aria-hidden="true"></div>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="faq-column">
            {rightColumnFAQs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${activeFAQ === faq.id ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={activeFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <h3>{faq.question}</h3>
                  <div className="faq-toggle" aria-hidden="true"></div>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 