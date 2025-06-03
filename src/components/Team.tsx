import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play, Zap, Building, Globe, Briefcase, Heart, ShieldCheck, Lightbulb, BarChart, PieChart, LineChart, TrendingUp, Users, Database, Server, Cloud, Lock } from 'lucide-react';

const ClientSlider = () => {
  // Define different categories of partners/clients with icons
  const partnerRows = [
    {
      speed: 30, // seconds for one complete cycle
      direction: 'left',
      items: [
        { name: 'RELEX', icon: <Building size={32} />, category: 'Retail Technology' },
        { name: 'Tata Sky', icon: <Globe size={32} />, category: 'Entertainment' },
        { name: 'Cult Fit', icon: <Heart size={32} />, category: 'Fitness & Wellness' },
        { name: 'Global Tech', icon: <Server size={32} />, category: 'Technology' },
        { name: 'Spark Financial', icon: <BarChart size={32} />, category: 'Finance' },
        { name: 'EcoSystem', icon: <Lightbulb size={32} />, category: 'Sustainability' },
        { name: 'Health Plus', icon: <ShieldCheck size={32} />, category: 'Healthcare' },
      ]
    },
    {
      speed: 45, // slower
      direction: 'right',
      items: [
        { name: 'Urban Mobility', icon: <TrendingUp size={32} />, category: 'Transportation' },
        { name: 'Cloud Services', icon: <Cloud size={32} />, category: 'Cloud Computing' },
        { name: 'DataSense', icon: <Database size={32} />, category: 'Data Analytics' },
        { name: 'SecureNet', icon: <Lock size={32} />, category: 'Cybersecurity' },
        { name: 'TeamForce', icon: <Users size={32} />, category: 'HR Solutions' },
        { name: 'GrowthMetrics', icon: <LineChart size={32} />, category: 'Business Intelligence' },
      ]
    },
    {
      speed: 25, // faster
      direction: 'left',
      items: [
        { name: 'InnovateTech', icon: <Zap size={32} />, category: 'Innovation' },
        { name: 'MarketInsight', icon: <PieChart size={32} />, category: 'Market Research' },
        { name: 'ConsultPro', icon: <Briefcase size={32} />, category: 'Professional Services' },
        { name: 'DigitalEdge', icon: <Globe size={32} />, category: 'Digital Transformation' },
        { name: 'SupplyChain+', icon: <TrendingUp size={32} />, category: 'Supply Chain' },
        { name: 'RetailNext', icon: <Building size={32} />, category: 'Retail Solutions' },
        { name: 'HealthTech', icon: <Heart size={32} />, category: 'Healthcare Technology' },
      ]
    },
    {
      speed: 35, // medium
      direction: 'right',
      items: [
        { name: 'EduTech', icon: <Lightbulb size={32} />, category: 'Education' },
        { name: 'FinanceAI', icon: <BarChart size={32} />, category: 'Financial Technology' },
        { name: 'SecurePay', icon: <Lock size={32} />, category: 'Payment Security' },
        { name: 'CloudNative', icon: <Cloud size={32} />, category: 'Cloud Solutions' },
        { name: 'DataDriven', icon: <Database size={32} />, category: 'Data Management' },
        { name: 'TeamSync', icon: <Users size={32} />, category: 'Collaboration Tools' },
      ]
    }
  ];

  const [isPaused, setIsPaused] = useState(false);
  const rowRefs = useRef([]);

  // Initialize refs for each row
  useEffect(() => {
    rowRefs.current = rowRefs.current.slice(0, partnerRows.length);
  }, [partnerRows.length]);

  // Function to toggle pause/play for all rows
  const togglePause = () => {
    setIsPaused(!isPaused);
    
    rowRefs.current.forEach(ref => {
      if (ref) {
        ref.style.animationPlayState = isPaused ? 'running' : 'paused';
      }
    });
  };

  // Function to speed up all rows
  const speedUp = () => {
    rowRefs.current.forEach((ref, index) => {
      if (ref) {
        const currentSpeed = partnerRows[index].speed;
        ref.style.animationDuration = `${currentSpeed / 2}s`;
      }
    });
  };

  // Function to reset speed of all rows
  const resetSpeed = () => {
    rowRefs.current.forEach((ref, index) => {
      if (ref) {
        const defaultSpeed = partnerRows[index].speed;
        ref.style.animationDuration = `${defaultSpeed}s`;
      }
    });
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
          <div className="flex justify-center items-center mb-12">
            <button 
              onClick={togglePause}
              className="px-5 py-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-[#f16539] flex items-center gap-2 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"
            >
              {isPaused ? <Play size={16} className="text-[#f16539]" /> : <Pause size={16} className="text-[#f16539]" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
          </div>
          
          {/* Multiple rows of scrolling items */}
          <div className="space-y-10">
            {partnerRows.map((row, rowIndex) => (
              <div key={rowIndex} className="overflow-hidden">
                <div 
                  ref={el => rowRefs.current[rowIndex] = el}
                  className={`flex ${row.direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee'} whitespace-nowrap`}
                  style={{
                    animationDuration: `${row.speed}s`,
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationPlayState: isPaused ? 'paused' : 'running'
                  }}
                >
                  {/* Double the items to create the continuous effect */}
                  {[...row.items, ...row.items].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 px-3 w-[250px] md:w-[280px]"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 h-40 shadow-sm hover:shadow-md transition-all duration-500 ease-in-out transform hover:-translate-y-[3px] group overflow-hidden relative border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                        <div className="h-full flex flex-col items-center justify-center">
                          <div className="text-[#f16539] mb-3 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:text-[#e84c2b]">
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center transition-all duration-300">{item.name}</h3>
                          <p className="text-sm text-[#f16539] mt-1 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">{item.category}</p>
                        </div>
                        
                        {/* Refined overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f16539]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-end justify-center">
                          <div className="text-white text-center p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-in-out w-full backdrop-blur-sm bg-[#f16539]/20">
                            <p className="font-medium text-white text-sm">Success Story</p>
                            <p className="text-white text-xs mt-1 font-light">Transforming business operations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add these to your global CSS or as a styled component
// This creates the continuous scrolling animations in both directions
const styles = `
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse 30s linear infinite;
}
`;

export default ClientSlider;
