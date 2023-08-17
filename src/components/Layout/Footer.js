import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box component="footer" mt={10}>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            borderTop: "1px solid #666",
            py: 3,
            "& a": {
              textDecoration: "none",
              color: "secondary.main",
            },
          }}
          rowSpacing={3}
        >
          <Grid item md={3}>
            <Stack
              direction="column"
              justifyContent="space-between"
              height="100%"
            >
              <Box>
                <Typography variant="h6">Power of Life</Typography>
                <Typography variant="subtitle1">Socials Links</Typography>
              </Box>
              <Stack direction="row" gap={2}>
                <IconButton disableRipple sx={{ p: 0 }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton disableRipple sx={{ p: 0 }}>
                  <CloudCircleIcon />
                </IconButton>
                <IconButton disableRipple sx={{ p: 0 }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton disableRipple sx={{ p: 0 }}>
                  <YouTubeIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" mb={1}>
              Thông tin
            </Typography>
            <Stack direction="column">
              <Typography component={"a"} href="/" variant="subtitle1">
                Home
              </Typography>
              <Typography component={"a"} href="/documents" variant="subtitle1">
                Documents
              </Typography>
              <Typography component={"a"} href="/about" variant="subtitle1">
                About us
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" mb={1}>
              Thành viên
            </Typography>
            <Stack direction="column">
              <Typography component={"a"} href="/member/my" variant="subtitle1">
                Ngọc Mỹ
              </Typography>
              <Typography
                component={"a"}
                href="/member/tin"
                variant="subtitle1"
              >
                Thanh Tín
              </Typography>
              <Typography
                component={"a"}
                href="/member/khang"
                variant="subtitle1"
              >
                Nguyên Khang
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" mb={1}>
              Thành viên
            </Typography>
            <Stack direction="column">
              <Typography
                component={"a"}
                href="/member/thinh"
                variant="subtitle1"
              >
                Văn Thịnh
              </Typography>
              <Typography
                component={"a"}
                href="/member/truong"
                variant="subtitle1"
              >
                Nhựt Trường
              </Typography>
              <Typography
                component={"a"}
                href="/member/hoang"
                variant="subtitle1"
              >
                Đức Hoàng
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Typography sx={{ textAlign: "center", my: 4 }}>
        ©{" "}
        <Typography
          color="primary"
          sx={{
            display: "inline-block",
            textDecoration: "none",
          }}
          component={Link}
          to="https://www.hcmus.edu.vn"
        >
          PoL
        </Typography>{" "}
        - Students of{" "}
        <Typography
          color="primary"
          sx={{
            display: "inline-block",
            textDecoration: "none",
          }}
          component={Link}
          to="https://www.hcmus.edu.vn"
        >
          HCMUS
        </Typography>{" "}
        2022-2023
      </Typography>
    </Box>
  );
};

export default Footer;
