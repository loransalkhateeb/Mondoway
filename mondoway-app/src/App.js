import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from './Pages/PrivacyPolicy';

function Navigation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentPage = location.pathname.slice(1) || "home";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigateTo = (page) => {
    navigate(`/${page === 'home' ? '' : page}`);
  };

  const tabs = [
    { name: "Home", icon: "🏠", page: "home" },
    { name: "Services", icon: "⚡", page: "services" },
    { name: "About Us", icon: "👥", page: "about" },
    { name: "Contact Us", icon: "📞", page: "contact" },
    { name: "Privacy Policy", icon: "🔒", page: "privacy" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      <header
        className={`sticky top-0 z-50 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } bg-white shadow-lg shadow-red-900/20 border-b border-red-200/30`}
      >
        <nav className="flex items-center justify-between p-3 md:p-4">
          <div className="flex items-center group cursor-pointer" onClick={() => navigateTo("home")}>
            <img
              src="/Images/b2b_mondo_logo.jpg"
              alt="Mondoway Logo"
              className="w-44 h-44 rounded-lg group-hover:scale-110 transition-transform duration-300 object-cover"
            />
          </div>

          <div className="hidden md:flex space-x-2 bg-gradient-to-r from-amber-100/80 via-orange-50/90 to-amber-100/80 backdrop-blur-md rounded-full p-2 shadow-lg border border-red-200/50">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => navigateTo(tab.page)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  currentPage === tab.page || (currentPage === "" && tab.page === "home")
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

        <div className="md:hidden bg-gradient-to-r from-amber-100/90 via-orange-50/95 to-amber-100/90 backdrop-blur-md mx-4 rounded-2xl shadow-xl border border-red-200/50 mb-4">
          <div className="grid grid-cols-2 gap-2 p-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => navigateTo(tab.page)}
                className={`p-4 rounded-xl font-medium transition-all duration-300 flex flex-col items-center space-y-2 ${
                  currentPage === tab.page || (currentPage === "" && tab.page === "home")
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

      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={navigateTo} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <footer className="py-8 text-center bg-white/60 backdrop-blur-md border-t border-red-100">
        <p className="text-red-600">© 2025 Mondoway. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;