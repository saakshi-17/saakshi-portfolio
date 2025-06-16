import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-lavender-50 relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lavender-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-lavender-500" />
            <span className="text-lavender-600 font-medium tracking-wider uppercase text-sm">Let's connect</span>
            <Sparkles className="w-5 h-5 text-lavender-500" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-lavender-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                I'm currently looking for internship opportunities in web development. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-lavender-100/50">
                <div className="w-16 h-16 bg-gradient-to-br from-lavender-400 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-lavender-600 hover:text-purple-600 transition-colors font-medium"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-lavender-100/50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Phone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-lavender-600 hover:text-purple-600 transition-colors font-medium"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-lavender-100/50">
                <div className="w-16 h-16 bg-gradient-to-br from-lavender-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Location</h4>
                  <p className="text-gray-600 font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-lavender-100/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-purple-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-lavender-200 rounded-xl focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-lavender-200 rounded-xl focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border border-lavender-200 rounded-xl focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                  placeholder="Let's work together!"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border border-lavender-200 rounded-xl focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all resize-none bg-white/50 backdrop-blur-sm"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lavender-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-lavender-400 hover:to-purple-400 transition-all duration-500 flex items-center justify-center gap-3 transform hover:scale-105 shadow-xl hover:shadow-lavender-500/25"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;