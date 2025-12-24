import { experiences } from "../data/experienceData";
import AnimatedSection from "./AnimatedSection";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <AnimatedSection id="experience">
      <section className="py-24 lg:py-32 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#FFF8E1] text-[#F4C430] text-sm font-semibold rounded-full mb-6">
              Experience
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F2A44] max-w-4xl leading-tight">
              Professional Journey
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">

                  <div className="lg:w-64 flex-shrink-0">
                    <div className="space-y-2">
                      <div className="text-sm font-bold text-[#4A6FA5] uppercase tracking-wide">
                        {exp.duration}
                      </div>
                      <div className="text-sm text-[#4A6FA5]">
                        {exp.location}
                      </div>
                      {exp.highlight && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF8E1] rounded-full mt-2">
                          <div className="w-2 h-2 bg-[#F4C430] rounded-full animate-pulse"></div>
                          <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wide">
                            Current
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0F2A44] mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-[#4A6FA5] font-semibold mb-4">
                      {exp.company}
                    </p>
                    <p className="text-[#2E2E2E] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Experience;
