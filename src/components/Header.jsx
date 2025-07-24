import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = ({ onNavClick, onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (category) => {
    onNavClick(category);
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <header className="bg-[#17212C] text-white shadow-md sticky top-0 z-40 border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl">
                <span className="font-light text-orange-500">coding</span>
                <span className="font-bold">ninjas</span>
              </a>
            </div>
            <nav className="hidden lg:flex items-center space-x-6">
              <button
                onClick={() => handleLinkClick("Job Bootcamp")}
                className="hover:text-orange-400 transition duration-150 ease-in-out flex items-center py-5"
              >
                Job Bootcamp <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={() => handleLinkClick("IIT Certifications")}
                className="hover:text-orange-400 transition duration-150 ease-in-out flex items-center"
              >
                IIT Certifications <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={() => handleLinkClick("New Launches")}
                className="hover:text-orange-400 transition duration-150 ease-in-out flex items-center"
              >
                New Launches <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition"
            >
              Login
            </button>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-orange-400"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleLinkClick("Job Bootcamp")}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:text-orange-400 hover:bg-gray-700"
            >
              Job Bootcamp
            </button>
            <button
              onClick={() => handleLinkClick("IIT Certifications")}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:text-orange-400 hover:bg-gray-700"
            >
              IIT Certifications
            </button>
            <button
              onClick={() => handleLinkClick("New Launches")}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:text-orange-400 hover:bg-gray-700"
            >
              New Launches
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
