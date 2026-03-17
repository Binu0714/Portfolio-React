import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiJavascript, SiExpress, SiSpringboot } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This controls the delay between each icon
      delayChildren: 0.1,   // This adds a small delay before the first one starts
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Start lower (y:30)
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "React Native", icon: <FaMobileAlt /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 bg-transparent text-white relative overflow-hidden scroll-mt-[80px]">
      <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} 
            className="max-w-6xl w-full mx-auto text-center"
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-14">
          My <span className="text-[#fb8500]">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
             <motion.div
              key={index}
              variants={itemVariants} // Using defined variants for smooth entrance
              className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,133,0,0.4)] transition-all"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-[#fb8500]/10 blur-xl"></div>
              <div className="text-2xl sm:text-4xl text-[#fb8500] mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-white transition">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 px-4"
        >
          <p className="text-gray-400 text-sm sm:text-base italic max-w-2xl mx-auto">
            "The future belongs to those who learn more skills and combine them in creative ways."
          </p>
          <p className="text-[#fb8500] text-sm mt-2 italic">- Robert Green</p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Skills;