import { useState, useEffect } from 'react';
import { motion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold text-[#0F2A44] cursor-pointer hover:text-[#F4C430] transition-colors"
            onClick={() => scrollToSection("hero")}
          >
            Dr. Hemanth Veeramalla
          </motion.button>

          <div className="hidden md:flex items-center gap-10">
            {['About', 'Expertise', 'Experience', 'Education', 'Consultation', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-semibold text-[#4A6FA5] hover:text-[#0F2A44] transition-colors cursor-pointer relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4C430] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-[#0F2A44]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-[#0F2A44]/10"
        >
          <div className="px-8 py-6 space-y-4">
            {['About', 'Expertise', 'Experience', 'Education', 'Consultation', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-[#4A6FA5] hover:text-[#0F2A44] font-semibold py-2 transition-colors"
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
