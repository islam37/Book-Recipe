import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-medium text-sm mb-4">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">RecipeBook</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming home cooking through world-class culinary expertise and innovative technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Cooking session with professional chef" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">10K+</div>
                <div className="text-sm text-gray-600">Happy Home Cooks</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At RecipeBook, we believe everyone deserves access to world-class culinary education. 
              We bridge the gap between home cooks and professional chefs, creating an immersive 
              cooking experience that transforms your kitchen into a culinary classroom.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded in 2018 by a team of food enthusiasts and tech innovators, RecipeBook has 
              grown into a premier platform connecting cooking enthusiasts with award-winning chefs 
              from around the world.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Innovative Platform</h4>
                  <p className="text-sm text-gray-600">Cutting-edge technology for seamless cooking experiences</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Community</h4>
                  <p className="text-sm text-gray-600">100+ world-class chefs sharing their knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-amber-50 rounded-2xl hover:bg-amber-100 transition-colors duration-300">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Quality</h4>
              <p className="text-gray-600">
                We maintain the highest standards in chef selection, recipe development, and user experience.
              </p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-2xl hover:bg-amber-100 transition-colors duration-300">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Community</h4>
              <p className="text-gray-600">
                We foster connections between chefs and cooking enthusiasts to share knowledge and passion.
              </p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-2xl hover:bg-amber-100 transition-colors duration-300">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">
                We continuously evolve our platform to deliver cutting-edge culinary experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership Team</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start bg-amber-50 rounded-2xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Founder" 
                className="w-20 h-20 rounded-2xl object-cover mr-6"
              />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Michael Chen</h4>
                <p className="text-amber-600 text-sm mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Former executive chef with a passion for making culinary education accessible to everyone.
                </p>
              </div>
            </div>
            
            <div className="flex items-start bg-amber-50 rounded-2xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" 
                alt="Head of Culinary" 
                className="w-20 h-20 rounded-2xl object-cover mr-6"
              />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Isabella Rossi</h4>
                <p className="text-amber-600 text-sm mb-3">Head of Culinary</p>
                <p className="text-gray-600 text-sm">
                  Michelin-starred chef with over 15 years of experience in international cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-10 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Culinary Journey?
          </h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Join thousands of home cooks who are already mastering new recipes with our expert chefs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-amber-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
              Explore Recipes
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              Meet Our Chefs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;