import React,{ useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FilterModal = ({ filters }) => {
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);

  return (
    <div className="bg-black text-white p-4 rounded-lg space-y-6">
      {/* Amenities Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <IoIosArrowBack /> Amenities <IoIosArrowForward />
        </h2>
        <div className="flex flex-wrap gap-3">
          {filters?.amenities?.map((item, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedAmenity === item
                  ? "bg-gray-600 border-white text-white"
                  : "bg-black border-gray-500 text-white hover:bg-gray-800"
              }`}
              onClick={() =>
                setSelectedAmenity(selectedAmenity === item ? null : item)
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Rooms Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <IoIosArrowBack /> Rooms <IoIosArrowForward />
        </h2>
        <div className="flex flex-wrap gap-3">
          {filters?.rooms?.map((item, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedRoom === item
                  ? "bg-gray-600 border-white text-white"
                  : "bg-black border-gray-500 text-white hover:bg-gray-800"
              }`}
              onClick={() =>
                setSelectedRoom(selectedRoom === item ? null : item)
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Accommodations Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <IoIosArrowBack /> Accommodations <IoIosArrowForward />
        </h2>
        <div className="flex flex-wrap gap-3">
          {filters?.accommodations?.map((item, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedAccommodation === item
                  ? "bg-gray-600 border-white text-white"
                  : "bg-black border-gray-500 text-white hover:bg-gray-800"
              }`}
              onClick={() =>
                setSelectedAccommodation(
                  selectedAccommodation === item ? null : item
                )
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
