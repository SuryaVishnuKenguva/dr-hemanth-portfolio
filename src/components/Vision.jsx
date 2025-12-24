import AnimatedSection from "./AnimatedSection";
import { motion } from "motion/react";

const Vision = () => {
  const values = [
    {
      title: "Innovation",
      desc: "Pioneering next-generation payment solutions that redefine digital commerce"
    },
    {
      title: "Security",
      desc: "Uncompromising data protection and compliance across all platforms"
    },
    {
      title: "Inclusion",
      desc: "Democratizing financial access for businesses and consumers globally"
    }
  ];

  return (
    <AnimatedSection id="vision">
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0F2A44] to-[#0a1f33]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-6">
              Vision
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-5xl mx-auto leading-tight">
              Empowering the Future of Digital Payments
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed text-center">
              Building secure, inclusive, and intelligent technology that transforms how
              businesses and consumers interact in the digital economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Vision;
