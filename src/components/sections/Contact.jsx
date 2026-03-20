import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = () => {
    const phone = '94707431532';
    const { name, email, message } = formData;
    
    const fullMessage = `Contact Form Message\n\n` +
        `Name : ${name}\n` +
        `Email : ${email}\n` +
        `Message : ${message}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(url, '_blank');
  };


  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-transparent text-white scroll-mt-[80px] ">
      <h2 className="text-4xl font-bold mb-16 text-center">
        Contact <span className="text-[#fb8500]">Me</span>
      </h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl  hover:border-[#fb8500]/50"
      >
        {/* Left Side: Info */}
                
        <div className="flex-1 space-y-8">
        <div>
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="font-saira text-gray-300">
            I'd love to hear from you! Whether you have a question, collaboration idea, or just want to connect, feel free to reach out. Let's start a conversation!
            </p>
        </div>

        <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#fb8500] transition-all hover:scale-105">
                <FaEnvelope className="text-[#fb8500] text-xl" />
                <span className='text-lg'>binuj714@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#fb8500] transition-all hover:scale-105">
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
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#fb8500] mb-1">Send a Message</h3>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-300">Name :</label>
            <input 
                name="name"
                type="text" 
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#1a1f26] border border-white/10 rounded-lg p-3 outline-none focus:border-[#fb8500] transition-all" 
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-300">Email :</label>
            <input 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#1a1f26] border border-white/10 rounded-lg p-3 outline-none focus:border-[#fb8500] transition-all" 
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-300">Message :</label>
            <textarea 
              name="message"
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#1a1f26] border border-white/10 rounded-lg p-3 outline-none focus:border-[#fb8500] transition-all"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#fb8500] text-black font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;