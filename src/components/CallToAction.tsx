import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Our team of experts is ready to help you navigate complex challenges and achieve your business goals. 
            Let's start a conversation today.
          </p>
          <Link 
            to="/contact-us" 
            className="inline-flex items-center px-8 py-4 bg-[#f16539] text-white text-lg font-medium rounded-lg shadow-lg hover:bg-[#e05a30] transition-colors duration-300 hover:scale-105 transform hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 