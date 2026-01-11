import React, { useState } from "react";
import aa from "../../static/home.png";
import geosearch from "../../static/geosearch.png";
import chatbot from "../../static/chatbot.png";
import prescription from "../../static/Prescription.png";
import appointment from "../../static/OnlineAppo.png";
import about from "../../static/logo.png"
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending the data to an API or saving it locally)
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="relative bg-gray-50 h-screen flex items-center pr-12">
          <div className="container mx-auto px-36 text-left">
            <div className="max-w-3xl">
              <p className="text-lg text-gray-500 mb-4">
                Caring for better life
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Simplifying Healthcare <br />
                for You
              </h1>
              <p className="text-gray-600 text-lg mb-8 text-justify">
                Connect with doctors online, find nearby pharmacies and labs,
                <br />
                and access personalized care. Manage prescriptions, view lab
                results, <br /> and get assistance from our chatbot—all in one
                place.
              </p>

              <button onClick={handleModalToggle} className="bg-[#4addbf] text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-[#3c9f99]">
                Take Appointment
              </button>
            </div>
          </div>
          <div className="absolute top-24 right-0 w-1/2 h-full hidden md:block">
            <img
              src={aa}
              alt="Doctor with stethoscope"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="bg-gray-50 py-16 pl-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-justify">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Carex Offers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-gray-200 shadow-md rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:bg-white">
                <img
                  src={geosearch}
                  alt="Search"
                  className="w-40 h-40 mx-auto mb-4 object-fill"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Easy Search
                </h3>
                <p className="text-gray-600">
                  Find doctors, pharmacies, and laboratories nearby
                  effortlessly.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-200 shadow-md rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:bg-white">
                <img
                  src={appointment}
                  alt="Appointments"
                  className="w-40 h-40 mx-auto mb-4 object-fill"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Online Appointments
                </h3>
                <p className="text-gray-600">
                  Schedule doctor visits without leaving your home.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gray-200 shadow-md rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:bg-white">
                <img
                  src={prescription}
                  alt="Records"
                  className="w-40 h-40 mx-auto mb-4 object-fill"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Prescription & Records
                </h3>
                <p className="text-gray-600">
                  Save and access prescriptions and medical records anytime.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-gray-200 shadow-md rounded-lg p-6 text-center transition transform hover:-translate-y-2 hover:bg-white">
                <img
                  src={chatbot}
                  alt="Chatbot"
                  className="w-45 h-40 mx-auto mb-4 object-fill"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Chatbot Assistant
                </h3>
                <p className="text-gray-600">
                  Get instant help finding healthcare services with AI support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img
                src={about}
                alt="Carex Team"
                className="w-full h-full object-fill bg  rounded-lg  "
              />
            </div>
            <div className="w-full md:w-1/2 pl-10 text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Carex
              </h2>
              <p className="text-gray-600 mb-6">
                Carex is dedicated to simplifying healthcare by offering easy
                access to doctors, pharmacies, and laboratories. Our platform
                ensures you get the care you need with convenience and
                efficiency.
              </p>
              <button className="bg-[#4addbf] text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-[#3c9f99]">
                <Link to="/aboutus">Learn More </Link>  
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
  <div className="container mx-auto px-6 md:px-12 lg:px-24 text-justify">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
      People Are Saving
    </h2>
    
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
      {/* Left Side - Testimonials */}
      <div className="w-full lg:w-1/2 text-left">
        <div className="space-y-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-600 mb-4">
              "Carex made it so easy to find a doctor and get the right treatment from home. The online appointment system was seamless!"
            </p>
            <p className="font-semibold text-gray-900">John Doe</p>
            <p className="text-gray-500">Patient</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-600 mb-4">
              "I was able to get my prescription without visiting the pharmacy. Excellent service, and I highly recommend it!"
            </p>
            <p className="font-semibold text-gray-900">Jane Smith</p>
            <p className="text-gray-500">Patient</p>
          </div>
        </div>
      </div>

      {/* Right Side - Feedback Form */}
      <div className="w-full lg:w-1/2">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          
          <div>
            <label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4addbf] transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4addbf] transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="text-gray-700 font-semibold mb-2 block">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4addbf] transition-all"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4addbf] text-white text-lg font-semibold py-4 rounded-lg hover:bg-[#3c9f99] transition-all"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

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

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
