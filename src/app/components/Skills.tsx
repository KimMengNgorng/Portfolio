import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 88 },
        { name: 'Flutter', level: 75 },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js/Express', level: 85 },
        { name: 'Laravel', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'RESTful API', level: 88 },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 88 },
        { name: 'AWS Cloud', level: 65 },
        { name: 'Cloudflare/Vercel', level: 80 },
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const additionalSkills = [
    'Payment Integration (KHQR)',
    'Bakong API',
    'Telegram Bot API',
    'Firebase',
    'Git',
    'Docker',
    'Linux',
    'Windows',
    'Hostinger',
    'Render',
    'EC2',
    'i18n/Localization',
  ];

  return (
    <section ref={ref} id="skills" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-white">
            Technical <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to build modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors"
            >
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.color} rounded-lg mb-8`}>
                <h3 className="text-xl text-white">{category.name}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl text-white mb-8 text-center">Additional Skills & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalSkills.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-white/30 transition-colors"
              >
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}