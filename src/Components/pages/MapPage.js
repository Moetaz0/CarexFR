import React, { useState, useEffect } from "react";
import { FaFilter, FaChevronDown } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import Navbar from "../Navbar";
import Footer from "../Footer";

const MapPage = () => {
  const position = [51.505, -0.09]; // Example coordinates (London)
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(
    JSON.parse(localStorage.getItem("selectedFilters")) || []
  );

  useEffect(() => {
    localStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
  }, [selectedFilters]);

  const toggleSelection = (option) => {
    setSelectedFilters((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleFilterSelect = (specialty) => {
    toggleSelection(specialty);
  };

  const applyFilter = () => {
    console.log(`Applied Filters: ${selectedFilters}`);
  };

  const doctorSpecialties = ["Cardiologist", "Dermatologist", "Pediatrician"];
  const otherFilters = ["Near Me", "Labs", "Pharmacy"];

  return (
    <>
    <Navbar />
    <div className="relative">
      {/* Search Bar Section */}
      <div className="absolute top-20 left-0 w-full bg-white  rounded-md text-gray-700 z-10 p-4 flex flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-4 sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 lg:pl-24 lg:pr-24 xl:pl-32 xl:pr-32">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 border border-gray-300 rounded-md p-2"
        />

        {/* Filter Dropdowns */}
        <div className="flex items-center space-x-4 z-40">
          {/* Doctor Specialty Dropdown */}
          <div className="relative z-50">
            <button
              onClick={() => setFilterDropdown(!filterDropdown)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-200"
            >
              <span>
                {selectedFilters.filter((filter) =>
                  doctorSpecialties.includes(filter)
                ).length > 0
                  ? selectedFilters.filter((filter) =>
                      doctorSpecialties.includes(filter)
                    ).join(", ")
                  : "Doctor Specialty"}
              </span>
              <FaChevronDown />
            </button>
            {filterDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md z-50">
                {doctorSpecialties.map((option) => (
                  <button
                    key={option}
                    className="block text-left w-full px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleFilterSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Other Filter Options */}
        <div className="flex flex-wrap items-center space-x-4">
          {otherFilters.map((option) => (
            <button
              key={option}
              onClick={() => toggleSelection(option)}
              className={`px-4 py-2 rounded-md ${
                selectedFilters.includes(option)
                  ? "bg-gray-200 border border-gray-400"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Filter Button */}
        <button
          onClick={() => applyFilter()}
          className="flex items-center justify-center w-10 h-10 bg-[#4addbf] text-white rounded-md hover:bg-[#3c9f99]"
        >
          <FaFilter />
        </button>
      </div>

      {/* Map Section */}
      <div className="relative -z-0">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100vh", width: "100%" }}
          className="z-10"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={position}
            icon={new L.Icon({
              iconUrl:
                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })}
          >
            <Popup>Welcome to the map!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default MapPage;