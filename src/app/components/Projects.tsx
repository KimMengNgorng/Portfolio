import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Your Project Title',
      description: 'Project description goes here. Describe the technologies used and what the project accomplishes.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2Rpbmd8ZW58MXx8fHwxNzY4NDY3MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'Tailwind'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#030712] py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
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
            Featured <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            A selection of robust, full-stack applications solving real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 shadow-2xl"
            >
              {/* Background Image */}
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-50"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent opacity-80" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Default visible state */}
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-cyan-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Hover revealed state */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-gray-300 font-light mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex justify-center items-center gap-2 py-3 bg-white/10 backdrop-blur-md rounded-xl text-sm font-medium text-white border border-white/20 hover:bg-white/20 transition-all"
                      >
                        <Github size={16} /> Code
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex justify-center items-center gap-2 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl text-sm font-medium text-white shadow-lg hover:shadow-cyan-500/25 transition-all"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}