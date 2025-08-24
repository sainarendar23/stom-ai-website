import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-violet-500 to-pink-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              stom.ai
            </motion.h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing business automation with intelligent AI agents.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <a
              href="mailto:mosaiagents25@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>mosaiagents25@gmail.com</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 stom.ai. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Powered by AI Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;