import { Button } from "@mui/material";
import React from "react";

const Downloadable = ({ url }) => {
  const handleClick = async () => {
    const res1 = await fetch(url);
    const blob = await res1.blob();
    const blobURL = window.URL.createObjectURL(new Blob([blob]));
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = blobURL;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Tải xuống
    </Button>
  );
};

export default Downloadable;
