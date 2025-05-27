import React, { useState } from 'react';
import SupportForm from '../components/support/SupportForm';
import FAQs from '../components/support/FAQs';
import Contact from './Contact';

function SupportPage() {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Centro de soporte</h1>
        
        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-4" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('contact')}
              className={`${
                activeTab === 'contact'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              } px-3 py-2 font-medium text-sm rounded-md`}
            >
              Contactar con soporte
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`${
                activeTab === 'faqs'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              } px-3 py-2 font-medium text-sm rounded-md`}
            >
              Preguntas frecuentes
            </button>
          </nav>
        </div>
        
        {/* Tab content */}
        <div>
          {activeTab === 'contact' ? <Contact /> : <FAQs />}
        </div>
      </div>
    </div>
  );
}

export default SupportPage;