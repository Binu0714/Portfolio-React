import React, { useState } from 'react';

const NavBar = () => {
 
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about-me' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact Me', href: '#contact' },
  ];

  const [activeLink, setActiveLink] = useState('#home');

  return (
    <header className="fixed top-0 left-0 right-0 px-[10%] py-5 flex justify-between items-center z-[9999] bg-black">
      
      <a href="#home" className="text-[1.375rem] text-white no-underline font-medium">
        <strong>
          <span className="text-[#fb8500]">B</span>inu <span className="text-[#fb8500]">J</span>inajith
        </strong>
      </a>

      <img 
        src="/assets/menu/icons8-menu-50.png" 
        alt="Menu Icon" 
        className="hidden w-[40px] h-[40px] cursor-pointer" 
      />

      <nav className="relative flex items-center left-[3.125rem]">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActiveLink(link.href)}
            className={`
              no-underline /* <--- ADD THIS HERE! */
              relative text-[16px] font-medium ml-[3.125rem] transition-colors duration-300
              font-sans 
              
              after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:bg-[#fb8500] after:transition-all after:duration-300
              
              ${activeLink === link.href 
                ? 'text-[#fb8500] after:w-full' 
                : 'text-white after:w-0 hover:text-[#fb8500] hover:after:w-full'
              }
            `}
          >
            {link.name}
          </a>
        ))}
      </nav>

    </header>
  );
};

export default NavBar;