import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#f16539] to-orange-400 rounded-full mb-6"></div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              This Privacy Policy was last updated in 2020.
            </p>
          </div>
          
          {/* Table of Contents - Integrated into the main content */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <ul className="space-y-2">
                <li>
                  <a href="#information" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Information That We Collect
                  </a>
                </li>
                <li>
                  <a href="#retention" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Retention of Your Personal Information
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Cookies and Other Tracking Technologies
                  </a>
                </li>
                <li>
                  <a href="#links" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Links to Other Web Sites
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <a href="#access" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Access Rights
                  </a>
                </li>
                <li>
                  <a href="#use" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Use of Thoucentric Web Sites
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#f16539] hover:text-orange-700 dark:hover:text-orange-300 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#f16539] mr-2 rounded-full"></span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Introduction */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300">
              This is the Privacy Statement and Policy ("Privacy Statement") for Thoucentric Technology Private Limited and its affiliates ("Thoucentric"). This Privacy Policy was last updated in 2020.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              THOUCENTRIC understands that your privacy is important. THOUCENTRIC is committed to protecting your privacy and personal information you provide or as you access and use materials on THOUCENTRIC.com (the "Site"), including the Site subscription pages or other websites or apps that post a link to this Privacy Statement. In addition, information that you submit to THOUCENTRIC in response to an email request for information or other outreach from THOUCENTRIC, or through Thoucentric employment application processes, will be treated in accordance with this Privacy Statement.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              THOUCENTRIC may, in its discretion, amend this Privacy Statement from time to time. To ensure you are able to remain informed about the information we collect and how we use it, material changes to our statement will be reflected here. This Site may contain links to external sites which are not governed by this Privacy Statement. THOUCENTRIC does not take responsibility for the privacy practices of any third party sites to which we link. We encourage you to review the privacy policies of any such sites before you submit information there.
            </p>
          </div>
          
          {/* Main content with improved styling */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div id="information" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                INFORMATION THAT WE COLLECT, AND HOW WE USE IT
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                THOUCENTRIC collects information from you when you create your account for the Site, request copies of publications, subscribe for email newsletters and press releases, seek additional information regarding our services or employment opportunities, databases, or register for conferences and other THOUCENTRIC-sponsored events. If you do not provide such information, you will not be able to create an account for the Site, request copies of publications, subscribe for email newsletters and press releases, seek additional information regarding our services or employment opportunities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Personal information that we collect includes: names, addresses, e-mail addresses, phone numbers, unique personal identifiers, subject areas of interest and/or demographic information.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                In addition, we sometimes aggregate demographic information and the types of systems and browsers of users THOUCENTRIC also may conduct user surveys on the Web or use technologies to provide THOUCENTRIC with information on a number of areas, such as user identity, user viewing habits, whether or not users found what they were searching for, whether the Site content is relevant to user needs, and the like.
              </p>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">How do we use personal information?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The purposes and uses of your personal information will depend on the use of the Site and the personal information provided. We process your personal information:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                (i) for the purposes of safeguarding the legitimate interests pursued by THOUCENTRIC. This includes:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>Informing you about updates to the service and notifying you about other products and services offered by THOUCENTRIC that may be of interest to you, including information regarding publications and events</li>
                <li>Tailoring your experience at the Site with relevant THOUCENTRIC materials</li>
                <li>Understanding the Site's user population, identifying subject areas of interest, and determining whether the Site is designed to work with the computer settings of a majority of our visitors</li>
                <li>Measuring and improving the effectiveness of THOUCENTRIC marketing programs across different channels</li>
                <li>Improving our web content and navigation</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                (ii) on the basis of your consent. Insofar as you have granted us consent to the processing of personal information for specific purposes (for example, your application form for employment with THOUCENTRIC), the lawfulness of such processing is based on your consent. You may withdraw your consent at any time.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                (iii) for compliance with a legal obligation. This includes anti-fraud and anti-money laundering measures as well as tax and social security requirements.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We will not sell, share, or rent or otherwise make available your personal information to other parties, except that we may disclose the information to third parties who perform services on our behalf and have a need to access the information in connection with those services. Any third parties will only process this information to the extent to which and within the limits that THOUCENTRIC itself is permitted to process that data. In addition, THOUCENTRIC may disclose your contact information in response to inquiries by bona-fide rights owners in connection with allegations of infringement of copyright or other proprietary rights arising from information that you have posted on the Site or otherwise provided to THOUCENTRIC.
              </p>
            </div>
            
            <div id="retention" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                RETENTION OF YOUR PERSONAL INFORMATION
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                THOUCENTRIC retains your personal information for so long as is necessary to fulfil the purpose for which it was collected. We may retain your personal information for longer if they may be the subject of a legal claim, or may otherwise be relevant for future litigation.
              </p>
            </div>
            
            <div id="cookies" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                COOKIES AND OTHER TRACKING TECHNOLOGIES
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                THOUCENTRIC may use cookies on this Site and in our communications with you to keep track of your visit to our Site and our communications with you. A "cookie" is a small amount of data sent from a Web server to your browser and stored on your computer's hard drive. Other tracking technologies work similarly to cookies and place a small amount of data on your devices to monitor your website activity to allow us to collect information about how you use our Site and our services. With most internet browsers, you can erase cookies from your computer hard drive, block all cookies, or receive a warning before a cookie is stored on your computer. Please refer to your browser instructions or you can visit About Cookies which will give you more information. Once you have given your consent to use cookies, we shall store a cookie on your computer or device to remember this for next time. If you wish to withdraw consent at any time you will need to delete our cookies using your web browsers settings. Please be advised that certain sections or functionalities of the Site may be inaccessible to you if your browser does not accept cookies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
                <li>"persistent cookies" to improve your experience when using the Site.</li>
                <li>"session cookies" to enable your use of our Site and to remember your settings. Session cookies are deleted automatically at the end of your visit.</li>
                <li>"web analytics cookies". These cookies are used by us or third-party providers to analyze how the Site and our services are used, including the following types:</li>
              </ul>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4 pl-6">
                <strong>Google Analytics.</strong> This website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies" to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google uses this information to evaluate your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website and accepting the use of the cookies, you consent to the processing of data about you by Google in the manner and for the purposes set out above. To find out more about Google Analytics, Google's privacy policy and opting out of its cookies please visit: Google Analytics Opt-out.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4 pl-6">
                <strong>Adobe Analytics.</strong> This website uses Adobe Analytics, a web analytics and marketing service provided by Adobe Systems Incorporated ("Adobe"). Adobe uses HTTP "cookies" and similar technologies to collect information to measure and understand how users use this website. This includes user activity tracking on this website, including pages visited and links clicked. THOUCENTRIC does this to provide you with experiences and marketing messages based on your likely interests. The information generated by the cookie about your use of the Site (including your IP address) will be transmitted to and stored by Adobe. Adobe may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Adobe's behalf. Adobe will not associate your IP address with any other data held by Adobe. You may opt-out of cookies by visiting: Data Collection Opt-Out. You may also refuse the use of cookies by selecting the appropriate settings on your browser. However, please note that if you do opt-out you may not be able to use the full functionality of this website. To find out more about Adobe Analytics, Adobe's privacy policy and opting out of its cookies please visit: Adobe Privacy Choices
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Web beacons.</strong> THOUCENTRIC includes a web beacon, which is a graphic image, in a majority of the HTML email messages we send. THOUCENTRIC uses web beacons, alone or in conjunction, with cookies to compile information about your usage of THOUCENTRIC websites and interaction with emails from THOUCENTRIC. We use the capability to determine whether or not an email has been received, opened, or when an URL has been clicked inside of an email that directs you to one of Thoucentric websites. These web beacons are used to: (i) operate and improve THOUCENTRIC websites, services, and email communications, (ii) send emails in a format user can read and (iii) track the aggregate number of emails opened. The web beacon does not collect your personal information, however the information compiled by the web beacon allows us to tie a user to information THOUCENTRIC has collected in data collection process as set out in this Privacy Statement. You may refuse the use of web beacons by selecting the appropriate settings on your email program to disable image and refraining from clicking on any links in email messages.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                By continuing to browse or use our Sites and services, you agree that we can store and access cookies and other tracking technologies as described herein.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Heap.</strong> This website uses Heap, a web analytics service provided by Heap, Inc. Heap uses cookies to identify website users, which are text files placed on your device to help the website analyze how users use the website. The information generated by the cookie about your use of the site (including your IP address) will be transmitted to and stored by Heap on servers in the United States. Heap will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity. By using this website, you consent to the processing of data about you by Heap in the manner and for the purposes set out above. You can configure your browser to accept or reject these cookies and Heap will respect this decision by not using other means to track you.
              </p>
            </div>
            
            <div id="links" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                LINKS TO OTHER WEB SITES
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This website contains links to other Web sites not operated by THOUCENTRIC.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                THOUCENTRIC is not responsible for the privacy practices or the content of any non-THOUCENTRIC web sites to which we link from the Site. We are not responsible for the protection and privacy of any information you provide whilst visiting other websites and sites not governed by our Privacy Statement. We cannot control the content or security of such websites. We cannot be held responsible for any loss or damage incurred by a user as a result of visiting such websites. No links are intended to be, nor should be construed as, an endorsement of any kind by us of that other website.
              </p>
            </div>
            
            <div id="access" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                ACCESS RIGHTS
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                In accordance with applicable data protection laws, including but not limited to the GDPR, you have a right to request a copy of the personal information we hold about you and details of how we use that information. If any of the information held about you is incorrect or out of date, you have the right to amend or rectify it, please follow the process outlined below and we will amend our records where appropriate. You also have the right to require us to erase your personal data, stop processing your personal data, restricting the processing of your personal information, right of portability of your personal information and/or to withdraw your consent to processing. This may not apply if there are other legal justifications to continue processing. If you think we may have incorrect personal information or would like a copy of the personal information we hold on you, or to exercise any other data protection right, please contact us. Please note that we need you to prove who you are before we can provide you with any information.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You also have a right to lodge a complaint with a relevant supervisory authority.
              </p>
            </div>
            
            <div id="use" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                USE OF THOUCENTRIC WEB SITES
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Your access to and use of the Site are subject to this Privacy Statement and certain other terms and conditions, contained in our Terms and Conditions of Use.
              </p>
            </div>
            
            <div id="contact" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-[#f16539] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#f16539] mr-3 rounded-sm"></span>
                CONTACT US
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                For further questions you may contact the appropriate data protection point of contact:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Data Protection Office<br />
                Thoucentric Technology Private Limited
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy; 