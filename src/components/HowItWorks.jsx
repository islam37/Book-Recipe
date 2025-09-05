import React, { useState, useEffect } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { 
      icon: "🍴", 
      title: "Browse Recipes", 
      description: "Explore our curated collection of premium recipes from world-class chefs",
      details: "Filter by cuisine, difficulty, dietary preferences, or cooking time to find your perfect culinary experience"
    },
    { 
      icon: "⏰", 
      title: "Book Your Slot", 
      description: "Reserve your preferred date and time for a live cooking session",
      details: "Choose between private 1-on-1 sessions or join group classes with other cooking enthusiasts"
    },
    { 
      icon: "👨‍🍳", 
      title: "Interactive Cooking", 
      description: "Join the live session and cook along with expert guidance",
      details: "Our chefs will guide you step-by-step, answer questions, and share professional tips"
    },
    { 
      icon: "🎉", 
      title: "Enjoy & Share", 
      description: "Savor your creation and share your culinary achievement",
      details: "Get a digital certificate for completed recipes and share photos of your dishes on social media"
    },
  ];

  // Auto-rotate steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5% w-72 h-72 bg-amber-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-5% w-96 h-96 bg-orange-200/15 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-medium text-sm mb-4">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">RecipeBook</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From selecting recipes to enjoying your culinary masterpiece, our process is designed for seamless experience
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-2xl">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 -z-10"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform -translate-y-1/2 transition-all duration-1000 -z-10" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
            <div className="flex justify-between">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-300 ${
                    index <= activeStep 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-110' 
                      : 'bg-white text-gray-400 border border-gray-300 shadow-md'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-2xl transition-all duration-500 ${
                index === activeStep
                  ? 'bg-white shadow-2xl transform -translate-y-2 ring-2 ring-amber-500/20'
                  : 'bg-white/70 shadow-md hover:shadow-lg'
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step number */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                index === activeStep 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}>
                {index + 1}
              </div>
              
              {/* Icon with animation */}
              <div className={`text-5xl mb-4 transition-transform duration-500 ${
                index === activeStep ? 'scale-110' : ''
              }`}>
                {step.icon}
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                index === activeStep ? 'text-amber-600' : 'text-gray-800'
              }`}>
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {step.description}
              </p>
              
              <div className={`overflow-hidden transition-all duration-700 ${
                index === activeStep ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-500 text-xs italic">
                  {step.details}
                </p>
              </div>
              
              {/* Animated arrow for active step */}
              {index === activeStep && (
                <div className="mt-4 flex justify-center">
                  <div className="animate-bounce">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Culinary Journey?
          </h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Join thousands of home cooks who are already mastering new recipes with our expert chefs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-amber-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
              Browse Recipes
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;