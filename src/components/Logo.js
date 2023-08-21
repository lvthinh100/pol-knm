import React from "react";
import { CardMedia, Stack, Typography } from "@mui/material";
import img from "../assets/img/logo.png";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center">
      <CardMedia
        component="img"
        sx={{
          objectFit: "contain",
          width: "fit-content",
          height: "35px",
          marginRight: 1,
        }}
        src={img}
      />

      <Typography color="primary" fontWeight="bold" fontSize={15}>
        Power of Life
      </Typography>
    </Stack>
  );
};

export default Logo;
