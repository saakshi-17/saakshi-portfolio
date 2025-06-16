import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white py-12 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-lavender-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-lavender-300" />
            <p className="flex items-center justify-center gap-2 text-lavender-200 font-light text-lg">
              Made with <Heart className="w-5 h-5 text-red-400 animate-pulse" /> by Saakshi
            </p>
            <Sparkles className="w-5 h-5 text-lavender-300" />
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-lavender-400 to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm font-light">
            © {currentYear} Saakshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;