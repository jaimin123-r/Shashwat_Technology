import React from 'react';
import { Globe, Instagram, Music, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-8 h-8" />
              <span className="text-2xl font-bold">Wander</span>
              <span className="text-sm">®</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Find your happy place ™</p>
            <p className="text-gray-500 text-xs">© 2025 Wander.com, Inc.</p>
          </div>

          {/* For Guests Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              For Guests
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* For Partners Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              For Partners
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Wander Operated
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Wander Branded
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Ambassadors
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Travel Agents
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Wander Store
                </a>
              </li>
            </ul>
          </div>

          {/* For Everyone Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              For Everyone
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  About Wander
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Customer reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Join the team
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                  See more
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-start space-x-6">
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="TikTok"
            >
              <Music className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;