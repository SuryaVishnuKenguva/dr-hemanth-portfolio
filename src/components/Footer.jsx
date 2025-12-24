import { motion } from "motion/react";
import { FiLinkedin, FiMail, FiCalendar } from "react-icons/fi";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const exploreLinks = [
    { label: "About", id: "about" },
    { label: "Expertise", id: "expertise" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" }
  ];

  const connectLinks = [
    {
      label: "LinkedIn",
      icon: FiLinkedin,
      link: "https://www.linkedin.com/in/dr-hemanth-veeramalla/",
      external: true
    },
    {
      label: "X (Twitter)",
      icon: FaXTwitter,
      link: "https://x.com/Veeramalla48733?t=GsFkgCQLRaY6PG5nzFT58A&s=09",
      external: true
    },
    {
      label: "Instagram",
      icon: FaInstagram,
      link: "https://instagram.com",
      external: true
    },
    {
      label: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/share/1GHH3PjnMZ/",
      external: true
    },
    {
      label: "Email",
      icon: FiMail,
      link: "mailto:hemanth@sabbpe.com",
      external: false
    },
    {
      label: "Schedule Consultation",
      icon: FiCalendar,
      link: "consultation",
      external: false
    }
  ];

  return (
    <footer className="bg-[#0F2A44] text-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <div className="py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Dr. Hemanth Veeramalla
              </h3>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Leading digital payments transformation and fintech innovation
                across global markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-white/50 mb-6">
                Explore
              </div>
              <div className="space-y-4">
                {exploreLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                    className="block text-white/80 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-white/50 mb-6">
                Connect
              </div>
              <div className="space-y-4">
                {connectLinks.map((link, index) => (
                  link.external || link.link.startsWith('mailto:') ? (
                    <motion.a
                      key={index}
                      href={link.link}
                      target={link.link.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={link.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                    >
                      <link.icon className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors" />
                      <span>{link.label}</span>
                    </motion.a>
                  ) : (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(link.link)}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group cursor-pointer"
                    >
                      <link.icon className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors" />
                      <span>{link.label}</span>
                    </motion.button>
                  )
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 origin-left"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>
              © {new Date().getFullYear()} Dr. Hemanth Veeramalla. All rights reserved.
            </div>
            <div>
              One78 SabbPe Technology Solutions
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
