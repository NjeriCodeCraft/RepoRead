import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SavedFiles() {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);
  
  // Mock data for saved READMEs
  const [savedReadmes] = useState([
    {
      id: 1,
      repoName: 'awesome-react-app',
      dateGenerated: '2026-04-28',
      url: 'https://github.com/user/awesome-react-app'
    },
    {
      id: 2,
      repoName: 'nodejs-backend-api',
      dateGenerated: '2026-04-25',
      url: 'https://github.com/user/nodejs-backend-api'
    },
    {
      id: 3,
      repoName: 'python-data-analysis',
      dateGenerated: '2026-04-20',
      url: 'https://github.com/user/python-data-analysis'
    },
    {
      id: 4,
      repoName: 'vue-dashboard-template',
      dateGenerated: '2026-04-15',
      url: 'https://github.com/user/vue-dashboard-template'
    }
  ]);

  const handleView = (readmeId) => {
    // Toggle expanded state
    setExpandedId(expandedId === readmeId ? null : readmeId);
  };

  // Mock README content generator
  const getMockReadmeContent = (readme) => {
    return `# ${readme.repoName}

## 📋 Description
This is a comprehensive README for the ${readme.repoName} project.

## 🚀 Features
- Feature 1: Advanced functionality
- Feature 2: User-friendly interface
- Feature 3: High performance optimization
- Feature 4: Comprehensive documentation

## 📦 Installation

\`\`\`bash
git clone ${readme.url}
cd ${readme.repoName}
npm install
\`\`\`

## 🔧 Usage

\`\`\`javascript
import { Component } from './${readme.repoName}';

const app = new Component();
app.run();
\`\`\`

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
MIT License - Generated on ${readme.dateGenerated}`;
  };

  const handleDownload = (readme) => {
    // TODO: Implement actual download functionality
    const mockContent = `# ${readme.repoName}\n\nGenerated on ${readme.dateGenerated}\n\n## Description\n\nThis is a mock README file.`;
    const blob = new Blob([mockContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${readme.repoName}-README.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white">
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
                to="/profile"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Profile
              </Link>
              <button
                onClick={() => navigate('/')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12">Your Saved READMEs</h1>

        {savedReadmes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedReadmes.map((readme) => (
              <div
                key={readme.id}
                className={`bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all ${
                  expandedId === readme.id ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {readme.repoName}
                    </h3>
                    <p className="text-sm text-gray-400">
                      Generated on {new Date(readme.dateGenerated).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <button
                      onClick={() => handleView(readme.id)}
                      className="flex-1 bg-[#F7604D] hover:bg-[#e5533d] text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      {expandedId === readme.id ? 'Hide' : 'View'}
                    </button>
                    <button
                      onClick={() => handleDownload(readme)}
                      className="flex-1 bg-transparent hover:bg-[#1a1a1a] border-2 border-[#F7604D] text-[#F7604D] hover:text-white hover:border-[#e5533d] font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Download
                    </button>
                  </div>

                  {/* Expanded README Preview */}
                  {expandedId === readme.id && (
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <h4 className="text-lg font-semibold text-white mb-3">README Preview</h4>
                      <div className="bg-[#0a0a0a] border border-gray-700 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                          {getMockReadmeContent(readme)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center space-y-6">
              <div className="text-gray-500">
                <svg
                  className="mx-auto h-24 w-24 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-300 mb-2">
                  No READMEs saved yet
                </h2>
                <p className="text-gray-500 mb-6">
                  Generate your first one!
                </p>
              </div>
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-[#F7604D] hover:bg-[#e5533d] text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Made with Bob