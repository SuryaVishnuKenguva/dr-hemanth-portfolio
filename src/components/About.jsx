import { FiAward, FiBriefcase } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const highlights = [
    { icon: FiBriefcase, text: "18+ Years Industry Experience", color: "from-blue-500 to-blue-600" },
    { icon: FaBuilding, text: "Fintech & Banking Leader", color: "from-slate-700 to-slate-800" },
    { icon: FiAward, text: "Certified CPISI by SISA", color: "from-emerald-500 to-emerald-600" }
  ];

  return (
    <AnimatedSection id="about">
      <section className="relative py-32 overflow-hidden">
        {/* Premium Layered Background */}
        <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50/50 to-blue-50/30"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Section Header */}
              <div className="space-y-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1 bg-linear-to-r from-slate-900 via-slate-600 to-transparent rounded-full"
                ></motion.div>
                
                <h2 className="text-5xl lg:text-6xl font-bold bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent leading-tight">
                  About
                </h2>
              </div>

              {/* Biography Text - Enhanced Typography */}
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-lg lg:text-xl font-light">
                  Dr. Hemanth Veeramalla brings over{" "}
                  <span className="font-bold text-slate-900 relative inline-block">
                    18 years of distinguished experience
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-900/10 -z-10"></span>
                  </span>{" "}
                  in Digital Payments, Banking, SME Lending, Merchant Acquiring, 
                  Corporate and Retail Sales, and Government projects.
                </p>
                
                <p className="text-lg lg:text-xl font-light">
                  He holds a{" "}
                  <span className="font-bold text-slate-900">Ph.D. and MBA from AIMS</span>, 
                  is{" "}
                  <span className="font-bold text-slate-900">Certified CPISI by SISA</span>, 
                  and is currently pursuing a second Ph.D. from{" "}
                  <span className="font-bold text-slate-900">GGU California (USA)</span>.
                </p>
                
                <p className="text-lg lg:text-xl font-light">
                  His expertise is further enhanced by executive programs from{" "}
                  <span className="font-bold text-slate-900">IIM Raipur and Harvard X</span>, 
                  positioning him at the forefront of fintech innovation and leadership.
                </p>
              </div>

              {/* Stats or Additional Info */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="space-y-1">
                  <div className="text-4xl font-bold bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    18+
                  </div>
                  <div className="text-sm font-semibold text-slate-600 tracking-wide uppercase">
                    Years Experience
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    3
                  </div>
                  <div className="text-sm font-semibold text-slate-600 tracking-wide uppercase">
                    Ph.D. Degrees
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-sm font-semibold text-slate-600 tracking-wide uppercase">
                    Leadership Roles
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Highlights Cards - Premium Design */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative Background Element */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-100/40 to-slate-100/40 rounded-3xl transform rotate-3 scale-105"></div>
              
              {/* Main Card Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl shadow-slate-900/10 border border-slate-200/50">
                <div className="space-y-6">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="group relative flex items-center gap-5 p-6 bg-linear-to-br from-slate-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100/50"
                    >
                      {/* Icon Container with Gradient */}
                      <div className={`relative w-16 h-16 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      
                      {/* Text */}
                      <span className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                        {item.text}
                      </span>

                      {/* Subtle Arrow Indicator */}
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all">
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-linear-to-br from-blue-400/10 to-transparent rounded-full blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-linear-to-br from-slate-400/10 to-transparent rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;