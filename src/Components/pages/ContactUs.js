import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import contact from '../../static/contactus.png';
import { MapContainer, TileLayer } from 'react-leaflet';
import { CiPhone, CiMail } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white font-roboto pt-12">
                {/* Hero Section */}
                <div className="bg-[#4addbf] text-white py-16 px-6 text-center">
                    <h1 className="text-4xl font-semibold">Contact Us</h1>
                    <p className="text-lg mt-4">
                        Have questions or need help? We're here for you.
                    </p>
                </div>

                {/* Main Content */}
                <div className="container mx-auto py-12 px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-md pl-28 ">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Send Us a Message
                            </h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-600 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#4addbf]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-600 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#4addbf]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-600 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Type your message here"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#4addbf]"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#4addbf] text-white px-6 py-2 rounded-md hover:bg-[#3c9f99]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center items-center">
                            <img
                            width={500}
                                src={contact}
                                alt="Contact Us"
                                className="bg-transparent"
                            />
                        </div>
                    </div>

                    {/* Get in Touch and Map Section */}
                    <div className="mt-16 flex flex-col lg:flex-row lg:gap-12 pl-28 pr-14 top-10">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-gray-600 mb-6">
                                We’re always here to assist you. Reach out via phone, email, or visit
                                our office.
                            </p>
                            <div className="w-full lg:w-1/2 text-left">
                                        
                                        <ul className="text-gray-600 space-y-4">
                                          <li className="flex items-center">
                                          <a href="https://www.facebook.com" className="text-gray-600 hover:text-[#4addbf] pr-4"> <CiPhone size={24} /></a>
                                            <span>(123) 456-7890</span>
                                          </li>
                                          <li className="flex items-center">
                                          <a href="https://www.facebook.com" className="text-gray-600 hover:text-[#4addbf] pr-4"> <CiMail size={24} /></a>
                            
                                            <span> contact@carex.com</span>
                                          </li>
                                          <li className="flex items-center">
                                          <a href="https://www.facebook.com" className="text-gray-600 hover:text-[#4addbf] pr-4">  <IoLocationOutline size={24} /></a>
                            
                                            <span>123 Health St, City, Country</span>
                                          </li>
                                        </ul>
                                      </div>
                        </div>

                        {/* Leaflet Map */}
                        <div className="mt-12 lg:mt-0 lg:w-1/2 z-0 pr-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 ">
                                Our Location
                            </h3>
                            <MapContainer
                                center={[51.505, -0.09]} // Replace with your desired coordinates
                                zoom={15}
                                className="w-full h-64 rounded-md"
                                scrollWheelZoom={false}
                                dragging={false}
                                zoomControl={false}
                                doubleClickZoom={false}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
