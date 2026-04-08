import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Target Store Online Shop',
      description: 'Scalable full-stack e-commerce platform with secure Phillip Bank API payment integration (KHQR). Features admin dashboard for product, order, and user management.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4NDY3MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React.js', 'Node.js', 'MySQL', 'KHQR'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Bantobchuol System',
      description: 'Full-stack room rental management system with multi-language support (Khmer, English, Chinese). Complete booking and payment tracking.',
      image: 'https://images.unsplash.com/photo-1520529890308-f503006340b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODQ4NTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React.js', 'Express', 'MongoDB', 'i18n'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'DL-System Ice Warehouse',
      description: 'Warehouse management system for ice production business with sales tracking, inventory management, and employee activity monitoring.',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2ODUxNDU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Laravel', 'MySQL', 'Bootstrap'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'E-commerce Store',
      description: 'Full-stack online store with product management, order processing, and Bakong API KHQR payment integration.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4NDY3MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React.js', 'Node.js', 'Bakong API'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Menu Online',
      description: 'Online menu platform for restaurants and cafes with QR code integration and real-time updates.',
      image: 'https://images.unsplash.com/photo-1520529890308-f503006340b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODQ4NTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React.js', 'Firebase', 'QR Code'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Telegram Mini App',
      description: 'Mini-applications on Telegram for automation and order management with bot integration.',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2ODUxNDU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Node.js', 'Telegram Bot API', 'MongoDB'],
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional work and freelance projects showcasing full-stack development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                {/* 3D Card Effect */}
                <motion.div
                  whileHover={{
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-colors"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity z-10`} />
                  
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative" style={{ transform: 'translateZ(20px)' }}>
                    <h3 className="text-2xl text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-sm text-white"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}