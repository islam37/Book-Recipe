import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="pt-10  relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Transition */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-10 right-10 animate-bounce-slow">
        <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/40 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
              <span className="text-white text-lg">🔥</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-10 animate-pulse-slow">
        <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-orange-500/40 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white text-sm">👑</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-down">
          Discover & Book <span className="text-amber-400">World-Class</span> Recipes
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Join exclusive cooking sessions, book premium recipes, and connect with world-renowned chefs from the comfort of your kitchen.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
          <Link to='all-recipes'  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
            <span>Explore Premium Recipes</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
         
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-white animate-fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
            <div className="text-white/80">Premium Recipes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">100+</div>
            <div className="text-white/80">Professional Chefs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">10K+</div>
            <div className="text-white/80">Happy Cooks</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 4s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;