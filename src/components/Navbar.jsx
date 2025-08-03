import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, Menu, X, Globe, Plus, Minus, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [pets, setPets] = useState(0);
  const [activeModal, setActiveModal] = useState('');
  const [locationResults, setLocationResults] = useState([]);

  // Popular locations for search suggestions
  const popularLocations = [
    'Paris, France', 'Tokyo, Japan', 'New York, USA', 'London, UK',
    'Bali, Indonesia', 'Barcelona, Spain', 'Rome, Italy', 'Amsterdam, Netherlands',
    'Sydney, Australia', 'Dubai, UAE', 'Bangkok, Thailand', 'Berlin, Germany'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeModal && !event.target.closest('.modal-content')) {
        setActiveModal('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeModal]);

  const handleLocationSearch = (query) => {
    setLocation(query);
    if (query.length > 0) {
      const filtered = popularLocations.filter(loc => 
        loc.toLowerCase().includes(query.toLowerCase())
      );
      setLocationResults(filtered);
    } else {
      setLocationResults([]);
    }
  };

  const selectLocation = (selectedLocation) => {
    setLocation(selectedLocation);
    setLocationResults([]);
    setActiveModal('');
  };

  const incrementGuests = () => {
    if (guests < 20) setGuests(guests + 1);
  };

  const decrementGuests = () => {
    if (guests > 1) setGuests(guests - 1);
  };

  const incrementPets = () => {
    if (pets < 20) setPets(pets + 1);
  };

  const decrementPets = () => {
    if (pets > 0) setPets(pets - 1);
  };

  const formatGuestDisplay = () => {
    let display = `${guests} guest${guests !== 1 ? 's' : ''}`;
    if (pets > 0) {
      display += `, ${pets} pet${pets !== 1 ? 's' : ''}`;
    }
    return display;
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const peopleImages = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face'
  ];

  return (
    <div className="relative h-96 overflow-hidden bg-black">
           {/* Background Video */}
<div className="absolute inset-0 w-full h-full">
  <div className="relative w-full h-full overflow-hidden">
    {/* Video Background */}
    <video 
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay 
      muted 
      loop 
      playsInline
      style={{
        filter: 'brightness(0.3)',
        animation: 'slowZoom 30s ease-in-out infinite'
      }}
    >
      <source src="back.mp4" type="video/mp4" />
    </video>

    {/* Fallback animated background with black theme */}
    <div 
      className="absolute inset-0 opacity-70"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(50, 50, 50, 0.4) 0%, rgba(0, 0, 0, 0) 60%),
          radial-gradient(circle at 80% 20%, rgba(80, 80, 80, 0.3) 0%, rgba(0, 0, 0, 0) 60%),
          radial-gradient(circle at 40% 40%, rgba(100, 100, 100, 0.2) 0%, rgba(0, 0, 0, 0) 60%),
          linear-gradient(135deg, #0f0f0f 0%, #121212 50%, #0a0a0a 100%)
        `,
        animation: 'float 15s ease-in-out infinite, zoom 25s ease-in-out infinite'
      }}
    />

    {/* Moving particles - subtle for dark mode */}
    <div className="absolute inset-0 opacity-10">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gray-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>

    {/* Overlay to enhance black effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
  </div>
</div>

     

      {/* Navbar */}
  <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
    isScrolled
      ? 'bg-black/95 backdrop-blur-lg border-b border-gray-700/20 py-0'
      : 'bg-transparent py-0'
  }`}
>
  <div className="relative w-full h-14">
    
    {/* Logo - Exact top-left corner */}
    <div className="absolute top-0 left-0 h-14 flex items-center pl-2">
      <div className="text-2xl lg:text-3xl font-extrabold text-white flex items-center space-x-1">
        <Globe className="w-7 h-7" />
        <span>Wander</span>
      </div>
    </div>

    {/* Sign in - Exact top-right corner */}
    <div className="absolute top-0 right-0 h-14 flex items-center pr-2">
      <button className="text-white text-sm lg:text-base font-semibold border border-gray-600/40 px-4 py-2 rounded-full hover:bg-gray-800/50 transition-all duration-300">
        Sign in
      </button>
    </div>

    {/* Search Bar - Centered */}
    <div
      className={`hidden lg:block transition-all duration-500 ease-out absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        isScrolled
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-black/90 backdrop-blur-lg rounded-lg border border-gray-600/30 flex items-center transition-all duration-300">
        {/* Location */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveModal('location');
          }}
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800/40 transition-all duration-300 group flex-1 min-w-[140px]"
        >
          <MapPin className="w-4 h-4 text-gray-400 group-hover:text-white" />
          <span className="text-sm text-white font-medium truncate">
            {location || 'Wherever'}
          </span>
        </button>

        <div className="w-px h-8 bg-gray-600/30" />

        {/* Dates */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveModal('dates');
          }}
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800/40 transition-all duration-300 group flex-1 min-w-[120px]"
        >
          <Calendar className="w-4 h-4 text-gray-400 group-hover:text-white" />
          <span className="text-sm text-white font-medium truncate">
            {checkIn && checkOut ? `${checkIn} - ${checkOut}` : 'Whenever'}
          </span>
        </button>

        <div className="w-px h-8 bg-gray-600/30" />

        {/* Guests */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveModal('guests');
          }}
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800/40 transition-all duration-300 group flex-1 min-w-[120px]"
        >
          <Users className="w-4 h-4 text-gray-400 group-hover:text-white" />
          <span className="text-sm text-white font-medium truncate">
            {formatGuestDisplay()}
          </span>
        </button>

        {/* Search Icon */}
        <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105 ml-2 flex-shrink-0">
          <Search className="w-2 h-2 text-white" />
        </button>
      </div>
    </div>

    {/* Mobile Menu Button */}
    <div className="absolute right-2 top-1.5 lg:hidden">
      <button
        className="text-white p-2 hover:bg-gray-800/40 rounded-lg transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <Menu className="w-4 h-4" />
        )}
      </button>
    </div>
  </div>
</nav>

        

      {/* Hero Content */}
      <div className="relative z-10 flex mt-20 justify-center h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className={`text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight transition-all duration-1000 ease-out ${
            isScrolled ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
          }`}>
            Find your happy place.
          </h1>

          {/* Subtitle */}
          <p className={`text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-4 lg:mb-6 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ease-out ${
            isScrolled ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
          }`}>
            Book a Wander with inspiring views, hotel-grade amenities, dreamy beds, and 24/7 concierge service.
          </p>

          {/* User Count */}
          <div className={`flex items-center justify-center space-x-2 mb-4 lg:mb-6 transition-all duration-1000 delay-300 ease-out ${
            isScrolled ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
          }`}>
            <div className="flex -space-x-1">
              {peopleImages.map((imageUrl, i) => (
                <img 
                  key={i}
                  src={imageUrl}
                  alt={`User ${i + 1}`}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black shadow-lg object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=User+${i+1}&background=random&size=32`;
                  }}
                />
              ))}
            </div>
            <span className="text-gray-400 text-xs sm:text-sm font-medium">562,888 Wanderers</span>
          </div>

          {/* Search Form */}
          <div className={`transition-all duration-1000 delay-400 ease-out ${
            isScrolled ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
          }`}>
            <div className="bg-black/30 backdrop-blur-lg rounded-xl border border-gray-600/20 p-2 lg:p-3 max-w-3xl mx-auto shadow-2xl">
              
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-4 gap-1 lg:gap-2">
                {/* Location */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal('location');
                  }}
                  className="group p-2 lg:p-3 hover:bg-gray-800/30 rounded-lg cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400 group-hover:text-white transition-all flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Where</div>
                      <div className="text-xs lg:text-sm font-medium text-white truncate">
                        {location || 'Wherever'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal('dates');
                  }}
                  className="group p-2 lg:p-3 hover:bg-gray-800/30 rounded-lg cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400 group-hover:text-white transition-all flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">When</div>
                      <div className="text-xs lg:text-sm font-medium text-white truncate">
                        {checkIn && checkOut ? `${checkIn} - ${checkOut}` : 'Whenever'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal('guests');
                  }}
                  className="group p-2 lg:p-3 hover:bg-gray-800/30 rounded-lg cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400 group-hover:text-white transition-all flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Who</div>
                      <div className="text-xs lg:text-sm font-medium text-white truncate">
                        {formatGuestDisplay()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-center justify-center p-1 lg:p-2">
                  <button className="w-full h-10 lg:h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-105">
                    <Search className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModal('location');
                    }}
                    className="p-3 bg-gray-800/40 hover:bg-gray-800/60 rounded-lg transition-all duration-300 text-left"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400 uppercase font-medium">Where</span>
                    </div>
                    <div className="text-sm text-white truncate">{location || 'Wherever'}</div>
                  </button>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModal('dates');
                    }}
                    className="p-3 bg-gray-800/40 hover:bg-gray-800/60 rounded-lg transition-all duration-300 text-left"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400 uppercase font-medium">When</span>
                    </div>
                    <div className="text-sm text-white truncate">
                      {checkIn && checkOut ? `${checkIn.split('-')[1]}/${checkIn.split('-')[2]} - ${checkOut.split('-')[1]}/${checkOut.split('-')[2]}` : 'Whenever'}
                    </div>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModal('guests');
                    }}
                    className="p-3 bg-gray-800/40 hover:bg-gray-800/60 rounded-lg transition-all duration-300 text-left"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <Users className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400 uppercase font-medium">Who</span>
                    </div>
                    <div className="text-sm text-white truncate">{formatGuestDisplay()}</div>
                  </button>
                  
                  <button className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center">
                    <Search className="w-4 h-4 mr-2" />
                    <span className="text-sm font-semibold">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          {/* Location Modal */}
          {activeModal === 'location' && (
            <div className="modal-content bg-black/90 backdrop-blur-lg border border-gray-600/30 rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Where to?</h3>
              <input
                type="text"
                value={location}
                onChange={(e) => handleLocationSearch(e.target.value)}
                placeholder="Search destinations"
                className="w-full p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 mb-4"
                autoFocus
              />
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {(locationResults.length > 0 ? locationResults : popularLocations).map((loc, index) => (
                  <button
                    key={index}
                    onClick={() => selectLocation(loc)}
                    className="w-full p-3 text-left hover:bg-gray-800/50 rounded-lg transition-colors text-gray-300 hover:text-white"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{loc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Dates Modal */}
          {activeModal === 'dates' && (
            <div className="modal-content bg-black/90 backdrop-blur-lg border border-gray-600/30 rounded-2xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-white mb-4">When?</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    min={getTodayDate()}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn || getTodayDate()}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white focus:outline-none focus:border-gray-500"
                  />
                </div>
                <button
                  onClick={() => setActiveModal('')}
                  className="w-full p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                >
                  Done
                </button>
              </div>
            </div>
          )}

          {/* Guests Modal */}
          {activeModal === 'guests' && (
            <div className="modal-content bg-black/90 backdrop-blur-lg border border-gray-600/30 rounded-2xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-white mb-4">Who's coming?</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">Guests</div>
                    <div className="text-sm text-gray-400">Ages 13 or above</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={decrementGuests}
                      disabled={guests <= 1}
                      className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-white font-medium">{guests}</span>
                    <button
                      onClick={incrementGuests}
                      disabled={guests >= 20}
                      className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">Pets</div>
                    <div className="text-sm text-gray-400">Bringing a service animal?</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={decrementPets}
                      disabled={pets <= 0}
                      className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-white font-medium">{pets}</span>
                    <button
                      onClick={incrementPets}
                      disabled={pets >= 20}
                      className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => setActiveModal('')}
                  className="w-full p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        .modal-content {
          animation: modalSlideIn 0.3s ease-out forwards;
        }
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;