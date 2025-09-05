import React from 'react';

const Testimonials = () => {
  const feedback = [
    { 
      name: "Sophia Martinez", 
      review: "The recipes are absolutely incredible! I've improved my cooking skills tremendously thanks to the expert guidance from world-class chefs.",
      role: "Home Chef",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    { 
      name: "Liam Johnson", 
      review: "Booking my first cooking session was seamless, and the experience exceeded all my expectations. The platform is intuitive and the chefs are phenomenal!",
      role: "Food Blogger",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    { 
      name: "Emma Thompson", 
      review: "As a busy professional, I love how I can learn gourmet cooking at my own pace. The video quality is excellent and the recipes are restaurant-quality.",
      role: "Marketing Director",
      rating: 4,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    { 
      name: "Noah Williams", 
      review: "I've tried many cooking platforms, but RecipeBook stands out with its premium chef lineup and diverse cuisine options. Worth every penny!",
      role: "Culinary Student",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-medium text-sm mb-4">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">Users Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of home cooks trust RecipeBook for their culinary journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedback.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg 
                    key={starIndex} 
                    className={`w-5 h-5 ${starIndex < f.rating ? 'fill-current' : 'text-gray-300'}`} 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                "{f.review}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={f.image} 
                  alt={f.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{f.name}</h4>
                  <p className="text-sm text-gray-500">{f.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-1 text-amber-600">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;