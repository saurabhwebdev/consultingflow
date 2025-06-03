import React, { useEffect, useState, useCallback } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MoveRight, Calendar, MapPin, Briefcase, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import careersData from '../data/careers.json';
import { Helmet } from 'react-helmet';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

const Careers = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for expanded job listings and filters
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const [locationFilter, setLocationFilter] = useState<string>('All Locations');
  const [departmentFilter, setDepartmentFilter] = useState<string>('All Departments');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Get unique locations and departments for filters
  const locations = ['All Locations', ...Array.from(new Set(careersData.openPositions.map(job => job.location)))];
  const departments = ['All Departments', ...Array.from(new Set(careersData.openPositions.map(job => job.department)))];
  
  // Filter jobs based on active status, location, department, and search query
  const filteredJobs = careersData.openPositions.filter(job => {
    const matchesActive = job.active;
    const matchesLocation = locationFilter === 'All Locations' || job.location === locationFilter;
    const matchesDepartment = departmentFilter === 'All Departments' || job.department === departmentFilter;
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesActive && matchesLocation && matchesDepartment && matchesSearch;
  });
  
  // Sort jobs: featured first, then by date posted
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime();
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    // container loaded
  }, []);

  return (
    <>
      <Helmet>
        <title>{careersData.careersSEO.title}</title>
        <meta name="description" content={careersData.careersSEO.description} />
        <meta name="keywords" content={careersData.careersSEO.keywords.join(', ')} />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900 overflow-hidden">
        {/* Background image with gradient overlay */}
        <img 
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Team collaboration" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Brand color overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-[#f16539]/30 to-gray-900/80 z-10"></div>
        
        {/* Particle animation for added visual interest */}
        <div className="absolute inset-0 z-20">
          <Particles
            id="careersHeroParticles"
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
                    particles_nb: 3
                  }
                }
              },
              retina_detect: true
            }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join Our Team of <span className="text-[#f16539]">Innovators</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Be part of a company that's transforming businesses through strategic insights and innovative solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#open-positions" 
                className="px-8 py-3 bg-[#f16539] text-white rounded-full font-medium hover:bg-[#e05a30] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                View Open Positions <MoveRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/contact-us"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300 border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <main className="bg-white dark:bg-gray-900">
        {/* Our Culture Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Culture – Innovation Meets Purpose
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-700 dark:text-gray-300">
                  At Thoucentric, we believe that our people are our greatest asset. We've cultivated a work environment 
                  that encourages innovation, celebrates diversity, and supports personal and professional growth.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  We're looking for passionate individuals who are eager to make a difference, embrace challenges, 
                  and contribute to our mission of transforming businesses through strategic insights and innovative solutions.
                </p>
              </div>
            </div>
            
            {/* Gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden shadow-xl group">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Collaborative Environment</h3>
                    <p className="text-white/80">Working together to solve complex challenges</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Team Meeting" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <img 
                  src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Creative Thinking" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <img 
                  src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Team Celebration" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Team Discussion" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                We offer more than just a job—we provide an opportunity to grow, innovate, and make a real impact
              </p>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {careersData.careerBenefits.map((benefit) => (
                <motion.div 
                  key={benefit.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-t-4 border-[#f16539] hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl mb-5">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Take the next step in your career journey with Thoucentric
              </p>
            </div>
            
            {/* Filter and search */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search positions..."
                    className="pl-10 w-full py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f16539] focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 w-full py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f16539] focus:border-transparent appearance-none"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 w-full py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f16539] focus:border-transparent appearance-none"
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                  >
                    {departments.map(department => (
                      <option key={department} value={department}>{department}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results count */}
            <div className="mb-6 text-gray-600 dark:text-gray-400 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              <span>Showing {sortedJobs.length} positions</span>
            </div>
            
            {/* Job listings */}
            <div className="space-y-6">
              {sortedJobs.length > 0 ? (
                sortedJobs.map((job) => (
                  <div 
                    key={job.id} 
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${job.featured ? 'border-l-4 border-[#f16539]' : ''}`}
                  >
                    {/* Job header */}
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mr-3">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#f16539] text-xs font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.department}
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(job.datePosted).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0 line-clamp-2">
                            {job.description}
                          </p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                          {expandedJobId === job.id ? (
                            <ChevronUp className="h-6 w-6 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-6 w-6 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded content */}
                    {expandedJobId === job.id && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                              Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((responsibility, index) => (
                                <li key={index} className="flex text-gray-700 dark:text-gray-300">
                                  <span className="text-[#f16539] mr-2">•</span>
                                  <span>{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((requirement, index) => (
                                <li key={index} className="flex text-gray-700 dark:text-gray-300">
                                  <span className="text-[#f16539] mr-2">•</span>
                                  <span>{requirement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                          <a 
                            href="#" 
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f16539] hover:bg-[#e05a30] transition-colors duration-200"
                          >
                            Apply Now <MoveRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    No positions found
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We couldn't find any positions matching your criteria. Please try adjusting your filters.
                  </p>
                  <button
                    onClick={() => {
                      setLocationFilter('All Locations');
                      setDepartmentFilter('All Departments');
                      setSearchQuery('');
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#f16539] hover:bg-[#e05a30] transition-colors duration-200"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Join Us CTA Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[#f16539] mix-blend-multiply opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f16539] to-[#f16539]/30 opacity-80"></div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" 
                alt="Team Collaboration" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
              />
              
              {/* Particles animation */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Particles
                  id="careersCTAParticles"
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
                        speed: 1.5,
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
                      }
                    },
                    interactivity: {
                      detect_on: "canvas",
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
                          distance: 200,
                          size: 10,
                          duration: 2,
                          opacity: 0.8,
                          speed: 3
                        },
                        push: {
                          particles_nb: 4
                        }
                      }
                    },
                    retina_detect: true
                  }}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    zIndex: 1
                  }}
                />
              </div>
              
              <div className="relative px-6 py-12 md:px-12 md:py-16 max-w-4xl mx-auto text-center z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Don't See the Right Fit?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to Thoucentric's mission.
                </p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-[#f16539] bg-white hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Get in Touch <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;