import React from 'react';
import { GraduationCap, Award, Star, Heart } from 'lucide-react';
import { education } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-lavender-500" />
            <span className="text-lavender-600 font-medium tracking-wider uppercase text-sm">Get to know me</span>
            <Star className="w-5 h-5 text-lavender-500" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-lavender-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Elegant Profile Section */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-lavender-400 via-purple-500 to-black rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-400/20 to-transparent"></div>
                <div className="text-white text-8xl font-bold z-10">S</div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-lavender-300 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-lavender-100/50 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lavender-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-lavender-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-800">{education.degree}</h4>
                <p className="text-gray-600 font-medium">{education.institution}</p>
                <p className="text-gray-500">{education.location}</p>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lavender-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <span>{education.status} • {education.year}</span>
                </div>
              </div>
            </div>

            
            {/* Elegant Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-lavender-500 to-purple-600 p-8 rounded-2xl shadow-xl text-center text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lavender-100 font-light">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-black p-8 rounded-2xl shadow-xl text-center text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">2+</div>
                <div className="text-purple-100 font-light">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;