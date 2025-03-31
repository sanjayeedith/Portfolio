import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import GithubButton from './GithubButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  const handleScroll = (id: string) => () => scrollToSection(id);

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const enableScroll = () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };

    window.addEventListener('scroll', enableScroll);
    
    return () => {
      window.removeEventListener('scroll', enableScroll);
    };
  }, []);

  const navItems = ["home", "aboutme", "experience", "projects", "contact"];

  return (
    <motion.header 
      className="py-4 px-4 md:px-10 lg:px-20 xl:px-40 flex justify-between items-center sticky top-0 bg-[#000212]/80 backdrop-blur-sm z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h1 className="text-2xl font-bold gradient-text cursor-pointer" onClick={handleScroll('home')}>
        SANJAY R<span className="text-[#5B4DFB]">_</span>
      </h1>
      <div className="flex items-center gap-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 md:space-x-10">
            {navItems.map((item) => (
              <li key={item}>
                <button 
                  onClick={handleScroll(item.toLowerCase())}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full right-0 w-48 bg-[#000212]/95 backdrop-blur-sm rounded-lg shadow-lg mt-2"
              >
                <ul className="py-2">
                  {navItems.map((item) => (
                    <li key={item}>
                      <button 
                        onClick={handleScroll(item.toLowerCase())}
                        className="w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-[#5B4DFB]/10 transition-colors duration-200"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="hidden md:block">
          <GithubButton />
        </div>
      </div>
    </motion.header>
  );
} 