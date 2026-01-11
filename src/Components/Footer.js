import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { CiMail, CiPhone } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 font-roboto">
      <div className="container mx-auto px-6 md:px-12">

        {/* Navbar Items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 text-justify">
          
          {/* Left Side - Quick Links */}
          <div className="text-left pl-36">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#4addbf]">Home</a></li>
              <li><a href="/map" className="hover:text-[#4addbf]" >Map</a></li>
              <li><a href="/contact" className="hover:text-[#4addbf]">Contact Us</a></li>
              <li><a href="/aboutus" className="hover:text-[#4addbf]">About CareX</a></li>
            </ul>
          </div>

          {/* Center - Newsletter */}
          <div className="text-justify">
            <h3 className="font-semibold text-lg mb-4">Subscribe to our Newsletter</h3>
            <p className="text-gray-600 mb-4 text-sm">Get the latest news and updates from CareX.</p>
            {/* Newsletter Form */}
            <form className="flex flex-col md:flex-row justify items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-auto border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#4addbf]"
              />
              <button
                type="submit"
                className="bg-[#4addbf] text-white px-6 py-2 rounded-md hover:bg-[#3c9f99]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Side - Social Media */}
          <div className="text-justify pl-28">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex justify space-x-4">
              <a href="https://www.facebook.com" className="text-gray-600 hover:text-[#4addbf]" target="_blank" rel="noreferrer"><FaFacebookF size={24} /></a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-[#4addbf]" target="_blank" rel="noreferrer"><FaXTwitter size={24} /></a>
              <a href="https://www.instagram.com" className="text-gray-600 hover:text-[#4addbf]" target="_blank" rel="noreferrer"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com" className="text-gray-600 hover:text-[#4addbf]" target="_blank" rel="noreferrer"><FaLinkedinIn size={24} /></a>
            </div>
          </div>

          {/* New Section - Contact Information */}
          <div className="w-full lg:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
            
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

        {/* Copyright */}
        <div className="text-center text-gray-500 border-t border-gray-200 pt-4">
          <p>&copy; {new Date().getFullYear()} Carex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
