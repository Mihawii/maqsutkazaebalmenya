import { useEffect } from 'react';

// Helper: Animate text content line by line (optional, for headings/text)
function animateTextContent(element: HTMLElement) {
  const textElements = element.querySelectorAll<HTMLElement>(
    'p, h1, h2, h3, h4, h5, h6, span:not(.animated-line), li'
  );
  textElements.forEach((textElement, index) => {
    if (!textElement.hasAttribute('data-animate')) {
      setTimeout(() => {
        textElement.style.opacity = '1';
        textElement.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}

export function useAnimateOnScroll() {
  useEffect(() => {
    // Hide all animated elements initially
    const animatedElements = document.querySelectorAll<HTMLElement>('[data-animate]');
    animatedElements.forEach((element) => {
      if (!element.classList.contains('visible')) {
        element.style.opacity = '0';
        element.style.visibility = 'hidden';
      }
    });

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            const element = entry.target as HTMLElement;
            const animationType = element.getAttribute('data-animate');
            const delay = Number(element.getAttribute('data-animate-delay') || '0');
            setTimeout(() => {
              element.classList.add('visible');
              element.style.opacity = '1';
              element.style.visibility = 'visible';
              if (animationType === 'card' || animationType === 'text') {
                animateTextContent(element);
              }
            }, delay);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px',
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
} 