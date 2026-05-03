import { Link } from 'react-router-dom'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            From Repo to README
            <br />
            <span className="text-[#F7604D]">in Seconds</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered README generator that transforms your GitHub repository
            into beautiful, comprehensive documentation instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/trial')}
              className="px-8 py-4 bg-[#F7604D] text-white font-semibold rounded-lg hover:bg-[#e5533c] transition-all duration-200 shadow-lg shadow-[#F7604D]/20 hover:shadow-[#F7604D]/40 hover:scale-105 w-full sm:w-auto"
            >
              Try it First
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-200 w-full sm:w-auto"
            >
              Get Started
            </button>
          </div>

          {/* Optional: Feature highlights or visual element */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#F7604D]/50 transition-colors duration-200">
              <div className="w-12 h-12 bg-[#F7604D]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#F7604D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Generate comprehensive READMEs in seconds, not hours.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#F7604D]/50 transition-colors duration-200">
              <div className="w-12 h-12 bg-[#F7604D]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#F7604D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400">Smart analysis of your codebase for accurate documentation.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#F7604D]/50 transition-colors duration-200">
              <div className="w-12 h-12 bg-[#F7604D]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#F7604D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
              <p className="text-gray-400">Edit and refine your README to match your style.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 RepoRead. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </Link>
                <a href="mailto:hello@reporead.com" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

// Made with Bob
