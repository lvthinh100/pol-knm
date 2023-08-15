import React, { useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

const ShowOnView = ({ children, direction }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "right" ? 80 : -80,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  }, [isInView, slideControls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={slideControls}
      initial="hidden"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default ShowOnView;
