import { FaGraduationCap } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Education = () => {
  const education = [
    {
      degree: "Doctor of Philosophy (Ph.D.) – Leadership",
      institution: "Golden Gate University, California, USA",
      duration: "Aug 2022 – Nov 2025",
      status: "Pursuing",
      description:
        "Research focus on Leadership, Artificial Intelligence, and Management Innovation.",
      color: "from-emerald-500 to-emerald-600",
      highlight: true,
    },
    {
      degree: "Doctor of Philosophy (Ph.D.) – Management",
      institution:
        "Sri Satya Sai University of Technology & Medical Sciences, Sehore",
      duration: "2016 – 2020",
      status: "Completed",
      description:
        "Focused on Management and Organizational Strategy in modern business systems.",
      color: "from-blue-500 to-blue-600",
    },
    {
      degree: "Master of Laws (LL.M.) – Corporate Law",
      institution: "Mansarovar Global University",
      duration: "Apr 2021 – Jun 2024",
      status: "Pursuing",
      description: "Specializing in Corporate Law and Governance frameworks.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      degree: "Executive Program in Leadership & Change Management",
      institution: "Indian Institute of Management (IIM) Raipur",
      duration: "Apr 2018 – Jan 2019",
      status: "Completed",
      description:
        "Focused on strategic leadership, transformation, and organizational change.",
      color: "from-slate-700 to-slate-800",
    },
    {
      degree: "Entrepreneurship in Emerging Economies",
      institution: "Harvard Online",
      duration: "Dec 2019",
      status: "Completed",
      description:
        "Specialized in business innovation, global entrepreneurship, and emerging market strategy.",
      color: "from-rose-500 to-rose-600",
    },
    {
      degree: "Master of Business Administration (MBA) – Marketing & Finance",
      institution: "Ambedkar Institute of Business Management (AIMS)",
      duration: "2002 – 2004",
      status: "Completed",
      description:
        "Developed expertise in Marketing, Finance, and Corporate Strategy.",
      color: "from-blue-500 to-blue-600",
    },
    {
      degree: "Bachelor’s Degree – Accounting & Computer Science",
      institution: "Andhra University, Visakhapatnam",
      duration: "1999 – 2002",
      status: "Completed",
      description:
        "Graduated with a strong foundation in Accounting and Computer Applications.",
      color: "from-slate-600 to-slate-700",
    },
    {
      degree: "Secondary Education",
      institution: "Saraswathi Vidya Vihar, Visakhapatnam",
      duration: "1996 – 1997",
      status: "Completed",
      description: "Focused on academic excellence and leadership development.",
      color: "from-gray-400 to-gray-500",
    },
  ];

  const certifications = [
    { name: "IIM Raipur Executive Program", icon: "🎓" },
    { name: "Harvard X", icon: "🏛️" },
    { name: "CPISI by SISA", icon: "🔒" },
  ];

  return (
    <AnimatedSection id="education">
      <section className="relative py-32 overflow-hidden">
        {/* Premium Layered Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50/20"></div>

        {/* Decorative Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        ></div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>

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
              Education & Credentials
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 font-light max-w-2xl mx-auto"
            >
              Academic excellence meets executive leadership training
            </motion.p>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Card Background with Gradient */}
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 overflow-hidden">
                  {/* Decorative Background Gradient */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${edu.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}
                  ></div>

                  {/* Icon Container */}
                  <div
                    className={`relative w-16 h-16 mb-6 rounded-2xl bg-linear-to-br ${edu.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <FaGraduationCap className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-slate-700">
                      {edu.institution}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-xl">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          edu.highlight
                            ? "bg-emerald-500 animate-pulse"
                            : "bg-slate-400"
                        }`}
                      ></div>
                      {edu.status}
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-linear-to-tr from-slate-900/5 to-transparent rounded-tr-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-100/50 to-blue-100/30 rounded-3xl transform -rotate-1"></div>

            {/* Main Card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-2xl border border-slate-200/50">
              <div className="text-center mb-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                  Professional Certifications
                </h3>
                <p className="text-slate-600 font-light">
                  Premier institutions shaping executive excellence
                </p>
              </div>

              {/* Certification Pills */}
              <div className="flex flex-wrap justify-center gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="group relative"
                  >
                    <div className="relative flex items-center gap-3 px-8 py-4 bg-linear-to-r from-slate-900 to-slate-800 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                      <span className="text-2xl">{cert.icon}</span>
                      <span className="relative text-base lg:text-lg">
                        {cert.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-linear-to-br from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-linear-to-br from-slate-400/20 to-transparent rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Education;
