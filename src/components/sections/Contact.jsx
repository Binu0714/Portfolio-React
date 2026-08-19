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
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} 
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="min-h-screen flex flex-col items-center justify-center py-14 px-4 bg-transparent text-white scroll-mt-[80px] "
    >

      <h2 className="text-3xl font-bold mb-12 text-center">
        Contact <span className="text-[#fb8500]">Me</span>
      </h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl  hover:border-[#fb8500]/50"
      >
        {/* Left Side: Info */}
        <div className="flex-1 space-y-6">
        <div>
            <h3 className="text-xl font-bold mb-3">Let's Work Together</h3>
            <p className="font-saira text-sm text-gray-300 leading-relaxed">
            I'd love to hear from you! Whether you have a question, collaboration idea, or just want to connect, feel free to reach out. Let's start a conversation!
            </p>
        </div>

        <div className="space-y-3">
            <div className="flex items-center justify-center gap-3.5 p-4 rounded-lg border border-white/10 bg-white/5 hover:border-[#fb8500] transition-all hover:scale-[1.03]">
                <FaEnvelope className="text-[#fb8500] text-lg" />
                <span className='text-base'>binuj714@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3.5 p-4 rounded-lg border border-white/10 bg-white/5 hover:border-[#fb8500] transition-all hover:scale-[1.03]">
                <FaPhone className="text-[#fb8500] text-lg" />
                <span className='text-base'>+94 707431532</span>
            </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div className="pt-3">
            <h4 className="text-base font-semibold mb-3 text-[#fb8500]">Connect with me on Social Media</h4>
            <div className="flex gap-3">
            {[
                { src: "/assets/hero/linkedIn.png", href: "https://www.linkedin.com/in/binu-jinajith-3424aa347/" },
                { src: "/assets/hero/instergram.png", href: "https://www.instagram.com/binu_j18" },
                { src: "/assets/hero/x.png", href: "https://x.com/Binu80992" },
                { src: "/assets/hero/facebook.png", href: "https://web.facebook.com/binu.jinajith.2025" },
                { src: "/assets/hero/threads.png", href: "https://www.threads.com/@binu_j18" }
            ].map((social, i) => (
                <a 
                key={i} 
                href={social.href} 
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#fb8500] hover:scale-110 transition-all duration-300"                >
                <img src={social.src} alt="social" className="w-6 h-6 object-contain filter brightness-0 invert" />
                </a>
            ))}
            </div>
        </div>
        </div>

        {/* Right Side: Form */}
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-[#fb8500] mb-1">Send a Message</h3>
          </div>

          <div className="flex flex-col">
            <label className="mb-1.5 text-xs font-semibold text-gray-300">Name :</label>
            <input 
                name="name"
                type="text" 
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#1a1f26] border border-white/10 rounded-lg p-2.5 outline-none focus:border-[#fb8500] transition-all text-sm" 
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1.5 text-xs font-semibold text-gray-300">Email :</label>
            <input 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#1a1f26] border border-white/10 rounded-lg p-2.5 outline-none focus:border-[#fb8500] transition-all text-sm" 
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1.5 text-xs font-semibold text-gray-300">Message :</label>
            <textarea 
              name="message"
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#1a1f26] border border-white/10 rounded-lg p-2.5 outline-none focus:border-[#fb8500] transition-all text-sm"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#fb8500] text-black font-bold py-2.5 rounded-lg transition-all transform hover:scale-[1.01] shadow-lg text-sm"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;