import { motion } from 'motion/react';
import { Code, Palette, Zap, Briefcase, GraduationCap, Server, Layers } from 'lucide-react';
import profileImg from '../../assets/image.png';

export function About() {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Dev',
      description: 'Building scalable web applications with clean architecture',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating mobile-first, user-friendly premium interfaces',
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Phillip Bank KHQR, Bakong KHQR, ABA PayWay',
    },
    {
      icon: Layers,
      title: 'System Analysis',
      description: 'Analyzing business requirements to design and architect tailored enterprise systems',
    },
  ];

  const experience = [
    {
      icon: Briefcase,
      title: 'Senior Developer at TSD Co., Ltd.',
      period: '2025 - Present',
      description: [
        'Delivered numerous high-impact projects',
        'Developed scalable POS systems',
        'Direct client requirements gathering',
        'Server infrastructure management',
      ],
    },
    {
      icon: Briefcase,
      title: 'Full-Stack Web Developer',
      period: '2025 - 2026',
      description: ['Target Store Online Shop', 'E-commerce platform with payment integration'],
    },
    {
      icon: GraduationCap,
      title: 'MIS Graduate',
      period: '2022 - 2025',
      description: ['SETEC Institute', 'Database management & software development'],
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-[#030712] py-32 px-6 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            About <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Merging technical expertise with design thinking to build exceptional digital products.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* Profile Image - Spans 2 cols, 2 rows */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group bg-white/5 border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
            <img
              src={profileImg}
              alt="Kim MengNgorng"
              className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-2">Kim MengNgorng</h3>
              <p className="text-gray-300 font-light flex items-center gap-2">
                <Server size={16} className="text-cyan-400" /> Phnom Penh, Cambodia
              </p>
            </div>
          </motion.div>

          {/* Intro Text - Spans 2 cols, 1 row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center hover:bg-white/10 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
               <Zap className="text-violet-400" size={24} /> Driven by impact
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              I am a dedicated Web Developer and MIS graduate. With a strong foundation in both technical development and business information systems, I architect scalable solutions that not only look beautiful but perform exceptionally.
            </p>
          </motion.div>

          {/* Feature Cards - 1 col, 1 row each */}
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-between group hover:border-violet-500/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-bl-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400 font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12"
        >
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-bold text-white">Experience</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-white/10" />
            
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col"
              >
                <div className="w-12 h-12 bg-[#030712] border-2 border-violet-500 rounded-full flex items-center justify-center text-violet-400 mb-6 shadow-[0_0_15px_rgba(139,92,246,0.3)] mx-auto md:mx-0">
                  <item.icon size={20} />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1 hover:bg-white/10 transition-colors">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 block">{item.period}</span>
                  <h4 className="text-lg font-bold text-white mb-4">{item.title}</h4>
                  <ul className="text-sm text-gray-400 font-light space-y-2 list-disc list-inside">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}