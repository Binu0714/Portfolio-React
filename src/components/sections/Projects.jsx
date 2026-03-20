import React from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  const projects = [
    { title: "AutoLog", 
        desc: "AutoLog is a high-end mobile utility application designed for vehicle owners to digitize their maintenance logbooks, track fuel consumption, and manage critical legal documents.", 
        img: "/assets/my_projects/autolog.png", 
        link: "https://github.com/Binu0714/AutoLog.git" 
    },
    { title: "Boardify", 
        desc: "Boardify is a modern, secure, and user-friendly web platform designed to help university students in Sri Lanka to easily find safe and suitable accommodation.", 
        img: "/assets/my_projects/boardify.jpg", 
        link: "https://github.com/Binu0714/Boardify---AAD-Final-Project.git" 
    },
    { title: "LearnCreaft", 
        desc: "LearnCraft helps students master their time by tracking study habits, managing subjects, and generating personalized study timetables using Google Gemini AI.", 
        img: "/assets/my_projects/learnCraft.png", 
        link: "https://github.com/Binu0714/LearnCraft---BackEnd.git" 
    },
    { title: "TrainMate", 
        desc: "TrainMate is a comprehensive train booking application that provides a seamless experience for users to search, compare, and book train tickets.", 
        img: "/assets/my_projects/trainBooking.jpg", 
        link: "https://github.com/Binu0714/Train_Booking_Layerd.git" 
    },
    { title: "TicTacToe", 
        desc: "Tic-Tac-Toe is a classic two-player strategy game where participants take turns placing their symbol (X or O) on a 3×3 grid, aiming to align three marks in a row, column, or diagonal to win.", 
        img: "/assets/my_projects/tictactoe.png", 
        link: "https://github.com/Binu0714/Tik-Tac-Toe.git" 
    },

  ];

  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} 
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-transparent text-white scroll-mt-[80px]"
    >

      <h2 className="text-4xl font-bold mb-8 text-center">
        My <span className="text-[#fb8500]">Projects</span>
      </h2>

      <div className="w-full max-w-7xl px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}

          autoplay={{ delay: 4000, disableOnInteraction: false }}

          pagination={{ clickable: true, type: 'bullets' }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-24"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="py-10">
              {({ isActive }) => (
                <motion.div 
                  initial={{ opacity: 0.5 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 1.05 : 0.9,
                    y: isActive ? 0 : 20
                  }}
                  className="mx-2 my-8 group relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-[#fb8500]/50 hover:shadow-[0_0_25px_rgba(251,133,0,0.3)]"                >
                  <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-6" />
                  
                  <h3 className="text-2xl font-bold text-[#fb8500] mb-3 text-center">{project.title}</h3>
                  <p className="font-saira text-sm mb-6 leading-relaxed text-center text-gray-300">{project.desc}</p>
                  
                  <div className="flex justify-center">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full font-bold transition-all duration-300 
                              hover:-translate-y-1 hover:shadow-lg border hover:border-[#fb8500] 
                              bg-white text-black overflow-hidden"
                    >
                    
                    <span className="absolute inset-0 bg-[#fb8500] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out z-0"></span>
                    
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Explore on GitHub
                    </span>
                    
                    <img 
                      src="/assets/skills/github.png" 
                      alt="github" 
                      className="relative z-10 w-6 h-6 object-contain group-hover:invert transition-all duration-300" 
                    />
                  </a>
                </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Projects;