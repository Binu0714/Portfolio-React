const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-10 px-4 relative overflow-hidden scroll-mt-[80px]" data-aos="fade-up">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    About <span className="text-[#fb8500]">Me</span>
                </h2>

                {/* Changed md: to lg: so it stays as 1 column until 1024px */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center my-auto">
                    
                    {/* LEFT SIDE: TEXT */}
                    <div className="flex flex-col justify-center items-center h-full space-y-6 text-center">
                        <h3 className="text-2xl font-semibold text-center border-b-2 border-[#fb8500]/30 pb-3 inline-block self-center">
                            Passionate <span className="text-[#fb8500]">MERN & Mobile</span> Developer
                        </h3>

                        <p className="font-saira text-[16px] text-gray-300 leading-relaxed text-center max-w-md">
                            I am a dedicated Software Engineering student specializing in the MERN stack and mobile development. 
                            I build responsive, scalable full-stack web applications that solve real-world problems.
                        </p>

                        <p className="font-saira text-[16px] text-gray-300 leading-relaxed text-center max-w-md">
                            I love crafting seamless cross-platform mobile apps and intuitive user experiences. 
                            Continuously learning new technologies, I strive to deliver high-quality software that makes an impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="inline-flex justify-center items-center w-[9.375rem] h-[2.75rem] no-underline text-white border-[2px] border-[#fb8500] rounded-[1.25rem] transition-all hover:scale-105 hover:shadow-[0_0_15px_#fb8500]">
                                Contact Me
                            </a>
                            <a href="" className="inline-flex justify-center items-center w-[9.375rem] h-[2.75rem] no-underline text-white border-[2px] border-[#fb8500] rounded-[1.25rem] transition-all hover:scale-105 hover:shadow-[0_0_15px_#fb8500]">
                                Download CV 
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE: IMAGE CONTAINER */}
                    {/* This will now naturally sit BELOW the text on mobile/tablet because of the grid order */}
                    <div className="relative flex justify-center items-center mt-10 lg:mt-0 w-full">
                        <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px]">
                            <div className="absolute -left-6 top-6 w-full h-full bg-[#fb8500]/30 rounded-2xl blur-xl -z-10"></div>
                            <img 
                                src="/assets/about/me2.png" 
                                alt="Binu Jinajith" 
                                className="w-full h-full object-cover rounded-2xl border-2 border-white/10"
                            />

                            {/* Floating Cards - Hidden on mobile, appear on Tablet/Desktop (1024px+) */}
                            <div className="absolute -left-2 sm:-left-10 top-6 sm:top-10 bg-black/60 backdrop-blur-md border border-white/10 p-2 sm:p-4 rounded-xl shadow-lg transition-all">
                                <h4 className="text-[#fb8500] font-bold text-sm sm:text-lg whitespace-nowrap">Solving</h4>
                                <p className="font-saira text-[10px] sm:text-sm text-gray-300 whitespace-nowrap">Real World Problems</p>
                            </div>

                            <div className="absolute -right-2 sm:-right-8 bottom-16 sm:bottom-20 bg-black/60 backdrop-blur-md border border-white/10 p-2 sm:p-4 rounded-xl shadow-lg transition-all">
                                <h4 className="text-[#fb8500] font-bold text-sm sm:text-lg whitespace-nowrap">Crafting</h4>
                                <p className="font-saira text-[10px] sm:text-sm text-gray-300 whitespace-nowrap">Clean Codes</p>
                            </div>

                            <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:left-8 bg-black/60 backdrop-blur-md border border-[#fb8500]/30 p-2 sm:p-4 rounded-xl shadow-[0_0_15px_rgba(251,133,0,0.2)] transition-all">
                               <h4 className="text-[#fb8500] font-bold text-sm sm:text-lg whitespace-nowrap">Mastering</h4>
                                <p className="font-saira text-[10px] sm:text-sm text-gray-300 whitespace-nowrap">Modern Tech</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;