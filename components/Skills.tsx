import React from 'react';
import { Code, Server, Settings, Heart, Sparkles } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = {
    frontend: { title: 'Frontend', icon: Code, gradient: 'from-lavender-400 to-purple-500' },
    backend: { title: 'Backend', icon: Server, gradient: 'from-purple-500 to-black' },
    tools: { title: 'Tools', icon: Settings, gradient: 'from-lavender-500 to-purple-600' },
    soft: { title: 'Soft Skills', icon: Heart, gradient: 'from-purple-400 to-lavender-500' }
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-lavender-50/30"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-lavender-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-lavender-500" />
            <span className="text-lavender-600 font-medium tracking-wider uppercase text-sm">What I bring to the table</span>
            <Sparkles className="w-5 h-5 text-lavender-500" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-lavender-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Here are the technologies and skills I've been working with and continuously improving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, config]) => {
            const categorySkills = getSkillsByCategory(category);
            const IconComponent = config.icon;
            
            return (
              <div key={category} className="group">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-lavender-100/50 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{config.title}</h3>
                  
                  <div className="space-y-5">
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-lavender-600 text-sm font-semibold bg-lavender-50 px-2 py-1 rounded-full">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${config.gradient} transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;