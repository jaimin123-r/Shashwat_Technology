import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getDisplayValue = (value, placeholder) => {
    return value || placeholder;
  };

  const handleInputFocus = (field) => {
    setFocusedField(field);
  };

  const handleInputBlur = () => {
    setFocusedField('');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Video Background - Replace with actual video */}
          <video 
            className="absolute inset-0 w-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              filter: 'brightness(0.3)',
              animation: 'slowZoom 30s ease-in-out infinite'
            }}
          >
            {/* Add your video sources here */}
            <source src="back.mp4" type="video/mp4" />
            {/* Fallback for when video is not available */}
          </video>
          
          {/* Fallback animated background when video is not available */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, rgba(255, 255, 255, 0) 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, rgba(255, 255, 255, 0) 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%),
                linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)
              `,
              animation: 'float 15s ease-in-out infinite, zoom 25s ease-in-out infinite'
            }}
          />
          
          {/* Moving particles effect */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-lg border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-4 lg:py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center animate-fadeInLeft">
              <div className="text-xl lg:text-2xl font-bold text-white flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span>Wander</span>
              </div>
            </div>

            {/* Desktop Search Bar - appears when scrolled - ONLY ON DESKTOP */}
            <div className={`hidden lg:block transition-all duration-700 ease-out ${
              isScrolled 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-4 scale-95 pointer-events-none'
            }`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center max-w-2xl hover:bg-white/15 transition-all duration-300">
                <button className="flex items-center space-x-2 px-4 py-3 hover:bg-white/10 rounded-l-full transition-all duration-300 group flex-1 min-w-0">
                  <MapPin className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all flex-shrink-0" />
                  <span className="text-sm text-white font-medium truncate">
                    {getDisplayValue(location, 'Wherever')}
                  </span>
                </button>
                
                <div className="w-px h-6 bg-white/20"></div>
                
                <button className="flex items-center space-x-2 px-4 py-3 hover:bg-white/10 transition-all duration-300 group flex-1 min-w-0">
                  <Calendar className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all flex-shrink-0" />
                  <span className="text-sm text-white font-medium truncate">
                    {getDisplayValue(dates, 'Whenever')}
                  </span>
                </button>
                
                <div className="w-px h-6 bg-white/20"></div>
                
                <button className="flex items-center space-x-2 px-4 py-3 hover:bg-white/10 transition-all duration-300 group flex-1 min-w-0">
                  <Users className="w-4 h-4 text-white/70 group-hover:text-white group-hover:scale-110 transition-all flex-shrink-0" />
                  <span className="text-sm text-white font-medium truncate">
                    {getDisplayValue(guests, '2 guests, 1 pet')}
                  </span>
                </button>
                
                <button className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 ml-2 flex-shrink-0">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Sign in */}
            <div className="hidden lg:block animate-fadeInRight">
              <button className="text-white/90 hover:text-white text-sm font-medium border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Sign in or sign up for free
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-6 bg-black/95 backdrop-blur-lg border-t border-white/10 mt-4">
            <div className="space-y-4">
              <button className="block w-full text-left text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300">
                Sign in or sign up for free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 lg:mb-8 leading-tight transition-all duration-1000 ease-out ${
            isScrolled ? 'opacity-0 transform translate-y-12 scale-95' : 'opacity-100 transform translate-y-0 scale-100 animate-fadeInUp'
          }`}>
            Find your 
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              happy place.
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ease-out ${
            isScrolled ? 'opacity-0 transform translate-y-12' : 'opacity-100 transform translate-y-0 animate-fadeInUp'
          }`}>
            Book a Wander with inspiring views, hotel-grade amenities, dreamy beds, pristine 
            cleaning and 24/7 concierge service. Your best trip ever is a few clicks away.
          </p>

          {/* User Count */}
          <div className={`flex items-center justify-center space-x-3 mb-8 lg:mb-12 transition-all duration-1000 delay-300 ease-out ${
            isScrolled ? 'opacity-0 transform translate-y-12' : 'opacity-100 transform translate-y-0 animate-fadeInUp'
          }`}>
            <div className="flex -space-x-2">
              {[
                'from-purple-400 to-pink-500',
                'from-blue-400 to-cyan-500',
                'from-green-400 to-emerald-500',
                'from-yellow-400 to-orange-500',
                'from-red-400 to-pink-500'
              ].map((gradient, i) => (
                <div 
                  key={i}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${gradient} border-2 border-black shadow-lg animate-bounce`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <span className="text-white/70 text-sm sm:text-base font-medium">Join 562,888 Wanderers and counting...</span>
          </div>

          {/* Search Form */}
          <div className={`transition-all duration-1000 delay-400 ease-out ${
            isScrolled ? 'opacity-0 transform translate-y-12 scale-90' : 'opacity-100 transform translate-y-0 scale-100 animate-fadeInUp'
          }`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl border border-white/20 p-3 lg:p-4 max-w-5xl mx-auto shadow-2xl hover:bg-white/15 transition-all duration-500">
              
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-4 gap-2 lg:gap-3">
                {/* Location */}
                <div className="group p-3 lg:p-4 hover:bg-white/10 rounded-xl lg:rounded-2xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs lg:text-sm font-semibold text-white/60 uppercase tracking-wide mb-1">Location</div>
                      <input 
                        type="text" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onFocus={() => handleInputFocus('location')}
                        onBlur={handleInputBlur}
                        className="text-sm lg:text-base font-medium text-white bg-transparent border-none outline-none w-full placeholder-white/40"
                        placeholder={focusedField === 'location' ? '' : 'Wherever'}
                      />
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div className="group p-3 lg:p-4 hover:bg-white/10 rounded-xl lg:rounded-2xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs lg:text-sm font-semibold text-white/60 uppercase tracking-wide mb-1">Dates</div>
                      <input 
                        type="text" 
                        value={dates}
                        onChange={(e) => setDates(e.target.value)}
                        onFocus={() => handleInputFocus('dates')}
                        onBlur={handleInputBlur}
                        className="text-sm lg:text-base font-medium text-white bg-transparent border-none outline-none w-full placeholder-white/40"
                        placeholder={focusedField === 'dates' ? '' : 'Whenever'}
                      />
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="group p-3 lg:p-4 hover:bg-white/10 rounded-xl lg:rounded-2xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs lg:text-sm font-semibold text-white/60 uppercase tracking-wide mb-1">Guests</div>
                      <input 
                        type="text" 
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        onFocus={() => handleInputFocus('guests')}
                        onBlur={handleInputBlur}
                        className="text-sm lg:text-base font-medium text-white bg-transparent border-none outline-none w-full placeholder-white/40"
                        placeholder={focusedField === 'guests' ? '' : '2 guests, 1 pet'}
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-center justify-center p-2 lg:p-3">
                  <button className="w-full h-12 lg:h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center group hover:scale-105">
                    <Search className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Mobile Layout - Simple Search Button Only */}
              <div className="md:hidden">
                <button className="w-full h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group">
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Search Amazing Places</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dummy content for scrolling */}
      {/* <div className="relative z-10 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center animate-fadeInUp">Discover Amazing Places</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-fadeInUp" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">Amazing Place {i + 1}</h3>
                <p className="text-white/70 leading-relaxed">
                  Discover breathtaking views and unforgettable experiences in this stunning location. 
                  Perfect for your next adventure with world-class amenities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes slowZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes zoom {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.15) rotate(2deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Navbar;