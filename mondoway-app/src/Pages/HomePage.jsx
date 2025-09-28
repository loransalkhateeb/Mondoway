import React, { useState, useEffect } from "react";

const MonTuesWedIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 200 120" className={className} fill="currentColor">
    <rect
      x="20"
      y="20"
      width="12"
      height="80"
      rx="6"
      transform="rotate(-15 26 60)"
    />
    <rect
      x="45"
      y="15"
      width="12"
      height="90"
      rx="6"
      transform="rotate(-10 51 60)"
    />
    <rect
      x="70"
      y="10"
      width="12"
      height="100"
      rx="6"
      transform="rotate(-5 76 60)"
    />
    <circle cx="120" cy="25" r="8" />
    <circle cx="25" cy="110" r="6" />
  </svg>
);

function HomePage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("Home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "/Images/1.png",
    "/Images/Screenshot 2025-09-15 012114.png",
    "/Images/482316662_620794794277528_6740206193456247051_n.jpg"
  ];

  const tabs = [
    { name: "Home", icon: "🏠" },
    { name: "Services", icon: "⚡" },
    { name: "About Us", icon: "👥" },
    { name: "Contact Us", icon: "📞" },
    { name: "Privacy Policy", icon: "🔒" }
  ];

  useEffect(() => {
    setIsLoaded(true);


    const handleScroll = () => {
      const sections = ["home", "services", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            setActiveTab(
              sectionId === "home"
                ? "Home"
                : sectionId === "services"
                ? "Services"
                : sectionId === "about"
                ? "About Us"
                : "Contact Us"
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (tabName) => {
    setActiveTab(tabName);

    if (tabName === "Services" && onNavigate) {
      onNavigate("services");
    } else if (tabName === "About Us" && onNavigate) {
      onNavigate("about");
    } else if (tabName === "Contact Us" && onNavigate) {
      onNavigate("contact");
    } else if (tabName === "Home") {
      scrollToSection("home");
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
        <header
          className={`relative z-10 transition-all duration-1000 ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } bg-white shadow-lg shadow-red-900/20 border-b border-red-200/30`}
        >
          <nav className="flex items-center justify-between p-3 md:p-4">
            <div className="flex items-center group">
              <div className="relative">
                <img
                  src="/Images/b2b_mondo_logo.jpg"
                  alt="Mondoway Logo"
                  className="w-44 h-44 rounded-lg group-hover:scale-110 transition-transform duration-300 object-cover"
                />
              </div>
            </div>

            <div className="hidden md:flex space-x-2 bg-gradient-to-r from-amber-100/80 via-orange-50/90 to-amber-100/80 backdrop-blur-md rounded-full p-2 shadow-lg border border-red-200/50">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleNavigation(tab.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.name
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transform scale-105"
                      : "text-red-800 hover:bg-red-100/60 hover:text-red-900"
                  }`}
                >
                  <span className="text-sm">{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300">
                <span className="text-xl">☰</span>
              </button>
            </div>
          </nav>

          <div className="md:hidden bg-gradient-to-r from-amber-100/90 via-orange-50/95 to-amber-100/90 backdrop-blur-md mx-4 rounded-2xl shadow-xl border border-red-200/50">
            <div className="grid grid-cols-2 gap-2 p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleNavigation(tab.name)}
                  className={`p-4 rounded-xl font-medium transition-all duration-300 flex flex-col items-center space-y-2 ${
                    activeTab === tab.name
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                      : "text-red-800 hover:bg-red-100/60"
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="text-sm">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main
          className={`relative z-10 transition-all duration-1000 delay-300 ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <section id="home" className="relative h-[85vh] overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-8 py-12">
              <div className="max-w-7xl mx-auto text-center space-y-8">
                <div className="relative">
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-800 via-red-600 to-red-800 bg-clip-text text-transparent mb-4 drop-shadow-2xl animate-pulse">
                    Welcome To Mondoway
                  </h1>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-200 rounded-full opacity-50 animate-bounce"></div>
                </div>
                <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
                  Mondoway is the first all-in-one application in Jordan
                  designed to meet all your needs in one smart platform. From
                  seamless shopping, easy travel ticket bookings, and fast food
                  delivery to selling and buying pre-owned items through our
                  trusted Bazaar — Mondoway brings it all together in one place.
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleNavigation("Services")}
                    className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 transform backdrop-blur-sm"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => handleNavigation("About Us")}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 transform backdrop-blur-sm"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-red-200/30 rounded-full animate-pulse"></div>
              <div
                className="absolute top-1/3 right-20 w-24 h-24 bg-orange-200/30 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-amber-200/30 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-20 right-1/3 w-28 h-28 bg-red-100/40 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Section Header with Animation */}
              <div className="text-center mb-20">
                <div className="inline-block">
                  <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent mb-6 animate-pulse">
                    Our Services
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full animate-pulse"></div>
                </div>
                <p className="text-xl text-red-700 mt-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                  More than just an app, Mondoway is a fully integrated platform
                  created to deliver a smooth, convenient, and enjoyable user
                  experience. It saves you time, effort, and makes everyday life
                  easier and more comfortable.
                </p>
              </div>

              {/* Services Grid with Enhanced Animations */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Restaurants",
                    icon: "🍽️",
                    desc: `Enjoy the experience of ordering your favorite 
meal easily and quickly from the best 
restaurants near you.`,
                    color: "from-blue-500 to-blue-700",
                    bgColor: "bg-blue-50",
                    hoverColor: "hover:from-blue-600 hover:to-blue-800"
                  },
                  {
                    title: "Clothes",
                    icon: "👔",
                    desc: `Embark on a unique online shopping 
journey that adds more elegance and 
style through the app.`,
                    color: "from-green-500 to-green-700",
                    bgColor: "bg-green-50",
                    hoverColor: "hover:from-green-600 hover:to-green-800"
                  },
                  {
                    title: "Gifts",
                    icon: "🎁",
                    desc: `Make your occasions more special with
the finest gifts for your friends and 
loved ones — Mondoway is always 
there to share your happiness.`,
                    color: "from-purple-500 to-purple-700",
                    bgColor: "bg-purple-50",
                    hoverColor: "hover:from-purple-600 hover:to-purple-800"
                  },
                  {
                    title: "Electronics",
                    icon: "🔦",
                    desc: `Stay up to date with the latest electronics 
and home appliances from the most 
renowned stores.`,
                    color: "from-orange-500 to-orange-700",
                    bgColor: "bg-orange-50",
                    hoverColor: "hover:from-orange-600 hover:to-orange-800"
                  },
                  {
                    title: "Home",
                    icon: "🏠",
                    desc: `Everything you need to furnish and equip 
your home with greater comfort and 
convenience is now available.`,
                    color: "from-cyan-500 to-cyan-700",
                    bgColor: "bg-cyan-50",
                    hoverColor: "hover:from-cyan-600 hover:to-cyan-800"
                  },
                  {
                    title: "Cars",
                    icon: "🚋",
                    desc: `Discover the latest cars from top global 
companies, all accessible within the app.`,
                    color: "from-red-500 to-red-700",
                    bgColor: "bg-red-50",
                    hoverColor: "hover:from-red-600 hover:to-red-800"
                  },
                  {
                    title: "Real State",
                    icon: "🏗️",
                    desc: `Own, rent, or sell a house, apartment, 
villa, farm, or land with ease.`,
                    color: "from-red-500 to-red-700",
                    bgColor: "bg-red-50",
                    hoverColor: "hover:from-red-600 hover:to-red-800"
                  },
                  {
                    title: "Health Care",
                    icon: "🏥",
                    desc: `Your health matters; access the best 
clinics and doctors across all fields.`,
                    color: "from-red-500 to-red-700",
                    bgColor: "bg-red-50",
                    hoverColor: "hover:from-red-600 hover:to-red-800"
                  },
                  {
                    title: "Factories",
                    icon: "🏭",
                    desc: `Thinking of a project? Connect easily 
with skilled teams for support.`,
                    color: "from-red-500 to-red-700",
                    bgColor: "bg-red-50",
                    hoverColor: "hover:from-red-600 hover:to-red-800"
                  },
                  {
                    title: "Mart Market",
                    icon: "🛒   ",
                    desc: `Find all the supplies you need for 
your home at Mondoway Market.`,
                    color: "from-red-500 to-red-700",
                    bgColor: "bg-red-50",
                    hoverColor: "hover:from-red-600 hover:to-red-800"
                  },
                  {
                    title: "Tourisem",
                    icon: "🚢",
                    desc: `*Our application also contains  350,000 
  hotels around the world , A complete trip — from hotels to organizing
 tours and communicating with travel agencies.`,
                    color: "from-red-500 to-red-700",
                    bgColor: "bg-red-50",
                    hoverColor: "hover:from-red-600 hover:to-red-800"
                  },
                  {
                    title: "Bazaar",
                    icon: "🎁",
                    desc: `Buy and sell used items at Mondoway 
Bazaar, connecting you with like-minded 
individuals.`,
                    color: "from-red-500 to-red-700",
                    bgColor: "bg-red-50",
                    hoverColor: "hover:from-red-600 hover:to-red-800"
                  }
                ].map((service, index) => (
                  <div
                    key={service.title}
                    className={`group relative ${service.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border border-white/50 backdrop-blur-sm overflow-hidden`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                      animation: "fadeInUp 0.8s ease-out forwards"
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                    ></div>

                    <div className="relative z-10 text-center mb-6">
                      <div className="inline-block p-4 bg-white/80 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <span
                          className="text-4xl animate-bounce"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          {service.icon}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 text-center">
                      <h3
                        className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {service.desc}
                      </p>
                    </div>

                    <div
                      className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full animate-ping"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    ></div>
                    <div
                      className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse"
                      style={{ animationDelay: `${index * 0.4}s` }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="inline-block">
                  <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 transform hover:from-red-700 hover:to-red-900 animate-pulse">
                    Get Started Today 🚀
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20 bg-gradient-to-b from-white to-red-50"
          >
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-red-800 mb-8">
                About Mondoway
              </h2>
              <p className="text-xl text-red-700 max-w-3xl mx-auto leading-relaxed mb-8">
                Discover our story, values, and the passionate team behind our
                innovative solutions.
              </p>
              <button
                onClick={() => handleNavigation("About Us")}
                className="bg-gradient-to-r from-red-600 to-red-800 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 transform hover:from-red-700 hover:to-red-900"
              >
                Learn More About Us
              </button>
            </div>
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20 bg-gradient-to-b from-red-50 to-red-100"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-red-800 text-center mb-16">
                Get In Touch
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-red-800 mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-colors duration-300 shadow-lg">
                        <span className="text-3xl">📧</span>
                        <div>
                          <div className="font-semibold text-red-800">
                            Email
                          </div>
                          <div className="text-red-700">
                            contact@mondoway.com
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-colors duration-300 shadow-lg">
                        <span className="text-3xl">📱</span>
                        <div>
                          <div className="font-semibold text-red-800">
                            Phone
                          </div>
                          <div className="text-red-700">+962 123 456 789</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-colors duration-300 shadow-lg">
                        <span className="text-3xl">📍</span>
                        <div>
                          <div className="font-semibold text-red-800">
                            Location
                          </div>
                          <div className="text-red-700">Amman, Jordan</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-red-100">
                    <h4 className="text-xl font-bold text-red-800 mb-4">
                      Follow Us
                    </h4>
                    <div className="flex space-x-4">
                      {["📘", "📸", "🐦", "💼"].map((social, index) => (
                        <button
                          key={index}
                          className="w-12 h-12 bg-red-600 text-white text-xl rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                        >
                          {social}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-red-100">
                  <h3 className="text-3xl font-bold text-red-800 mb-8 text-center">
                    Send us a Message
                  </h3>
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="block text-red-700 font-semibold mb-3 text-lg">
                          Name
                        </div>
                        <input
                          type="text"
                          className="w-full p-5 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <div className="block text-red-700 font-semibold mb-3 text-lg">
                          Email
                        </div>
                        <input
                          type="email"
                          className="w-full p-5 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="block text-red-700 font-semibold mb-3 text-lg">
                        Subject
                      </div>
                      <input
                        type="text"
                        className="w-full p-5 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                        placeholder="What would you like to discuss?"
                      />
                    </div>
                    <div>
                      <div className="block text-red-700 font-semibold mb-3 text-lg">
                        Message
                      </div>
                      <textarea
                        rows="6"
                        className="w-full p-5 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 resize-none text-lg"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-6 rounded-xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:from-red-700 hover:to-red-900"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer
          className={`relative z-10 py-8 text-center transition-all duration-1000 delay-500 ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="bg-white/60 backdrop-blur-md border-t border-red-100 py-6">
            <p className="text-red-600">
              © 2025 Mondoway. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
