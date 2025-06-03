import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

const CallToAction = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    // container loaded
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced backdrop gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#f16539]/5 to-transparent"></div>
      
      {/* Particles animation */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Particles
          id="ctaParticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: ["#f16539", "#ff8c66", "#ffaa80", "#ffedd5", "#ffffff"],
              },
              shape: {
                type: ["circle", "triangle"],
              },
              opacity: {
                value: 0.8,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 5,
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
                color: "#f16539",
                opacity: 0.2,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
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
                grab: {
                  distance: 150,
                  line_linked: {
                    opacity: 0.5
                  }
                },
                bubble: {
                  distance: 200,
                  size: 12,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
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
            bottom: "0"
          }}
        />
      </div>
      
      {/* CTA Content with enhanced design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-900/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
          <div className="text-center">
            <div className="inline-block mb-6 relative">
              <span className="w-20 h-1 bg-gradient-to-r from-[#f16539] to-orange-300 absolute -top-6 left-1/2 transform -translate-x-1/2"></span>
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <span className="w-20 h-1 bg-gradient-to-r from-orange-300 to-[#f16539] absolute -bottom-6 left-1/2 transform -translate-x-1/2"></span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Our team of experts is ready to help you navigate complex challenges and achieve your business goals. 
              Let's start a conversation today.
            </p>
            <Link 
              to="/contact-us" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#f16539] to-orange-500 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 transform group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-[#e05a30] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              <span className="relative flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 