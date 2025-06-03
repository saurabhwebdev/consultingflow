import React, { useState, useEffect } from 'react';
import { Brain, Target, Zap, Shield, Globe, Truck, ShoppingBag, LucideIcon, ChevronLeft, ChevronRight } from 'lucide-react';
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
      className="relative w-full h-[80vh] md:h-[600px] flex items-center justify-center overflow-hidden"
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            className="text-white"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#f16539] to-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <service.icon className="text-white" size={32} />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {service.title}
            </h3>
            
            <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-lg">
              {service.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-200">
                  <div className="w-2 h-2 bg-[#f16539] rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>

            {service.link ? (
              <Link 
                to={service.link} 
                className="inline-flex items-center px-6 py-3 bg-[#f16539] hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            ) : (
              <button 
                className="inline-flex items-center px-6 py-3 bg-[#f16539] hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
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
                  <li key={i} className="flex items-start">
                    <div className="bg-[#f16539]/20 p-2 rounded-lg mr-4 mt-1">
                      <div className="w-6 h-6 bg-[#f16539] rounded-md flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-1">
                        {i === 0 ? "Expertise-Driven Solutions" : 
                         i === 1 ? "Data-Informed Strategy" : "Measurable Results"}
                      </h5>
                      <p className="text-gray-300">
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

  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="relative bg-gray-900">
      <motion.div 
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-20 pb-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive consulting services designed to accelerate your growth 
            and transform your business operations.
          </p>
        </div>
      </motion.div>
      
      {/* Main slider */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <ServiceCard 
            key={currentIndex} 
            service={services[currentIndex]} 
            isActive={true}
          />
        </AnimatePresence>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-30 backdrop-blur-sm transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-30 backdrop-blur-sm transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Dots navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#f16539] w-8' : 'bg-white/50 hover:bg-white'
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
