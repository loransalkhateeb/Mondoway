import React, { useState, useEffect } from "react";

function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToHome = () => {
    window.location.href = "/";
  };

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong partnerships with our clients.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: "🎯",
      title: "Excellence",
      description:
        "We strive for perfection in every project, ensuring quality and exceeding expectations.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: "💡",
      title: "Creativity",
      description:
        "We think outside the box to create unique and memorable digital experiences.",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const milestones = [
    {
      year: "2017",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences"
    },
    {
      year: "2019",
      title: "50+ Projects",
      description: "Reached our first major milestone in successful deliveries"
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "Extended our services to clients across the Middle East"
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Pioneered AI-powered solutions for our clients"
    },
    {
      year: "2025",
      title: "150+ Projects",
      description: "Celebrating continuous growth and client success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-40 h-40 bg-red-200/20 rounded-full animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute top-1/3 right-32 w-32 h-32 bg-blue-200/20 rounded-full animate-bounce"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            animationDelay: "1s"
          }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-200/20 rounded-full animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            animationDelay: "2s"
          }}
        ></div>
      </div>

      <header
        className={`relative z-10 bg-white/80 backdrop-blur-md shadow-lg border-b border-red-200/30 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="flex items-center justify-between p-4 md:p-6">
          <div
            className="flex items-center space-x-4 group cursor-pointer"
            onClick={goToHome}
          >
            <img
              src="/Images/b2b_mondo_logo.jpg"
              alt="Mondoway Logo"
              className="w-16 h-16 rounded-lg object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-red-800 tracking-wider">
              MONDOWAY
            </span>
          </div>

          <div className="flex space-x-6">
            <button
              onClick={goToHome}
              className="text-red-700 hover:text-red-800 font-medium transition-colors duration-300 hover:scale-105 transform"
            >
              ← Back to Home
            </button>
            <button
              onClick={goToHome}
              className="text-red-700 hover:text-red-800 font-medium transition-colors duration-300"
            >
              Services
            </button>
            <span className="text-red-800 font-bold">About Us</span>
            <button
              onClick={goToHome}
              className="text-red-700 hover:text-red-800 font-medium transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="py-20 px-6 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent mb-6 animate-pulse">
                About Mondoway
              </h1>
              <div className="h-1 w-40 bg-gradient-to-r from-red-600 to-purple-500 mx-auto rounded-full animate-pulse mb-8"></div>
              <p className="text-xl md:text-2xl text-red-700 max-w-4xl mx-auto leading-relaxed">
                Welcome to Mondoway — Jordan's first and only all-in-one smart
                application designed to simplify your daily life by bringing
                everything you need into a single, seamless platform. Whether
                you're looking to shop online, book travel tickets, order fast
                food delivery, or buy and sell pre-owned items safely — Mondoway
                has you covered. We've built a trusted digital ecosystem that
                saves you time, money, and effort — all with just a few taps.
                Why Mondoway Stands Out ✅ All Services in One Place No more
                juggling between apps. From shopping to travel, food delivery to
                second-hand marketplace — Mondoway unifies your digital
                lifestyle. ✅ Trusted Bazaar for Pre-Owned Items Our secure,
                user-friendly Bazaar feature lets you buy and sell used goods
                with confidence — verified users, smooth transactions, and local
                deals you can trust.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-white/50 to-red-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-red-700 leading-relaxed">
                  <p>
                    Founded in 2017, Mondoway began as a small team of
                    passionate developers and designers with a big dream: to
                    bridge the gap between innovative technology and meaningful
                    business solutions.
                  </p>
                  <p>
                    Today, we've grown into a dynamic agency that serves clients
                    across the globe, delivering cutting-edge digital solutions
                    that not only meet current needs but anticipate future
                    challenges.
                  </p>
                  <p>
                    Our journey has been marked by continuous learning,
                    adaptation, and an unwavering commitment to excellence.
                    Every project we undertake is an opportunity to push
                    boundaries and create something extraordinary.
                  </p>
                </div>
              </div>
              <div
                className={`transition-all duration-1000 delay-700 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-100">
                  <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
                    Our Mission
                  </h3>
                  <p className="text-red-700 text-center leading-relaxed mb-6">
                    "To empower businesses through innovative digital solutions
                    that drive growth, enhance user experiences, and create
                    lasting value in an ever-evolving digital landscape."
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="text-2xl font-bold text-red-800">
                        150+
                      </div>
                      <div className="text-red-600 text-sm">
                        Projects Delivered
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="text-2xl font-bold text-red-800">8+</div>
                      <div className="text-red-600 text-sm">
                        Years Experience
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="text-2xl font-bold text-red-800">75+</div>
                      <div className="text-red-600 text-sm">Happy Clients</div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="text-2xl font-bold text-red-800">
                        24/7
                      </div>
                      <div className="text-red-600 text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-red-700 max-w-3xl mx-auto">
                The principles that guide every decision we make and every
                solution we create.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-red-100 cursor-pointer ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                  style={{
                    animationDelay: `${800 + index * 200}ms`,
                    transitionDelay: `${800 + index * 200}ms`
                  }}
                >
                  <div className="text-center mb-6">
                    <div className="inline-block p-4 bg-red-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      <span
                        className="text-4xl animate-bounce"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {value.icon}
                      </span>
                    </div>
                  </div>
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${value.color} bg-clip-text text-transparent text-center mb-4`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-red-50/50 to-white/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-red-700 max-w-3xl mx-auto">
                Key milestones that have shaped our growth and success over the
                years.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-red-700 rounded-full"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    } ${
                      isLoaded
                        ? "translate-x-0 opacity-100"
                        : `${
                            index % 2 === 0
                              ? "-translate-x-20"
                              : "translate-x-20"
                          } opacity-0`
                    } transition-all duration-1000`}
                    style={{ transitionDelay: `${1200 + index * 200}ms` }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-red-800 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-red-700 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-red-50 to-red-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-red-100">
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-red-700 mb-8 leading-relaxed">
                Let's create something amazing together. Join us on this
                exciting journey of innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goToHome}
                  className="bg-gradient-to-r from-red-600 to-red-800 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 transform hover:from-red-700 hover:to-red-900"
                >
                  Start Your Project 🚀
                </button>
                <button
                  onClick={goToHome}
                  className="border-2 border-red-600 text-red-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-red-50 hover:scale-105 transition-all duration-500 transform"
                >
                  Contact Us 📞
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8 text-center">
        <div className="bg-white/60 backdrop-blur-md border-t border-red-100 py-6">
          <p className="text-red-600">© 2025 Mondoway. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;