import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-[#202f5f] hover:bg-[#84849b] text-[#f9f8ed] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
}