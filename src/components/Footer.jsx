import React from 'react';
import {  Link } from 'react-router';

const Footer = () => {
    return (
        <div>
           <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
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
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <i className="fab fa-pinterest-p text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-amber-500"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/chefs">Chefs</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Categories
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-amber-500"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/recipes/breakfast">Breakfast</Link></li>
              <li><Link to="/recipes/lunch">Lunch</Link></li>
              <li><Link to="/recipes/dinner">Dinner</Link></li>
              <li><Link to="/recipes/desserts">Desserts</Link></li>
              <li><Link to="/recipes/vegetarian">Vegetarian</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-amber-500"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for weekly recipe inspiration.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
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
            
        </div>
    );
};

export default Footer;