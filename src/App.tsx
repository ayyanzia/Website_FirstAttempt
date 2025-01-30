import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronRight, Facebook, Twitter, Linkedin, Mail, MapPin, Calendar, Users, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">IEEE GCU Student Branch</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="text-blue-900 hover:text-blue-700 font-medium">Home</a>
                <a href="#about" className="text-blue-900 hover:text-blue-700 font-medium">About</a>
                <a href="#events" className="text-blue-900 hover:text-blue-700 font-medium">Events</a>
                <a href="#team" className="text-blue-900 hover:text-blue-700 font-medium">Team</a>
                <a href="#contact" className="text-blue-900 hover:text-blue-700 font-medium">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-900 hover:text-blue-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">Home</a>
              <a href="#about" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">About</a>
              <a href="#events" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">Events</a>
              <a href="#team" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">Team</a>
              <a href="#contact" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            IEEE GCU Student Branch
          </h1>
          <p className="text-xl md:text-2xl text-golden-500 mb-8 animate-slide-up">
            Empowering Future Technology Leaders
          </p>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 border-2 border-golden-500 text-golden-500 hover:bg-golden-500 hover:text-white transition-colors duration-300 rounded-full animate-bounce-subtle"
          >
            Learn More
            <ChevronRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
                alt="Students working together"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-151724538680${index}-bb43f82c33c4?auto=format&fit=crop&q=80`}
                  alt={`Event ${index}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Technical Workshop {index}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={20} className="mr-2" />
                    <span>March {index + 14}, 2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-15172453868${index}0-bb43f82c33c4?auto=format&fit=crop&q=80`}
                    alt={`Team Member ${index}`}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Team Member {index}</h3>
                <p className="text-gray-600">Position {index}</p>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <MapPin className="mr-4 text-blue-900" size={24} />
                  Government College University, Lahore
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="mr-4 text-blue-900" size={24} />
                  contact@ieeegcu.org
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="mr-4 text-blue-900" size={24} />
                  +92 123 456 7890
                </p>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.5680351325396!2d74.32447797558823!3d31.520673974617024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ff73c00001%3A0x9b8c74e299931d08!2sGovernment%20College%20University%2C%20Lahore!5e0!3m2!1sen!2s!4v1709928547959!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">IEEE GCU Student Branch</h3>
              <p className="text-gray-300">Empowering students through technology and innovation.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-golden-500">About</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-golden-500">Events</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-golden-500">Team</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-golden-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-golden-500"><Facebook size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-golden-500"><Twitter size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-golden-500"><Linkedin size={24} /></a>
                <a href="#" className="text-gray-300 hover:text-golden-500"><Mail size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} IEEE GCU Student Branch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;