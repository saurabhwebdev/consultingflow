import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TiaTerms = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header section with decorative elements */}
          <div className="relative mb-12">
            <div className="absolute top-0 right-0 -mt-8 mr-8 w-32 h-32 bg-orange-100 dark:bg-orange-900/20 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-8 ml-8 w-24 h-24 bg-orange-200 dark:bg-orange-800/20 rounded-full opacity-40 blur-xl"></div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
              TIA – Terms and Conditions
            </h1>
            
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#f16539] to-orange-400 rounded-full mb-6"></div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              These Terms are effective as of the date indicated and remain in effect until revised. Continued access to or use of TIA implies acceptance of these Terms and any future modifications.
            </p>
          </div>
          
          {/* Table of Contents - Integrated into the main content */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Introduction and Acceptance of Terms
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Chatbot Services and Limitations
                  </a>
                </li>
                <li>
                  <a href="#eligibility" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    User Eligibility and Access Restrictions
                  </a>
                </li>
                <li>
                  <a href="#compliance" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Compliance with International Regulations
                  </a>
                </li>
                <li>
                  <a href="#ip" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Intellectual Property Rights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <a href="#liability" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Limitation of Liability and Disclaimers
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Security Measures and Responsibilities
                  </a>
                </li>
                <li>
                  <a href="#termination" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Termination of Access
                  </a>
                </li>
                <li>
                  <a href="#modifications" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Modifications to Terms
                  </a>
                </li>
                <li>
                  <a href="#governing" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Governing Law and Jurisdiction
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Contact Information
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Main content with improved styling */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div id="introduction" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                INTRODUCTION AND ACCEPTANCE OF TERMS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                These Terms and Conditions ("Terms") govern your use of the AI-powered customer service chatbot named "TIA" ("TIA") provided by Thoucentric Technologies Pvt Ltd (the "Company"), an Indian company incorporated under the laws of India and having its registered office at The HIVE, 4th Floor, VR MALL, The WAVERLEY, 60/2, ITPL Main Rd, B, Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048. By accessing or using TIA, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these terms, you must immediately cease using TIA. These Terms form a binding agreement between you (and the organization you represent) and the Company. You represent and warrant that you are acting on behalf of a corporate entity and have the full authority to bind that entity to these Terms. In other words, access to TIA is granted only to authorized representatives of the Company's clients; anyone without proper authorization must not use TIA.
              </p>
            </div>
            
            <div id="services" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                CHATBOT SERVICES AND LIMITATIONS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                TIA is an Artificial Intelligence driven conversational agent designed to assist you with general inquiries and customer service related to the Company's services. It can provide information, answer frequently asked questions, and help with standard requests. TIA's replies are generated based on its training data and algorithms. However, TIA is provided on an "as is" basis without any warranty of accuracy or completeness. The Company does not guarantee that TIA's responses are always correct, complete, or up-to-date. In practice, TIA may misunderstand your query or generate incomplete, inaccurate or outdated responses.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Accordingly, TIA's output should not substitute for professional judgment. TIA is intended for general assistance only and is not a substitute for expert advice. For instance, it does not provide legal, financial, medical, or other professional advice, and it should not be used for critical or highly sensitive decisions. The Company strongly recommends that you verify any important information with qualified human experts or official sources before acting on it. No reliance should be placed solely on TIA's responses.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                In summary, TIA is a support tool for basic customer service inquiries. It can provide helpful information, but its responses are not guaranteed. You agree to use TIA at your own risk, recognizing its limitations.
              </p>
            </div>
            
            <div id="eligibility" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                USER ELIGIBILITY AND ACCESS RESTRICTIONS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                TIA is made available exclusively to authorized corporate clients and their designated employees or agents. Use by individuals or entities not covered by a corporate client agreement is strictly prohibited. You must use TIA only in connection with your organization's business and in accordance with any corporate access credentials provided. By using TIA, you confirm that you are acting as a representative of a the Company's client or a corporate entity and have the authority to bind that client or entity to these Terms. If you lack such authorization (for example, if you are not an employee or authorized contractor of the client or entity), you are not permitted to use TIA. The Company reserves the right to verify user eligibility and to suspend or terminate the access of any user who is not a valid client or entity representative.
              </p>
            </div>
            
            <div id="compliance" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                COMPLIANCE WITH INTERNATIONAL REGULATIONS (INCLUDING GDPR)
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The Company will collect, process, and store any and all data collected through TIA as per its privacy policy available Privacy Policy. Neither the Company nor its affiliates make any representation that materials, features or services on TIA are appropriate or available for use in locations outside India. Those who choose to access TIA from other locations do so on their own initiative and are responsible for compliance with local laws. If user provides data about individuals (personal data) such data may be stored on servers in India. It is the user's responsibility to ensure that the user has all the applicable authorizations to enter this information. The Company acts as the owner/controller of such personal data.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Users should not enter highly sensitive personal data into TIA such as personal information including medical information, financial information or any other such sensitive personal details. The Company will not be responsible for any sensitive information you choose to disclose to TIA.
              </p>
            </div>
            
            <div id="ip" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The Company's website, Thoucentric, where the chatbot feature TIA resides, is protected by law, including, but not limited to, Indian intellectual property law and international treaties.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                TIA contents, including, without limitation; text, pictures, graphics, source code, and other files as well as the selection and arrangement thereof are copyrighted materials of the Company or its licensors, all rights reserved. The trademarks, service marks, trade names, and logos, including, but not limited to, page headers, custom graphics, button icons, and scripts (collectively, the "Trademarks") used and displayed in TIA are registered and unregistered trademarks, service marks and/or trade dress of the Company or its licensors, and users shall not copy, imitate or use the Trademarks, in whole or in part, for any purpose, including without limitation in any marketing or advertising materials.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Subject to the limited rights expressly granted hereunder, the Company or its licensors, as applicable, reserve all rights, title, and interest in and to TIA, the aggregated statistical data collected, and all related intellectual property rights. No rights are granted to users hereunder other than as expressly set forth herein.
              </p>
            </div>
            
            <div id="liability" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                LIMITATION OF LIABILITY AND DISCLAIMERS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                TIA AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" with "ALL FAULTS" , WITHOUT ANY WARRANTIES OF ANY KIND. To the maximum extent permitted by law, the Company expressly disclaims all representations and warranties, whether express or implied, including any warranties of accuracy, completeness, merchantability, fitness for a particular purpose, or non-infringement. The Company makes no warranty that TIA's responses will be correct, reliable, or error-free.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Under no circumstances will the Company (including its officers, employees, agents or affiliates) be liable for any indirect, consequential, incidental, special or punitive damages arising out of or related to your use of TIA, even if advised of the possibility of such damages. To the extent liability cannot be disclaimed, it shall be limited to the maximum extent permitted by law.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                The materials may be out of date, and neither the Company, its affiliates, or licensors makes any commitment to update the materials in TIA.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Neither the Company, its affiliates, or licensors warrant that the files available for downloading, if any, will be free from infection, viruses, worms, trojan horses, or other malicious code that manifest contaminating or destructive properties. Neither the Company, its affiliates, or licensors warrant that the chatbot, software, materials, products, or services will be uninterrupted or error-free or that any defects in software, materials, products, or services will be corrected.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                TIA does not provide professional advice on legal, financial, medical, tax, or similar matters. If any advice is inadvertently provided, the Company does not accept any responsibility or liability for such advice. For personalized advice, always consult with a qualified professional. You agree that the Company is not providing you any professional advice through TIA, and you will not rely on TIA for any business, legal, financial, or medical decisions. You assume full responsibility for all decisions you make based on Chatbot information.
              </p>
            </div>
            
            <div id="security" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                SECURITY MEASURES AND RESPONSIBILITIES
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The Company is GDPR compliant, therefore, the Company will implement reasonable technical and organizational security measures to protect data associated with TIA. However, the user remain responsible for securing their own systems and data. This includes using secure networks (e.g. trusted Wi-Fi or VPN) and keeping your login credentials confidential. You must immediately notify the Company if you suspect any unauthorized access to your account or if you become aware of a security breach. The Company will not be liable for losses resulting from your failure to protect your login information or use an insecure connection.
              </p>
            </div>
            
            <div id="termination" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                TERMINATION OF ACCESS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This Agreement will terminate automatically without any prior notice from the Company if users (i) violate the terms of this Agreement; or (ii) Users discontinue the use of Chatbot.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Upon termination or expiration of this Agreement, the Company shall have no obligation to maintain or provide any user data and may upon user's written request, unless legally prohibited, delete all user data in its systems or otherwise in its possession or under its control. Termination does not affect any rights or obligations that arose prior to termination, nor any provisions (such as liability exclusions) that by their nature should survive termination.
              </p>
            </div>
            
            <div id="modifications" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                MODIFICATIONS TO TERMS AND CHATBOT FUNCTIONALITY
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The Company reserves the right to modify these Terms or the functionality of TIA at any time. We may update the Terms (for example, by posting new terms on our website or within TIA interface). Notice of material changes will be given, such as by posting an updated "Last Updated" date. Your continued use of TIA after any changes constitutes your acceptance of the revised Terms.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Similarly, TIA service itself may be enhanced, improved, or otherwise changed from time to time. We may introduce new features or functionality, or retire existing ones, to improve the service. You agree that any updates to TIA or its underlying algorithms are subject to these Terms.
              </p>
            </div>
            
            <div id="governing" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                GOVERNING LAW AND JURISDICTION
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
              </p>
            </div>
            
            <div id="contact" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                CONTACT INFORMATION FOR SUPPORT AND QUERIES
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions, comments or concerns about TIA or these Terms, please contact us at the addresses below. Official communications and notices should be sent by mail or email to the contact information provided. Our support team is available to assist with any issues regarding TIA.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Company Name: Thoucentric Technologies Pvt. Ltd.<br />
                Address: The HIVE, 4th Floor, VR MALL, The WAVERLEY, 60/2, ITPL Main Rd, B, Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048, India<br />
                Email: contact@thoucentric.com<br />
                We will try to respond to your inquiries as promptly as possible using the contact information above.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TiaTerms; 