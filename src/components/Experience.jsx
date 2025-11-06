import { experiences } from "../data/experienceData";
import AnimatedSection from "./AnimatedSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Experience = () => {
  
  return (
    <AnimatedSection id="experience">
      <section className="relative py-32 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-white"></div>

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px),
                                linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-linear-to-r from-transparent via-slate-900 to-transparent rounded-full mx-auto"
            ></motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent"
            >
              Professional Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 font-light max-w-2xl mx-auto"
            >
              A legacy of leadership across fintech, payments, and banking innovation
            </motion.p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Premium Timeline Line */}
            <div className="absolute left-0 md:left-20 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-slate-300 to-transparent hidden md:block"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="relative"
                >
                  {/* Timeline Dot with Logo */}
                  <div className="absolute left-0 md:left-20 top-8 -ml-[52px] hidden md:block z-10">
                    <div className="relative w-24 h-24">
                      {/* Outer Ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-white shadow-xl bg-white">
                        {/* Logo Container */}
                        <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // Fallback to gradient with initials if logo fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          {/* Fallback Initials */}
                          <div 
                            className="w-full h-full rounded-full bg-linear-to-br from-slate-700 to-slate-900 items-center justify-center text-white font-bold text-lg hidden"
                            style={{ display: 'none' }}
                          >
                            {exp.company.split(' ').slice(0, 2).map(word => word[0]).join('')}
                          </div>
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-slate-900/5 blur-xl scale-110"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="md:ml-36">
                    <motion.div
                      whileHover={{ scale: 1.01, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className={`relative p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                        exp.highlight
                          ? "bg-linear-to-br from-slate-50 via-white to-blue-50/30 border-slate-200/80"
                          : "bg-linear-to-br from-white to-slate-50/50 border-slate-200/50"
                      }`}
                    >
                      {/* Mobile Logo (shown on small screens) */}
                      <div className="md:hidden mb-6 flex items-start gap-4">
                        <div className="relative w-16 h-16 shrink-0">
                          <div className="w-full h-full rounded-full border-4 border-white shadow-lg bg-white overflow-hidden flex items-center justify-center p-1.5">
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div 
                              className="w-full h-full rounded-full bg-linear-to-br from-slate-700 to-slate-900 items-center justify-center text-white font-bold text-sm hidden"
                              style={{ display: 'none' }}
                            >
                              {exp.company.split(' ').slice(0, 2).map(word => word[0]).join('')}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Current Badge for Active Roles */}
                      {exp.highlight && (
                        <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-linear-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          CURRENT
                        </div>
                      )}

                      {/* Position & Company */}
                      <div className="space-y-3 mb-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                          {exp.position}
                        </h3>
                        <p className="text-xl font-semibold text-slate-700">
                          {exp.company}
                        </p>
                      </div>

                      {/* Duration & Location */}
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-medium mb-4">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-slate-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-slate-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-lg leading-relaxed font-light">
                        {exp.description}
                      </p>

                      {/* Decorative Corner Accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-slate-900/5 to-transparent rounded-bl-full opacity-50"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Experience;