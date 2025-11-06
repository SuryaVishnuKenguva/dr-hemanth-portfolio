// import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { FiLinkedin, FiMail, FiMapPin, FiSend, FiCheckCircle, FiXCircle } from "react-icons/fi";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [toast, setToast] = useState({ show: false, type: "", message: "" });

  // const showToast = (type, message) => {
  //   setToast({ show: true, type, message });
  //   setTimeout(() => {
  //     setToast({ show: false, type: "", message: "" });
  //   }, 4000);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.email || !formData.message) {
  //     showToast("error", "Please fill in all fields");
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   emailjs
  //     .send(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //       {
  //         from_name: formData.name,
  //         from_email: formData.email,
  //         message: formData.message,
  //       },
  //       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         showToast("success", "Message sent successfully!");
  //         setFormData({ name: "", email: "", message: "" });
  //         setIsSubmitting(false);
  //       },
  //       (error) => {
  //         console.error("EmailJS Error:", error);
  //         showToast("error", "Failed to send message. Please try again.");
  //         setIsSubmitting(false);
  //       }
  //     );
  // };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Location",
      content: "Gurugram, Haryana, India",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FiMail,
      title: "Email",
      content: "hemanth@sabbpe.com",
      link: "mailto:hemanth@sabbpe.com",
      color: "from-slate-700 to-slate-800",
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      content: "Connect",
      link: "https://www.linkedin.com/in/dr-hemanth-veeramalla/",
      color: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <AnimatedSection id="contact">
      <section className="relative py-32 overflow-hidden">
        {/* Toast Notification */}
        {/* <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border flex items-center gap-3 min-w-[320px]"
              style={{
                backgroundColor: toast.type === "success" ? "rgba(16, 185, 129, 0.95)" : "rgba(239, 68, 68, 0.95)",
                borderColor: toast.type === "success" ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)",
              }}
            >
              {toast.type === "success" ? (
                <FiCheckCircle className="w-6 h-6 text-white flex-shrink-0" />
              ) : (
                <FiXCircle className="w-6 h-6 text-white flex-shrink-0" />
              )}
              <span className="text-white font-semibold text-base">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence> */}

        {/* Premium Background */}
        <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50/50 to-blue-50/30"></div>

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(15 23 42) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        ></div>

        {/* Floating Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
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
              Let's Connect
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 font-light max-w-2xl mx-auto"
            >
              Ready to discuss fintech innovation, partnerships, or opportunities
            </motion.p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 overflow-hidden">
                  {/* Background Glow */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${item.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 mb-6 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                    <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-2">
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        {...(item.link?.startsWith("mailto:")
                          ? {}
                          : { target: "_blank", rel: "noopener noreferrer" })}
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors group/link relative z-10"
                      >
                        {item.content}
                        <svg
                          className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-slate-600 font-medium">{item.content}</p>
                    )}
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr from-slate-900/5 to-transparent rounded-tr-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute inset-0 bg-linear-to-br from-slate-100/50 to-blue-100/30 rounded-3xl transform rotate-1"></div>

            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-2xl border border-slate-200/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center space-y-2">
                  <h3 className="text-3xl font-bold text-slate-900">Send a Message</h3>
                  <p className="text-slate-600 font-light">Share your thoughts or inquiries</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-900 tracking-wide uppercase">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-900 tracking-wide uppercase">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-900 tracking-wide uppercase">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your inquiry..."
                      rows={6}
                      required
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 font-medium focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/5 transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.02,
                      y: isSubmitting ? 0 : -2,
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`group relative w-full py-5 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                    <span className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FiSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </form>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-linear-to-br from-slate-400/20 to-transparent rounded-full blur-2xl"></div>
            </div>
          </motion.div> */}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;