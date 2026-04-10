import { motion } from 'motion/react';
import { ArrowDown, Facebook, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* 3D Floating Elements */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-20 right-20 w-20 h-20 border border-blue-500/30 rounded-lg"
        style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
        className="absolute bottom-32 left-20 w-16 h-16 border border-purple-500/30 rounded-lg"
        style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl mb-6 text-white"
        >
          Kim MengNgorng
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Web Developer
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Developer at TSD Co., Ltd. | Management Information System(MIS) Graduate from SETEC Instiute
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="https://www.instagram.com/kimmengngorng/?hl=en"
            className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-colors"
          >
            <Instagram size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="\https://www.facebook.com/kim.mengngorng.12"
            className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-colors"
          >
            <Facebook size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="https://t.me/MengNgorng_Kim"
            className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-colors"
          >
            <Send size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-white/30 transition-colors"
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-white/50" size={32} />
      </motion.div>
    </section>
  );
}