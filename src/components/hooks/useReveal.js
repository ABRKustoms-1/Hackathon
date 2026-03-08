import { useEffect } from "react";

/**
 * useReveal Hook
 * Scans the page for elements with the '.reveal' class and 
 * toggles '.visible' when they enter the viewport.
 */
export default function useReveal() {
  useEffect(() => {
    // 1. Select all elements that should animate on scroll
    const revealElements = document.querySelectorAll('.reveal');

    // 2. Configure the Observer
    // threshold: 0.15 means the animation triggers when 15% of the element is visible
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element hits the bottom
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the visible class defined in animations.css
          entry.target.classList.add('visible');
          
          // Once it has animated in, stop watching it (performance boost)
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // 3. Start observing each element
    revealElements.forEach((el) => observer.observe(el));

    // 4. Cleanup on unmount
    return () => observer.disconnect();
  }, []);
}

