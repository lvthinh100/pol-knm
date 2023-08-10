import React from "react";
import { CardMedia } from "@mui/material";
import img from "../assets/img/logo-text.png";

const Logo = () => {
  return (
    <CardMedia
      component="img"
      sx={{
        objectFit: "contain",
        width: "fit-content",
      }}
      src={img}
    />
  );
};

export default Logo;
