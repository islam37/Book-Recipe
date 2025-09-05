import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './Context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Debug: Check if logout function exists
  useEffect(() => {
    console.log('Navbar mounted - logout function:', typeof logout);
    console.log('Current user:', user);
  }, [logout, user]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    console.log('Logout button clicked');
    
    if (typeof logout !== 'function') {
      console.error('Logout function is not available');
      return;
    }

    try {
      console.log('Calling logout function...');
      await logout();
      console.log('Logout successful');
      
      setIsMobileMenuOpen(false);
      setIsProfileDropdownOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback: clear local storage and redirect
      localStorage.removeItem('userProfiles');
      navigate('/');
      window.location.reload();
    }
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-gradient-to-r from-amber-50 to-orange-50 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={closeAllMenus}
          >
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
              <span className="text-white text-2xl">🍽️</span>
            </div>
            <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 text-xl ${isScrolled ? '' : 'md:text-2xl'} transition-all`}>
              RecipeBook
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" isScrolled={isScrolled} onClick={closeAllMenus}>Home</NavLink>
            <NavLink to="/all-recipes" isScrolled={isScrolled} onClick={closeAllMenus}>All Recipes</NavLink>
            <NavLink to="/add-recipes" isScrolled={isScrolled} onClick={closeAllMenus}>Add Recipes</NavLink>
            <NavLink to="/my-recipes" isScrolled={isScrolled} onClick={closeAllMenus}>MyRecipes</NavLink>
            <NavLink to="/about" isScrolled={isScrolled} onClick={closeAllMenus}>About</NavLink>
            
            <div className="ml-4 flex items-center space-x-2">
              {user ? (
                <div className="relative">
                  {/* Profile Icon */}
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {user.email ? user.email[0].toUpperCase() : 'U'}
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">Welcome back!</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        👤 View Profile
                      </Link>
                      
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        🚪 Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="px-4 py-2 rounded-lg font-medium bg-white text-amber-600 border border-amber-200 shadow-sm hover:shadow-md hover:bg-amber-50 transition-all duration-300"
                    onClick={closeAllMenus}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
                    onClick={closeAllMenus}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-amber-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/all-recipes" onClick={() => setIsMobileMenuOpen(false)}>Recipes</MobileNavLink>
              <MobileNavLink to="/add-recipes" onClick={() => setIsMobileMenuOpen(false)}>Add Recipes</MobileNavLink>
              <MobileNavLink to="/my-recipes" onClick={() => setIsMobileMenuOpen(false)}>My Recipes</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
              
              <div className="pt-4 flex flex-col space-y-3 border-t border-gray-100">
                {user ? (
                  <>
                    <div className="px-4 py-2 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {user.email ? user.email[0].toUpperCase() : 'U'}
                      </div>
                      <span className="text-sm text-gray-600">{user.email}</span>
                    </div>
                    
                    <MobileNavLink 
                      to="/profile" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-center"
                    >
                      👤 View Profile
                    </MobileNavLink>
                    
                    <button 
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      🚪 Logout
                    </button>
                  </>
                ) : (
                  <>
                    <MobileNavLink 
                      to="/login" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-center"
                    >
                      Login
                    </MobileNavLink>
                    <MobileNavLink 
                      to="/signup" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:shadow-lg"
                    >
                      Sign Up
                    </MobileNavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Close dropdown when clicking outside */}
      {isProfileDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsProfileDropdownOpen(false)}
        />
      )}
    </nav>
  );
};

// NavLink component for desktop
const NavLink = ({ to, children, isScrolled, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-3 py-2 rounded-md font-medium transition-all relative group
      ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
  </Link>
);

// NavLink component for mobile
const MobileNavLink = ({ to, children, onClick, className = '' }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors text-center ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;