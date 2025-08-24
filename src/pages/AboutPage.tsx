import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Zap, 
  CheckCircle,
  Rocket,
  Brain,
  Settings,
  Palette,
  Monitor,
  Smartphone,
  Layout
} from 'lucide-react';

const AboutPage = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const products = [
    {
      name: 'LinkedIn Post Agent',
      status: 'Live',
      description: 'Automates LinkedIn content creation and posting for personal brands.'
    },
    {
      name: 'Receptionist Agent',
      status: 'Live',
      description: 'Handles visitor management and customer inquiries automatically.'
    },
    {
      name: 'Appointment Booking Agent',
      status: 'Live',
      description: 'Manages scheduling and calendar coordination seamlessly.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Boost Productivity',
      description: 'Eliminate repetitive tasks and focus on high-value activities that drive growth.'
    },
    {
      icon: Users,
      title: 'Reduce Workload',
      description: 'Let AI agents handle routine operations while you concentrate on strategic decisions.'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Get tailor-made AI agents designed specifically for your business needs.'
    }
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
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
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
              About Stom.ai
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering business owners to revolutionize their operations through intelligent automation
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
              At Stom.ai, we believe that business owners should spend their time growing their companies, 
              not getting bogged down by repetitive tasks. Our AI agents are designed to seamlessly integrate 
              into your workflow, handling routine operations with precision and reliability, while you focus 
              on what truly matters - scaling your business and serving your customers.
            </p>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h2 
            variants={cardVariants}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            How We Help Business Owners
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Custom Solutions Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-lime-500/10 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-6">Custom AI Solutions</h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed max-w-4xl mx-auto mb-8">
              Every business is unique, and so are its automation needs. We don't just offer pre-built agents - 
              we create customized AI solutions tailored to your specific requirements, industry, and workflow. 
              From concept to deployment, our team works closely with you to build agents that perfectly fit 
              your business processes.
            </p>
            <div className="flex justify-center">
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <span className="text-white font-medium">Tailored to Your Business</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Live Products Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h2 
            variants={cardVariants}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Products Currently Live
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-xl p-6 hover:bg-green-500/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">{product.status}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the growing number of businesses that have revolutionized their operations with our AI agents.
            </p>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Automation Journey
            </motion.button>
          </div>
        </motion.div>

        {/* Custom Design Services Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ✨ We Also Design — Custom Web & UI/UX Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At stom.ai, we don't just automate your tasks — we bring your <span className="text-white font-semibold">digital vision to life</span> through 
              beautiful and user-centric designs. We offer full-scale <span className="text-white font-semibold">website design and UI/UX development services</span> customized 
              to meet the unique needs of each business.
            </p>
          </div>

          {/* Target Audience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">🎯 Our design services are perfect for:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Startups needing sleek landing pages or app interfaces',
                'Small to medium businesses seeking modern, responsive websites',
                'Enterprises looking to redesign dashboards, platforms, or customer portals'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-gray-300 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Design Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">🧩 What We Offer:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Monitor,
                  title: 'End-to-end Web Design',
                  description: 'Landing pages, product pages, blogs, dashboards',
                  color: 'from-indigo-400 to-violet-400',
                  bgColor: 'bg-indigo-500/10',
                  borderColor: 'border-indigo-500/30'
                },
                {
                  icon: Smartphone,
                  title: 'UI/UX Design',
                  description: 'Mobile apps, SaaS platforms, and admin panels',
                  color: 'from-rose-400 to-pink-400',
                  bgColor: 'bg-rose-500/10',
                  borderColor: 'border-rose-500/30'
                },
                {
                  icon: Palette,
                  title: 'Branding & Visual Identity',
                  description: 'Color palettes, fonts, layouts',
                  color: 'from-orange-400 to-red-400',
                  bgColor: 'bg-orange-500/10',
                  borderColor: 'border-orange-500/30'
                },
                {
                  icon: Layout,
                  title: 'Design Systems',
                  description: 'Tailored for scalability and consistency',
                  color: 'from-orange-400 to-red-400',
                  bgColor: 'bg-orange-500/10',
                  borderColor: 'border-orange-500/30'
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className={`${service.bgColor} ${service.borderColor} backdrop-blur-md border rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 group`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Custom Approach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-4">💡 Custom-Crafted Solutions</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Each project is custom-crafted — we don't use templates. We work closely with clients to reflect 
              their brand identity, market, and user experience goals, ensuring every design is unique and 
              perfectly aligned with your business objectives.
            </p>
          </motion.div>
        </motion.div>

        {/* Updated CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you need AI automation or custom design solutions, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Solution
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Design Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;