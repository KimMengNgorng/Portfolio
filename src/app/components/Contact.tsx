import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const botId = '8578611132:AAHlMWH9HJN4-ubw45G7Y-TSxrVHQ78RoCo';
    const chatId = '-5439929139';
    const text = `New Message from Portfolio:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nCompany: ${formData.company || 'N/A'}\nMessage: ${formData.message}`;

    try {
      // Check sender's IP address
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();

      if (ipData.ip === '43.245.32.65') {
        // Pretend it was successful to trick the spammer
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(`https://api.telegram.org/bot${botId}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mengngorngkim@gmail.com',
      href: 'mailto:mengngorngkim@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+855 78 326 889',
      href: 'tel:+85578326889',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Phnom Penh, Cambodia',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-[#030712] py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6">Reach out directly</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                Whether you need a full-stack developer or want to discuss a project idea, I'm currently available for new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-6 group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:border-violet-500/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all">
                    <info.icon className="text-violet-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-1">{info.title}</p>
                    <p className="text-gray-200 font-medium text-lg">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-8 border-t border-white/10"
            >
              <p className="text-gray-400 mb-6 font-medium">Follow my work</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/kimmengngorng" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/kim-mengngorng-123456789/" },
                  { icon: Send, href: "https://t.me/MengNgorng_Kim" },
                  { icon: Instagram, href: "https://www.instagram.com/kimmengngorng/?hl=en" },
                  { icon: Facebook, href: "https://www.facebook.com/kim.mengngorng.12" }
                ].map((social, idx) => (
                   <motion.a
                    key={idx}
                    whileHover={{ y: -4, scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 transition-all"
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 space-y-6 shadow-2xl relative overflow-hidden">
              {/* Form background shimmer */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-b from-violet-500/10 to-transparent rounded-full blur-[80px] -z-10" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone Number <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                    placeholder="+855 12 345 678"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                    Company <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                    placeholder="Tech Corp"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-violet-500/40'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 text-sm text-center font-medium bg-emerald-400/10 py-2 rounded-lg border border-emerald-400/20">
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center font-medium bg-red-400/10 py-2 rounded-lg border border-red-400/20">
                  Failed to send message. Please try again later.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Kim MengNgorng. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built with React & Tailwind</p>
      </div>
    </section>
  );
}