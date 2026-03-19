import React from 'react';

const Home = () => {
  const socialLinks = [
    { id: 1, href: "https://www.linkedin.com/in/binu-jinajith-3424aa347/", src: "/assets/hero/linkedIn.png", alt: "LinkedIn" },
    { id: 2, href: "https://www.instagram.com/binu_j18?igsh=Mnd0OHpha2s5czh3", src: "/assets/hero/instergram.png", alt: "Instagram" },
    { id: 3, href: "https://github.com/Binu0714", src: "/assets/hero/github.png", alt: "GitHub" },
    { id: 4, href: "https://www.facebook.com/share/1ANgAxJBRG/", src: "/assets/hero/facebook.png", alt: "Facebook" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex justify-center items-center px-6 py-20 scroll-mt-[80px] animate-fade" 
    >
     
      <div className="w-full max-w-4xl flex flex-col items-center">
        
        {/* Responsive Text Scaling: 48px on mobile -> 80px on desktop */}
        <h1 className="font-saira font-bold text-center text-[48px] sm:text-[60px] md:text-[80px] leading-tight">
          Hello I'm <br className="sm:hidden" /> 
          <span className="text-[#fb8500] block sm:inline">Binu Jinajith</span>
        </h1>
        
        {/* Responsive Subtitle */}
        <h3 className="text-center text-[20px] sm:text-[25px] md:text-[30px] mt-2 font-medium">
          A <span className="text-[#fb8500]">Software</span> Developer
        </h3>
        
        {/* Responsive Paragraph: max-w-2xl keeps text readable on huge 2560px screens */}
        <p className="font-saira text-base md:text-lg mt-6 text-gray-300 text-center max-w-2xl px-4">
          A dedicated Software Engineering student specializing in the MERN stack and mobile development. 
          I am passionate about architecting scalable full-stack web applications and crafting seamless, intuitive cross-platform mobile experiences.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          {socialLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform duration-300 hover:scale-[1.3]"
            >
              <img src={link.src} alt={link.alt} className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
            </a>
          ))}
        </div>
        
        {/* Responsive Buttons: Uses flex-wrap so they stack vertically on tiny 320px screens */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a 
            href="docs/Binu Jinajith_CV.pdf" 
            download="Binu Jinajith_CV.pdf"
            className="inline-flex justify-center items-center w-[150px] md:w-[160px] h-[45px] no-underline text-white border-[2px] border-[#fb8500] rounded-[20px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#fb8500]"
          >
            Download CV
          </a>
          
          <a 
            href="#contact" 
            className="inline-flex justify-center items-center w-[150px] md:w-[160px] h-[45px] no-underline bg-[#fb8500] text-black font-bold border-[2px] border-[#fb8500] rounded-[20px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#fb8500]"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Home;