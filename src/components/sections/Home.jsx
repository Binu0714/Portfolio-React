import React from 'react';

const Home = () => {
  const socialLinks = [
    { id: 1, href: "https://www.linkedin.com/in/binu-jinajith-3424aa347/", src: "/assets/hero/linkedIn.png", alt: "LinkedIn" },
    { id: 2, href: "https://www.instagram.com/binu_j18?igsh=Mnd0OHpha2s5czh3", src: "/assets/hero/instergram.png", alt: "Instagram" },
    { id: 3, href: "https://github.com/Binu0714", src: "/assets/hero/github.png", alt: "GitHub" },
    { id: 4, href: "https://web.facebook.com/binu.jinajith.2025", src: "/assets/hero/facebook.png", alt: "Facebook" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex justify-center items-center px-6 py-16 scroll-mt-[80px] animate-fade" 
    >
     
      <div className="w-full max-w-3xl flex flex-col items-center">
        
        <h1 className="font-saira font-bold text-center text-[40px] sm:text-[52px] md:text-[68px] leading-tight">
          Hello I'm <br className="sm:hidden" /> 
          <span className="text-[#fb8500] block sm:inline">Binu Jinajith</span>
        </h1>
        
        <h3 className="text-center text-[18px] sm:text-[22px] md:text-[26px] mt-2 font-medium">
          A <span className="text-[#fb8500]">Software</span> Developer
        </h3>
        
        <p className="font-saira text-sm md:text-base mt-4 text-gray-300 text-center max-w-xl px-4 leading-relaxed">
          A dedicated Software Engineering student specializing in the MERN stack and mobile development. 
          I am passionate about architecting scalable full-stack web applications and crafting seamless, intuitive cross-platform mobile experiences.
        </p>
        
        <div className="flex justify-center gap-5 mt-6">
          {socialLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform duration-300 hover:scale-[1.2]"
            >
              <img src={link.src} alt={link.alt} className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]" />
            </a>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="docs/Binu Jinajith_CV.pdf" 
            download="Binu Jinajith_CV.pdf"
            className="inline-flex justify-center items-center w-[135px] md:w-[145px] h-[40px] text-sm no-underline text-white border-[2px] border-[#fb8500] rounded-[20px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#fb8500]"
          >
            Download CV
          </a>
          
          <a 
            href="#contact" 
            className="inline-flex justify-center items-center w-[135px] md:w-[145px] h-[40px] text-sm no-underline bg-[#fb8500] text-black font-bold border-[2px] border-[#fb8500] rounded-[20px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#fb8500]"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Home;