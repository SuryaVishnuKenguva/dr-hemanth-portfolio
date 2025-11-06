import AnimatedSection from "./AnimatedSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { 
  FiCreditCard, 
  FiLayers, 
  FiTrendingUp,
  FiCheckCircle,
  FiShield
} from "react-icons/fi";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Digital Payments",
      icon: FiCreditCard,
      color: "from-blue-500 to-blue-600",
      categories: [
        {
          name: "Payment Offline",
          items: [
            "EDC POS Terminals",
            "UPI Integration",
            "Dynamic QR Solutions",
            "Sound Box Technology",
            "Brand EMI Solutions",
            "Multi Bank EMI",
            "SKU Level Integration"
          ]
        },
        {
          name: "Payment Online",
          items: [
            "Payment Gateway Solutions",
            "Seamless API Integration",
            "Multi-Currency Support"
          ]
        }
      ]
    },
    {
      title: "Custom Tech Integration",
      icon: FiLayers,
      color: "from-slate-700 to-slate-900",
      categories: [
        {
          name: "Platform Solutions",
          items: [
            "Custom Checkout Pages",
            "Multi Bank EMI Integration",
            "Digital Wallet Solutions",
            "Payout Management Systems",
            "Real-time Transaction Processing"
          ]
        }
      ]
    },
    {
      title: "Lending Solutions",
      icon: FiTrendingUp,
      color: "from-emerald-500 to-emerald-600",
      categories: [
        {
          name: "Credit Products",
          items: [
            "Secured Lending",
            "Unsecured Lending",
            "Buy Now Pay Later (BNPL)",
            "Working Capital Solutions",
            "Credit Assessment & Risk Management"
          ]
        }
      ]
    }
  ];

  return (
    <AnimatedSection id="expertise">
      <section className="relative py-32 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50/20"></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
               backgroundSize: '48px 48px'
             }}>
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>

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
              Fintech Expertise
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 font-light max-w-3xl mx-auto"
            >
              Comprehensive solutions across digital payments, custom integrations, and lending technologies
            </motion.p>
          </div>

          {/* Expertise Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, areaIndex) => (
              <motion.div
                key={areaIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: areaIndex * 0.2, duration: 0.6 }}
                className="group"
              >
                {/* Main Card Container */}
                <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 overflow-hidden">
                  {/* Decorative Background Gradient */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-linear-to-br ${area.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}></div>

                  {/* Icon Header */}
                  <div className="relative mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${area.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <area.icon className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative text-2xl lg:text-3xl font-bold text-slate-900 mb-8 leading-tight">
                    {area.title}
                  </h3>

                  {/* Categories & Items */}
                  <div className="relative space-y-6">
                    {area.categories.map((category, catIndex) => (
                      <div key={catIndex} className="space-y-4">
                        {/* Category Name */}
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-br ${area.color}`}></div>
                          <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                            {category.name}
                          </h4>
                        </div>

                        {/* Items List */}
                        <ul className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * itemIndex }}
                              className="flex items-start gap-3 group/item"
                            >
                              <div className="mt-1 shrink-0">
                                <FiCheckCircle className={`w-4 h-4 text-slate-400 group-hover/item:text-slate-700 transition-colors`} />
                              </div>
                              <span className="text-slate-600 group-hover/item:text-slate-900 transition-colors font-light leading-relaxed">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-linear-to-tr from-slate-900/5 to-transparent rounded-tr-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="relative inline-block">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-100/50 to-slate-100/50 rounded-2xl transform rotate-1"></div>
              
              {/* Content */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200/50">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-linear-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-lg">
                    <FiShield className="w-8 h-8 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Industry-Leading Fintech Solutions
                    </h3>
                    <p className="text-slate-600 font-light">
                      Trusted by enterprises for secure, scalable, and innovative payment technologies
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Let's Discuss
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Expertise;