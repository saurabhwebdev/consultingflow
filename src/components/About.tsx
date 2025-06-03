import React from 'react';
import { CheckCircle, Award, Users, Lightbulb } from 'lucide-react';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'We deliver exceptional results through meticulous attention to detail and unwavering commitment to quality.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace cutting-edge solutions and creative thinking to solve complex business challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership and work closely with our clients to achieve shared success.'
    },
    {
      icon: Lightbulb,
      title: 'Insight',
      description: 'We provide data-driven recommendations based on deep industry knowledge and analytical expertise.'
    }
  ];
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    // container loaded
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-orange-950 relative overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          id="aboutParticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              shape: {
                type: ["circle", "triangle", "polygon"],
                polygon: {
                  sides: 5
                }
              },
              color: {
                value: ["#f16539", "#ffaa80", "#fda07e", "#ffc299"],
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.2,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 15,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  size_min: 5,
                  sync: false
                }
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                gravity: {
                  enable: false
                },
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              rotate: {
                value: 0,
                random: true,
                direction: "clockwise",
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false
                }
              }
            },
            interactivity: {
              detect_on: "window",
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
                  particles_nb: 2
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Shaping Tomorrow's 
              <span className="block text-[#f16539] dark:text-[#f16539]">Business Leaders</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Founded in 2008, Thoucentric has been at the forefront of business transformation, 
              helping organizations navigate complex challenges and unlock their full potential. 
              Our team of seasoned professionals brings decades of collective experience across 
              diverse industries and markets.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We believe that every business has unique DNA, and our approach is tailored to 
              respect and enhance what makes each organization special while driving meaningful change.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                <span className="text-[#f16539] dark:text-[#f16539] font-semibold">Fortune 500 Clients</span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                <span className="text-[#f16539] dark:text-[#f16539] font-semibold">Global Reach</span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                <span className="text-[#f16539] dark:text-[#f16539] font-semibold">Award Winning</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f16539] to-orange-500 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration in modern office"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To empower businesses with strategic insights and innovative solutions 
                that drive sustainable growth and create lasting value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 relative z-10">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  <value.icon className="text-[#f16539] dark:text-[#f16539]" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
