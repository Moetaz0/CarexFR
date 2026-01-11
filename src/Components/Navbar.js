import React, { useState, useRef, useEffect } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone, CiMail } from "react-icons/ci";
const Navbar = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);

  const accountRef = useRef(null);
  const languageRef = useRef(null);
  const searchRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "account") {
      setAccountDropdown(!accountDropdown);
      setLanguageDropdown(false);
      setSearchDropdown(false);
    } else if (dropdown === "language") {
      setLanguageDropdown(!languageDropdown);
      setAccountDropdown(false);
      setSearchDropdown(false);
    } else if (dropdown === "search") {
      setSearchDropdown(!searchDropdown);
      setAccountDropdown(false);
      setLanguageDropdown(false);
    }
  };
 const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleSearchDropdown = () => setSearchDropdown(!searchDropdown);

  // Close dropdowns on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target) &&
        languageRef.current &&
        !languageRef.current.contains(event.target) &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setAccountDropdown(false);
        setLanguageDropdown(false);
        setSearchDropdown(false);
      }
    };
    

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Upper Navbar */}
      <div className=" text-sm py-4 pl-40 pr-24 space-x-4  bg-white shadow-md ">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CiMail size={24} />
              <span>contact@carex.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <CiPhone size={24} />
              <span>+123 456 789</span>
            </div>
            <div className="flex items-center space-x-1">
              <IoLocationOutline size={24} />
              <span>Tunis, Tunisia</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 pr-8">
            <a
              href="https://www.facebook.com"
              className="text-black"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-black"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={16} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-black"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-black"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>
      {/* Upper Navbar */}
      <hr className="border-t border-gray-300" />

      {/* Lower Navbar */}
      <div className="fixed top-15 left-0 right-0 bg-white z-50">
        <div className="flex justify-between items-center pl-36 pr-32 py-2">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Carex Logo"
              className="h-16 cursor-pointer"
            />
            <div>
              <h1 className="text-[#4addbf] text-3xl font-semibold">Carex</h1>
              <p className="text-gray-500 text-xs">For Better Health</p>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            {/* Links */}
            <a
              href="/"
              className="text-gray-700 hover:text-[#4addbf] relative group"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#4addbf] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>

            <div className="relative" ref={searchRef}>
              <button
                onClick={() => toggleDropdown("search")}
                className="text-gray-700 hover:text-[#4addbf] relative group"
              >
                <span onClick={toggleSearchDropdown} className="cursor-pointer">
                  <Link to="/map">Search</Link>
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#4addbf] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>
            </div>

            {/* More Links */}
            <a
              href="/contact"
              className="text-gray-700 hover:text-[#4addbf] relative group"
            >
              <span>Contact us</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#4addbf] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a
              href="/aboutus"
              className="text-gray-700 hover:text-[#4addbf] relative group"
            >
              <span>About CareX</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#4addbf] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>

            {/* Appointment Button */}
            <button 
            onClick={handleModalToggle}
            className="bg-[#4addbf] text-white py-2 px-4 rounded-md hover:bg-[#3c9f99]">
              Make an Appointment
            </button>

            {/* Account Dropdown */}
            <div className="relative" ref={accountRef}>
              <button
                onClick={() => toggleDropdown("account")}
                className="text-gray-700 focus:outline-none"
              >
                <MdOutlineAccountCircle size={24} />
              </button>
              {accountDropdown && (
                <div className="absolute right-0 w-40 mt-2 bg-white shadow-lg rounded-md text-gray-700 z-auto">
                  <a href="/SignIn" className="block px-4 py-2 hover:bg-gray-100">
                    Login
                  </a>
                  <a href="/SignUp" className="block px-4 py-2 hover:bg-gray-100">
                    Sign Up
                  </a>
                </div>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => toggleDropdown("language")}
                className="text-gray-700 focus:outline-none"
              >
                <GiWorld size={24} />
              </button>
              {languageDropdown && (
                <div className="absolute right-0 w-40 mt-2 bg-white shadow-lg rounded-md text-gray-700 z-50">
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    English
                  </a>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    Français
                  </a>
                  <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                    عربى
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
       {/* Modal */}
       {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
            <form className="space-y-4">
              {/* Doctor/Specialty */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2">
                  Doctor/Specialty
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#4addbf]"
                >
                  <option value="general">General Practitioner</option>
                  <option value="dentist">Dentist</option>
                  <option value="cardiologist">Cardiologist</option>
                  {/* Add more specialties */}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#4addbf]"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#4addbf]"
                />
              </div>

              {/* Patient's Name */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2">
                  Patient's Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#4addbf]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#4addbf]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-gray-600 font-semibold mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Additional details"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#4addbf]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="bg-red-500 text-white py-2 px-6 rounded-lg mr-4 hover:bg-red-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#4addbf] text-white py-2 px-6 rounded-lg hover:bg-[#39c6a5] transition"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
