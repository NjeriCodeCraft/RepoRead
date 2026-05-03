import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TermsOfService = () => {
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
            Terms of <span className="text-[#F7604D]">Service</span>
          </h1>
          <p className="text-gray-400">Last updated: May 3, 2026</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using RepoRead, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our service. Your continued use of 
              RepoRead constitutes acceptance of any modifications to these terms.
            </p>
          </section>

          {/* Use of Service */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              2. Use of Service
            </h2>
            <p className="text-gray-300 leading-relaxed">
              RepoRead provides tools to analyze and generate README files for GitHub repositories. 
              You agree to use the service only for lawful purposes and in accordance with these terms. 
              You must not misuse our service or attempt to access it using unauthorized methods.
            </p>
          </section>

          {/* User Accounts */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              3. User Accounts
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and 
              for all activities that occur under your account. You must notify us immediately of any 
              unauthorized use of your account. We reserve the right to suspend or terminate accounts 
              that violate these terms.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              4. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All content, features, and functionality of RepoRead are owned by us and protected by 
              international copyright and intellectual property laws. You retain ownership of any 
              content you generate using our service. We do not claim ownership of your repository 
              data or generated README files.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              RepoRead is provided "as is" without warranties of any kind, either express or implied. 
              We shall not be liable for any indirect, incidental, or consequential damages arising 
              from your use of the service. Your use of RepoRead is at your own risk.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="border-l-4 border-[#F7604D] pl-6">
            <h2 className="text-2xl font-semibold mb-3 text-[#F7604D]">
              6. Changes to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. We will notify users 
              of any material changes by updating the "Last updated" date at the top of this page. 
              Your continued use of RepoRead after changes constitutes acceptance of the modified terms.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-center">
            If you have any questions about these Terms of Service, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

// Made with Bob