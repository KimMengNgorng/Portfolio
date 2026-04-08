import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Zap, Briefcase, GraduationCap } from 'lucide-react';
import profileImg from '../../assets/image.png';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern technologies and clean architecture',
    },
    {
      icon: Palette,
      title: 'Responsive Design',
      description: 'Creating mobile-first, user-friendly interfaces that work seamlessly across all devices',
    },
    {
  icon: Zap,
  title: 'API Integration',
  description: 'Integration of Phillip Bank KHQR API, Bakong KHQR API, and ABA PayWay payment gateway',
}
,
  ];

  const experience = [
    {
      icon: Briefcase,
      title: 'Developer at TSD Co., Ltd.',
      period: '2025 - Present',
      description: 'Technology Solution Development',
    },
    {
      icon: Briefcase,
      title: 'Full-Stack Web Developer',
      period: '2025 - 2026',
      description: 'Target Store Online Shop - E-commerce platform with payment integration',
    },
    {
      icon: GraduationCap,
      title: 'Management Information System(MIS) Graduate',
      period: '2022 - 2025',
      description: 'SETEC Institute - Graduated with a strong foundation in information systems, database management, and software development',
    },
  ];

  return (
    <section ref={ref} id="about" className="min-h-screen bg-black py-32 px-6 overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Web Developer | Computer Science Graduate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div style={{ y }} className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={profileImg}
                  alt="Sokchan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-300 space-y-4"
            >
              <p className="text-lg">
                I'm Kim MengNgorng, a Management Information System(MIS) graduate from the SETEC Institute. I consider myself a responsible, organized, and hardworking individual.
              </p>
              <p className="text-lg">
                I'm eager to apply my knowledge and gain new experiences in my professional career. Currently working as a Developer at Technology Solution Development TSD Co., Ltd.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10 group-hover:border-white/30 transition-colors">
                    <feature.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl text-white mb-12 text-center">
            Experience & <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Education</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10 mb-4">
                  <item.icon className="text-blue-400" size={24} />
                </div>
                <div className="text-sm text-blue-400 mb-2">{item.period}</div>
                <h4 className="text-xl text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}