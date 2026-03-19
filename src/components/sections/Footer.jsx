import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-transparent border-t border-white/5 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        
        {/* Branding */}
        <p className="text-xl font-bold">
            <span className="text-[#fb8500]">B</span>inu <span className="text-[#fb8500]">J</span>inajith
        </p>
        
        {/* Copyright */}
        <p className="text-gray-400 text-sm font-saira">
            &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Made with Love */}
        <div className="flex items-center gap-2 text-sm text-gray-400 font-saira">
            <span>Designed & Built with</span>
            <FaHeart className="text-[#fb8500] animate-pulse" />
            <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;