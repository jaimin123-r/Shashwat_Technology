import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const FilterBar = ({ filters, selectedFilter, setSelectedFilter, setShowFilterModal }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 11;

  const handleNext = () => {
    if (startIndex + visibleCount < filters.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="sticky top-0 bg-black text-white bg-opacity-95 backdrop-blur-md border-b z-40 p-4">
      <div className="container mx-auto flex items-center justify-between space-x-3 flex-wrap md:flex-nowrap">

        {/* Left Arrow - hidden on small screens */}
        <button
          onClick={handlePrev}
          className="p-2 rounded-full hover:bg-[#2a2a2a] transition-colors disabled:opacity-40 hidden md:inline-flex"
          disabled={startIndex === 0}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Filter Buttons - scrollable on small screens */}
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-3 min-w-max md:min-w-0">
            {filters.slice(startIndex, startIndex + visibleCount).map((filter) => {
              const IconComponent = filter.icon;
              const isSelected = selectedFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(isSelected ? null : filter.id)}
                  className={`flex items-center whitespace-nowrap space-x-2 px-4 py-2 rounded-2xl transition-all duration-300 text-sm font-medium ${
                    isSelected
                      ? 'bg-[#2a2a2a] text-white'
                      : 'bg-black text-white hover:bg-[#1a1a1a]'
                  }`}
                >
                  <IconComponent size={16} className="text-gray-300" />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Arrow - hidden on small screens */}
        <button
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-[#2a2a2a] transition-colors disabled:opacity-40 hidden md:inline-flex"
          disabled={startIndex + visibleCount >= filters.length}
        >
          <ChevronRight size={18} />
        </button>

        {/* Filter Modal Button */}
        <button
          onClick={() => setShowFilterModal(true)}
          className="flex items-center space-x-2 px-3 py-2 mt-3 md:mt-0 rounded-2xl border bg-[#000000] text-gray-300 hover:bg-[#262626] transition-all duration-300"
        >
          <Filter size={16} />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
