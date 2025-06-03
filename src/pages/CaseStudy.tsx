import React, { useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShoppingBag, Zap, Target, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

interface CaseStudyCardProps {
  title: string;
  service: string;
  description: string;
  image: string;
  iconComponent: React.ElementType;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, service, description, image, iconComponent: Icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col p-6 md:p-8">
        <div className="mb-auto">
          <div className="w-12 h-12 bg-[#f16539]/90 rounded-xl flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f16539]">
            <Icon className="text-white" size={24} />
          </div>
          <div className="inline-block px-3 py-1 text-xs font-medium text-white bg-gray-800/60 rounded-full mb-3">
            {service}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#f16539] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base line-clamp-3 mb-4">
            {description}
          </p>
        </div>
        <div className="mt-auto pt-4">
          <button className="flex items-center text-[#f16539] font-medium group-hover:text-white transition-colors duration-300">
            Read Case Study
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudyPage: React.FC = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    // container loaded
  }, []);

  const caseStudies = [
    // Supply Chain case studies
    {
      title: "Global Logistics Transformation for Retail Giant",
      service: "Supply Chain",
      description: "Optimized end-to-end supply chain operations, reducing delivery times by 37% and cutting operational costs by 22% across 15 countries.",
      image: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Truck,
      category: "Supply Chain"
    },
    {
      title: "Inventory Management System Overhaul",
      service: "Supply Chain",
      description: "Implemented advanced forecasting models that improved inventory accuracy by 42% and reduced excess stock holdings by 18%.",
      image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Truck,
      category: "Supply Chain"
    },
    // Sales & Distribution case studies
    {
      title: "E-commerce Platform Expansion Strategy",
      service: "Sales & Distribution",
      description: "Developed and executed a comprehensive digital commerce strategy that increased online sales by 156% and customer retention by 28%.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: ShoppingBag,
      category: "Sales & Distribution"
    },
    {
      title: "Retail Distribution Network Optimization",
      service: "Sales & Distribution",
      description: "Redesigned distribution networks for a national retail chain, resulting in 31% faster delivery times and 19% reduction in logistics costs.",
      image: "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: ShoppingBag,
      category: "Sales & Distribution"
    },
    // Strategy & Operations case studies
    {
      title: "Manufacturing Excellence Program",
      service: "Strategy & Operations",
      description: "Implemented lean manufacturing principles that improved production efficiency by 28% and reduced waste by 34% across 5 manufacturing facilities.",
      image: "https://images.pexels.com/photos/5772441/pexels-photo-5772441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Zap,
      category: "Strategy & Operations"
    },
    {
      title: "Business Process Transformation",
      service: "Strategy & Operations",
      description: "Redesigned core business processes, implementing automation that reduced processing time by 68% and improved customer satisfaction scores by 47%.",
      image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Zap,
      category: "Strategy & Operations"
    },
    // Data & Decision Intelligence case studies
    {
      title: "Predictive Analytics Implementation",
      service: "Data & Decision Intelligence",
      description: "Developed advanced analytics models that improved demand forecasting accuracy by 42% and enabled proactive decision-making across the organization.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Target,
      category: "Data & Decision Intelligence"
    },
    {
      title: "Customer Insights Dashboard",
      service: "Data & Decision Intelligence",
      description: "Created a comprehensive data visualization platform that unified customer data, resulting in 23% increase in upsell opportunities and 18% higher retention.",
      image: "https://images.pexels.com/photos/7567458/pexels-photo-7567458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Target,
      category: "Data & Decision Intelligence"
    },
    // Finance case studies
    {
      title: "Financial Transformation Program",
      service: "Finance",
      description: "Streamlined financial operations and implemented advanced reporting, reducing month-end close time by 65% and improving forecast accuracy by 28%.",
      image: "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Brain,
      category: "Finance"
    },
    {
      title: "Risk Management Framework Redesign",
      service: "Finance",
      description: "Developed a comprehensive risk assessment methodology that improved risk identification by 52% and reduced compliance-related incidents by 78%.",
      image: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: Brain,
      category: "Finance"
    }
  ];

  const categories = ["All", "Supply Chain", "Sales & Distribution", "Strategy & Operations", "Data & Decision Intelligence", "Finance"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [filteredCaseStudies, setFilteredCaseStudies] = React.useState(caseStudies);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredCaseStudies(caseStudies);
    } else {
      setFilteredCaseStudies(caseStudies.filter(study => study.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Case Studies" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Particles animation */}
        <div className="absolute inset-0 z-20">
          <Particles
            id="caseStudyHeroParticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: { enable: false },
              fpsLimit: 120,
              particles: {
                number: {
                  value: 40,
                  density: {
                    enable: true,
                    value_area: 900
                  }
                },
                color: {
                  value: ["#ffffff", "#f16539", "#ffaa80"],
                },
                shape: {
                  type: ["circle"],
                },
                opacity: {
                  value: 0.6,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.5,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.2,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1.5,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 0.5
                    }
                  },
                  push: {
                    particles_nb: 4
                  }
                }
              },
              detectRetina: true
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

        {/* Hero content */}
        <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-[#f16539]">Success</span> Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Discover how we've helped organizations transform their operations, 
            drive growth, and achieve measurable results through our tailored solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <a 
              href="#case-studies" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f16539] to-orange-500 text-white font-medium rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 transform"
            >
              <span className="flex items-center">
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-[#f16539] to-orange-300 mb-6 mx-auto"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Case Studies by Service Area
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Filter through our extensive portfolio of successful client engagements 
                across our service offerings.
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#f16539] text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                service={study.service}
                description={study.description}
                image={study.image}
                iconComponent={study.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-900/85 mix-blend-multiply z-10"></div>
          <img 
            src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Background" 
            className="w-full h-full object-cover object-center opacity-25"
          />
        </div>
        
        {/* Particles animation */}
        <div className="absolute inset-0 z-10">
          <Particles
            id="caseStudyCTAParticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: { enable: false },
              fpsLimit: 120,
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: ["#ffffff", "#ffedd5", "#ffaa80", "#ff8c66", "#f16539"],
                },
                shape: {
                  type: ["circle", "triangle"],
                },
                opacity: {
                  value: 0.6,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 4,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.2,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  repulse: {
                    distance: 100,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  }
                }
              },
              detectRetina: true
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
        
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Let's discuss how our expertise can help you achieve your business goals 
            and create your own success story.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Link
              to="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#f16539] to-orange-500 text-white font-medium rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 transform group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-[#e05a30] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              <span className="relative flex items-center">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyPage; 