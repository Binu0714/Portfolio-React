import React from 'react';

const Home = () => {
  const socialLinks = [
    { id: 1, href: "https://www.linkedin.com/in/binu-jinajith-3424aa347/", src: "assets/hero/linkedIn.png", alt: "LinkedIn" },
    { id: 2, href: "https://www.instagram.com/binu_j18?igsh=Mnd0OHpha2s5czh3", src: "/assets/hero/instergram.png", alt: "Instagram" },
    { id: 3, href: "https://github.com/Binu0714", src: "/assets/hero/github.png", alt: "GitHub" },
    { id: 4, href: "https://www.facebook.com/share/1ANgAxJBRG/", src: "/assets/hero/facebook.png", alt: "Facebook" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex justify-center items-center scroll-mt-[12.5rem] animate-fade"
    >
      <div className="relative w-full max-w-4xl">
        
        <h1 className="font-saira font-bold font text-center text-[80px] leading-tight">
          Hello I'm <span className="text-[#fb8500]">Binu Jinajith</span>
        </h1>
        
        <h3 className="text-center text-[30px] mt-2 font-medium">
          A <span className="text-[#fb8500]">Software</span> Developer
        </h3>
        
        <p className="font-sanstext text-lg mt-6 text-gray-300 text-center">
          A dedicated Software Engineering student specializing in the MERN stack and mobile development. I am passionate about architecting scalable full-stack web applications and crafting seamless, intuitive cross-platform mobile experiences.
        </p>
        
        <div className="relative flex justify-center gap-5 mt-6">
          {socialLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform duration-500 ease-in-out hover:scale-[1.3]"
            >
              <img src={link.src} alt={link.alt} className="w-[35px] h-[35px]" />
            </a>
          ))}
        </div>
        
       
        <div className="flex justify-between w-[20rem] h-[2.5rem] mx-auto mt-10">
          
          {/* Download CV Button */}
          <a 
            href="#" 
            className="inline-flex justify-center items-center w-[9.375rem] h-full no-underline text-white border-[2px] border-[#fb8500] rounded-[1.25rem] tracking-[0.0625rem] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_#fb8500]"
          >
            Download CV
          </a>
          
          {/* Contact Me Button */}
          <a 
            href="#contact" 
            className="inline-flex justify-center items-center w-[9.375rem] h-full no-underline bg-[#fb8500] text-black font-medium border-[2px] border-[#fb8500] rounded-[1.25rem] tracking-[0.0625rem] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_#fb8500]"
          >
            Contact Me
          </a>
          
        </div>

      </div>
    </section>
  );
};

export default Home;