import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sokchan.dev@gmail.com',
      href: 'mailto:sokchan.dev@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+855 XX XXX XXX',
      href: 'tel:+855xxxxxxxx',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Phnom Penh, Cambodia',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-black py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-white">
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-white mb-6">Let's work together</h3>
              <p className="text-gray-400 text-lg mb-8">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you need a full-stack developer or want to discuss a project idea, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10 group-hover:border-white/30 transition-colors">
                    <info.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.title}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8"
            >
              <p className="text-gray-400 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ y: -4, scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -4, scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* 3D Floating Element */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="hidden md:block mt-12 w-32 h-32 border border-purple-500/30 rounded-lg"
              style={{ transform: 'rotateX(45deg) rotateY(45deg)', transformStyle: 'preserve-3d' }}
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 text-center text-gray-400"
      >
        <p>© 2026 Sokchan. All rights reserved.</p>
      </motion.div>
    </section>
  );
}