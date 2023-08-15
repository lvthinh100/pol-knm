import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};

const SlideUp = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 4, delay: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
