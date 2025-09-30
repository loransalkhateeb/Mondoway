import React, { useState, useEffect } from 'react';

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Restaurants',
      icon: '🍽️',
      description: 'Enjoy the experience of ordering your favorite meal easily and quickly from the best restaurants near you.',
      features: ['Quick Delivery', 'Best Restaurants', 'Easy Ordering', 'Real-time Tracking'],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800'
    },
    {
      id: 2,
      title: 'Clothes',
      icon: '👔',
      description: 'Embark on a unique online shopping journey that adds more elegance and style through the app.',
      features: ['Fashion Brands', 'Style Guide', 'Size Matching', 'Trend Updates'],
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:from-green-600 hover:to-green-800'
    },
    {
      id: 3,
      title: 'Gifts',
      icon: '🎁',
      description: 'Make your occasions more special with the finest gifts for your friends and loved ones — Mondoway is always there to share your happiness.',
      features: ['Special Occasions', 'Gift Wrapping', 'Personalization', 'Express Delivery'],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:from-purple-600 hover:to-purple-800'
    },
    {
      id: 4,
      title: 'Electronics',
      icon: '🔦',
      description: 'Stay up to date with the latest electronics and home appliances from the most renowned stores.',
      features: ['Latest Tech', 'Home Appliances', 'Brand Warranty', 'Expert Reviews'],
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:from-orange-600 hover:to-orange-800'
    },
    {
      id: 5,
      title: 'Home',
      icon: '🏠',
      description: 'Everything you need to furnish and equip your home with greater comfort and convenience is now available.',
      features: ['Furniture', 'Decor Items', 'Home Essentials', 'Interior Design'],
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:from-cyan-600 hover:to-cyan-800'
    },
    {
      id: 6,
      title: 'Cars',
      icon: '🚋',
      description: 'Discover the latest cars from top global companies, all accessible within the app.',
      features: ['Global Brands', 'Car Reviews', 'Price Comparison', 'Test Drive Booking'],
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:from-red-600 hover:to-red-800'
    },
    {
      id: 7,
      title: 'Real Estate',
      icon: '🏗️',
      description: 'Own, rent, or sell a house, apartment, villa, farm, or land with ease.',
      features: ['Buy & Sell', 'Rental Services', 'Property Valuation', 'Legal Support'],
      color: 'from-indigo-500 to-indigo-700',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:from-indigo-600 hover:to-indigo-800'
    },
    {
      id: 8,
      title: 'Health Care',
      icon: '🏥',
      description: 'Your health matters; access the best clinics and doctors across all fields.',
      features: ['Expert Doctors', 'Online Consultation', 'Appointment Booking', 'Medical Records'],
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:from-pink-600 hover:to-pink-800'
    },
    {
      id: 9,
      title: 'Factories',
      icon: '🏭',
      description: 'Thinking of a project? Connect easily with skilled teams for support.',
      features: ['Project Management', 'Skilled Teams', 'Industrial Solutions', 'Quality Assurance'],
      color: 'from-gray-500 to-gray-700',
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:from-gray-600 hover:to-gray-800'
    },
    {
      id: 10,
      title: 'Mart Market',
      icon: '🛒',
      description: 'Find all the supplies you need for your home at Mondoway Market.',
      features: ['Daily Essentials', 'Fresh Products', 'Bulk Orders', 'Same Day Delivery'],
      color: 'from-emerald-500 to-emerald-700',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-800'
    },
    {
      id: 11,
      title: 'Tourism',
      icon: '🚢',
      description: 'Our application contains 350,000 hotels around the world. A complete trip — from hotels to organizing tours and communicating with travel agencies.',
      features: ['350K+ Hotels', 'Tour Planning', 'Travel Agencies', 'Global Destinations'],
      color: 'from-teal-500 to-teal-700',
      bgColor: 'bg-teal-50',
      hoverColor: 'hover:from-teal-600 hover:to-teal-800'
    },
    {
      id: 12,
      title: 'Bazaar',
      icon: '🎪',
      description: 'Buy and sell used items at Mondoway Bazaar, connecting you with like-minded individuals.',
      features: ['Buy & Sell Used', 'Community Marketplace', 'Secure Transactions', 'User Ratings'],
      color: 'from-violet-500 to-violet-700',
      bgColor: 'bg-violet-50',
      hoverColor: 'hover:from-violet-600 hover:to-violet-800'
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-orange-200/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-amber-200/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-red-100/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-200/20 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent mb-6 animate-pulse">
                  Our Services
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full animate-pulse mb-8"></div>
                <p className="text-xl text-red-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                  More than just an app, Mondoway is a fully integrated platform created to deliver a smooth, convenient, and enjoyable user experience. It saves you time, effort, and makes everyday life easier and more comfortable.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`group relative ${service.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border border-white/50 backdrop-blur-sm overflow-hidden cursor-pointer`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                      animation: 'fadeInUp 0.8s ease-out forwards'
                    }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    <div className="relative z-10 text-center mb-6">
                      <div className="inline-block p-4 bg-white/80 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <span className="text-4xl animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                          {service.icon}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4 text-center group-hover:scale-105 transition-transform duration-300`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-center space-x-2 text-sm text-gray-600"
                            style={{
                              animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s`,
                              animation: 'fadeIn 0.5s ease-out forwards'
                            }}
                          >
                            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full animate-ping" style={{animationDelay: `${index * 0.3}s`}}></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse" style={{animationDelay: `${index * 0.4}s`}}></div>
                    
                    {hoveredService === service.id && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl animate-fade-in"></div>
                    )}
                  </div>
                ))}
              </div>    
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-red-100">
                <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
                  Ready to Experience Mondoway?
                </h2>
                <p className="text-xl text-red-700 mb-8 leading-relaxed">
                  Download the app today and discover all services in one convenient platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.location.hash = 'home'}
                    className="bg-gradient-to-r from-red-600 to-red-800 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 transform hover:from-red-700 hover:to-red-900"
                  >
                    Download App
                  </button>
                  <button 
                    onClick={() => window.location.hash = 'about'}
                    className="border-2 border-red-600 text-red-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-red-50 hover:scale-105 transition-all duration-500 transform"
                  >
                    Learn More
                  </button> 
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ServicesPage;