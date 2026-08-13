import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 88 },
        { name: 'Flutter', level: 75 },
      ],
      color: 'from-cyan-500 to-blue-600',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]'
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js/Express', level: 85 },
        { name: 'Laravel', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'RESTful API', level: 88 },
      ],
      color: 'from-violet-500 to-purple-600',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
    },
    {
      name: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 88 },
        { name: 'AWS Cloud', level: 65 },
        { name: 'Cloudflare/Vercel', level: 80 },
      ],
      color: 'from-fuchsia-500 to-pink-600',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]'
    },
  ];

  const additionalSkills = [
    'Payment Integration (KHQR)',
    'ABA Bank Integration (PayWay)',
    'Bakong API',
    'Telegram Bot API',
    'Firebase',
    'Git',
    'Hostinger',
    'Networking (Ethernet Config)',
  ];

  return (
    <section ref={ref} id="skills" className="min-h-screen bg-[#030712] py-32 px-6 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Technologies and tools I use to build modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className={`group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${category.shadow}`}
            >
              <div className="mb-10">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}>
                  {category.name}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm font-light">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.2 + (categoryIndex * 0.1) + (skillIndex * 0.1), ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                      >
                        {/* Shimmer effect inside progress bar */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20" />
            <h3 className="text-2xl font-semibold text-white">Additional Skills & Tools</h3>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {additionalSkills.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 text-sm font-medium text-gray-300 hover:text-white hover:border-violet-500/50 transition-all cursor-default shadow-[0_0_15px_rgba(0,0,0,0.1)]"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}