import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact/Contact';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;