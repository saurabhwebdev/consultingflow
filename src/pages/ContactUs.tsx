import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, Globe, Building, User, AtSign, MessageSquare, ExternalLink } from 'lucide-react';

const ContactUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  // Active location tab
  const [activeLocation, setActiveLocation] = useState('India');

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form handling
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    // Show success message (in a real app, you'd use a proper notification system)
    alert('Thank you for your message. We will get back to you shortly!');
  };

  // Office locations data
  const officeLocations = {
    India: [
      {
        name: "Bangalore - The HIVE",
        address: "The HIVE, 4th Floor, VR MALL, The WAVERLEY, 60/2, ITPL Main Rd, B Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048",
        phone: "+91 80 4093 5555",
        email: "bangalore@thoucentric.com"
      },
      {
        name: "Bangalore - IndiQube Helios",
        address: "IndiQube Helios Kalyani Tech park - Tower E 2nd floor Chandana, service road, Kadabeesanahalli, Bengaluru, Karnataka 560103",
        phone: "+91 80 4093 5555",
        email: "bangalore@thoucentric.com"
      },
      {
        name: "Bangalore - Innovator Building",
        address: "7th Floor, Innovator Building, International Tech Park, Whitefield Road, Pattandur Agrahara, Whitefield, Bengaluru, Karnataka, 560066",
        phone: "+91 80 4093 5555",
        email: "bangalore@thoucentric.com"
      },
      {
        name: "Bangalore - Awfis Prestige",
        address: "Awfis Prestige Shantiniketan - 12th Floor, Crescent 3, Prestige Shantiniketan, ITPL Main Road, Whitefield, Bengaluru, Karnataka 560048",
        phone: "+91 80 4093 5555",
        email: "bangalore@thoucentric.com"
      }
    ],
    Mumbai: [
      {
        name: "Mumbai - 91springboard",
        address: "91springboard 74 Techno Park, \"C\" Cross Road, Seepz, Andheri East, Mumbai 400093",
        phone: "+91 22 4093 5555",
        email: "mumbai@thoucentric.com"
      }
    ],
    "United States": [
      {
        name: "Austin - Headquarters",
        address: "Thoucentric Inc. - 14205 North Mopac Expressway Suite 400 Austin, TX 78728",
        phone: "+1 512 602 4000",
        email: "us@thoucentric.com"
      }
    ],
    Netherlands: [
      {
        name: "Rotterdam",
        address: "Thoucentric BV Weena 690 3012CN Rotterdam",
        phone: "+31 10 521 0000",
        email: "netherlands@thoucentric.com"
      }
    ],
    Singapore: [
      {
        name: "Singapore",
        address: "Thoucentric Pte. Ltd.19 Cecil Street #04-00. The Quadrant, Singapore 049704",
        phone: "+65 6225 3030",
        email: "singapore@thoucentric.com"
      }
    ],
    "United Kingdom": [
      {
        name: "Harrow",
        address: "Thoucentric Ltd.- Hygeia Building Rear Ground Floor, 66-68 College Road, Harrow, Middlesex, United Kingdom, HA1 1BE",
        phone: "+44 20 7712 1667",
        email: "uk@thoucentric.com"
      }
    ]
  };

  // FAQ data
  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "Thoucentric works with clients across various industries including manufacturing, retail, healthcare, financial services, technology, and more. Our solutions are adaptable to different business environments and challenges."
    },
    {
      question: "How long does a typical consulting project take?",
      answer: "Project timelines vary based on scope and complexity. Initial assessments might take 2-4 weeks, while comprehensive transformation projects could span several months. We work closely with clients to establish realistic timelines and milestones."
    },
    {
      question: "Do you offer remote consulting services?",
      answer: "Yes, we offer both on-site and remote consulting services. Our digital capabilities allow us to work effectively with clients globally, providing the same level of expertise and support regardless of location."
    },
    {
      question: "How do you measure the success of your consulting services?",
      answer: "We establish clear KPIs and success metrics at the beginning of each engagement. These might include ROI, efficiency improvements, cost savings, revenue growth, or other business outcomes aligned with your specific goals."
    },
    {
      question: "Can you work with our existing systems and technologies?",
      answer: "Absolutely. We take a technology-agnostic approach and can integrate with your existing systems. Our team has experience working with a wide range of technologies and platforms to deliver solutions that fit seamlessly into your current infrastructure."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#f16539] opacity-10 mix-blend-multiply"></div>
          <svg className="absolute left-0 right-0 top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#f16539" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of experts is ready to help you navigate complex challenges and achieve your business goals.
            </p>
          </div>
        </div>
        
        {/* Contact Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#f16539]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>
              <a href="mailto:hello@thoucentric.com" className="text-[#f16539] hover:underline font-medium block mb-2">hello@thoucentric.com</a>
              <a href="mailto:support@thoucentric.com" className="text-gray-600 dark:text-gray-300 hover:underline block">support@thoucentric.com</a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#f16539]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Mon-Fri, 9am-6pm</p>
                </div>
              </div>
              <a href="tel:+918040935555" className="text-[#f16539] hover:underline font-medium block mb-2">+91 80 4093 5555</a>
              <a href="tel:+15126024000" className="text-gray-600 dark:text-gray-300 hover:underline block">+1 512 602 4000</a>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#f16539]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Global Offices</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">6 locations worldwide</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">India, US, UK, Netherlands, Singapore</p>
              <a href="#global-offices" className="text-[#f16539] hover:underline font-medium block mt-2">View all locations</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="pt-32 pb-20 bg-gray-50 dark:bg-gray-800" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill out the form below and our team will get back to you promptly
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Full Name <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#f16539] focus:border-[#f16539] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                        <AtSign className="h-4 w-4 mr-2" />
                        Email Address <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#f16539] focus:border-[#f16539] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#f16539] focus:border-[#f16539] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#f16539] focus:border-[#f16539] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Subject <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#f16539] focus:border-[#f16539] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#f16539] focus:border-[#f16539] bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#f16539] to-orange-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#f16539] focus:ring-opacity-50 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Right Column - Info */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-[#f16539]" />
                  Business Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                    <span className="text-gray-700 dark:text-gray-300">Monday - Friday</span>
                    <span className="text-gray-900 dark:text-white font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                    <span className="text-gray-700 dark:text-gray-300">Saturday</span>
                    <span className="text-gray-900 dark:text-white font-medium">By appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Sunday</span>
                    <span className="text-gray-900 dark:text-white font-medium">Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-[#f16539]" />
                  Headquarters
                </h3>
                <address className="not-italic">
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p className="font-medium text-gray-900 dark:text-white">Thoucentric Global HQ</p>
                    <p>14205 North Mopac Expressway</p>
                    <p>Suite 400</p>
                    <p>Austin, TX 78728</p>
                    <p>United States</p>
                    <a href="tel:+15126024000" className="text-[#f16539] hover:underline block mt-4">+1 512 602 4000</a>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Offices Section */}
      <section className="py-20 bg-white dark:bg-gray-900" id="global-offices">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Global Presence
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              With offices across the world, we're positioned to serve clients wherever they are
            </p>
          </div>
          
          {/* Location Tabs */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {Object.keys(officeLocations).map((location) => (
                <button
                  key={location}
                  onClick={() => setActiveLocation(location)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 ${
                    activeLocation === location
                      ? 'bg-[#f16539] text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
          
          {/* Location Content */}
          <div className="relative">
            {/* India Background - Taj Mahal SVG */}
            {activeLocation === 'India' && (
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <img src="/tm.svg" alt="Taj Mahal" className="w-full h-full object-contain" />
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10">
              {officeLocations[activeLocation as keyof typeof officeLocations].map((office, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="h-5 w-5 text-[#f16539]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{office.name}</h3>
                  </div>
                  <div className="space-y-3 pl-1">
                    <p className="text-gray-700 dark:text-gray-300">{office.address}</p>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-[#f16539] mr-2 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-700 dark:text-gray-300 hover:text-[#f16539] dark:hover:text-[#f16539]">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-[#f16539] mr-2 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-gray-700 dark:text-gray-300 hover:text-[#f16539] dark:hover:text-[#f16539]">
                        {office.email}
                      </a>
                    </div>
                    <div className="pt-2">
                      <a 
                        href={`https://www.google.com/maps/search/${encodeURIComponent(office.address)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-[#f16539] hover:underline"
                      >
                        <span>View on map</span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we work with clients
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`mb-4 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden ${
                  openFaq === index ? 'shadow-md' : ''
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-[#f16539] transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 bg-white dark:bg-gray-900">
                    <p className="text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
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

export default ContactUs; 