import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, ShoppingCart, Bot, Users, Cpu, Zap, Settings, Briefcase } from 'lucide-react';

const AnimatedBackground = () => {
  const particles = Array.from({ length: 15 }, (_, i) => i);
  const businessElements = Array.from({ length: 12 }, (_, i) => i);

  // Business-themed icons
  const businessIcons = [User, ShoppingCart, Bot, Users, Cpu, Zap, Settings, Briefcase];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Business Elements - Businessmen, Carts, Robots, Agents */}
      {businessElements.map((element) => {
        const IconComponent = businessIcons[element % businessIcons.length];
        const isRobot = IconComponent === Bot || IconComponent === Cpu;
        
        return (
          <motion.div
            key={element}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              rotate: 0,
              scale: 0.8,
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              rotate: isRobot ? [0, 15, -15, 0] : [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <IconComponent 
                className={`w-8 h-8 ${
                  IconComponent === User ? 'text-indigo-400' :
                  IconComponent === User ? 'text-indigo-400' :
                  IconComponent === ShoppingCart ? 'text-rose-400' :
                  IconComponent === Bot ? 'text-purple-400' :
                  IconComponent === Users ? 'text-cyan-400' :
                  IconComponent === Cpu ? 'text-red-400' :
                  IconComponent === Zap ? 'text-orange-400' :
                  IconComponent === Settings ? 'text-orange-400' :
                  'text-pink-400'
                } opacity-30`} 
              />
              
              {/* Robot Arms Animation for Bot and Cpu icons */}
              {isRobot && (
                <>
                  <motion.div
                    className="absolute -right-2 top-2 w-3 h-1 bg-gray-400 rounded-full opacity-25"
                    animate={{
                      rotate: [0, 45, -45, 0],
                      x: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -left-2 top-2 w-3 h-1 bg-gray-400 rounded-full opacity-25"
                    animate={{
                      rotate: [0, -45, 45, 0],
                      x: [0, -2, 2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Large Floating Business Elements */}
      <motion.div
        className="absolute top-20 right-20 opacity-10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <Bot className="w-16 h-16 text-purple-400" />
          {/* Moving robot arms */}
          <motion.div
            className="absolute -right-4 top-4 w-6 h-2 bg-purple-400 rounded-full"
            animate={{
              rotate: [0, 30, -30, 0],
              x: [0, 3, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -left-4 top-4 w-6 h-2 bg-purple-400 rounded-full"
            animate={{
              rotate: [0, -30, 30, 0],
              x: [0, -3, 3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-16 opacity-15"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <User className="w-12 h-12 text-indigo-400" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 opacity-20"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <ShoppingCart className="w-10 h-10 text-rose-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 opacity-15"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <Cpu className="w-14 h-14 text-red-400" />
          {/* CPU Robot arms */}
          <motion.div
            className="absolute -right-3 top-3 w-4 h-1 bg-red-400 rounded-full"
            animate={{
              rotate: [0, 60, -60, 0],
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -left-3 top-3 w-4 h-1 bg-red-400 rounded-full"
            animate={{
              rotate: [0, -60, 60, 0],
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
        </div>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:50px_50px]" />
      
      {/* Additional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
    </div>
  );
};

export default AnimatedBackground;