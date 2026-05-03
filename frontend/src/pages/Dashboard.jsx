import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [githubUrl, setGithubUrl] = useState('');
  const [generatedReadme, setGeneratedReadme] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!githubUrl.trim()) return;
    
    setIsGenerating(true);
    // TODO: Implement API call to generate README
    setTimeout(() => {
      setGeneratedReadme(`# Sample README\n\nThis is a generated README for ${githubUrl}\n\n## Features\n- Feature 1\n- Feature 2\n\n## Installation\n\`\`\`bash\nnpm install\n\`\`\`\n\n## Usage\n\`\`\`javascript\nconst app = require('./app');\napp.start();\n\`\`\``);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedReadme);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedReadme], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
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
                to="/saved-files"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Saved Files
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Input Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-8">Generate Your README</h1>
            
            <div className="space-y-4">
              <label htmlFor="github-url" className="block text-sm font-medium text-gray-300">
                GitHub Repository URL
              </label>
              <input
                id="github-url"
                type="text"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/repo"
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7604D] focus:border-transparent"
              />
              
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !githubUrl.trim()}
                className="w-full bg-[#F7604D] hover:bg-[#d94d3a] disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {isGenerating ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </div>

          {/* Right Panel - Results Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Generated README</h2>
              {generatedReadme && (
                <div className="flex space-x-2">
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-gray-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    Copy
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-[#F7604D] hover:bg-[#e5533d] rounded-lg text-sm font-medium transition-colors"
                  >
                    Download
                  </button>
                </div>
              )}
            </div>

            <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 min-h-[500px] max-h-[600px] overflow-y-auto">
              {generatedReadme ? (
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                  {generatedReadme}
                </pre>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <p>Your generated README will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
