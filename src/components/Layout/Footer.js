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
          sx={{ borderTop: "1px solid #666", py: 3 }}
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
              Resource
            </Typography>
            <Stack direction="column">
              <Typography variant="subtitle1">Support</Typography>
              <Typography variant="subtitle1">Documentation</Typography>
              <Typography variant="subtitle1">Vlog</Typography>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" mb={1}>
              Resource
            </Typography>
            <Stack direction="column">
              <Typography variant="subtitle1">Support</Typography>
              <Typography variant="subtitle1">Documentation</Typography>
              <Typography variant="subtitle1">Vlog</Typography>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" mb={1}>
              Resource
            </Typography>
            <Stack direction="column">
              <Typography variant="subtitle1">Support</Typography>
              <Typography variant="subtitle1">Documentation</Typography>
              <Typography variant="subtitle1">Vlog</Typography>
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
