import React, { useState, useEffect } from 'react';

function ContactUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });
  const [activeContactMethod, setActiveContactMethod] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState([]);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const elements = document.querySelectorAll('.scroll-animate');
      const windowHeight = window.innerHeight;
      const newVisibleElements = [];

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementVisible = elementTop < windowHeight - 100;
        
        if (elementVisible && !visibleElements.includes(index)) {
          newVisibleElements.push(index);
        }
      });

      if (newVisibleElements.length > 0) {
        setVisibleElements(prev => [...prev, ...newVisibleElements]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleElements]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      id: 1,
      icon: '📧',
      title: 'Email Us',
      subtitle: 'Send us an email',
      value: 'contact@mondoway.com',
      action: 'mailto:contact@mondoway.com',
      description: 'Get in touch via email for detailed inquiries',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Call Us',
      subtitle: 'Speak directly with us',
      value: '+962 123 456 789',
      action: 'tel:+962123456789',
      description: 'Call us for immediate assistance',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      icon: '💬',
      title: 'WhatsApp',
      subtitle: 'Chat with us instantly',
      value: '+962 123 456 789',
      action: 'https://wa.me/962123456789',
      description: 'Quick responses via WhatsApp',
      color: 'from-emerald-500 to-emerald-700',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 4,
      icon: '📍',
      title: 'Visit Us',
      subtitle: 'Our office location',
      value: 'Amman, Jordan',
      action: '#',
      description: 'Schedule a meeting at our office',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50'
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'Consulting',
    'E-commerce',
    'Other'
  ];

  const socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#', color: 'bg-blue-600' },
    { icon: '📸', name: 'Instagram', url: '#', color: 'bg-pink-600' },
    { icon: '🐦', name: 'Twitter', url: '#', color: 'bg-sky-500' },
    { icon: '💼', name: 'LinkedIn', url: '#', color: 'bg-blue-700' },
    { icon: '📺', name: 'YouTube', url: '#', color: 'bg-red-600' }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slowFadeInUp {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slowFadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) rotate(-5deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }
        
        @keyframes slowFadeInRight {
          from {
            opacity: 0;
            transform: translateX(100px) rotate(5deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }
        
        @keyframes slowRotateIn {
          from {
            opacity: 0;
            transform: rotate(-15deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        
        @keyframes slowZoomIn {
          from {
            opacity: 0;
            transform: scale(0.7) rotate(10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes slowFlipIn {
          from {
            opacity: 0;
            transform: perspective(400px) rotateY(90deg);
          }
          to {
            opacity: 1;
            transform: perspective(400px) rotateY(0deg);
          }
        }
        
        @keyframes slowBounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) rotate(2deg);
          }
          70% {
            transform: scale(0.98) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-slow-fade-up {
          animation: slowFadeInUp 1.8s ease-out forwards;
        }
        
        .animate-slow-fade-left {
          animation: slowFadeInLeft 2s ease-out forwards;
        }
        
        .animate-slow-fade-right {
          animation: slowFadeInRight 2s ease-out forwards;
        }
        
        .animate-slow-rotate {
          animation: slowRotateIn 2.5s ease-out forwards;
        }
        
        .animate-slow-zoom {
          animation: slowZoomIn 2.2s ease-out forwards;
        }
        
        .animate-slow-flip {
          animation: slowFlipIn 2.8s ease-out forwards;
        }
        
        .animate-slow-bounce {
          animation: slowBounceIn 2.5s ease-out forwards;
        }
      `}</style>
      
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-red-200/20 rounded-full animate-pulse" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        <div className="absolute top-1/3 right-32 w-32 h-32 bg-blue-200/20 rounded-full animate-bounce" style={{ transform: `translateY(${scrollY * 0.15}px)`, animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-200/20 rounded-full animate-pulse" style={{ transform: `translateY(${scrollY * 0.2}px)`, animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-200/20 rounded-full animate-bounce" style={{ transform: `translateY(${scrollY * 0.12}px)`, animationDelay: '3s' }}></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <div className={`scroll-animate transition-all duration-1000 delay-300 ${isLoaded ? 'animate-slow-fade-up' : ''}`}>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent mb-6 animate-pulse">
                Get In Touch
              </h1>
              <div className="h-1 w-40 bg-gradient-to-r from-red-600 to-purple-500 mx-auto rounded-full animate-pulse mb-8"></div>
              <p className="text-xl md:text-2xl text-red-700 max-w-4xl mx-auto leading-relaxed">
                Ready to bring your vision to life? Let's start a conversation about your next project and create something extraordinary together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 scroll-animate ${visibleElements.includes(0) ? 'animate-slow-zoom' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">How to Reach Us</h2>
              <p className="text-xl text-red-700 max-w-3xl mx-auto">
                Choose your preferred way to connect with us. We're here to help and respond quickly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div 
                  key={method.id}
                  className={`group relative ${method.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-1000 transform hover:-translate-y-6 cursor-pointer border border-white/50 backdrop-blur-sm overflow-hidden scroll-animate ${
                    visibleElements.includes(index + 1) ? 
                    (index % 2 === 0 ? 'animate-slow-fade-left' : 'animate-slow-fade-right') : ''
                  }`}
                  style={{ animationDelay: `${500 + index * 200}ms`, transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveContactMethod(method.id)}
                  onMouseLeave={() => setActiveContactMethod(null)}
                  onClick={() => window.open(method.action, '_blank')}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-1000 rounded-3xl`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-block p-4 bg-white/80 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-700 mb-6">
                      <span className="text-4xl animate-bounce" style={{animationDelay: `${index * 0.3}s`}}>
                        {method.icon}
                      </span>
                    </div>
                    
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-2`}>
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{method.subtitle}</p>
                    <p className="font-semibold text-gray-800 mb-3">{method.value}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
                  </div>

                  <div className="absolute top-4 right-4 w-6 h-6 bg-white/30 rounded-full animate-ping" style={{animationDelay: `${index * 0.4}s`}}></div>
                  
                  {activeContactMethod === method.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-white/50 to-red-50/50">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-16 scroll-animate ${visibleElements.includes(5) ? 'animate-slow-rotate' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">Send Us a Message</h2>
              <p className="text-xl text-red-700 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible with a personalized response.
              </p>
            </div>

            <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-red-100 scroll-animate ${visibleElements.includes(6) ? 'animate-slow-flip' : ''}`}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-red-700 font-semibold text-lg">Full Name *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-red-700 font-semibold text-lg">Email Address *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-red-700 font-semibold text-lg">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                      placeholder="+962 123 456 789"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-red-700 font-semibold text-lg">Company/Organization</label>
                    <input 
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-red-700 font-semibold text-lg">Service Interest</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-red-700 font-semibold text-lg">Subject *</label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-red-700 font-semibold text-lg">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6" 
                    className="w-full p-4 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                    required
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-red-600 to-red-800 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 transform hover:from-red-700 hover:to-red-900"
                  >
                    Send Message
                  </button>
                  <p className="text-red-600 text-sm mt-4">
                    We typically respond within 24 hours during business days
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-20 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 scroll-animate ${visibleElements.includes(7) ? 'animate-slow-bounce' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">Visit Our Office</h2>
              <p className="text-xl text-red-700 max-w-3xl mx-auto">
                Schedule a meeting at our office to discuss your project in person over coffee.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 scroll-animate ${visibleElements.includes(8) ? 'animate-slow-fade-left' : ''}`} style={{animationDelay: '0.3s'}}>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-red-100 transform hover:scale-105 transition-all duration-700">
                  <h3 className="text-2xl font-bold text-red-800 mb-6">Office Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 hover:transform hover:translateX-2 transition-transform duration-500">
                      <span className="text-2xl">📍</span>
                      <div>
                        <h4 className="font-semibold text-red-800">Address</h4>
                        <p className="text-red-700">123 Innovation Street<br />Tech District, Amman<br />Jordan 11183</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 hover:transform hover:translateX-2 transition-transform duration-500">
                      <span className="text-2xl">🕒</span>
                      <div>
                        <h4 className="font-semibold text-red-800">Business Hours</h4>
                        <p className="text-red-700">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 hover:transform hover:translateX-2 transition-transform duration-500">
                      <span className="text-2xl">🚗</span>
                      <div>
                        <h4 className="font-semibold text-red-800">Parking</h4>
                        <p className="text-red-700">Free parking available<br />Accessible entrance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-red-100 transform hover:scale-105 transition-all duration-700">
                  <h3 className="text-2xl font-bold text-red-800 mb-6">Follow Us</h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <button 
                        key={index}
                        className={`${social.color} text-white w-14 h-14 rounded-full hover:scale-125 hover:rotate-12 transition-all duration-500 flex items-center justify-center text-xl shadow-lg hover:shadow-2xl`}
                        title={social.name}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        {social.icon}
                      </button>
                    ))}
                  </div>
                  <p className="text-red-600 mt-4">
                    Stay updated with our latest projects and insights
                  </p>
                </div>
              </div>

              <div className={`bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-red-100 scroll-animate ${visibleElements.includes(9) ? 'animate-slow-fade-right' : ''}`} style={{animationDelay: '0.6s'}}>
                <div className="h-96 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center hover:from-red-200 hover:to-red-300 transition-all duration-1000">
                  <div className="text-center transform hover:scale-110 transition-transform duration-700">
                    <span className="text-6xl mb-4 block animate-bounce">🗺️</span>
                    <h3 className="text-2xl font-bold text-red-800 mb-2">Interactive Map</h3>
                    <p className="text-red-700">Click to view our location on Google Maps</p>
                    <button className="mt-4 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 hover:scale-110 transition-all duration-500 transform hover:rotate-1">
                      View on Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-red-50/50 to-white/50">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-16 scroll-animate ${visibleElements.includes(10) ? 'animate-slow-zoom' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-red-700">
                Quick answers to common questions about our services and process.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "What information do you need to provide a quote?",
                  answer: "We need details about your project requirements, target audience, desired features, timeline, and budget range. The more specific you can be, the more accurate our quote will be."
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer: "Yes, we offer various support packages including maintenance, updates, hosting, and technical support. We believe in long-term partnerships with our clients."
                },
                {
                  question: "Can you work with our existing team?",
                  answer: "Absolutely! We often collaborate with internal teams and other agencies. We're flexible and can adapt to your preferred workflow and communication methods."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1 scroll-animate ${
                    visibleElements.includes(11 + index) ? 
                    (index % 2 === 0 ? 'animate-slow-fade-left' : 'animate-slow-fade-right') : ''
                  }`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <h3 className="text-xl font-bold text-red-800 mb-3 hover:text-red-600 transition-colors duration-500">{faq.question}</h3>
                  <p className="text-red-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-red-50 to-red-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-red-100 scroll-animate ${visibleElements.includes(15) ? 'animate-slow-bounce' : ''} transform hover:scale-105 transition-all duration-700`}>
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-red-700 mb-8 leading-relaxed">
                Let's turn your vision into reality. Contact us today for a free consultation and discover how we can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-gradient-to-r from-red-600 to-red-800 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-110 hover:rotate-1 transition-all duration-700 transform hover:from-red-700 hover:to-red-900"
                >
                  Get Started Now
                </button>
                <button 
                  onClick={() => window.open('tel:+962123456789', '_self')}
                  className="border-2 border-red-600 text-red-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-red-50 hover:scale-110 hover:-rotate-1 transition-all duration-700 transform"
                >
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}

export default ContactUs;