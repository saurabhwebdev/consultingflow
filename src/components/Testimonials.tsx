import React, { useRef, useEffect } from 'react';

const FutureReadySolutions = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play video with muted state
    const attemptAutoplay = async () => {
      try {
        if (video) {
          video.muted = true;
          await video.play();
        }
      } catch (error) {
        console.error("Autoplay failed:", error);
      }
    };
    
    attemptAutoplay();
  }, []);

  return (
    <section id="future-solutions" className="py-24 bg-gradient-to-br from-gray-950 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Future-Ready <span className="text-[#f16539]">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering technologies that prepare your business for tomorrow's challenges
          </p>
        </div>
        
        <div className="w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video 
              ref={videoRef} 
              className="w-full aspect-video object-cover"
              loop
              playsInline
              muted
              preload="auto"
              controls
            >
              <source src="https://devenv.thoucentric.com/wp-content/uploads/2025/02/thoucentric.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureReadySolutions;
