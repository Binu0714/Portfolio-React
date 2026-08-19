import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('#home');
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
         
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveLink(`#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 px-[5%] lg:px-[10%] py-4 flex justify-between items-center z-[9999] bg-black">
      
      <a href="#home" className="text-[1.2rem] text-white no-underline font-medium">
        <strong>
          <span className="text-[#fb8500]">B</span>inu <span className="text-[#fb8500]">J</span>inajith
        </strong>
      </a>

      <img 
        src="/assets/menu/menu.png" 
        alt="Menu Icon" 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-[26px] h-[26px] cursor-pointer" 
      />

      <nav 
        className={`
          ${isOpen 
            ? 'flex flex-col absolute top-full left-0 w-full bg-black py-6 items-center gap-5 shadow-xl' 
            : 'hidden lg:flex lg:items-center'
          }
        `}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              if (activeLink === link.href) {
                e.preventDefault();
                setIsOpen(false);
                return;
              }
              setActiveLink(link.href);
              setIsOpen(false);
            }}
            className={`
              no-underline relative transition-colors duration-300
              
              text-[13px] lg:text-[14.5px] font-bold 
              
              ${isOpen ? 'ml-0' : 'lg:ml-[2.5rem]'}
              
              after:content-[''] after:absolute after:left-0 after:-bottom-[4px] after:h-[2px] after:bg-[#fb8500] after:transition-all after:duration-300
              
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