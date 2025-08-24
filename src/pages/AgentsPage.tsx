import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Share2,
  ArrowRight
} from 'lucide-react';

const AgentsPage = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const agents = [
    {
      id: 1,
      name: 'Reception Agent',
      icon: Users,
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      suitable: 'Dental clinics, lawyers, salons, restaurants, car showrooms, house workers',
      description: 'Automates reception desk work like visitor logging, inquiries, appointment scheduling, and customer greetings with professional efficiency.',
      buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    },
    {
      id: 2,
      name: 'Customer Support Agent',
      icon: MessageCircle,
      color: 'from-rose-400 to-rose-600',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/30',
      suitable: 'Startups, any business with customer support teams',
      description: 'Automates common replies, FAQs, and customer help processes. Provides instant responses and escalates complex issues to human agents.',
      buttonColor: 'bg-rose-500 hover:bg-rose-600',
    },
    {
      id: 3,
      name: 'Appointment Booking Agent',
      icon: Calendar,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      suitable: 'CEOs, startup founders, personal assistants',
      description: 'Books, manages, and reminds users about appointments automatically. Integrates with calendars and sends smart notifications.',
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      id: 4,
      name: 'Post Automation Agent',
      icon: Share2,
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      suitable: 'Content creators, personal brands, influencers',
      description: 'Automates daily posting to LinkedIn, Instagram, YouTube. Creates engaging content and schedules posts for optimal reach.',
      buttonColor: 'bg-red-500 hover:bg-red-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our AI Agents
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our suite of intelligent AI agents designed to automate your business processes 
            and boost productivity across different industries.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <motion.div
                key={agent.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`${agent.bgColor} ${agent.borderColor} backdrop-blur-md border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${agent.color} shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {agent.name}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-400 mb-1">Suitable for:</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {agent.suitable}
                      </p>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {agent.description}
                    </p>
                    
                    <motion.button
                      onClick={() => scrollToSection('#contact')}
                      className={`${agent.buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 group-hover:shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Book a Demo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need a Custom AI Agent?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We build customized AI agents tailored to your specific business requirements. 
              Let's discuss how we can automate your unique workflow.
            </p>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Custom Solution
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgentsPage;