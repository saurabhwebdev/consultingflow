import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown, ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    setMounted(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'Home' },
    { 
      label: 'Services',
      isDropdown: true,
      children: [
        { to: '/#services', label: 'All Services' },
        { to: '/supply-chain', label: 'Supply Chain' },
        { to: '/sales-distribution', label: 'Sales & Distribution' }
      ]
    },
    { to: '/#about', label: 'About' },
    { to: '/#team', label: 'Team' },
    { to: '/#future-solutions', label: 'Future-Ready Solutions' },
    { to: '/contact-us', label: 'Contact' },
  ];

  const handleNavClick = (to: string) => {
    setIsOpen(false);
    setServicesOpen(false);
    
    // If it's a hash link and we're already on the homepage, scroll to the section
    if (to.includes('#') && window.location.pathname === '/') {
      const id = to.replace('/#', '#');
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
        : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/TC_X_LightLogo_25.svg" 
                alt="Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, idx) => (
                item.isDropdown ? (
                  <div key={`dropdown-${idx}`} className="relative group">
                    <button 
                      className="text-gray-700 dark:text-gray-200 hover:text-[#f16539] dark:hover:text-[#f16539] px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform origin-top-left">
                      {item.children?.map((child, childIdx) => (
                        <Link
                          key={`dropdown-item-${childIdx}`}
                          to={child.to}
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200"
                          onClick={() => handleNavClick(child.to)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-gray-700 dark:text-gray-200 hover:text-[#f16539] dark:hover:text-[#f16539] px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                    onClick={() => handleNavClick(item.to)}
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#f16539] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                )
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2 rounded-full overflow-hidden transition-all duration-300 ease-in-out"
              aria-label="Toggle theme"
            >
              <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-orange-50'} transition-colors duration-300`}></div>
              
              <div className="relative flex items-center justify-center">
                <Sun 
                  size={20} 
                  className={`text-yellow-500 transition-all duration-300 ease-in-out ${
                    theme === 'dark' ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'
                  }`} 
                />
                <Moon 
                  size={20} 
                  className={`absolute text-[#f16539] transition-all duration-300 ease-in-out ${
                    theme === 'dark' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'
                  }`} 
                />
              </div>
            </button>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-[#f16539] dark:hover:text-[#f16539] p-2"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, idx) => (
              item.isDropdown ? (
                <div key={`mobile-dropdown-${idx}`}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between items-center w-full text-gray-700 dark:text-gray-200 hover:text-[#f16539] dark:hover:text-[#f16539] px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.label}
                    {servicesOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                  
                  {servicesOpen && (
                    <div className="pl-4 space-y-1">
                      {item.children?.map((child, childIdx) => (
                        <Link
                          key={`mobile-dropdown-item-${childIdx}`}
                          to={child.to}
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#f16539] dark:hover:text-[#f16539] transition-colors duration-200"
                          onClick={() => handleNavClick(child.to)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-gray-700 dark:text-gray-200 hover:text-[#f16539] dark:hover:text-[#f16539] block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => handleNavClick(item.to)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
