import AnimatedSection from "./AnimatedSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Vision = () => {
  return (
    <AnimatedSection id="vision">
      <section className="relative py-32 overflow-hidden">
        {/* Premium Dark Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Sophisticated Pattern Overlay */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>

        {/* Floating Gradient Orbs - More Pronounced */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-slate-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                                  linear-gradient(to bottom, white 1px, transparent 1px)`,
                 backgroundSize: '100px 100px'
               }}>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Premium Header Section */}
            <div className="space-y-6">
              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1 bg-linear-to-r from-transparent via-white to-transparent rounded-full mx-auto"
              ></motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-linear-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                  Vision & Leadership
                </span>
                <br />
                <span className="bg-linear-to-r from-blue-300 via-slate-200 to-blue-300 bg-clip-text text-transparent">
                  Philosophy
                </span>
              </motion.h2>
            </div>

            {/* Vision Statement - Premium Typography */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative max-w-4xl mx-auto"
            >
              {/* Quote Decoration */}
              <div className="absolute -top-6 -left-4 lg:-left-8 text-6xl lg:text-8xl text-white/10 font-serif">"</div>
              
              <p className="relative text-2xl lg:text-4xl text-slate-100 leading-relaxed font-light tracking-wide px-8">
                Empowering innovation in payments through{" "}
                <span className="font-semibold text-white relative inline-block">
                  secure, inclusive, and intelligent technology
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-400/30"></span>
                </span>{" "}
                that transforms how businesses and consumers interact in the digital economy.
              </p>

              <div className="absolute -bottom-6 -right-4 lg:-right-8 text-6xl lg:text-8xl text-white/10 font-serif">"</div>
            </motion.div>

            {/* Key Values/Principles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid md:grid-cols-3 gap-8 pt-12"
            >
              {[
                { title: "Innovation", icon: "💡", desc: "Pioneering next-gen payment solutions" },
                { title: "Security", icon: "🔒", desc: "Uncompromising data protection" },
                { title: "Inclusion", icon: "🌐", desc: "Financial access for all" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-300 font-light">
                      {value.desc}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-400/0 to-slate-400/0 group-hover:from-blue-400/10 group-hover:to-slate-400/10 transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="pt-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-semibold text-sm tracking-wide">
                  Shaping the Future of Fintech
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Vision;