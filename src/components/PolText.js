import React from "react";
import { Typography, Link } from "@mui/material";

const PolText = () => {
  return (
    <Typography
      color="primary"
      sx={{
        display: "inline-block",
        textDecoration: "none",
        fontWeight: "bold",
      }}
      component={Link}
      to="https://www.hcmus.edu.vn"
    >
      PoL
    </Typography>
  );
};

export default PolText;
