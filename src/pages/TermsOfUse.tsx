import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfUse = () => {
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
              Terms and Conditions of Use
            </h1>
            
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#f16539] to-orange-400 rounded-full mb-6"></div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              These Terms and Conditions of Use apply to your use of and registration with THOUCENTRIC.com (the "Site").
            </p>
          </div>
          
          {/* Table of Contents - Integrated into the main content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#terms" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#changes" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                      Right to Change
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#copyright" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                      Copyright
                    </a>
                  </li>
                  <li>
                    <a href="#responses" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                      Responses
                    </a>
                  </li>
                  <li>
                    <a href="#prohibited" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                      Prohibited Conduct
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main content with improved styling */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div id="terms" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                PLEASE READ THESE TERMS AND CONDITIONS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Your access to, and browsing, review and use of the Site is subject to these Terms and Conditions and all applicable laws. By accessing and using the Site, you accept these Terms and Conditions, without limitation or qualification. If you do not agree to the Terms and Conditions, do not use the Site. If, at any time, any part of the Terms and Conditions is no longer acceptable to you, immediately terminate your use of the Site.
              </p>
            </div>
            
            <div id="changes" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                RIGHT TO CHANGE, MODIFY OR DELETE THE TERMS AND CONDITIONS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                THOUCENTRIC reserves the right to change, modify, add or delete portions of the Terms and Conditions at any time, without prior notice. Please re-review the Terms and Conditions periodically for changes. Your continued use of the Site will mean that you accept such changes or deletions.
              </p>
            </div>
            
            <div id="privacy" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                PRIVACY
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Please refer to THOUCENTRIC's Privacy Policy for information regarding the Company's collection, use, and storage of users' information.
              </p>
            </div>
            
            <div id="copyright" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                COPYRIGHT AND USE OF SITE CONTENT
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This Site and all the information it contains, or may in the future contain, including, but not limited to, articles, memoranda, bulletins, reports, press releases, opinions, text, directories, guides, photographs, illustrations, trademarks, trade names, service marks and logos (collectively, the "Content"), is the property of THOUCENTRIC, and is protected from unauthorized copying and dissemination by U.S. Copyright law, trademark law, international conventions, and other intellectual property laws. Certain of the trademarks and logos displayed on the site are owned by third parties. Except as we have described in these Terms of Use, nothing contained on this Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use this Site or any Content displayed on this Site, through the use of framing or otherwise, without the prior written permission of THOUCENTRIC or such third party that may own the trademark or copyright of material displayed on this Site.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                THOUCENTRIC encourages and permits links to Content on the Site. However, THOUCENTRIC is an organization committed to the highest professional standards. Therefore, THOUCENTRIC does not grant any license or other permission for links or other use of the Site or its Content if such use or link: (a) suggests that THOUCENTRIC promotes or endorses any third party's causes, ideas, political campaigns, web sites, products or services, (b) copies, displays, disseminates or otherwise uses the Content without THOUCENTRIC's express written consent, or (c) uses the Content for commercial purposes. Furthermore, THOUCENTRIC does not grant its consent for links to the Site where the linking party engages in any Prohibited Conduct (as described in these Terms of Use). We reserve the right to withdraw permission for any link at any time.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Subject to your full compliance with these terms, THOUCENTRIC authorizes you to view the Content, make a single copy of it, and print that copy, but only for your own lawful, personal, noncommercial use, provided that you maintain all copyright, trademark and other intellectual property notices contained in such Content, and provided that the Content, or any part thereof, is not modified.
              </p>
            </div>
            
            <div id="responses" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                RESPONSES TO ONLINE REQUESTS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                From time to time, THOUCENTRIC may offer to provide information or materials via e-mail or otherwise to interested persons. THOUCENTRIC reserves the right, in its absolute discretion, to reject any requests for such information or materials, or to discontinue the provision of such information or materials to any person, for any reason whatsoever.
              </p>
            </div>
            
            <div id="prohibited" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                PROHIBITED CONDUCT
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                You may use the Site for lawful purposes only. You may not upload to, or distribute or otherwise publish through the Site, any Content that is any of the following:
              </p>
              <ul className="list-disc pl-6 my-4 text-gray-700 dark:text-gray-300">
                <li className="mb-2">is libelous, defamatory, obscene, pornographic, abusive, harassing or threatening, or otherwise objectionable to THOUCENTRIC in the Company's sole discretion;</li>
                <li className="mb-2">contains computer viruses, worms, moles or other contaminating or destructive elements;</li>
                <li className="mb-2">violates the rights of others, such as Content that infringes any copyright, trademark, patent, trade secret or violates any right of privacy or publicity;</li>
                <li className="mb-2">contains any false or misleading statement;</li>
                <li className="mb-2">contains advertising; or</li>
                <li>otherwise violates any applicable criminal or civil law.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                You may not use the Site for any commercial purpose and may not distribute over the Site any solicitation of funds, goods and services. In addition, you may not use the Site to solicit subscribers to join other online information services that are competitive with the Site.
              </p>
            </div>
            
            {/* Contact section */}
            <div className="mt-12 p-6 bg-orange-50 dark:bg-gray-700/30 rounded-xl border border-orange-100 dark:border-gray-600">
              <h2 id="contact" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Have Questions About Our Terms?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                If you have any questions or concerns about our Terms and Conditions, please don't hesitate to contact our legal team.
              </p>
              <a href="/#contact" className="inline-flex items-center px-6 py-3 bg-[#f16539] text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
                Contact Us
              </a>
            </div>
            
            {/* Back to top button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
                Back to top
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfUse; 