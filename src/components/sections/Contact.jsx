import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-transparent text-white scroll-mt-[80px]">
      <h2 className="text-4xl font-bold mb-16 text-center">
        Contact <span className="text-[#fb8500]">Me</span>
      </h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        {/* Left Side: Info */}
                
        <div className="flex-1 space-y-8">
        <div>
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-300">
            I'd love to hear from you! Whether you have a question, collaboration idea, or just want to connect, feel free to reach out. Let's start a conversation!
            </p>
        </div>

        <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#fb8500] transition-all">
                <FaEnvelope className="text-[#fb8500] text-xl" />
                <span className='text-lg'>binuj714@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#fb8500] transition-all">
                <FaPhone className="text-[#fb8500] text-xl" />
                <span className='text-lg'>+94 707431532</span>
            </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div className="pt-4">
            <h4 className="text-lg font-semibold mb-4 text-[#fb8500]">Connect with me on Social Media</h4>
            <div className="flex gap-4">
            {[
                { src: "/assets/hero/linkedIn.png", href: "#" },
                { src: "/assets/hero/instergram.png", href: "#" },
                { src: "/assets/hero/x.png", href: "#" },
                { src: "/assets/hero/facebook.png", href: "#" },
                { src: "/assets/hero/threads.png", href: "#" }
            ].map((social, i) => (
                <a 
                key={i} 
                href={social.href} 
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#fb8500] hover:scale-110 transition-all duration-300"                >
                <img src={social.src} alt="social" className="w-8 h-8 object-contain filter brightness-0 invert" />
                </a>
            ))}
            </div>
        </div>
        </div>

        {/* Right Side: Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#fb8500] mb-1">Send a Message</h3>
            <p className="text-sm text-gray-400">Fill out the form below and I'll get back to you soon.</p>
          </div>

          {[
            { label: "Name", type: "text", placeholder: "Your Name" },
            { label: "Email", type: "email", placeholder: "Your Email" },
          ].map((field, i) => (
            <div key={i} className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-gray-300">{field.label} :</label>
              <input 
                type={field.type} 
                placeholder={field.placeholder}
                className="bg-[#1a1f26] border border-white/10 rounded-lg p-3 outline-none focus:border-[#fb8500] focus:ring-1 focus:ring-[#fb8500] transition-all hover:border-[#fb8500]/50" 
              />
            </div>
          ))}

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-300">Message :</label>
            <textarea 
              rows="4" 
              placeholder="Your Message..."
              className="bg-[#1a1f26] border border-white/10 rounded-lg p-3 outline-none focus:border-[#fb8500] focus:ring-1 focus:ring-[#fb8500] transition-all hover:border-[#fb8500]/50"
            ></textarea>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-[#fb8500] hover:bg-transparent hover:border-2 hover:border-[#fb8500] text-black hover:text-[#fb8500] font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg">
            Send Message <FaPaperPlane />
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;