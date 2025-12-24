import AnimatedSection from "./AnimatedSection";
import { motion } from "motion/react";
import { FiLinkedin, FiArrowRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const socialLinks = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/dr-hemanth-veeramalla/"
    },
    {
      icon: FaXTwitter,
      label: "X (Twitter)",
      link: "https://x.com/Veeramalla48733?t=GsFkgCQLRaY6PG5nzFT58A&s=09"
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      link: "https://instagram.com"
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      link: "https://www.facebook.com/share/1GHH3PjnMZ/"
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatedSection id="contact">
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-bold text-[#4A6FA5] uppercase tracking-[0.2em] mb-8"
            >
              Contact
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F2A44] mb-8 leading-tight"
            >
              Let's connect.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl lg:text-2xl text-[#2E2E2E] mb-16 max-w-2xl leading-relaxed"
            >
              Ready to discuss fintech innovation, strategic partnerships, or executive opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12"
            >

              <div>
                <motion.button
                  onClick={scrollToConsultation}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-4 text-[#F4C430] text-xl lg:text-2xl font-semibold group cursor-pointer"
                >
                  <span>Schedule a Consultation</span>
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 3
                    }}
                  >
                    <FiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.div>
                </motion.button>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="text-sm text-[#4A6FA5] mt-2 ml-1"
                >
                  Professional consultation · Book directly on this website
                </motion.p>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ x: 2, opacity: 0.8 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 text-[#4A6FA5] hover:text-[#0F2A44] transition-colors duration-200 group"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-24 pt-12 border-t border-[#0F2A44]/10 origin-left"
            >
              <div className="grid md:grid-cols-2 gap-12 max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-xs font-bold text-[#4A6FA5] uppercase tracking-wide mb-3">
                    Location
                  </div>
                  <div className="text-lg text-[#0F2A44] font-medium">
                    Gurugram, Haryana, India
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-xs font-bold text-[#4A6FA5] uppercase tracking-wide mb-3">
                    Email
                  </div>
                  <motion.a
                    href="mailto:hemanth@sabbpe.com"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                    className="text-lg text-[#0F2A44] font-medium hover:text-[#F4C430] transition-colors duration-200 inline-block"
                  >
                    hemanth@sabbpe.com
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;
