import AnimatedSection from "./AnimatedSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Experience = () => {
  const experiences = [
    {
      position: "Managing Director",
      company: "One78 SabbPe Technology Solutions India Pvt. Ltd.",
      duration: "Jul 2023 – Present",
      location: "Gurugram, Haryana, India",
      description:
        "Leading innovation in digital payment ecosystems across offline and online platforms, including PSP modules, UPI Elite QuickPay, and integrated EDC technology solutions.",
      highlight: true,
    },
    {
      position: "Executive Director & Legal Advisor",
      company: "Cito Nidhi Limited",
      duration: "Feb 2023 – Present",
      location: "Gurugram, Haryana, India (Remote)",
      description:
        "Overseeing financial growth and regulatory coordination while building strategic alliances with insurance and lending partners for SME expansion.",
      highlight: true,
    },
    {
      position: "Startup Mentor",
      company: "Startup India – MAARG Program",
      duration: "Aug 2023 – Present",
      location: "Gurugram, Haryana, India (Remote)",
      description:
        "Guiding startups in fintech and allied domains under the MAARG mentorship platform, helping founders with business strategy, scalability, and regulatory readiness.",
      highlight: true,
    },
    {
      position: "Executive Director",
      company: "Grats Technologies Pvt. Ltd.",
      duration: "Oct 2023 – Present",
      location: "Bengaluru, Karnataka (Remote)",
      description:
        "Driving fintech innovation and enterprise partnerships to deliver robust digital payment and merchant solutions for emerging markets.",
      highlight: true,
    },
    {
      position: "Independent Consultant",
      company: "Self-Employed",
      duration: "Jan 2024 – Present",
      location: "Gurugram, Haryana (Remote)",
      description:
        "Providing consulting services to fintech enterprises in both offline and online payments, focusing on strategy, partnerships, and compliance.",
    },
    {
      position: "General Manager",
      company: "Paytm",
      duration: "Nov 2020 – Jan 2023",
      location: "Bengaluru, Karnataka",
      description:
        "Built mid-market business operations for South & West India, managing offline integrations, EMI programs, and GMV growth across merchant ecosystems.",
    },
    {
      position: "Regional Head",
      company: "Innoviti Payment Solutions Pvt. Ltd.",
      duration: "Feb 2018 – Nov 2020",
      location: "Bengaluru, Karnataka",
      description:
        "Directed sales, operations, and partnerships across South & East India, leading corporate, institutional, and government payment channels.",
    },
    {
      position: "Regional Head",
      company: "NeoGrowth Credit Pvt. Ltd.",
      duration: "Sep 2017 – Feb 2018",
      location: "Chennai, Tamil Nadu",
      description:
        "Managed unsecured lending portfolios for SMEs, driving business growth through card receivables and financial performance.",
    },
    {
      position: "Sales Head – Jio Money & Enterprise State Lead",
      company: "Reliance Jio",
      duration: "Mar 2016 – Aug 2017",
      location: "Kolkata, West Bengal",
      description:
        "Headed Jio Money’s telecom and non-telecom business across West Bengal and Sikkim, strengthening retail and enterprise payment distribution channels.",
    },
    {
      position: "Regional Head – East Region / Business Manager",
      company: "Fiserv India",
      duration: "May 2011 – Mar 2016",
      location: "Greater Kolkata Area",
      description:
        "Led acquiring business for the East region, managing partnerships, channel operations, and client satisfaction for retail and corporate payment solutions.",
    },
    {
      position: "Sales Manager",
      company: "HDFC Bank Ltd.",
      duration: "Oct 2010 – May 2011",
      location: "East Godavari, Andhra Pradesh",
      description:
        "Handled dealer networks and alternate channels for two-wheeler financing and retail loan distribution.",
    },
    {
      position: "Wealth Manager / Sales Manager",
      company: "ICICI Bank",
      duration: "Jul 2007 – Sep 2010",
      location: "Vijayawada, Andhra Pradesh",
      description:
        "Managed HNI client portfolios, financial planning, and distribution of wealth management products, including equity, mutual funds, and insurance.",
    },
    {
      position: "Sr. Sales Executive – North Region",
      company: "Axiom Energy Conversion Ltd.",
      duration: "Nov 2006 – Jul 2007",
      location: "Delhi, India",
      description:
        "Handled channel sales and OEM partnerships across North India, strengthening B2B relationships in the energy sector.",
    },
  ];

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
              A legacy of leadership across fintech, payments, and banking
              innovation
            </motion.p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Premium Timeline Line */}
            <div className="absolute left-0 md:left-12 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-slate-300 to-transparent hidden md:block"></div>

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
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-12 top-8 -ml-[9px] w-5 h-5 rounded-full bg-white border-4 border-slate-900 shadow-lg hidden md:block z-10">
                    {exp.highlight && (
                      <div className="absolute inset-0 rounded-full bg-slate-900 animate-ping opacity-20"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="md:ml-28">
                    <motion.div
                      whileHover={{ scale: 1.01, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                        exp.highlight
                          ? "bg-linear-to-br from-slate-50 via-white to-blue-50/30 border-slate-200/80"
                          : "bg-linear-to-br from-white to-slate-50/50 border-slate-200/50"
                      }`}
                    >
                      {/* Current Badge for Active Roles */}
                      {exp.highlight && (
                        <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-linear-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold rounded-full shadow-lg">
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
