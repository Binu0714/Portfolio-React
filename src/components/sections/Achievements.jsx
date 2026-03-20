import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Achievements = () => {
  const images = [
    { src: "/assets/circle_edge/1.jpg", label: "2nd Runner-Up" },
    { src: "/assets/circle_edge/3.jpg", label: "2nd Runner-Up" },
    { src: "/assets/circle_edge/2.jpg", label: "2nd Runner-Up" },
    { src: "/assets/circle_edge/4.jpg", label: "2nd Runner-Up" },
    { src: "/assets/circle_edge/5.jpg", label: "2nd Runner-Up" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-transparent text-white scroll-mt-[80px] overflow-x-hidden"
    >
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          My <span className="text-[#fb8500]">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT SIDE: IMAGE CAROUSEL */}
          <div className="relative flex flex-col justify-center items-center order-1">
            <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] max-w-[calc(100vw-80px)]">
           
              <div className="absolute -left-6 top-6 w-full h-full bg-[#fb8500]/20 rounded-2xl blur-xl -z-10"></div>

              {/* Carousel with fade */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current].src}
                  alt="Achievement"
                  className="w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              {/* Decorative Floating Label */}
              <div className="absolute -bottom-6 -right-6 bg-[#fb8500] text-black font-bold px-4 py-2 md:px-6 rounded-full shadow-lg text-sm md:text-base whitespace-nowrap hover:scale-105 hover:border-[#fb8500]/50 hover:shadow-[0_0_25px_rgba(251,133,0,0.3)]">
                {images[current].label}
              </div>
            </div>

            {/* DOTS */}
            <div className="flex space-x-2 mt-12">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                    current === index ? "bg-[#fb8500]" : "bg-white/30"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="flex flex-col justify-center h-full items-center space-y-6 text-center order-2 mt-8 lg:mt-0">
            <h3 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#fb8500]/30 pb-3 px-2">
              Circle Edge 2025 - <span className="text-[#fb8500]">Second Runner Up</span>
            </h3>

            <p className="font-saira text-base md:text-[16px] text-gray-300 leading-relaxed max-w-md px-2">
              We are proud to have accomplished a significant milestone in personal healthcare technology. Our efforts were recognized through the successful development of a system that empowers users to manage their wellbeing effectively, demonstrating innovation, dedication, and teamwork.
            </p>

            <p className="font-saira text-base md:text-[16px] text-gray-300 leading-relaxed max-w-md px-2">
              The platform includes features such as menstrual tracking, personal health monitoring, and doctor management, providing an intuitive and practical solution for everyday health management. This achievement highlights our ability to deliver impactful, user-focused technology that makes a real difference.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;