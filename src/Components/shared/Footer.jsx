import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleBookingClick = () => {
    alert("Booking feature is coming soon!");
  };

  return (
    <footer className="bg-green-800 text-white py-12 inset-x-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 font-coolvetica">
        
        {/* Newsletter Section */}
        <div className="flex flex-col items-center md:items-start w-full">
          <h3 className="text-lg mb-2 text-center md:text-left">Register for our news updates</h3>
          <div className="relative w-full">
            <form className="flex flex-col sm:flex-row items-center gap-2 w-full">
              {/* Email Input */}
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-black bg-white focus:ring-2 focus:ring-yellow-300 outline-none flex-1 w-full"
              />
              {/* Submit Button */}
              <motion.button
                onClick={handleBookingClick}
                className="text-gray-800 bg-gradient-to-r from-[#D6ED07] to-yellow-300 hover:from-[#EDFF4F] hover:to-[#FFFF99] 
                hover:font-normal font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-110 
                hover:shadow-lg shadow-[0_0_15px_#D6ED07]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                BOOK NOW
              </motion.button>
            </form>
          </div>
        </div>

        {/* Logo & Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/img/logo.png" alt="Mama Africa Logo" className="h-16 mb-4" />
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-yellow-300 transition">
              <FacebookIcon fontSize="large" />
            </a>
            <a 
              href="https://www.instagram.com/mama_africa_tours/"
              aria-label="Instagram"
              className="text-white hover:text-yellow-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a href="#" aria-label="YouTube" className="text-white hover:text-yellow-300 transition">
              <YouTubeIcon fontSize="large" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-yellow-300 text-2xl font-bold mb-2">Get In Touch</h2>
          <h3 className="mb-1 text-lg font-semibold">Address</h3>
          <p className="text-sm">Kigali, Nyarugenge</p>
          <p className="text-sm">KN 254 St.</p>
          <p className="text-sm">info@mamaafrica.com</p>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-8 border-t border-white pt-4 text-center font-coolvetica">
        <p className="text-sm font-normal">
          Copyrights © 2025 - <span className="text-yellow-300">Mama Africa Tours,</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
