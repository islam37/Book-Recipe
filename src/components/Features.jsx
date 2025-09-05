import React, { useState } from 'react';
import { Link } from 'react-router';

const Features = ({ showHeader = true, showViewAllButton = true }) => {
  const [activeRecipe, setActiveRecipe] = useState(null);
  
  const recipes = [
    { 
      id: 1, 
      name: "Italian Pasta", 
      desc: "Classic creamy Alfredo with handmade pasta", 
      rating: 5,
      chef: "Marco Bianchi",
      price: "$49",
      duration: "1h 30m",
      difficulty: "Intermediate",
      ingredients: ["Fresh pasta", "Parmesan", "Heavy cream", "Butter", "Garlic"],
      image: "https://hips.hearstapps.com/hmg-prod/images/spaghetti-sauce-secondary-650cc746c578d.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=980:*"
    },
    { 
      id: 2, 
      name: "Sushi Platter", 
      desc: "Premium Japanese rolls with fresh ingredients", 
      rating: 4,
      chef: "Yuki Tanaka",
      price: "$69",
      duration: "2h",
      difficulty: "Advanced",
      ingredients: ["Sushi rice", "Nori", "Fresh salmon", "Avocado", "Cucumber"],
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    { 
      id: 3, 
      name: "Steak Deluxe", 
      desc: "Juicy ribeye perfection with red wine sauce", 
      rating: 5,
      chef: "James Wilson",
      price: "$59",
      duration: "1h 15m",
      difficulty: "Intermediate",
      ingredients: ["Ribeye steak", "Red wine", "Shallots", "Butter", "Thyme"],
      image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-amber-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Conditional Header */}
        {showHeader && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-medium text-sm mb-4">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Premium Selection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Recipes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked by our culinary experts for an exceptional cooking experience
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${activeRecipe === recipe.id ? 'ring-2 ring-amber-500' : ''}`}
              onMouseEnter={() => setActiveRecipe(recipe.id)}
              onMouseLeave={() => setActiveRecipe(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  {recipe.price}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{recipe.name}</h3>
                  <p className="text-amber-200 text-sm">{recipe.chef}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{recipe.desc}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < recipe.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{recipe.rating}/5</span>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {recipe.duration}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {recipe.difficulty}
                  </span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs text-gray-500">
                      +12
                    </div>
                  </div>
                </div>
                
                <div className="mb-5">
                  <div className="text-sm font-medium text-gray-700 mb-2">Key ingredients:</div>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                      <span key={index} className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">
                        {ingredient}
                      </span>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                        +{recipe.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                    Book Now
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Conditional View All Button */}
        {showViewAllButton && (
          <div className="text-center mt-12">
            <Link to='all-recipes' onClick={() => window.scrollTo(0, 0)}  className="inline-flex items-center px-6 py-3 border border-amber-500 text-amber-500 font-medium rounded-full hover:bg-amber-50 transition-colors">
              View All Recipes
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;