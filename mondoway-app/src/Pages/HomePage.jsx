import React, { useState, useEffect } from "react";

function HomePage({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const sliderImages = [
    "/Images/1.png",
    "/Images/Screenshot 2025-09-15 012114.png",
    "/Images/482316662_620794794277528_6740206193456247051_n.jpg"
  ];

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const handleNavigation = (tabName) => {
    if (tabName === "Services" && onNavigate) {
      onNavigate("services");
    } else if (tabName === "About Us" && onNavigate) {
      onNavigate("about");
    } else if (tabName === "Contact Us" && onNavigate) {
      onNavigate("contact");
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3); }
          50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.6); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slide-left { animation: slideInFromLeft 1s ease-out; }
        .animate-slide-right { animation: slideInFromRight 1s ease-out; }
        .animate-scale { animation: scaleIn 0.8s ease-out; }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .gradient-text {
          background: linear-gradient(45deg, #dc2626, #f97316, #dc2626);
          background-size: 200% 200%;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
        {/* Animated cursor follower */}
        <div
          className="fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transition: "all 0.1s ease-out"
          }}
        />

        {/* Hero Section with Enhanced Slider */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            {sliderImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                
                {/* Animated overlay particles */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows with glow effect */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 glass-effect text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 group animate-glow"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 glass-effect text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 group animate-glow"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Enhanced slide indicators */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? "bg-white w-12 animate-glow" 
                    : "bg-white/40 w-2 hover:bg-white/70 hover:w-8"
                }`}
              />
            ))}
          </div>

          {/* Hero content with animations */}
          <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-8">
            <div className="max-w-7xl mx-auto text-center space-y-10">
              <div className="animate-slide-left">
                <h1 className="text-7xl md:text-9xl font-black gradient-text mb-6 drop-shadow-2xl tracking-tight">
                  Welcome To Mondoway
                </h1>
                <div className="flex justify-center space-x-2 mb-8">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>

              <p className="text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-2xl font-light animate-slide-right"
                 style={{ animationDelay: "0.3s" }}>
                Jordan's first all-in-one smart platform bringing shopping, travel, food delivery, and trusted marketplace together.
              </p>

              <div className="flex justify-center space-x-6 animate-scale" style={{ animationDelay: "0.6s" }}>
                <button
                  onClick={() => handleNavigation("Services")}
                  className="group relative bg-gradient-to-r from-red-600 to-red-800 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-110 overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
                <button
                  onClick={() => handleNavigation("About Us")}
                  className="group glass-effect text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/30 transition-all duration-500 transform hover:scale-110 border-2 border-white"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="relative py-32 px-6 md:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-3xl"
                style={{
                  width: `${100 + Math.random() * 200}px`,
                  height: `${100 + Math.random() * 200}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-7xl md:text-8xl font-black gradient-text mb-8 animate-scale">
                Our Services
              </h2>
              <div className="flex justify-center space-x-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 w-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"
                    style={{
                      transform: `translateY(${scrollY * 0.01}px)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              <p className="text-2xl text-red-700 max-w-3xl mx-auto leading-relaxed">
                Everything you need, all in one powerful platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Restaurants", icon: "🍽️", desc: "Order from the best restaurants near you", color: "from-blue-500 to-blue-700" },
                { title: "Fashion", icon: "👔", desc: "Shop the latest trends with style", color: "from-green-500 to-green-700" },
                { title: "Gifts", icon: "🎁", desc: "Perfect gifts for every occasion", color: "from-purple-500 to-purple-700" },
                { title: "Electronics", icon: "🔦", desc: "Latest tech and appliances", color: "from-orange-500 to-orange-700" },
                { title: "Home", icon: "🏠", desc: "Furnish your dream home", color: "from-cyan-500 to-cyan-700" },
                { title: "Automotive", icon: "🚗", desc: "Discover cars from top brands", color: "from-red-500 to-red-700" },
                { title: "Real Estate", icon: "🏗️", desc: "Buy, rent, or sell property", color: "from-indigo-500 to-indigo-700" },
                { title: "Healthcare", icon: "🏥", desc: "Connect with top doctors", color: "from-pink-500 to-pink-700" },
                { title: "Tourism", icon: "✈️", desc: "350,000+ hotels worldwide", color: "from-teal-500 to-teal-700" }
              ].map((service, index) => (
                <div
                  key={service.title}
                  className="group relative bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl hover:shadow-red-500/20 transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 cursor-pointer animate-scale"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: `translateY(${scrollY * 0.02}px)`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-block p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 mb-6 animate-float">
                      <span className="text-6xl">{service.icon}</span>
                    </div>
                    
                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                      {service.desc}
                    </p>
                  </div>

                  {/* Animated corner accents */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <button 
                onClick={() => handleNavigation("Services")}
                className="group relative bg-gradient-to-r from-red-600 to-red-800 text-white px-16 py-6 rounded-full font-bold text-2xl hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-110 overflow-hidden animate-glow"
              >
                <span className="relative z-10">Explore All Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6 bg-gradient-to-br from-red-600 via-red-700 to-red-900 overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.5 + 0.3
                }}
              />
            ))}
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 animate-scale">
              Ready to Get Started?
            </h2>
            <p className="text-2xl text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of users experiencing the future of integrated services
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => handleNavigation("Contact Us")}
                className="bg-white text-red-600 px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-500 transform hover:scale-110"
              >
                Contact Us Today
              </button>
              <button
                onClick={() => handleNavigation("About Us")}
                className="glass-effect text-white px-12 py-6 rounded-full font-bold text-xl border-2 border-white hover:bg-white/20 transition-all duration-500 transform hover:scale-110"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;