import { useEffect, useRef } from 'react';

/**
 * Observes `.scroll-reveal` elements inside the given section ref
 * and adds the `visible` class when they enter the viewport.
 */
export function useScrollReveal(sectionId) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(`#${sectionId} .scroll-reveal`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionId]);
}
