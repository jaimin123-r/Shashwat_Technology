import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bed, Bath, Users, Heart } from 'lucide-react';

const Card = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'
  ];

  const amenities = [
    { icon: Bed, count: 3 },
    { icon: Bath, count: 2 },
    { icon: Users, count: 6 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="w-96 bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="w-full h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse"></div>
        <div className="p-6 space-y-4">
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-3/5"></div>
          <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-full"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-4/5"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-3/5"></div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-5">
      <div className={`w-96 bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-800 ${!isLoading ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} hover:scale-105 hover:shadow-3xl`}>
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          {/* Carousel */}
          <div className="relative w-full h-full">
            <div 
              className="flex w-full h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Hotel view ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-black rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-black rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Heart Button */}
            <button
              onClick={toggleHeart}
              className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
            >
              <Heart 
                size={22} 
                className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'} transition-colors duration-300`}
              />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-6">
          {/* Location */}
          <h5 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
            Miami Beach, Florida
          </h5>
          
          {/* Hotel Name */}
          <h2 className="text-2xl font-bold text-black mb-4 leading-tight">
            Ocean Paradise Resort
          </h2>
          
          {/* Availability and Amenities Row */}
          <div className="flex justify-between items-center">
            {/* Availability */}
            <div className="text-sm font-semibold text-gray-800">
              Next Avail. Aug 2 to Aug 9
            </div>
            
            {/* Amenities */}
            <div className="flex space-x-5">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div key={index} className="flex items-center space-x-1">
                    <IconComponent size={18} className="text-gray-700" />
                    <span className="text-sm font-medium text-gray-800">
                      {amenity.count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;