import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback as useCallbackParticles } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

// CountUp component for animating numbers
const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observerRef = useRef(null);
  
  useEffect(() => {
    // Create intersection observer to start animation when element is in view
    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animateCount();
        observerRef.current.disconnect();
      }
    });
    
    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    const step = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - startValue) + startValue));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  };
  
  return <div ref={countRef}>{count}{suffix}</div>;
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const particlesInit = useCallbackParticles(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallbackParticles(async (container) => {
    // container loaded
  }, []);
  
  const slides = [
    {
      title: "Consulting that",
      highlight: "Solves, Not Just Recommends",
      description: "We partner with clients to resolve complexity and evolve capability—through expertise, technology, and execution.",
      image: "https://thoucentric.com/wp-content/uploads/2025/05/home-who-we-are-2048x1366.jpg",
    },
    {
      title: "Thoucentric Named",
      highlight: "Great Place to Work",
      description: "We're proud to be recognized for the 5th consecutive year for fostering a workplace where talent thrives and employees excel.",
      image: "https://thoucentric.com/wp-content/uploads/2025/05/Great-Place-To-Work-24.png",
    },
    {
      title: "The New Era of",
      highlight: "Promotions",
      description: "Precision, Performance, Personalization. Read our article to explore how data-driven strategies are redefining promotions in FMCG.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
      title: "Quick Commerce",
      highlight: "Moves Fast",
      description: "Your Strategy Should Move Faster. Read our article to learn how real-time insights can keep your brand stocked, visible, and ahead in Quick Commerce.",
      image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
      title: "Data-Driven",
      highlight: "Decision Making",
      description: "Transform your business with actionable insights. Our analytics solutions help you identify opportunities and optimize operations for maximum impact.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
      title: "Digital",
      highlight: "Transformation",
      description: "Navigate the future with confidence. We help organizations embrace technology to create resilient, agile, and customer-centric business models.",
      image: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1920",
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden pt-16">
      {/* Particles background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              color: {
                value: ["#f16539", "#ff8c66", "#ffaa80", "#ffc299", "#ff7f50"],
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.8,
                  opacity_min: 0.2,
                  sync: false
                }
              },
              size: {
                value: 6,
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                  size_min: 1,
                  sync: false
                }
              },
              move: {
                enable: true,
                speed: 1.8,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: true,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#f16539",
                opacity: 0.1,
                width: 1
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                bubble: {
                  distance: 150,
                  size: 8,
                  duration: 2,
                  opacity: 0.6,
                  speed: 3
                },
                push: {
                  particles_nb: 4
                },
                connect: {
                  distance: 150,
                  radius: 100,
                  links: {
                    opacity: 0.3
                  }
                }
              }
            },
            detectRetina: true,
            fullScreen: { enable: false },
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              zIndex: "0"
            }
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "0"
          }}
        />
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Hero content */}
        <div className="flex items-center py-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            {/* Left side - Text content */}
            <div className="order-2 lg:order-1 z-10">
              <div className="relative overflow-hidden h-[200px] md:h-[240px]">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
                      {slide.title}
                      <span className="block bg-gradient-to-r from-[#f16539] via-orange-500 to-amber-500 bg-clip-text text-transparent">
                        {slide.highlight}
                      </span>
                    </h1>
                    
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button className="bg-gradient-to-r from-[#f16539] to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-base hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                  Start Your Journey
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={18} />
                </button>
                
                <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-semibold text-base hover:border-[#f16539] hover:text-[#f16539] dark:hover:border-[#f16539] dark:hover:text-[#f16539] transition-all duration-300 flex items-center gap-2 group">
                  <Play size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  Watch Our Story
                </button>
              </div>
            </div>
            
            {/* Right side - Image slider */}
            <div className="order-1 lg:order-2 relative z-10">
              <div className="relative h-[240px] md:h-[320px] lg:h-[400px] overflow-hidden rounded-xl shadow-xl">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-110'
                    }`}
                  >
                    <div 
                      className="h-full w-full bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${slide.image})`,
                        ...(index === 1 ? { 
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: 'rgba(255,255,255,0.8)'
                        } : {})
                      }}
                    ></div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#f16539]/20 via-transparent to-transparent"></div>
                  </div>
                ))}
                
                {/* Slide navigation */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                  <button 
                    onClick={prevSlide}
                    className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 text-gray-800 dark:text-white transition-all duration-300"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <div className="flex gap-1.5">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-[#f16539] w-6' 
                            : 'bg-white/70 dark:bg-gray-400 hover:bg-[#f16539]/70'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextSlide}
                    className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 text-gray-800 dark:text-white transition-all duration-300"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats bar */}
        <div className="py-4 mb-4">
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-xl p-3 md:p-4 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f16539] dark:text-[#f16539]">
                  <CountUp end={9} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300">Prestigious Awards Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f16539] dark:text-[#f16539]">
                  <CountUp end={100} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300">Geographies Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f16539] dark:text-[#f16539]">
                  <CountUp end={200} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300">Large-Scale Programs Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f16539] dark:text-[#f16539]">
                  <CountUp end={40} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300">Customers Supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
