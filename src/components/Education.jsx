import AnimatedSection from "./AnimatedSection";
import { motion } from "motion/react";
import { education } from "../data/educationData";
import { FiAward } from "react-icons/fi";

const Education = () => {
  const certifications = [
    "IIM Raipur Executive Program",
    "Harvard X",
    "CPISI by SISA"
  ];

  return (
    <AnimatedSection id="education">
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#FFF8E1] text-[#F4C430] text-sm font-semibold rounded-full mb-6">
              Education
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F2A44] max-w-4xl leading-tight">
              Academic Excellence
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {education.slice(0, 4).map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFF8E1] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiAward className="w-6 h-6 text-[#F4C430]" />
                  </div>
                  {edu.highlight && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF8E1] rounded-full">
                      <div className="w-2 h-2 bg-[#F4C430] rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wide">
                        In Progress
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#0F2A44] mb-2 leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-lg text-[#4A6FA5] font-medium mb-3">
                  {edu.institution}
                </p>
                <p className="text-[#2E2E2E] leading-relaxed text-sm">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0F2A44] rounded-2xl p-10 lg:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <FiAward className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Professional Certifications
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="text-white/90 font-medium text-lg"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Education;
