import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // State for location tabs
  const [activeTab, setActiveTab] = useState("India");

  return (
    <>
      <Navigation />
      
      {/* Full-size header banner */}
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Consulting Team" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
            Consulting that Solves, Not Just Recommends
          </h1>
          <p className="text-xl md:text-2xl text-white text-center max-w-4xl">
            We partner with clients to resolve complexity and evolve capability—through
            expertise, technology, and execution.
          </p>
        </div>
      </div>
      
      <main className="bg-white dark:bg-gray-900">
        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story – A Vision in Motion
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-700 dark:text-gray-300">
                  Thoucentric's journey began in 2015 with two individuals and a single, powerful idea: to reimagine
                  consulting. They saw a world where traditional advisory services were no longer enough, and
                  where businesses needed transformative solutions. With a blend of deep expertise and a passion for
                  digital innovation, Thoucentric was born.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  From tackling supply chain complexities to pioneering demand forecasting and scenario
                  planning, each step of our story has been fuelled by innovation, trust, and a relentless pursuit of results.
                  Today, Thoucentric is a testament to what can happen when vision meets execution—a global
                  consulting powerhouse reshaping industries one solution at a time.
                </p>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="py-12 px-4 sm:px-0">
              <div className="relative max-w-5xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#f16539]/30 via-[#f16539] to-[#f16539]/30 rounded-full"></div>
                
                {/* Timeline items */}
                {[
                  {
                    year: 2015,
                    title: "Founded with a Vision",
                    description: "Thoucentric was born with a mission to reimagine consulting for the digital age"
                  },
                  {
                    year: 2016,
                    title: "First Major Client",
                    description: "Secured our first enterprise client and delivered transformative results"
                  },
                  {
                    year: 2017,
                    title: "Team Expansion",
                    description: "Grew our team with industry experts from leading organizations"
                  },
                  {
                    year: 2018,
                    title: "International Expansion",
                    description: "Established presence in international markets and launched Thoucentric Labs"
                  },
                  {
                    year: 2019,
                    title: "100+ Team Members",
                    description: "Reached milestone of 100+ team members across multiple locations"
                  },
                  {
                    year: 2021,
                    title: "Global Presence",
                    description: "Established offices in five countries serving clients worldwide"
                  }
                ].map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center mb-16 last:mb-0`}
                  >
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="group">
                        <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-[#f16539] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${index % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-[#f16539] font-bold text-sm mb-4">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="w-2/12 flex justify-center relative">
                      <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full border-4 border-[#f16539] z-10 shadow-md group-hover:scale-110 transition-transform duration-300"></div>
                    </div>
                    
                    {/* Empty space for opposite side */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Purpose Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Our Story, Our Purpose
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-700 dark:text-gray-300">
                  Thoucentric is a niche consulting firm that uses relevant digital and functional domain expertise to solve problems in
                  Supply Chain, Sales & Distribution, and Finance.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  The consulting framework of Thoucentric integrates subject matter expertise, technological understanding, structured project management, and governance. As a result, our consultants have a natural advantage over the traditional consultant, who concentrates solely on advisory services. Our consulting capabilities have been institutionalized and anchored by the industry senior partners "who have been there and done that" as people in environments like our clients', this has allowed us to create teams who can act naturally as extensions of our client's teams.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  In our problem-solving journey, we stay aware of the evolving technology landscape through partnerships with the best
                  in the business. Thoucentric collaborates with our technology partners to develop strategies, and our consultants work
                  on end-to-end projects incorporating these world-class technologies. In the process, we have built a state-of-the-art
                  digital workforce of data scientists, engineers, and visualization experts, creating solutions for clients who want to
                  develop point solutions themselves.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Thoucentric Labs' successful product launches in the areas of demand forecasting, predictive quality, business scenario
                  planning, and commodity price forecasting validate our excellent problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who We Are Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                A Reflection of Who We Are
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Thoucentric is an 'Ethos' that epitomises the essence of
                being a good human… living a life of purpose… being life
                itself! We are an extension of ourselves together!
              </p>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Empowering Growth with Values
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                We breed the basic human values of trust, freedom,
                nimbleness, compassion, integrity, passion, persistence
                & conviction.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Guided by our values, we fuel growth and shape success—individually and as a
                company—turning every challenge into an opportunity for achievement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Trust",
                  description: "At Thoucentric, we believe that trust is the core of every great relationship. We help clients and employees alike to feel safe and belong to a group while allowing them to flourish in an honest and productive manner."
                },
                {
                  title: "Integrity",
                  description: "Integrity is the foundation for every member of the Thoucentric family. We care about conducting our business in a fair and honest way so that we all contribute to safeguarding the company's reputation."
                },
                {
                  title: "Freedom",
                  description: "We believe that freedom is one the highest values a company can offer. We empower our employees by giving them the freedom to make choices and the flexibility to innovate."
                },
                {
                  title: "Persistence",
                  description: "At Thoucentric, we define persistence as the tenacity to overcome any challenges and get the outcomes we expect beyond that standards we set for ourselves."
                },
                {
                  title: "Nimbleness",
                  description: "We believe that freedom is one the highest values a company can offer. We empower our employees by giving them the freedom to make choices and the flexibility to innovate."
                },
                {
                  title: "Passion",
                  description: "We believe that passion is an internal motivator, or an energy that comes from within. Our passion to work harder and smarter helps us stay up to date in learning the latest technology that help you succeed."
                },
                {
                  title: "Compassion",
                  description: "Compassion is key to providing you with superb service by paying attention to all your needs and not just ours. After all, we believe that our word should be your peace of mind."
                },
                {
                  title: "Conviction",
                  description: "Business isn't only about the bottom line. As members of the Thoucentric family, we are proud of who we are and what we do. Above all, we know that great leadership requires great conviction!"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-[#f16539] mb-4">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Partnerships Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Our Partnerships
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">CSR</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Committed to Making a Meaningful Difference in Communities
                  </p>
                  <a href="#" className="text-[#f16539] font-medium hover:text-orange-700 dark:hover:text-orange-300">
                    Read more
                  </a>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Diversity, Equity, Inclusion</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Fostering a Culture of Belonging
                  </p>
                  <a href="#" className="text-[#f16539] font-medium hover:text-orange-700 dark:hover:text-orange-300">
                    Read More
                  </a>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Blogs and Insights</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Latest Updates and Insights from Thoucentric
                  </p>
                  <a href="#" className="text-[#f16539] font-medium hover:text-orange-700 dark:hover:text-orange-300">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Leaders
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Our leaders are not just decision-makers; they are innovators, mentors, and
                changemakers shaping our future. Discover their stories and the inspiration that
                fuels our progress.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Archi Bagchi",
                  title: "Director",
                  subtitle: "Founder",
                  bio: "With over two decades of industry experience, Archi brings deep expertise in business transformation and global operations. An alumnus of IIT Kharagpur and IIM Lucknow, he has held leadership roles at Wipro, GE, and HP. At Thoucentric, he spearheads operations across India, the UK, US, and the Netherlands, driving strategic growth and execution excellence.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Archi-Bagchi.png"
                },
                {
                  name: "Neelakshi Kotnis",
                  title: "Director",
                  subtitle: "Founder",
                  bio: "Neelakshi brings 20+ years of diverse consulting and corporate experience, with a strong focus on people development and strategy. An FMS Delhi MBA alum, she previously held key roles at GE and Auctus Advisors. At Thoucentric, she introduced NEON, a unique introspection-driven framework that empowers employees to set and achieve meaningful goals.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Neelakshi-Kotnis.png"
                },
                {
                  name: "Pradeep Jadhav",
                  title: "Delivery",
                  subtitle: "Co-Founder",
                  bio: "Pradeep is a seasoned business leader with over 25+ years of global experience in supply chain strategy, consulting, and transformation. A graduate of IIT Bombay and IIM Lucknow, he has built and led high-impact teams at i2, Chainalytics, and SAP. At Thoucentric, he leads the Delivery Tower, ensuring excellence across client engagements.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Pradeep-Jadhav.png"
                },
                {
                  name: "Ajay Kumar MS",
                  title: "People & Enablers, Marketing",
                  subtitle: "Founding Member",
                  bio: "Ajay is a strategic leader driving Thoucentric's IT, Marketing, and HR functions. With a strong background in execution and growth strategy, he has previously contributed to major initiatives at HP and Dell. At Thoucentric, he plays a key role in shaping organizational culture and leading the People Tower.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Ajay-Kumar-MS.png"
                },
                {
                  name: "Siddhartha Roy",
                  title: "Data & Decision Intelligence",
                  subtitle: "Founding Member",
                  bio: "Sid brings over 20 years of expertise in advanced analytics, machine learning, and digital product management across industries such as automotive, CPG, and energy. An alumnus of IIT Kanpur and FMS Delhi, he has led large-scale global projects at Dell, Lenovo, IBM, and Applied Materials. He currently leads Thoucentric Labs, pioneering innovation and tech-driven solutions.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Siddhartha-Roy.png"
                },
                {
                  name: "Manish Garg",
                  title: "Capability",
                  subtitle: "Founding Member",
                  bio: "Manish is a supply chain and technology expert with more than 20 years of experience across IT, digitization, and consulting. An IIT Delhi and SP Jain alumnus, he has delivered impact at Infosys, GE Healthcare, and JDA Blue Yonder. At Thoucentric, he leads the Capability Tower, focusing on solution development and talent growth.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Manish-Garg.png"
                },
                {
                  name: "Sridhar SR",
                  title: "P&L",
                  subtitle: "Founding Member",
                  bio: "Sridhar leads Thoucentric's P&L and Finance functions, with 16+ years of experience across consulting and corporate finance. He previously built the firm's Business Consulting and Finance practices. Before joining Thoucentric in 2016, he worked with Accenture Strategy and Infosys Consulting. He holds an MBA from IIM Bangalore and a B.Tech from IIT (BHU) Varanasi.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Sridhar-SR.png"
                },
                {
                  name: "Ashok Rathnam",
                  title: "Business Development",
                  subtitle: "Founding Member",
                  bio: "Ashok has over 20 years of experience in end-to-end supply chain solutions, process optimization, and product development. A graduate of Anna University and an MITx MicroMasters holder, he currently leads the Business Delivery Tower at Thoucentric, driving transformation across global client engagements.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Ashok-Rathnam.png"
                },
                {
                  name: "Prince Kumar",
                  title: "Practice Lead",
                  subtitle: "Founding Member",
                  bio: "Prince is a supply chain specialist with 10+ years of experience in planning, forecasting, and digital transformation. With an MBA from SIBM and a MicroMasters from MITx, he leads Supply Chain Planning at Thoucentric, shaping strategies for clients across FMCG, alcobev, and BFSI sectors.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Prince-Kumar.png"
                },
                {
                  name: "Bharat Kumar",
                  title: "UK Business",
                  subtitle: "Founding Member",
                  bio: "Bharat brings over 21 years of experience in supply chain strategy and large-scale transformations. An IIM Lucknow alumnus, he has driven major initiatives at Tesco, HP, Mindtree, and TCS. At Thoucentric, he leads business expansion and client delivery across the UK and Europe.",
                  image: "https://thoucentric.com/wp-content/uploads/2025/06/Bharat-Kumar.png"
                }
              ].map((leader, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                  <div className="h-75 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{leader.name}</h3>
                    <p className="text-[#f16539] font-medium mb-1">{leader.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{leader.subtitle}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Testimonials
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Here at Thoucentric, we're proud of establishing and sustaining trusted
                partnerships. Hear what our clients have to say about our service.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mb-6"></div>
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-6">
                  "Thoucentric Consulting has been instrumental in helping us improve global supply planning as part of our 'Win With' planning initiative. With Thoucentric's domain expertise, consistency, and efficiency, we were able to reduce inventory across two product categories and improve supply plan quality by almost 70% for our Europe business."
                </blockquote>
                <cite className="text-[#f16539] font-medium">
                  CEO of Software Product and Design Management Company
                </cite>
              </div>
            </div>
          </div>
        </section>
        
        {/* Global Locations */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Global Location
            </h2>
            
            {/* Tabs */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["India", "United States", "Netherlands", "Singapore", "United Kingdom"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                      activeTab === tab
                        ? "bg-[#f16539] text-white shadow-lg"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500">
                {activeTab === "India" && (
                  <div className="animate-fadeIn">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                        <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                        India Offices
                      </h3>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.01]">
                          <h4 className="text-xl font-bold text-[#f16539] mb-4">Bangalore</h4>
                          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
                            <li className="flex">
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-4 mt-1">
                                <span className="text-[#f16539] text-sm font-bold">1</span>
                              </div>
                              <p>The HIVE, 4th Floor, VR MALL, The WAVERLEY, 60/2, ITPL Main Rd, B Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048</p>
                            </li>
                            <li className="flex">
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-4 mt-1">
                                <span className="text-[#f16539] text-sm font-bold">2</span>
                              </div>
                              <p>IndiQube Helios Kalyani Tech park - Tower E 2nd floor Chandana, service road, Kadabeesanahalli, Bengaluru, Karnataka 560103</p>
                            </li>
                            <li className="flex">
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-4 mt-1">
                                <span className="text-[#f16539] text-sm font-bold">3</span>
                              </div>
                              <p>7th Floor, Innovator Building, International Tech Park, Whitefield Road, Pattandur Agrahara, Whitefield, Bengaluru, Karnataka, 560066</p>
                            </li>
                            <li className="flex">
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-4 mt-1">
                                <span className="text-[#f16539] text-sm font-bold">4</span>
                              </div>
                              <p>Awfis Prestige Shantiniketan - 12th Floor, Crescent 3, Prestige Shantiniketan, ITPL Main Road, Whitefield, Bengaluru, Karnataka 560048</p>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.01]">
                          <h4 className="text-xl font-bold text-[#f16539] mb-4">Mumbai</h4>
                          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
                            <li className="flex">
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-4 mt-1">
                                <span className="text-[#f16539] text-sm font-bold">1</span>
                              </div>
                              <p>91springboard 74 Techno Park, "C" Cross Road, Seepz, Andheri East, Mumbai 400093</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "United States" && (
                  <div className="animate-fadeIn p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                      <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                      United States Office
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.01]">
                      <p className="text-gray-700 dark:text-gray-300">Contact us for US office details</p>
                    </div>
                  </div>
                )}
                
                {activeTab === "Netherlands" && (
                  <div className="animate-fadeIn p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                      <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                      Netherlands Office
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.01]">
                      <p className="text-gray-700 dark:text-gray-300">Contact us for Netherlands office details</p>
                    </div>
                  </div>
                )}
                
                {activeTab === "Singapore" && (
                  <div className="animate-fadeIn p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                      <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                      Singapore Office
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.01]">
                      <p className="text-gray-700 dark:text-gray-300">Contact us for Singapore office details</p>
                    </div>
                  </div>
                )}
                
                {activeTab === "United Kingdom" && (
                  <div className="animate-fadeIn p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                      <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                      United Kingdom Office
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.01]">
                      <p className="text-gray-700 dark:text-gray-300">Contact us for UK office details</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-[#f16539]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Shape Your Vision Together.
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Reach Out to thoucentric
            </p>
            <button className="bg-white text-[#f16539] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              SEND A MESSAGE
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutUs; 