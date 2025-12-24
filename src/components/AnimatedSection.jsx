// eslint-disable-next-line no-unused-vars
import { useInView, motion } from "motion/react";
import React from "react";

const AnimatedSection = ({ children, id }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
