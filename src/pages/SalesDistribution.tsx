import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart3, ShoppingBag, LineChart, Users } from 'lucide-react';

const SalesDistribution = () => {
  const offerings = [
    {
      icon: ShoppingBag,
      title: 'Digital Commerce',
      description: 'Enhance your online presence with cutting-edge e-commerce solutions that drive sales and improve customer experience.',
      link: '#digital-commerce'
    },
    {
      icon: LineChart,
      title: 'Route to Market',
      description: 'Optimize your distribution channels and strategies to effectively reach your target markets and increase market penetration.',
      link: '#route-to-market'
    },
    {
      icon: BarChart3,
      title: 'Sales Analytics',
      description: 'Leverage data-driven insights to make informed decisions and improve sales performance across all channels.',
      link: '#sales-analytics'
    },
    {
      icon: Users,
      title: 'Customer Relationship Management',
      description: 'Build stronger relationships with your customers through effective CRM strategies and technologies.',
      link: '#crm'
    }
  ];

  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      category: 'Sales & Distribution',
      date: 'Jan, 2025',
      image: '/images/case-study-4.jpg'
    },
    {
      title: 'Omnichannel Distribution Strategy',
      category: 'Sales & Distribution',
      date: 'Feb, 2025',
      image: '/images/case-study-5.jpg'
    },
    {
      title: 'Sales Analytics Implementation',
      category: 'Sales & Distribution',
      date: 'Mar, 2025',
      image: '/images/case-study-6.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f16539] to-orange-500">
                SUSTAINED SUCCESS
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Revolutionizing Sales and Distribution for a Smarter Future
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Sales and distribution (S&D) is the backbone of a company's revenue-generating
              operations, encompassing the strategies, processes, and technologies that move
              products from manufacturers to consumers involving distributors and retailers.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              It involves managing the sales cycle, from order generation, order capture and
              fulfilment to managing trade promotions, optimizing distribution channels, and
              leveraging sales and consumer insights. In today's competitive landscape, advanced
              e-commerce platforms, CRM systems, and distribution management tools are essential
              for efficient operations. S&D plays a pivotal role in ensuring products are delivered
              efficiently, sales targets are met, and data-driven decisions drive market penetration,
              customer satisfaction, and profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-[#f16539] font-semibold mb-2">
              CRAFTING TOMORROW
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Expertise & Methodologies
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our expertise includes digital commerce, route to market and sales
              analytics. We are technology agnostic, and we focus on solving
              client problems by addressing business needs and bridging the gap
              between technology and business.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-[#f16539] font-semibold mb-2">
              SUB-PRACTICE
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Offerings
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#f16539] dark:hover:border-[#f16539] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#f16539] to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <offering.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#f16539] dark:group-hover:text-[#f16539] transition-colors duration-300">
                  {offering.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {offering.description}
                </p>
                
                <a 
                  href={offering.link} 
                  className="inline-flex items-center text-[#f16539] hover:text-orange-600 font-medium"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-[#f16539] font-semibold mb-2">
              LATEST UPDATES
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Latest Case Studies
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <span className="text-[#f16539] text-sm font-medium">
                        {study.category} • {study.date}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-[#f16539] font-semibold mb-2">
              WHAT OUR CLIENTS SAY
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Real Stories, Real Impact
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories of success and impact from our trusted partners and clients.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg">
            <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-8">
              "I would like to acknowledge the exceptional efforts of Thoucentric, who worked
              tirelessly alongside us over the past few months. I am immensely proud to be a part
              of this collaboration, and this accomplishment speaks volumes about the caliber of
              professionals within the team."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-[#f16539] font-semibold mb-2">
              BLOG – ARTICLE – WHITEPAPER
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Latest Insights & Resources
            </h3>
            <div className="flex justify-center">
              <a 
                href="#" 
                className="text-[#f16539] hover:text-orange-600 font-medium flex items-center"
              >
                View All
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((blog, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-orange-100 dark:bg-orange-900/30 text-[#f16539] text-xs font-medium px-3 py-1 rounded-full">
                      Blog
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                      Apr, 2025
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#f16539] transition-colors duration-300">
                    {index === 0 && "Digital Transformation in Sales: A Strategic Approach"}
                    {index === 1 && "The Future of Distribution: Trends and Technologies"}
                    {index === 2 && "Maximizing ROI with Advanced Sales Analytics"}
                  </h3>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-[#f16539] hover:text-orange-600 font-medium"
                  >
                    Read More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesDistribution; 