import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Register attempt:', { name, email, password });
    // Navigate to dashboard after registration
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">RepoRead</h1>
          <p className="text-gray-400">Create your account</p>
        </div>

        {/* Register Form */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:outline-none focus:border-[#F7604D] transition-colors duration-200 text-white placeholder-gray-500"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:outline-none focus:border-[#F7604D] transition-colors duration-200 text-white placeholder-gray-500"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:outline-none focus:border-[#F7604D] transition-colors duration-200 text-white placeholder-gray-500"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:outline-none focus:border-[#F7604D] transition-colors duration-200 text-white placeholder-gray-500"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input type="checkbox" id="terms" required className="mt-1 accent-[#F7604D]" />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the{' '}
                <Link to="/terms" className="text-[#F7604D] hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-[#F7604D] hover:underline">Privacy Policy</Link>
              </label>
            </div>
            {/* Register Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#F7604D] text-white font-semibold rounded-lg hover:bg-[#e5533c] transition-all duration-200 shadow-lg shadow-[#F7604D]/20 hover:shadow-[#F7604D]/40 hover:scale-[1.02]"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[#F7604D] hover:text-[#e5533c] font-medium transition-colors duration-200"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// Made with Bob