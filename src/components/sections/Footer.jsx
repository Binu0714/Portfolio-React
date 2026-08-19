import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-7 px-4 bg-transparent text-center bg-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3">
        
        <p className="text-lg font-bold">
            <span className="text-[#fb8500]">B</span>inu <span className="text-[#fb8500]">J</span>inajith
        </p>
        
        <p className="text-gray-400 text-xs font-saira">
            &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-saira">
            <span>Designed & Built with</span>
            <FaHeart className="text-[#fb8500] animate-pulse" />
            <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;