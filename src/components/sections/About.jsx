const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-[#fb8500]">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center h-full space-y-6 text-center md:text-left md:pr-10">
                        <h3 className="text-2xl font-semibold text-center border-b-2 border-[#fb8500]/30 pb-3 inline-block">
                            Passionate <span className="text-[#fb8500]">MERN & Mobile</span> Developer
                        </h3>

                        <p className="font-saira text-[16px] text-gray-300 leading-relaxed text-center">
                            I am a dedicated Software Engineering student specializing in the MERN stack and mobile development. 
                            I build responsive, scalable full-stack web applications that solve real-world problems.
                        </p>

                        <p className="font-saira text-[16px] text-gray-300 leading-relaxed text-center">
                            I love crafting seamless cross-platform mobile apps and intuitive user experiences. 
                            Continuously learning new technologies, I strive to deliver high-quality software that makes an impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="inline-flex justify-center items-center w-[9.375rem] h-[2.75rem] no-underline text-white border-[2px] border-[#fb8500] rounded-[1.25rem] tracking-[0.0625rem] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_#fb8500]">
                                {" "}
                                Contact Me
                            </a>

                            <a href="" className="inline-flex justify-center items-center w-[9.375rem] h-[2.75rem] no-underline text-white border-[2px] border-[#fb8500] rounded-[1.25rem] tracking-[0.0625rem] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_#fb8500]">
                                {" "}
                                Download CV 
                            </a>
                        </div>
                    </div>

                    <div className="relative flex justify-center items-center mt-10 md:mt-0">
                        
                        {/* The Image Container */}
                        <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px]">
                            
                            {/* 1. The "Shade to the left" effect (A glowing orange blur behind the image) */}
                            <div className="absolute -left-6 top-6 w-full h-full bg-[#fb8500]/30 rounded-2xl blur-xl -z-10"></div>
                            
                            {/* 2. Your Photo */}
                            <img 
                                src="/assets/about/me2.png" /* Make sure your image is in the public/assets folder! */
                                alt="Binu Jinajith" 
                                className="w-full h-full object-cover rounded-2xl border-2 border-white/10"
                            />

                            {/* 3. Floating Card 1 (Top Left) */}
                            {/* bg-black/60 and backdrop-blur-md creates the "Glass" effect */}
                            <div className="absolute -left-10 top-10 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                                <h4 className="text-[#fb8500] font-bold text-lg whitespace-nowrap">Solving</h4>
                                <p className="font-saira text-sm text-gray-300 whitespace-nowrap">Real World Problems</p>
                            </div>

                            {/* 3. Floating Card 2 (Bottom Right) */}
                            <div className="absolute -right-8 bottom-20 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                                <h4 className="text-[#fb8500] font-bold text-lg whitespace-nowrap">Creafting</h4>
                                <p className="font-saira text-sm text-gray-300 whitespace-nowrap">Clean Codes</p>
                            </div>

                            {/* 3. Floating Card 3 (Bottom Left) */}
                            <div className="absolute -bottom-6 left-8 bg-black/60 backdrop-blur-md border border-[#fb8500]/30 p-4 rounded-xl shadow-[0_0_15px_rgba(251,133,0,0.2)] transition-transform duration-300 hover:-translate-y-2">
                               <h4 className="text-[#fb8500] font-bold text-lg whitespace-nowrap">Mastering</h4>
                                <p className="font-saira text-sm text-gray-300 whitespace-nowrap">Modern Tech</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About