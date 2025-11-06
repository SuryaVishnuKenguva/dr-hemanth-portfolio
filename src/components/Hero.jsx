// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { FiChevronRight } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import profileImage from "../assets/image.png";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50/40"></div>
      
      {/* Subtle Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
             backgroundSize: '48px 48px'
           }}>
      </div>

      {/* Floating Gradient Orbs for Depth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Enhanced Typography & Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Premium Badge */}
           
            
            {/* Name - Enhanced Typography */}
            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                  Dr. Hemanth
                </span>
                <br />
                <span className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                  Veeramalla
                </span>
              </motion.h1>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-1 bg-linear-to-r from-slate-900 via-slate-600 to-transparent rounded-full"
              ></motion.div>
            </div>
            
            {/* Title & Company - Refined Hierarchy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-xl text-slate-600 font-medium leading-relaxed">
                Managing Director
              </h2>
              <p className="text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
                One78 SabbPe Technology<br />Solutions India Pvt. Ltd.
              </p>
            </motion.div>
            
            {/* Tagline with Enhanced Visual Weight */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg lg:text-xl text-slate-600 leading-relaxed font-light max-w-xl"
            >
              Building the Future of Digital Payments Through Innovation,
              Security, and Excellence
            </motion.p>
            
            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="https://www.linkedin.com/in/dr-hemanth-veeramalla/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <SiLinkedin className="relative w-5 h-5" />
                <span className="relative">LinkedIn Profile</span>
              </motion.a>
              
              <motion.a
                href="https://www.sabbpe.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative group-hover:text-white transition-colors">Visit SabbPe</span>
                <FiChevronRight className="relative w-5 h-5 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image - Premium Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Layered Shadow Effects */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-slate-400/10 to-transparent rounded-full blur-3xl scale-110"></div>
              
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-slate-200/50 scale-105"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-12 border-white shadow-2xl shadow-slate-900/10 bg-linear-to-br from-slate-100 via-slate-50 to-blue-50">
                {/* Placeholder with Premium Gradient */}
                <div className="w-full h-full bg-linear-to-br from-slate-200 via-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                  <img src={profileImage} alt="" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-linear-to-br from-slate-400/20 to-transparent rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;