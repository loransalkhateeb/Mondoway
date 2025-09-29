import React, { useState } from 'react';
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from './Pages/PrivacyPolicy'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
      case 'privacy':
        return <PrivacyPolicy/>
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
