import { useState } from "react";
import { CardMedia } from "@mui/material";

const DynamicImage = ({ path, alt }) => {
  const [imageSrc, setImageSrc] = useState("");

  import(`../assets/img/members/${path}`).then((module) => {
    setImageSrc(module.default);
  });

  return (
    <CardMedia
      component="img"
      src={imageSrc}
      alt={alt}
      sx={{ width: "60%", mx: 10 }}
    />
  );
};
export default DynamicImage;
