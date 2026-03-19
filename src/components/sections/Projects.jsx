import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    { title: "AutoLog", 
        desc: "AutoLog is a high-end mobile utility application designed for vehicle owners to digitize their maintenance logbooks, track fuel consumption, and manage critical legal documents.", 
        img: "/assets/my_projects/autolog.png", 
        link: "#" 
    },
    { title: "Boardify", 
        desc: "Boardify is a modern, secure, and user-friendly web platform designed to help university students in Sri Lanka easily find safe and suitable accommodation.", 
        img: "/assets/my_projects/boardify.jpg", 
        link: "#" 
    },
    { title: "LearnCreaft", 
        desc: "LearnCraft helps students master their time by tracking study habits, managing subjects, and generating personalized study timetables using Google Gemini AI.", 
        img: "/assets/my_projects/learnCraft.png", 
        link: "#" 
    },
    { title: "TrainMate", 
        desc: "TrainMate is a comprehensive train booking application that provides a seamless experience for users to search, compare, and book train tickets.", 
        img: "/assets/my_projects/trainBooking.jpg", 
        link: "#" 
    },
    { title: "TicTacToe", 
        desc: "Tic-Tac-Toe is a classic two-player strategy game where participants take turns placing their symbol (X or O) on a 3×3 grid, aiming to align three marks in a row, column, or diagonal to win.", 
        img: "/assets/my_projects/tictactoe.png", 
        link: "#" 
    },

  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 bg-transparent text-white scroll-mt-[80px]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-16 text-center">
          My <span className="text-[#fb8500]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              
              className="group relative rounded-2xl p-6 bg-white/7 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-[#fb8500]/50 hover:shadow-[0_0_25px_rgba(251,133,0,0.3)] hover:-translate-y-2"
            >
              {/* Glow Effect (Same as Skills) */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-[#fb8500]/5 blur-xl"></div>
              
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-6" />
              
              <h3 className="text-2xl font-bold text-[#fb8500] mb-3 text-center">{project.title}</h3>
              <p className="text-sm mb-6 leading-relaxed text-center text-gray-300">{project.desc}</p>
              
              <div className="flex justify-center">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full font-bold transition-all duration-300 
                              hover:-translate-y-1 hover:shadow-lg border border-white/10 hover:border-[#fb8500] 
                              bg-white text-black overflow-hidden"
                    >
                    
                    <span className="absolute inset-0 bg-[#fb8500] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out z-0"></span>
                    
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Explore more on GitHub
                    </span>
                    
                    <img 
                      src="/assets/skills/github.png" 
                      alt="github" 
                      className="relative z-10 w-6 h-6 object-contain group-hover:invert transition-all duration-300" 
                    />
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;