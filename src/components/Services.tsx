import React, { useState, useEffect } from 'react';
import { Brain, Target, Zap, Shield, Globe, Truck, ShoppingBag, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link?: string;
  image: string;
}

interface ServiceCardProps {
  service: ServiceFeature;
  isActive: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    enter: {
      opacity: 0,
      y: 50,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <div 
      ref={ref}
      className="relative w-full h-[90vh] md:h-[700px] flex items-start justify-center overflow-hidden"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90 z-10"></div>
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-32 lg:pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            className="text-white"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#f16539] to-orange-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <service.icon className="text-white" size={24} />
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              {service.title}
            </h3>
            
            <p className="text-base sm:text-lg text-gray-200 mb-4 md:mb-6 leading-relaxed max-w-lg">
              {service.description}
            </p>
            
            <ul className="space-y-2 md:space-y-3 mb-6">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-200 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-[#f16539] rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {service.link ? (
              <Link 
                to={service.link} 
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#f16539] to-orange-500 text-white text-sm sm:text-base font-medium rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 transform group relative overflow-hidden mb-6"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-[#e05a30] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                <span className="relative flex items-center">
                  Learn More
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
            ) : (
              <button 
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#f16539] to-orange-500 text-white text-sm sm:text-base font-medium rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 transform group relative overflow-hidden mb-6"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-[#e05a30] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                <span className="relative flex items-center">
                  Contact Us
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </button>
            )}
          </motion.div>
          
          <motion.div 
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            className="hidden md:block"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f16539] to-orange-500 rounded-2xl blur opacity-20"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-[#f16539] to-orange-300 mb-6"></div>
              <h4 className="text-2xl font-bold text-white mb-4">Key Benefits</h4>
              <ul className="space-y-4">
                {Array(3).fill(0).map((_, i) => (
                  <li key={i} className="flex items-start cursor-pointer">
                    <div 
                      className="bg-[#f16539]/20 p-2 rounded-lg mr-4 mt-1 transition-all duration-300 hover:bg-[#f16539]/30 hover:scale-105 hover:shadow-md cursor-pointer flex-shrink-0"
                    >
                      <div 
                        className="w-6 h-6 bg-[#f16539] rounded-md flex items-center justify-center transition-all duration-300 hover:bg-[#ff7d53] hover:shadow-lg"
                      >
                        <svg 
                          className="w-4 h-4 text-white transition-all duration-300 hover:scale-125 transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="hover:translate-x-1 transition-transform duration-300">
                      <h5 
                        className="text-lg font-semibold text-white mb-1 transition-colors duration-300 hover:text-[#f16539]"
                      >
                        {i === 0 ? "Expertise-Driven Solutions" : 
                         i === 1 ? "Data-Informed Strategy" : "Measurable Results"}
                      </h5>
                      <p className="text-gray-300 transition-colors duration-300 hover:text-gray-100">
                        {i === 0 ? "Our specialists bring deep industry knowledge to your challenges" : 
                         i === 1 ? "We use advanced analytics to guide decision-making" : "We deliver outcomes that impact your bottom line"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services: ServiceFeature[] = [
    {
      icon: Truck,
      title: 'Supply Chain',
      description: 'Building a responsive and future-ready supply chain. We create agile, efficient, and resilient systems that optimize operations. Our strategic approach ensures seamless movement, reduced risks, and enhanced productivity.',
      features: ['End-to-end planning solutions', 'Logistics optimization', 'Smart procurement strategies'],
      link: '/supply-chain',
      image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      icon: ShoppingBag,
      title: 'Sales & Distribution',
      description: 'Driving efficiency in sales and distribution. We design seamless processes that enhance customer experience and maximize business impact. Our solutions ensure smooth transactions, faster delivery, and increased profitability.',
      features: ['Digital commerce transformation', 'Optimized route to market', 'Advanced sales analytics'],
      link: '/sales-distribution',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      icon: Zap,
      title: 'Strategy & Operations',
      description: 'Executing high-impact strategies with precision. We streamline operations, enhance productivity, and drive sustainable growth. Our focus is on delivering efficient solutions that help businesses stay ahead.',
      features: ['Business process optimization', 'Quality management systems', 'Performance metric development'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      icon: Target,
      title: 'Data & Decision Intelligence',
      description: 'Transforming data into meaningful decisions. We analyze patterns, extract key insights, and provide smart recommendations. Our approach helps businesses make informed choices that lead to measurable success.',
      features: ['Advanced data analytics', 'Business intelligence solutions', 'Predictive modeling'],
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      icon: Brain,
      title: 'Finance',
      description: 'Empowering businesses with data-driven financial insights. We enhance decision-making with precision, ensuring efficiency, compliance, and growth. Our expert strategies help optimize resources and drive long-term success.',
      features: ['Strategic financial planning', 'Risk assessment & management', 'Performance analysis frameworks'],
      image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1920'
    }
  ];

  // Auto-rotate through slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      }, 6000); // Change slide every 6 seconds
      
      return () => clearInterval(interval);
    }
  }, [services.length, isPaused]);

  return (
    <section id="services" className="relative bg-gray-900">
      {/* Main slider with header integrated into the slideshow */}
      <div 
        className="relative overflow-hidden pb-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Expertise header overlay */}
        <div className="absolute top-0 left-0 w-full z-20 pt-6 sm:pt-8 md:pt-10 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
                Our <span className="text-[#f16539]">Expertise</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive consulting services designed to accelerate your growth 
                and transform your business operations.
              </p>
            </motion.div>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <ServiceCard 
            key={currentIndex} 
            service={services[currentIndex]} 
            isActive={true}
          />
        </AnimatePresence>
        
        {/* Dots navigation */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-30">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#f16539] w-6 sm:w-8' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
