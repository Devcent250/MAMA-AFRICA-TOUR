import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 inset-x-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        
    
        <div className="flex flex-col items-center md:items-start">
          <img src="/img/logo.png" alt="Mama Africa Logo" className="h-16 mb-4 ml-7"  />
          <div className="flex space-x-4">
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

      
        <div className="flex flex-col items-center md:items-start font-coolvetica">
          <h2 className="text-yellow-300 text-2xl font-bold mb-2">Get In Touch</h2>
          <h3 className="mb-1 text-lg font-semibold">Address</h3>
          <p className="text-sm">Kigali, Nyarugenge</p>
          <p className="text-sm">KN 254 St.</p>
          <p className="text-sm">info@mamaafrica.com</p>
        </div>


        <div className="flex flex-col items-center md:items-start font-coolvetica">
          <h3 className=" text-lg mb-2 ml-28">Register for our news updates</h3>
        
           <form className="flex flex-col space-y-2 w-full max-w-md">
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-2 rounded-lg w-1/2 ml-28 text-black bg-white focus:ring-2 focus:ring-yellow-300 outline-none"
  />
  <button className="bg-yellow-300 w-1/4 self-center text-slate-800 px-2 py-1 rounded-lg hover:bg-yellow-400 transition">
    Submit
  </button>
</form>
        </div>
      

      <div className="mt-8 border-t border-white pt-4 text-center font-coolvetica">
        <p className="text-sm font-normal">
          Copyrights © 2025 - <span className="text-yellow-300">Mama Africa Tours,</span> All Rights Reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
