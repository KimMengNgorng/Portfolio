import { motion } from 'motion/react';
import { ArrowDown, Facebook, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';

export function Hero() {
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-gray-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] tracking-wide">
            Welcome to my universe
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Kim MengNgorng
          <br />
          <span className="bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent filter drop-shadow-lg">
            Web Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Senior Developer at TSD Co., Ltd. <br className="hidden md:block" /> Crafting digital experiences with precision and passion.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow"
          >
            Explore My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-medium hover:border-white/20 transition-all"
          >
            Let's Talk
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 md:gap-6 flex-wrap"
        >
          {[
            { icon: Github, href: "https://github.com/kimmengngorng" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/kim-mengngorng-123456789/" },
            { icon: Send, href: "https://t.me/MengNgorng_Kim" },
            { icon: Instagram, href: "https://www.instagram.com/kimmengngorng/?hl=en" },
            { icon: Facebook, href: "https://www.facebook.com/kim.mengngorng.12" },
            { icon: Mail, href: "mailto:mengngorngkim@gmail.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -5, scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]"
            >
              <social.icon size={22} strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Scroll</span>
        <ArrowDown className="text-gray-500" size={20} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}