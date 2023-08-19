import React from "react";
import { Typography, Box, Container } from "@mui/material";
import Downloadable from "../../components/Downloadable";

import DOCUMENTS from "../../contents/documents";

const DocumentPage = () => {
  return (
    <Box>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2">TÀI LIỆU</Typography>
        <Typography
          variant="subtitle1"
          maxWidth={600}
          sx={{ margin: "0 auto" }}
        >
          Trong quá trình thực hiện đồ án, nhóm của chúng mình đã thống nhất và
          tạo ra một loạt tài liệu quan trọng để đảm bảo tiến trình công việc
          suôn sẻ và đồng thời định hướng về cách thực hiện đồ án
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
