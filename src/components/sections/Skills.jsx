import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaMobileAlt,
  FaJava,
  FaPython,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiExpress,
  SiSpringboot,
  SiFlutter,
  SiTypescript,
  SiPostgresql,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "React Native", icon: <FaMobileAlt /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section id="skills" data-aos="fade-up" className="min-h-screen flex items-center justify-center px-4 bg-transparent text-white relative overflow-hidden scroll-mt-[80px]">
      <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} 
            className="max-w-5xl w-full mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          My <span className="text-[#fb8500]">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {skills.map((skill, index) => (
             <motion.div
              key={index}
              variants={itemVariants} 
              className="group relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,133,0,0.4)] transition-all"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-[#fb8500]/10 blur-xl"></div>
              <div className="text-xl sm:text-3xl text-[#fb8500] mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 group-hover:text-white transition">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 px-4"
        >
          <p className="text-gray-400 text-xs sm:text-sm italic max-w-xl mx-auto">
            "The future belongs to those who learn more skills and combine them in creative ways."
          </p>
          <p className="text-[#fb8500] text-xs mt-1.5 italic">- Robert Green</p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Skills;