import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";

import cover from "../../assets/img/bg-cover-products.jpg";
import top from "../../assets/img/top.png";
import docs from "../../assets/img/docs.png";

import { StyledIconBox } from "./style";
import TEAM_INFO from "../../contents/members";
import DynamicImage from "../../components/DynamicImage";

const HomePage = () => {
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          backgroundSize: "cover",
          backgroundImage: `url(${cover})`,
          backgroundPosition: "50%",
          borderRadius: 1,
        }}
      >
        <Box sx={{ textAlign: "center", color: "#fff", p: "80px 20px 140px" }}>
          <Typography variant="h2">PoweR of Life</Typography>
          <Typography variant="subtitle1">
            HCMUS - Kỹ năng mềm_2022-2023
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "center", mt: "-140px" }}>
          <CardMedia component="img" src={top} sx={{ width: "50%" }} />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={10}>
          <Typography variant="h2">Our Product</Typography>
          <Typography
            variant="subtitle1"
            fontWeight="300"
            maxWidth="620px"
            display="block"
            margin="0 auto"
            color="#666"
            mt={2}
          >
            Open-Source Full-Stack seed project crafted on top of Material
            Design and React. The product comes with a simple JWT authentication
            flow: login/register/logout powered by an open-source Node JS API
            Backend. Based on the permissive (MIT) Licence, the product can be
            used in commercial projects and eLearning activities.
          </Typography>
        </Box>
        <Box mt={4}>
          <Grid container>
            <Grid item md={6}>
              <CardMedia
                component="img"
                src={docs}
                sx={{ width: "60%", ml: 10 }}
              />
            </Grid>
            <Grid item md={6}>
              <Box>
                <StyledIconBox>
                  <AppleIcon fontSize="large" />
                </StyledIconBox>
                <Typography variant="h3" color="secondary" my={2}>
                  Documentation
                </Typography>

                <Typography variant="subtitle2">
                  For more information regarding the product usage, access the
                  official documentation. If something is missing, feel free to
                  chat with the support team on Discord - 24/7 LIVE Service.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4}>
          <Grid container>
            <Grid item md={6}>
              <Box>
                <StyledIconBox>
                  <AppleIcon fontSize="large" />
                </StyledIconBox>
                <Typography variant="h3" color="secondary" my={2}>
                  Working Process
                </Typography>

                <Typography variant="subtitle1">
                  NodeJS is an open-source, cross-platform runtime environment
                  that allows developers to create all kinds of server-side
                  tools and applications in JavaScript. Express is the most
                  popular Node web framework, powered by middleware packages
                  created and actively supported by developers across the globe.
                  For more information please access the product documentation.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <CardMedia
                component="img"
                src={docs}
                sx={{ width: "60%", ml: 10 }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box mt={4}>
          <Grid container>
            <Grid item md={6}>
              <CardMedia
                component="img"
                src={docs}
                sx={{ width: "60%", ml: 10 }}
              />
            </Grid>
            <Grid item md={6}>
              <Box>
                <StyledIconBox>
                  <AppleIcon fontSize="large" />
                </StyledIconBox>
                <Typography variant="h3" color="secondary" my={2}>
                  Documentation
                </Typography>

                <Typography variant="subtitle2">
                  For more information regarding the product usage, access the
                  official documentation. If something is missing, feel free to
                  chat with the support team on Discord - 24/7 LIVE Service.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", maxWidth: "600px", mx: "auto", mt: 2 }}>
          <Typography variant="h3" my={2}>
            Our Team
          </Typography>
          <Typography variant="subtitle1">
            Riot Games was founded in 2006 to develop, publish, and support the
            most player-focused games in the world. In 2009, we released our
            debut title, League of Legends, to worldwide acclaim. League has
            gone on to be the most-played PC game in the world and a key driver
            of the explosive growth of esports.{" "}
          </Typography>
        </Box>
        <Box mt={15}>
          {TEAM_INFO.members.map((member, i) => {
            return (
              <Grid
                container
                direction={i % 2 === 1 ? "row" : "row-reverse"}
                mb={20}
              >
                <Grid item md={6} alignItems="center">
                  <Box sx={{ mx: 10, my: 5 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        backgroundColor: "secondary.main",
                        display: "inline-block",
                        color: "white",
                        fontWeight: "bolder",
                        textTransform: "uppercase",
                        p: [1, 0.5],
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="h2" sx={{ my: 2 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1">
                      {member.description}
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2 }}>
                      More Info
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <DynamicImage path={member.image} alt="thinh" />
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
