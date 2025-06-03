import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Calculate scroll progress and show button when page is scrolled down
  const toggleVisibility = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.round((scrollTop / scrollHeight) * 100), 100);
    
    setScrollPercent(progress);
    setIsVisible(scrollTop > 300);
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Initial check
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center hover-float ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#f16539] focus:ring-opacity-50`}
      style={{ width: '50px', height: '50px' }}
      aria-label="Back to top"
    >
      {/* Main circle with gradient border */}
      <div 
        className="absolute inset-0 rounded-full transition-all duration-300" 
        style={{
          background: 'conic-gradient(from 0deg, #f16539 0%, #f16539 ' + scrollPercent + '%, #e4e4e7 ' + scrollPercent + '%, #e4e4e7 100%)',
          boxShadow: '0 4px 12px rgba(241, 101, 57, 0.2)'
        }}
      />

      {/* Inner circle */}
      <div 
        className="absolute inset-1 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center transition-transform duration-300"
        style={{
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05)'
        }}
      >
        <ChevronUp 
          size={22} 
          className="text-[#f16539] transition-transform duration-300" 
        />
      </div>

      {/* Progress indicator - SVG circle */}
      <div 
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        style={{ pointerEvents: 'none' }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="46" 
            fill="none" 
            stroke="#e4e4e7" 
            strokeWidth="6" 
            className="dark:opacity-20"
          />
          
          {/* Progress circle with animation */}
          <circle 
            cx="50" 
            cy="50" 
            r="46" 
            fill="none" 
            stroke="#f16539" 
            strokeWidth="6" 
            strokeLinecap="round"
            strokeDasharray={`${scrollPercent * 2.89}, 289`}
            strokeDashoffset="0" 
            className="origin-center -rotate-90 animate-circle-progress" 
          />
        </svg>
      </div>
    </button>
  );
};

export default BackToTop; 