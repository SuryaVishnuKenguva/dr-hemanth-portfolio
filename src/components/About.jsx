import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import { FiBriefcase, FiAward, FiTrendingUp } from "react-icons/fi";

const About = () => {
  const highlights = [
    {
      icon: FiBriefcase,
      label: "Experience",
      value: "18+ Years",
      desc: "Leading fintech innovation"
    },
    {
      icon: FiAward,
      label: "Credentials",
      value: "Ph.D., MBA, LL.M.",
      desc: "Academic excellence"
    },
    {
      icon: FiTrendingUp,
      label: "Expertise",
      value: "Digital Payments",
      desc: "Global transformation"
    }
  ];

  return (
    <AnimatedSection id="about">
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
              About
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F2A44] max-w-4xl leading-tight">
              Transforming Digital Payments Through Strategic Leadership
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xl text-[#2E2E2E] leading-relaxed">
                Dr. Hemanth Veeramalla brings over 18 years of distinguished experience in
                Digital Payments, Banking, SME Lending, Merchant Acquiring, and Government projects.
              </p>

              <p className="text-lg text-[#4A6FA5] leading-relaxed">
                He holds a Ph.D. and MBA from AIMS, is Certified CPISI by SISA, and is currently
                pursuing a second Ph.D. from GGU California (USA).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                His expertise is further enhanced by executive programs from IIM Raipur and
                Harvard X, positioning him at the forefront of fintech innovation and leadership.
              </p>

              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                As Managing Director of One78 SabbPe Technology Solutions, he leads strategic
                initiatives in payment technology and digital transformation across international markets.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#FFF8E1] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#F4C430]" />
                </div>
                <div className="text-sm font-semibold text-[#4A6FA5] uppercase tracking-wide mb-2">
                  {item.label}
                </div>
                <div className="text-2xl font-bold text-[#0F2A44] mb-2">
                  {item.value}
                </div>
                <div className="text-[#2E2E2E]">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
