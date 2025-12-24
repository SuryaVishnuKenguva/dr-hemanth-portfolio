import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import profileImage from "../assets/image.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white" id="hero">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-20 xl:px-24 py-32">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-[#0F2A44] leading-[0.95] tracking-tight">
                Dr. Hemanth
                <br />
                Veeramalla
              </h1>

              <div className="space-y-3 pt-2">
                <p className="text-2xl lg:text-3xl font-semibold text-[#0F2A44]">
                  Managing Director
                </p>
                <p className="text-xl lg:text-2xl text-[#4A6FA5] font-medium">
                  One78 SabbPe Technology Solutions
                </p>
              </div>
            </div>

            <p className="text-xl lg:text-2xl text-[#2E2E2E] leading-relaxed max-w-xl font-light">
              Transforming digital payments across global markets through strategic
              innovation and 18+ years of fintech leadership.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <motion.a
                href="#consultation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-9 py-5 bg-[#F4C430] text-[#0F2A44] text-lg font-semibold rounded-xl hover:bg-[#E0B020] transition-all shadow-sm hover:shadow-md"
              >
                <span>Schedule Consultation</span>
                <FiArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/dr-hemanth-veeramalla/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-9 py-5 border-2 border-[#0F2A44] text-[#0F2A44] text-lg font-semibold rounded-xl hover:bg-[#0F2A44] hover:text-white transition-all"
              >
                <span>View Profile</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#0F2A44]/5 scale-105"></div>

              <div className="relative w-[340px] h-[340px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
                <div className="absolute inset-0 rounded-full ring-[3px] ring-[#0F2A44]/10 ring-offset-[12px] ring-offset-white"></div>
                <div className="absolute inset-0 rounded-full ring-[2px] ring-[#F4C430]/20 ring-offset-[6px] ring-offset-white"></div>

                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#F5F7FA] to-white">
                  <img
                    src={profileImage}
                    alt="Dr. Hemanth Veeramalla - Managing Director"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
