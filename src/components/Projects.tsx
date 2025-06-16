import React from 'react';
import { ExternalLink, Github, Star, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-900 via-black to-purple-900 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-lavender-300" />
            <span className="text-lavender-200 font-medium tracking-wider uppercase text-sm">My creative work</span>
            <Sparkles className="w-5 h-5 text-lavender-300" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-lavender-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-lavender-500/20 transition-all duration-500 overflow-hidden border border-lavender-500/20 hover:border-lavender-400/40"
            >
              {/* Elegant Project Header */}
              <div className="h-48 bg-gradient-to-br from-lavender-400 via-purple-500 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                  <div className="text-white text-6xl font-bold opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-lavender-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lavender-200 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Elegant Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-lavender-500/20 text-lavender-200 rounded-full text-sm font-medium border border-lavender-500/30 hover:bg-lavender-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Elegant Project Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-lavender-300 hover:text-white font-medium transition-all duration-300 bg-lavender-500/10 hover:bg-lavender-500/20 px-4 py-2 rounded-full border border-lavender-500/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-all duration-300 bg-gray-500/10 hover:bg-gray-500/20 px-4 py-2 rounded-full border border-gray-500/30"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;