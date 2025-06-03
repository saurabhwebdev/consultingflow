import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ClientSlider = () => {
  const sliderRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Double the client logos to create the continuous scrolling effect
  const clientLogos = [
    {
      name: 'RELEX',
      image: 'https://thoucentric.com/wp-content/uploads/2025/06/relex.svg',
      category: 'Retail Technology'
    },
    {
      name: 'Tata Sky',
      image: 'https://thoucentric.com/wp-content/uploads/2025/06/Tata-Sky-Logo.svg',
      category: 'Entertainment'
    },
    {
      name: 'Cult Fit',
      image: 'https://thoucentric.com/wp-content/uploads/2025/06/cult-fit.svg',
      category: 'Fitness & Wellness'
    },
    {
      name: 'Global Tech',
      image: 'https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Technology'
    },
    {
      name: 'Spark Financial',
      image: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Finance'
    },
    {
      name: 'EcoSystem',
      image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Sustainability'
    },
    {
      name: 'Health Plus',
      image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Healthcare'
    },
    {
      name: 'Urban Mobility',
      image: 'https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Transportation'
    }
  ];
  
  // Create a duplicate set of logos for the continuous effect
  const allLogos = [...clientLogos, ...clientLogos];
  
  // CSS animation for continuous scrolling
  const animationDuration = 30; // seconds for one complete cycle

  const speedUp = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationDuration = `${animationDuration / 2}s`;
    }
  };

  const slowDown = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationDuration = `${animationDuration}s`;
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Collaborating for Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore how our collaborations have driven impactful transformations and delivered
            measurable results across industries.
          </p>
        </div>
        
        <div className="relative py-8">
          <div className="flex justify-center items-center gap-2 mb-8">
            <button 
              onMouseEnter={speedUp}
              onMouseLeave={slowDown}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all text-sm font-medium text-[#f16539] flex items-center gap-1"
            >
              <ArrowLeft size={16} />
              Scroll Faster
            </button>
            <button 
              onClick={() => {
                if (sliderRef.current) {
                  sliderRef.current.style.animationPlayState = 
                    sliderRef.current.style.animationPlayState === 'paused' ? 'running' : 'paused';
                }
              }}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all text-sm font-medium text-[#f16539] flex items-center gap-1"
            >
              {isHovering ? 'Resume' : 'Pause'} Scrolling
            </button>
          </div>
          
          {/* Continuous logo slider */}
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex animate-marquee whitespace-nowrap"
              style={{
                animationDuration: `${animationDuration}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {allLogos.map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-4 w-[280px] md:w-[300px]"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-48 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden relative">
                    <div className="h-full flex flex-col items-center justify-center">
                      <div className="relative h-20 w-full flex items-center justify-center mb-4">
                        <img 
                          src={client.image} 
                          alt={client.name} 
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">{client.name}</h3>
                      <p className="text-sm text-[#f16539] mt-1 text-center">{client.category}</p>
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f16539]/80 to-[#f16539]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <p className="font-bold">Success Story</p>
                        <p className="text-sm">Transforming business operations with our expert consulting solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add this to your global CSS or as a styled component
// This creates the continuous scrolling animation
const styles = `
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
`;

export default ClientSlider;
