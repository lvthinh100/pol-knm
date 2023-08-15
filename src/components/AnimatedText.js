import React from "react";

import { motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";

const slideUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedText = () => {
  const texts = "Real Value Of Life";
  return (
    <Stack direction="row">
      {texts.split("").map((word, i) => (
        <Typography
          component={motion.p}
          variants={slideUp}
          transition={{ duration: 1, delay: 1 + i / 10 }}
          initial="hidden"
          animate="visible"
          fontSize={110}
          fontFamily="Signature"
          mt={4}
          mr={word === " " ? 4 : 0}
          key={i}
        >
          {word}
        </Typography>
      ))}
    </Stack>
  );
};

export default AnimatedText;
