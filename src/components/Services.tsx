import React from 'react';
import { Brain, Target, Zap, Shield, Globe, Truck, ShoppingBag, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link?: string;
}

interface ServiceCardProps {
  service: ServiceFeature;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#f16539] dark:hover:border-[#f16539] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <motion.div 
        className="w-16 h-16 bg-gradient-to-r from-[#f16539] to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <service.icon className="text-white" size={32} />
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#f16539] dark:group-hover:text-[#f16539] transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {service.title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        {service.description}
      </motion.p>
      
      <motion.ul 
        className="space-y-2 mb-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        {service.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-[#f16539] dark:bg-[#f16539] rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </motion.ul>

      {service.link ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <Link 
            to={service.link} 
            className="inline-flex items-center text-[#f16539] hover:text-orange-600 font-medium"
          >
            Learn More
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      ) : null}
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [gridRef, gridInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const services: ServiceFeature[] = [
    {
      icon: Brain,
      title: 'Strategic Planning',
      description: 'Develop comprehensive strategies that align with your vision and market opportunities.',
      features: ['Market Analysis', 'Competitive Intelligence', 'Growth Roadmaps']
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology and digital solutions.',
      features: ['Process Automation', 'Cloud Migration', 'Digital Strategy']
    },
    {
      icon: Truck,
      title: 'Supply Chain',
      description: 'Transform supply chain excellence with smart innovations and sustainable solutions.',
      features: ['Planning', 'Logistics', 'Procurement'],
      link: '/supply-chain'
    },
    {
      icon: ShoppingBag,
      title: 'Sales & Distribution',
      description: 'Revolutionize your sales and distribution processes for a smarter future.',
      features: ['Digital Commerce', 'Route to Market', 'Sales Analytics'],
      link: '/sales-distribution'
    },
    {
      icon: Zap,
      title: 'Operational Excellence',
      description: 'Optimize workflows and eliminate inefficiencies to boost productivity.',
      features: ['Process Optimization', 'Quality Management', 'Performance Metrics']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate risks to protect your business interests.',
      features: ['Risk Assessment', 'Compliance', 'Business Continuity']
    },
    {
      icon: Globe,
      title: 'Market Expansion',
      description: 'Enter new markets and scale your business with confidence and expertise.',
      features: ['Market Entry', 'International Strategy', 'Partnership Development']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive consulting services designed to accelerate your growth 
            and transform your business operations.
          </p>
        </motion.div>
        
        <motion.div 
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
