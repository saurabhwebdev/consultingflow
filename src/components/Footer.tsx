import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about-us' },
      { name: 'Contact Us', path: '/contact-us' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '#' },
      { name: 'Case Study', path: '/case-study' },
      { name: 'Whitepapers', path: '#' }
    ],
    Services: [
      { name: 'Data & Decision Intelligence', path: '#' },
      { name: 'Finance', path: '#' },
      { name: 'Business Consulting', path: '#' },
      { name: 'Sales & Distribution', path: '/sales-distribution' },
      { name: 'Supply Chain', path: '/supply-chain' }
    ],
    'Office Locations': [
      { name: 'India', path: '#' },
      { name: 'Singapore', path: '#' },
      { name: 'Netherlands', path: '#' },
      { name: 'United Kingdom', path: '#' },
      { name: 'United States', path: '#' }
    ],
    'Thoucentric Labs': [
      { name: 'Labs', path: '#' },
      { name: 'PriceVision', path: '#' },
      { name: 'thouSense', path: '#' },
      { name: 'ThouPlan', path: '#' }
    ]
  };

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" onClick={handleNavigation}>
                <img 
                  src="/TC_X_LightLogo_25.svg" 
                  alt="Logo" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through strategic insights and innovative solutions. 
              Partner with us to unlock your organization's full potential.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#f16539] dark:hover:bg-[#f16539] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#f16539]" />
                <span className="text-gray-300 dark:text-gray-400">hello@thoucentric.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#f16539]" />
                <span className="text-gray-300 dark:text-gray-400">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-200">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.path === '#' ? (
                      <a
                        href={link.path}
                        className="text-gray-300 dark:text-gray-400 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={handleNavigation}
                        className="text-gray-300 dark:text-gray-400 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Thoucentric. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200">
                Filings
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200">
                Sitemap
              </a>
              <Link 
                to="/terms-of-use" 
                onClick={handleNavigation}
                className="text-gray-400 dark:text-gray-500 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200"
              >
                Term of Use
              </Link>
              <Link 
                to="/privacy-policy" 
                onClick={handleNavigation}
                className="text-gray-400 dark:text-gray-500 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/tia-terms" 
                onClick={handleNavigation}
                className="text-gray-400 dark:text-gray-500 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200"
              >
                TIA – Terms and Conditions
              </Link>
              <Link 
                to="/contact-us" 
                onClick={handleNavigation}
                className="text-gray-400 dark:text-gray-500 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
