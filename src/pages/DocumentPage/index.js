import React from "react";
import { Typography, Box, Container } from "@mui/material";
import Downloadable from "../../components/Downloadable";

import contract from "../../assets/documents/contract.pdf";
import DOCUMENTS from "../../contents/documents";

const DocumentPage = () => {
  return (
    <Box>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2">TÀI LIỆU</Typography>
        <Typography variant="subtitle1">
          Mô tả sơ về tài liệu.Mô tả sơ về tài liệuMô tả sơ về tài liệuMô tả sơ
          về tài liệuMô tả sơ về tài liệu
        </Typography>
      </Box>
      {DOCUMENTS.map((doc, i) => (
        <Container maxWidth="lg" key={i} sx={{ my: 4 }}>
          <Typography variant="h4">
            {i + 1}. {doc.title}
          </Typography>
          <Typography variant="subtitle1" my={2}>
            {doc.description}
          </Typography>
          <Downloadable url={doc.file} />
        </Container>
      ))}
    </Box>
  );
};

export default DocumentPage;
