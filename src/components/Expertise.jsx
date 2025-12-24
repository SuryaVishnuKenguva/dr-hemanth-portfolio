import AnimatedSection from "./AnimatedSection";
import { motion } from "motion/react";
import { FiCreditCard, FiLayers, FiTrendingUp } from "react-icons/fi";

const Expertise = () => {
  const areas = [
    {
      icon: FiCreditCard,
      title: "Digital Payments",
      items: [
        "EDC POS Terminals & UPI Integration",
        "Dynamic QR Solutions",
        "Brand EMI & Multi Bank EMI",
        "Payment Gateway Solutions",
        "Multi-Currency Support"
      ]
    },
    {
      icon: FiLayers,
      title: "Custom Integration",
      items: [
        "Custom Checkout Pages",
        "Multi Bank EMI Integration",
        "Digital Wallet Solutions",
        "Payout Management",
        "Real-time Processing"
      ]
    },
    {
      icon: FiTrendingUp,
      title: "Lending Solutions",
      items: [
        "Secured & Unsecured Lending",
        "Buy Now Pay Later (BNPL)",
        "Working Capital Solutions",
        "Credit Assessment",
        "Risk Management"
      ]
    }
  ];

  return (
    <AnimatedSection id="expertise">
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-[#FFF8E1] text-[#F4C430] text-sm font-semibold rounded-full mb-6">
              Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F2A44] max-w-4xl mx-auto leading-tight">
              Comprehensive Fintech Solutions
            </h2>
            <p className="text-xl text-[#4A6FA5] mt-6 max-w-3xl mx-auto">
              End-to-end payment technology and digital transformation capabilities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#F4C430] rounded-xl flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                  {area.title}
                </h3>

                <ul className="space-y-3">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#2E2E2E]">
                      <div className="w-1.5 h-1.5 bg-[#F4C430] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Expertise;
