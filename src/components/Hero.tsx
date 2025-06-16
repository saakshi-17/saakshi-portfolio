import React from 'react';
import { ArrowDown, MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900"></div>
      
      {/* Floating Lavender Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-lavender-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-lavender-300/10 rounded-full blur-xl animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          {/* Elegant Introduction */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-lavender-300 animate-pulse" />
              <span className="text-lavender-200 font-light tracking-wider uppercase text-sm">Welcome to my world</span>
              <Sparkles className="w-6 h-6 text-lavender-300 animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-lavender-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              {personalInfo.name}
            </h1>
            
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-light mb-8 text-lavender-100 tracking-wide">
                {personalInfo.title}
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-lavender-400 to-transparent"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-8 font-light">
              {personalInfo.summary}
            </p>
          </div>

          {/* Elegant Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-lavender-200">
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-lavender-500/20 hover:border-lavender-400/40 transition-all duration-300">
              <MapPin className="w-5 h-5 text-lavender-300" />
              <span className="font-light">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-lavender-500/20 hover:border-lavender-400/40 transition-all duration-300">
              <Mail className="w-5 h-5 text-lavender-300" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors font-light">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-lavender-500/20 hover:border-lavender-400/40 transition-all duration-300">
              <Phone className="w-5 h-5 text-lavender-300" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors font-light">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Elegant CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-lavender-500 to-purple-500 text-white px-10 py-4 rounded-full font-medium hover:from-lavender-400 hover:to-purple-400 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-lavender-500/25"
          >
            Discover My Journey
            <ArrowDown className="w-5 h-5 group-hover:animate-bounce transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Elegant Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;