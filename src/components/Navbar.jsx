import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { FiMenu, FiX } from "react-icons/fi";

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() =>scrollToSection("hero")}
          >
            Dr. Hemanth Veeramalla
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Education', 'Vision', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group cursor-pointer"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-6 py-4 space-y-3">
            {['About', 'Experience', 'Education', 'Vision', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-slate-700 hover:text-slate-900 font-medium py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;