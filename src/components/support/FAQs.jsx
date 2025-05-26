import React from 'react';

function FAQs() {
  // FAQ data with questions and answers
  const faqs = [
    {
      question: "What types of security cameras does Smart Shield offer?",
      answer: "Smart Shield offers a wide range of security cameras including indoor and outdoor cameras, dome cameras, bullet cameras, PTZ cameras, IP cameras, wireless cameras, and smart doorbell cameras. Our products are suited for both home and business security purposes."
    },
    {
      question: "How do I choose the right security system for my needs?",
      answer: "To choose the right security system, consider the size of the area you want to monitor, indoor vs. outdoor requirements, resolution needs, connectivity options, and your budget. Our team can provide a free consultation to recommend the most appropriate system for your specific needs."
    },
    {
      question: "Do Smart Shield cameras work during power outages?",
      answer: "Many of our security systems come with battery backup options to ensure continued monitoring during power outages. We also offer solar-powered camera options and systems with uninterruptible power supplies (UPS) for critical security needs."
    },
    {
      question: "Can I view my security camera footage remotely?",
      answer: "Yes, all Smart Shield camera systems come with mobile apps and web interfaces that allow you to view live footage and recordings remotely from anywhere with an internet connection. Our cloud storage options also ensure your footage is secure and accessible."
    },
    {
      question: "Does Smart Shield offer professional installation?",
      answer: "Yes, we offer professional installation services for all our security systems. Our certified technicians will ensure your system is properly installed, configured, and optimized for your specific security needs."
    },
    {
      question: "What warranty does Smart Shield provide on its products?",
      answer: "Smart Shield provides a standard 2-year warranty on all products. We also offer extended warranty options of up to 5 years. Our warranty covers manufacturing defects and normal wear and tear. Please refer to the specific product for detailed warranty information."
    },
    {
      question: "Is technical support included with my purchase?",
      answer: "Yes, all purchases include free technical support. Our support team is available via phone, email, and live chat to assist with installation, troubleshooting, and any other questions you may have about your security system."
    },
    {
      question: "Does Smart Shield offer monitoring services?",
      answer: "Yes, we offer 24/7 professional monitoring services for an additional monthly fee. Our monitoring center will alert you and the appropriate authorities in case of any security breaches or emergencies detected by your system."
    },
    {
      question: "What is the return policy for Smart Shield products?",
      answer: "We offer a 30-day money-back guarantee on all our products. If you're not satisfied with your purchase for any reason, you can return it in its original condition for a full refund or exchange within 30 days of purchase."
    },
    {
      question: "How secure is the data from my security cameras?",
      answer: "Smart Shield takes data security very seriously. Our systems use end-to-end encryption for all video transmission and storage. We also implement multiple security layers to protect against unauthorized access to your security footage and personal information."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-4">
          Contact our support team for assistance with any other questions or concerns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/support" 
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Support
          </a>
          <a 
            href="tel:+15551234567" 
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQs;