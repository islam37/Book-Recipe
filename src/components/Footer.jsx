import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
                <span className="text-white text-2xl">🍽️</span>
              </div>
              <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                RecipeBook
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Discover thousands of recipes from professional chefs and home cooks around the world.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-amber-500"></span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">📍</span>
                <span>123 Recipe Street, Sylhet</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">📞</span>
                <span>+8801568289690</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✉️</span>
                <span>islamuddin3725@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">⏰</span>
                <span>Mon-Fri: 9AM - 5PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-amber-500"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/recipes" className="text-gray-400 hover:text-amber-400 transition-colors">Recipes</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8 mb-6">
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl"><FaLinkedin /></a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl"><FaPinterestP /></a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-xl"><FaYoutube /></a>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RecipeBook. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
