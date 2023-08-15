import { useState } from "react";
import { CardMedia } from "@mui/material";

const DynamicImage = ({ path, alt }) => {
  const [imageSrc, setImageSrc] = useState("");

  import(`../assets/img/${path}`).then((module) => {
    setImageSrc(module.default);
  });

  return (
    <CardMedia
      component="img"
      src={imageSrc}
      alt={alt}
      sx={{ width: "60%", mx: 10, border: "3px solid #333" }}
    />
  );
};
export default DynamicImage;
