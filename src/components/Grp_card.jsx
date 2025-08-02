import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bed, 
  Bath, 
  Users, 
  Heart,
  Filter,
  X,
  MapPin,
  Clock,
  Waves,
  Mountain,
  Trees,
  Sunrise,
  Building,
  Baby,
  UserPlus,
  PawPrint,
  TreePine,
  CalendarDays
} from 'lucide-react';

const Grp_card = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    { id: 'for-you', label: 'For you', icon: Heart },
    { id: 'daily-deals', label: 'Daily deals', icon: Clock },
    { id: 'last-minute', label: 'Last-minute', icon: Clock },
    { id: 'ocean', label: 'Ocean', icon: Waves },
    { id: 'mountain', label: 'Mountain', icon: Mountain },
    { id: 'forest', label: 'Forest', icon: Trees },
    { id: 'lake', label: 'Lake', icon: Sunrise },
    { id: 'desert', label: 'Desert', icon: Sunrise },
    { id: 'urban', label: 'Urban', icon: Building },
    { id: 'families', label: 'Families', icon: Baby },
    { id: 'groups', label: 'Groups', icon: UserPlus },
    { id: 'pet-friendly', label: 'Pet-friendly', icon: PawPrint },
    { id: 'golf', label: 'Golf', icon: Baby },
    { id: 'national-parks', label: 'National parks', icon: TreePine },
    { id: 'long-stays', label: 'Long stays', icon: CalendarDays }
  ];

  const quickFilters = ['For you', 'Daily deals', 'Last-minute', 'Ocean', 'Mountain'];

  const hotelData = [
    {
      id: 1,
      name: 'Ocean Paradise Resort',
      location: 'Miami Beach, Florida',
      availability: 'Aug 2 to Aug 9',
      amenities: { beds: 3, baths: 2, people: 6 },
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 2,
      name: 'Mountain View Lodge',
      location: 'Aspen, Colorado',
      availability: 'Aug 5 to Aug 12',
      amenities: { beds: 4, baths: 3, people: 8 },
      images: [
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 3,
      name: 'Urban Boutique Hotel',
      location: 'Manhattan, New York',
      availability: 'Aug 3 to Aug 7',
      amenities: { beds: 2, baths: 2, people: 4 },
      images: [
        'https://images.unsplash.com/photo-1555854877-bab0e5fbe529?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 4,
      name: 'Desert Oasis Resort',
      location: 'Scottsdale, Arizona',
      availability: 'Aug 6 to Aug 13',
      amenities: { beds: 3, baths: 2, people: 6 },
      images: [
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 5,
      name: 'Lakeside Retreat',
      location: 'Lake Tahoe, California',
      availability: 'Aug 4 to Aug 11',
      amenities: { beds: 5, baths: 4, people: 10 },
      images: [
        'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 6,
      name: 'Forest Haven Cabin',
      location: 'Olympic National Park, Washington',
      availability: 'Aug 7 to Aug 14',
      amenities: { beds: 2, baths: 1, people: 4 },
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
      ]
    },
     {
      id: 7,
      name: 'Coastal Cliffside Resort',
      location: 'Big Sur, California',
      availability: 'Aug 1 to Aug 8',
      price: '$699',
      originalPrice: '$899',
      rating: 4.9,
      reviews: 1089,
      description: 'Dramatic cliffside resort overlooking the Pacific',
      amenities: { beds: 3, baths: 3, people: 6 },
      features: ['Ocean Views', 'Spa', 'Fine Dining', 'Yoga Classes'],
      tag: 'Best Deal',
      tagColor: 'bg-orange-500',
      images: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 8,
      name: 'Historic Downtown Inn',
      location: 'Charleston, South Carolina',
      availability: 'Aug 3 to Aug 10',
      price: '$215',
      rating: 4.4,
      reviews: 834,
      description: 'Charming historic inn in the heart of Charleston',
      amenities: { beds: 2, baths: 2, people: 4 },
      features: ['Historic District', 'Garden Courtyard', 'Local Tours', 'Southern Cuisine'],
      images: [
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop'
      ]
    },
     {
      id: 9,
      name: 'Ocean Paradise Resort',
      location: 'Miami Beach, Florida',
      availability: 'Aug 2 to Aug 9',
      amenities: { beds: 3, baths: 2, people: 6 },
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 10,
      name: 'Mountain View Lodge',
      location: 'Aspen, Colorado',
      availability: 'Aug 5 to Aug 12',
      amenities: { beds: 4, baths: 3, people: 8 },
      images: [
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 11,
      name: 'Urban Boutique Hotel',
      location: 'Manhattan, New York',
      availability: 'Aug 3 to Aug 7',
      amenities: { beds: 2, baths: 2, people: 4 },
      images: [
        'https://images.unsplash.com/photo-1555854877-bab0e5fbe529?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 12,
      name: 'Desert Oasis Resort',
      location: 'Scottsdale, Arizona',
      availability: 'Aug 6 to Aug 13',
      amenities: { beds: 3, baths: 2, people: 6 },
      images: [
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 13,
      name: 'Lakeside Retreat',
      location: 'Lake Tahoe, California',
      availability: 'Aug 4 to Aug 11',
      amenities: { beds: 5, baths: 4, people: 10 },
      images: [
        'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 14,
      name: 'Forest Haven Cabin',
      location: 'Olympic National Park, Washington',
      availability: 'Aug 7 to Aug 14',
      amenities: { beds: 2, baths: 1, people: 4 },
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
      ]
    },
     {
      id: 15,
      name: 'Coastal Cliffside Resort',
      location: 'Big Sur, California',
      availability: 'Aug 1 to Aug 8',
      price: '$699',
      originalPrice: '$899',
      rating: 4.9,
      reviews: 1089,
      description: 'Dramatic cliffside resort overlooking the Pacific',
      amenities: { beds: 3, baths: 3, people: 6 },
      features: ['Ocean Views', 'Spa', 'Fine Dining', 'Yoga Classes'],
      tag: 'Best Deal',
      tagColor: 'bg-orange-500',
      images: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 16,
      name: 'Historic Downtown Inn',
      location: 'Charleston, South Carolina',
      availability: 'Aug 3 to Aug 10',
      price: '$215',
      rating: 4.4,
      reviews: 834,
      description: 'Charming historic inn in the heart of Charleston',
      amenities: { beds: 2, baths: 2, people: 4 },
      features: ['Historic District', 'Garden Courtyard', 'Local Tours', 'Southern Cuisine'],
      images: [
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop'
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFilter = (filterId) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  // Hotel Card Component
  const HotelCard = ({ hotel }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % hotel.images.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }, [hotel.images.length]);

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % hotel.images.length
      );
    };

    const previousImage = () => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex - 1 + hotel.images.length) % hotel.images.length
      );
    };

    return (
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <div 
            className="flex w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {hotel.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${hotel.name} view ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={previousImage}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-black rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-black rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight size={18} />
          </button>
          
          {/* Heart Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Heart 
              size={20} 
              className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'} transition-colors duration-300`}
            />
          </button>
          
          {/* Image Indicators */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {hotel.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-5">
          <h5 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
            {hotel.location}
          </h5>
          
          <h3 className="text-xl font-bold text-black mb-4 leading-tight">
            {hotel.name}
          </h3>
          
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-gray-800">
              Next Avail. {hotel.availability}
            </div>
            
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <Bed size={16} className="text-gray-700" />
                <span className="text-sm font-medium text-gray-800">
                  {hotel.amenities.beds}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Bath size={16} className="text-gray-700" />
                <span className="text-sm font-medium text-gray-800">
                  {hotel.amenities.baths}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={16} className="text-gray-700" />
                <span className="text-sm font-medium text-gray-800">
                  {hotel.amenities.people}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Skeleton Loader
  const SkeletonCard = () => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
      <div className="w-full h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse"></div>
      <div className="p-5 space-y-4">
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-3/5"></div>
        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-full"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-4/5"></div>
      </div>
    </div>
  );

  // Filter Modal
  const FilterModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-black">Filters</h2>
            <button
              onClick={() => setShowFilterModal(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              const isSelected = selectedFilters.includes(filter.id);
              
              return (
                <button
                  key={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                    isSelected 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 hover:border-gray-400 bg-white text-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent size={20} />
                    <span className="font-medium">{filter.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={clearAllFilters}
              className="px-6 py-3 text-gray-600 hover:text-black transition-colors duration-200 font-medium"
            >
              Clear all
            </button>
            <button
              onClick={() => setShowFilterModal(false)}
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              Show results
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="sticky top-0 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 z-40 p-4">
          <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Filter Bar */}
      <div className="siticky top-0 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 z-40 p-4">
        <div className="container mx-auto flex items-center space-x-4 overflow-x-auto scrollbar-hide">
          {/* Quick Filters */}
          {quickFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter.toLowerCase().replace(' ', '-'))}
              className={`px-6 py-3 rounded-full border-2 whitespace-nowrap transition-all duration-300 font-medium ${
                selectedFilters.includes(filter.toLowerCase().replace(' ', '-'))
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 hover:border-gray-400 bg-white text-gray-800'
              }`}
            >
              {filter}
            </button>
          ))}
          
          {/* Filter Button */}
          <button
            onClick={() => setShowFilterModal(true)}
            className="px-6 py-3 rounded-full border-2 border-gray-300 hover:border-gray-400 bg-white text-gray-800 whitespace-nowrap transition-all duration-300 font-medium flex items-center space-x-2"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Hotel Cards Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotelData.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>

      {/* Filter Modal */}
      {showFilterModal && <FilterModal />}
    </div>
  );
};

export default Grp_card;