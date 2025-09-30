import React, { useState, useEffect } from "react";

function HomePage({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "/Images/1.png",
    "/Images/Screenshot 2025-09-15 012114.png",
    "/Images/482316662_620794794277528_6740206193456247051_n.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const handleNavigation = (tabName) => {
    if (tabName === "Services" && onNavigate) {
      onNavigate("services");
    } else if (tabName === "About Us" && onNavigate) {
      onNavigate("about");
    } else if (tabName === "Contact Us" && onNavigate) {
      onNavigate("contact");
    } else if (tabName === "Privacy Policy" && onNavigate) {
      onNavigate("privacy");
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Main Content - بدون Header */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
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
              Mondoway is the first all-in-one application in Jordan designed to meet all your needs in one smart platform. From seamless shopping, easy travel ticket bookings, and fast food delivery to selling and buying pre-owned items through our trusted Bazaar — Mondoway brings it all together in one place.
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
    </div>
  );
}

export default HomePage;