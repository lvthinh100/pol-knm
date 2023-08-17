import { useEffect, useState } from "react";
import { CardMedia } from "@mui/material";

const DynamicImage = ({ path, alt }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    import(`../assets/img/${path}`).then((module) => {
      setImageSrc(module.default);
    });
  }, [path, setImageSrc]);

  return (
    <CardMedia
      component="img"
      src={imageSrc}
      alt={alt}
      sx={{ width: "70%", mx: 10 }}
    />
  );
};
export default DynamicImage;
