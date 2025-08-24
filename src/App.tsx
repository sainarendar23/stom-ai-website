import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import LandingPage from './pages/LandingPage';
import AgentsPage from './pages/AgentsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="home">
          <LandingPage />
        </section>
        <section id="agents">
          <AgentsPage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </motion.main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;