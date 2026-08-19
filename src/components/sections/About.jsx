import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section 
            id="about" 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }} 
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen flex items-center justify-center py-8 px-4 relative overflow-hidden scroll-mt-[80px]"
        >

            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    About <span className="text-[#fb8500]">Me</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center my-auto">
                    
                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-center items-center h-full space-y-5 text-center">
                        <h3 className="text-xl font-semibold text-center border-b-2 border-[#fb8500]/30 pb-2 inline-block self-center">
                            Passionate <span className="text-[#fb8500]">MERN & Mobile</span> Developer
                        </h3>

                        <p className="font-saira text-[14px] text-gray-300 leading-relaxed text-center max-w-sm">
                            I am a dedicated Software Engineering student specializing in the MERN stack and mobile development. 
                            I build responsive, scalable full-stack web applications that solve real-world problems.
                        </p>

                        <p className="font-saira text-[14px] text-gray-300 leading-relaxed text-center max-w-sm">
                            I love crafting seamless cross-platform mobile apps and intuitive user experiences. 
                            Continuously learning new technologies, I strive to deliver high-quality software that makes an impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 pt-3 justify-center">
                            <a href="#contact" className="inline-flex justify-center items-center w-[8.5rem] h-[2.5rem] text-sm no-underline text-white border-[2px] border-[#fb8500] rounded-[1.125rem] transition-all hover:scale-105 hover:shadow-[0_0_15px_#fb8500]">
                                Contact Me
                            </a>

                            <a 
                            href="docs/Binu Jinajith_CV.pdf" 
                            download="Binu Jinajith_CV.pdf"
                            className="inline-flex justify-center items-center w-[8.5rem] h-[2.5rem] text-sm no-underline text-white border-[2px] border-[#fb8500] rounded-[1.125rem] transition-all hover:scale-105 hover:shadow-[0_0_15px_#fb8500]">
                                Download CV 
                            </a>

                        </div>
                    </div>

                    {/* RIGHT SIDE: IMAGE CONTAINER */}
                    <div className="relative flex justify-center items-center mt-8 lg:mt-0 w-full">
                        <div className="relative w-[250px] h-[312px] md:w-[310px] md:h-[400px]">
                            <div className="absolute -left-5 top-5 w-full h-full bg-[#fb8500]/30 rounded-2xl blur-xl -z-10 "></div>
                            <img 
                                src="/assets/about/me2.png" 
                                alt="Binu Jinajith" 
                                className="w-full h-full object-cover rounded-2xl border-2 border-white/10"
                            />

                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute -left-2 sm:-left-8 top-5 sm:top-8 bg-black/60 backdrop-blur-md border border-[#fb8500]/30 p-1.5 sm:p-3 rounded-xl shadow-lg transition-all hover:scale-105"
                            >
                                <h4 className="text-[#fb8500] font-bold text-xs sm:text-base whitespace-nowrap">Solving</h4>
                                <p className="font-saira text-[9px] sm:text-xs text-gray-300 whitespace-nowrap">Real World Problems</p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute -right-2 sm:-right-6 bottom-14 sm:bottom-16 bg-black/60 backdrop-blur-md border border-[#fb8500]/30 p-1.5 sm:p-3 rounded-xl shadow-lg transition-all hover:scale-105"
                            >
                                <h4 className="text-[#fb8500] font-bold text-xs sm:text-base whitespace-nowrap">Crafting</h4>
                                <p className="font-saira text-[9px] sm:text-xs text-gray-300 whitespace-nowrap">Clean Codes</p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute -bottom-3 sm:-bottom-5 left-3 sm:left-6 bg-black/60 backdrop-blur-md border border-[#fb8500]/30 p-1.5 sm:p-3 rounded-xl shadow-lg transition-all hover:scale-105"
                            >
                                <h4 className="text-[#fb8500] font-bold text-xs sm:text-base whitespace-nowrap">Mastering</h4>
                                <p className="font-saira text-[9px] sm:text-xs text-gray-300 whitespace-nowrap">Modern Tech</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default About;