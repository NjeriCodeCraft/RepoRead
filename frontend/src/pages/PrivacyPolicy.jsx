import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-[#F7604D] transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-[#F7604D]">Policy</span>
          </h1>
          <p className="text-gray-400">Last updated: May 3, 2026</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              1. Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We collect information you provide when creating an account, including your email address 
              and username. We also collect repository URLs and generated README content that you choose 
              to save. Usage data such as feature interactions and session information is collected to 
              improve our service.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              2. How We Use Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Your information is used to provide and maintain RepoRead's services, including generating 
              README files and storing your saved content. We use your email for account-related 
              communications and service updates. Usage data helps us analyze and improve the platform's 
              functionality and user experience.
            </p>
          </section>

          {/* Data Storage */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              3. Data Storage
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Your data is stored securely on encrypted servers with industry-standard security measures. 
              We retain your account information and saved content for as long as your account remains 
              active. You can request deletion of your data at any time by contacting us or deleting 
              your account.
            </p>
          </section>

          {/* Third Party Services */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              4. Third Party Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              RepoRead integrates with GitHub's API to access public repository information. We do not 
              share your personal information with third parties except as necessary to provide our 
              services. Any third-party services we use are required to maintain the confidentiality 
              of your information.
            </p>
          </section>

          {/* Contact Us */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              5. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or how we handle your 
              data, please contact us. We are committed to addressing your privacy concerns and ensuring 
              transparency in our data practices. Your privacy and trust are important to us.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-center">
            We are committed to protecting your privacy and handling your data responsibly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

// Made with Bob