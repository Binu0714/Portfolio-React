import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact Me', href: '#contact' },
  ];

  const [activeLink, setActiveLink] = useState('#home');

  return (
    <header className="fixed top-0 left-0 right-0 px-[5%] lg:px-[10%] py-5 flex justify-between items-center z-[9999] bg-black">
      
      {/* LOGO */}
      <a href="#home" className="text-[1.375rem] text-white no-underline font-medium">
        <strong>
          <span className="text-[#fb8500]">B</span>inu <span className="text-[#fb8500]">J</span>inajith
        </strong>
      </a>

      {/* 
         MENU ICON LOGIC:
         - lg:hidden: Hides the icon as soon as screen reaches 1024px (large breakpoint).
         - w-[30px] (mobile) to w-[40px] (larger sizes)
      */}
      <img 
        src="/assets/menu/menu.png" 
        alt="Menu Icon" 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-[30px] h-[30px] cursor-pointe " 
      />

      {/* 
         NAVIGATION LINKS LOGIC:
         - hidden lg:flex: Hides links on mobile, shows horizontal links on 1024px+.
         - isOpen ? 'flex...' : 'hidden lg:flex': Handles the mobile drop-down menu.
      */}
      <nav 
        className={`
          ${isOpen 
            ? 'flex flex-col absolute top-full left-0 w-full bg-black py-8 items-center gap-6 shadow-xl' 
            : 'hidden lg:flex lg:items-center'
          }
        `}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => {
              setActiveLink(link.href);
              setIsOpen(false);
            }}
            className={`
              no-underline relative transition-colors duration-300
              
              /* Font size: 14px on small screens, 16px on screens 1024px+ */
              text-[14px] lg:text-[16px] font-bold
              
              /* Responsive Spacing */
              ${isOpen ? 'ml-0' : 'lg:ml-[3.125rem]'}
              
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