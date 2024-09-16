import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="top-0 left-0 right-0 z-50 m-5 border-gray-200">
      <div className="max-w-4xl mx-auto px-4 rounded-full backdrop-blur-sm border-gray-100 bg-white bg-opacity-5">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-white mx-auto sm:mx-0">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </a>

          {/* Navigation links visible on medium screens and above */}
          <div className="hidden sm:flex items-center space-x-4">
            <a href="/about" className="text-gray-300 hover:text-white text-sm font-medium">About</a>
            <a href="/projects" className="text-gray-300 hover:text-white text-sm font-medium">Projects</a>
            <a href="/experience" className="text-gray-300 hover:text-white text-sm font-medium">Experience</a>
            <a href="/contact" className="text-gray-300 hover:text-white text-sm font-medium">Contact</a>

           
          </div>

          {/* Social media icons visible on medium screens and above */}
          <div className="hidden sm:flex items-center space-x-3">
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://github.com" className="text-gray-300 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
