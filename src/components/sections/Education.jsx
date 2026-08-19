import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    { school: "Institute Of Software Engineering", period: "2024 - Present", degree: "Graduate Diploma in Software Engineering (GDSE)", logo: "/assets/education/ijse.png" },
    { school: "Sripalee College - Horana", period: "2020 - 2022", degree: "Completed GCE Advanced Level Examination (A/L)", logo: "/assets/education/school.jpeg" },
    { school: "Sripalee College - Horana", period: "2016 - 2018", degree: "Completed GCE Ordinary Level Examination (O/L)", logo: "/assets/education/school.jpeg" },
  ];

  return (
    <motion.section 
      id="education" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} 
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      /* Reduced top/bottom padding from py-20 to py-14 */
      className="min-h-screen py-14 px-4 bg-transparent text-white scroll-mt-[80px] overflow-x-hidden"
    >
      {/* Reduced heading sizing from text-4xl mb-16 to text-3xl mb-12 */}
      <h2 className="text-3xl font-bold mb-12 text-center">
        Educational <span className="text-[#fb8500]">Background</span>
      </h2>

      {/* Reduced container maximum width from max-w-4xl to max-w-3xl */}
      <div className="relative max-w-3xl mx-auto">
        {/* The Vertical Line - Only visible on desktop */}
        <div className="absolute left-[50%] transform -translate-x-1/2 h-full w-1 bg-[#fb8500] hidden md:block"></div>

        {education.map((edu, index) => (
          <div 
            key={index} 
            /* Reduced spacing between timeline elements from mb-12 to mb-8 */
            className={`mb-8 flex flex-col md:flex-row items-center w-full relative ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            
            {/* The Logo Dot - Reduced scale from w-12 h-12/w-16 h-16 to w-10 h-10/w-14 h-14 */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 
                w-10 h-10 md:w-14 md:h-14 
                bg-black rounded-full items-center justify-center border border-[#fb8500] ">
              <img src={edu.logo} alt="logo" className="w-full h-full object-contain rounded-full" />
            </div>

            {/* The Card */}
            <motion.div 
              // reduced x offset for mobile (20) vs desktop (50) to keep it safe
              initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : (index % 2 === 0 ? 50 : -50), y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              /* Reduced padding (p-6 to p-5), border corners (rounded-xl to rounded-lg), and hover scaling scale-105 to scale-[1.03] */
              className="w-full md:w-5/12 bg-white/5 p-5 rounded-lg border border-white/10 transition-all hover:border-[#fb8500]/50 hover:shadow-[0_0_25px_rgba(251,133,0,0.3)] hover:scale-[1.03]"
            >
              {/* Reduced font scale for school name from text-xl to text-lg */}
              <h3 className="text-lg font-bold text-white mb-1 text-center">{edu.school}</h3>
              {/* Reduced period font size to text-sm and margin to mb-1.5 */}
              <p className="text-[#fb8500] text-sm font-semibold mb-1.5 text-center">{edu.period}</p>
              {/* Reduced degree description font size from text-sm to text-xs */}
              <p className="text-gray-300 text-xs text-center">{edu.degree}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Reduced top margin (mt-16 to mt-12), max width, and font sizes of the bottom section */}
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-12 px-4 text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm italic max-w-xl mx-auto">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
          <p className="text-[#fb8500] text-xs mt-1.5 italic">- Nelson Mandela</p>
      </motion.div>
    </motion.section>
  );
};

export default Education;