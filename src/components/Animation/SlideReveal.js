import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const FadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const SlideOut = {
  hidden: {
    left: "0",
  },
  visible: {
    left: "100%",
  },
};

const transition = {
  delay: 0.3,
  duration: 1,
};

const SlideReveal = ({ children }) => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={FadeIn}
        initial="hidden"
        animate="visible"
        transition={transition}
      >
        {children}
      </motion.div>
      <Box
        component={motion.div}
        sx={{
          position: "absolute",
          backgroundColor: "primary.main",
          left: 0,
          right: 0,
          top: 4,
          bottom: 4,
          zIndex: 20,
        }}
        variants={SlideOut}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3, ease: "easeIn" }}
      ></Box>
    </Box>
  );
};

export default SlideReveal;
