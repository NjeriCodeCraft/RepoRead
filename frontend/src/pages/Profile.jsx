import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState('John Doe');
  const [email] = useState('john.doe@example.com');
  const [isSaving, setIsSaving] = useState(false);

  // Get user initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSaveChanges = async () => {
    setIsSaving(true);
    // TODO: Implement API call to save profile changes
    setTimeout(() => {
      setIsSaving(false);
      // Show success message or notification
    }, 1000);
  };

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/dashboard" className="text-2xl font-bold text-white">
                RepoRead
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/saved"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Saved Files
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12">Your Profile</h1>

        {/* Profile Card */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 mb-8">
          <div className="flex flex-col items-center mb-8">
            {/* Avatar with Initials */}
            <div className="w-24 h-24 rounded-full bg-[#F7604D] flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-white">
                {getInitials(name)}
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7604D] focus:border-transparent"
              />
            </div>

            {/* Email Field (Read Only) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                readOnly
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-gray-400 cursor-not-allowed"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSaveChanges}
              disabled={isSaving}
              className="w-full bg-[#F7604D] hover:bg-[#d94d3a] disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* READMEs Generated Card */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-[#F7604D] mb-2">12</div>
              <div className="text-gray-300 text-lg">READMEs Generated</div>
            </div>
          </div>

          {/* Files Saved Card */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-[#F7604D] mb-2">8</div>
              <div className="text-gray-300 text-lg">Files Saved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Made with Bob