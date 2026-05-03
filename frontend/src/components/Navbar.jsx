import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              RepoRead
            </h1>
          </div>

          {/* Login Button */}
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 text-white font-medium hover:bg-white/5 rounded-lg transition-colors duration-200 border border-white/10"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Made with Bob
