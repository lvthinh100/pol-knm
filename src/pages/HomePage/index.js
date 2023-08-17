import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EastIcon from "@mui/icons-material/East";

import YouTube from "react-youtube";
import { motion } from "framer-motion";

import head1 from "../../assets/img/head1.jpg";
import head2 from "../../assets/img/head2.jpg";
import head3 from "../../assets/img/head3.jpg";
import head4 from "../../assets/img/head4.jpg";
import poster from "../../assets/img/poster.jpg";

import TEAM_INFO from "../../contents/members";
import CELEB_INFO from "../../contents/celebs";
import DynamicImage from "../../components/DynamicImage";
import Carousel from "react-material-ui-carousel";
import Logo from "../../components/Logo";
import AnimatedText from "../../components/AnimatedText";
import PolText from "../../components/PolText";
import SlideReveal from "../../components/Animation/SlideReveal";
import ShowOnView from "../../components/Animation/ShowOnView";

const StyledCarouselBox = styled(Box)(({ backgroundImage }) => ({
  height: "500px",
  background: `${backgroundImage} rgba(0, 0, 0, 0.6)`,
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
  backgroundPosition: "center",
}));

const StyledPaper = styled(Paper)({
  padding: 10,
  borderRadius: 0,
  "& .MuiTypography-root": {
    fontWeight: "300",
    fontStyle: "italic",
    lineHeight: 1.7,
    fontFamily: "Roboto",
    fontSize: 18,
  },
});

const HomePage = () => {
  const text1 = "Đồng hành cùng pol tìm hiểu về";
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          borderRadius: 1,
        }}
      >
        <Box mx="auto" width="fit-content">
          <Logo />
        </Box>
        <Box
          sx={{
            color: "#fff",
            p: "0px 0px 140px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 100,
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SlideReveal>
              <Typography variant="h2">Power of Life</Typography>
            </SlideReveal>
            <Typography
              variant="subtitle1"
              component={motion.p}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4 }}
            >
              Đồng hành cùng <PolText /> tìm hiểu về
            </Typography>
            <AnimatedText />
          </Box>

          <Carousel
            autoPlay
            indicators={false}
            interval={6000}
            duration={1000}
            animation="slide"
          >
            <StyledCarouselBox
              backgroundImage={`url(${head1})`}
            ></StyledCarouselBox>
            <StyledCarouselBox
              backgroundImage={`url(${head2})`}
            ></StyledCarouselBox>
            <StyledCarouselBox
              backgroundImage={`url(${head3})`}
            ></StyledCarouselBox>
            <StyledCarouselBox
              backgroundImage={`url(${head4})`}
            ></StyledCarouselBox>
          </Carousel>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={10}>
          <Typography variant="h2" fontWeight="bolder">
            "Real Value of Life" là gì ?
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="300"
            maxWidth="620px"
            display="block"
            margin="0 auto"
            color="#666"
            mt={2}
          >
            Đoạn văn mô tả chung về một số câu nói, nhận định của những doanh
            nhân, Đoạn văn mô tả chung về một số câu nói, nhận định của những
            doanh nhân, Đoạn văn mô tả chung về một số câu nói, nhận định của
            những doanh nhân, Đoạn văn mô tả chung về một số câu nói, nhận định
            của những doanh nhân,
          </Typography>
        </Box>
        {CELEB_INFO.members.map((member, i) => (
          <Box mt={8} key={i}>
            <Grid container direction={i % 2 === 0 ? "row" : "row-reverse"}>
              <Grid item md={6}>
                <ShowOnView>
                  <DynamicImage path={member.image} alt={member.name} />
                </ShowOnView>
              </Grid>
              <Grid item md={6}>
                <ShowOnView direction="right">
                  <Box mx={8}>
                    <Typography variant="h3" color="secondary" my={2}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" my={2}>
                      {member.role}
                    </Typography>

                    <Paper sx={{ p: 4, borderRadius: 0 }}>
                      <Typography variant="subtitle1" fontStyle="italic">
                        {member.description}
                      </Typography>
                    </Paper>

                    <Link
                      href={member.link}
                      underline="none"
                      mt={3}
                      display="block"
                      fontWeight="bold"
                    >
                      Tìm hiểu thêm
                    </Link>
                  </Box>
                </ShowOnView>
              </Grid>
            </Grid>
            <Divider color="primary" sx={{ marginTop: 8 }} />
          </Box>
        ))}
      </Container>

      <Container maxWidth="lg">
        <Box textAlign="center">
          <ShowOnView>
            <Typography variant="h3" my={2}>
              Sản phẩm của nhóm
            </Typography>
          </ShowOnView>
          <Typography
            variant="subtitle1"
            fontWeight="300"
            maxWidth="620px"
            display="block"
            margin="0 auto"
            color="#666"
            mt={2}
          >
            Đôi lời giới thiệu về sản phẩm.Đôi lời giới thiệu về sản phẩm.Đôi
            lời giới thiệu về sản phẩm.Đôi lời giới thiệu về sản phẩm.Đôi lời
            giới thiệu về sản phẩm.Đôi lời giới thiệu về sản phẩm.Đôi lời giới
            thiệu về sản phẩm.Đôi lời giới thiệu về sản phẩm.
          </Typography>
        </Box>
        <Grid container>
          <Grid item md={6}>
            <CardMedia
              component="img"
              src={poster}
              sx={{ m: 4, width: "80%", border: "3px solid #222" }}
            />
          </Grid>
          <Grid item md={6}>
            <ShowOnView direction="right">
              <Box m={4}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 0,
                    "& .MuiTypography-root": {
                      fontWeight: "300",
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      fontFamily: "Roboto",
                      fontSize: 18,
                    },
                  }}
                >
                  <Typography variant="subtitle1" fontSize={20}>
                    Cảm ơn cả nhóm đã cùng đồng hành để hoàn thiện sản phẩm{" "}
                  </Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                  <Typography>Kịch bản: Lâm Nguyễn Ngọc Mỹ</Typography>
                </Paper>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 3 }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    fontStyle="uppercase"
                  >
                    XEM TẠI ĐÂY
                  </Typography>
                </Button>
              </Box>
            </ShowOnView>
          </Grid>
        </Grid>
        <Box
          width="fit-content"
          mx="auto"
          sx={{ p: 0.5, border: "1px solid #888" }}
        >
          <YouTube
            videoId="1MvJ7FhWKd8"
            opts={{
              height: "500",
              width: "900",
              playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
              },
            }}
          />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", maxWidth: "600px", mx: "auto", mt: 8 }}>
          <Typography variant="h3" my={2}>
            Tìm hiểu về nhóm chúng mình
          </Typography>
          <Typography variant="subtitle1">
            Riot Games was founded in 2006 to develop, publish, and support the
            most player-focused games in the world. In 2009, we released our
            debut title, League of Legends, to worldwide acclaim. League has
            gone on to be the most-played PC game in the world and a key driver
            of the explosive growth of esports.{" "}
          </Typography>
        </Box>
        <Box mt={8}>
          {TEAM_INFO.members.map((member, i) => {
            return (
              <Grid
                container
                direction={i % 2 === 1 ? "row" : "row-reverse"}
                mb={20}
                key={i}
              >
                <Grid item md={12}>
                  <Divider
                    sx={{ borderBottomWidth: 1, marginBottom: 8 }}
                    color="secondary"
                  />
                </Grid>
                <Grid item md={6} alignItems="center">
                  <ShowOnView>
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
                      <Typography variant="h3" sx={{ my: 2 }}>
                        {member.name}
                      </Typography>
                      <StyledPaper elevation={3} sx={{ marginBottom: 5 }}>
                        <Typography variant="subtitle1">
                          {member.description}
                        </Typography>
                      </StyledPaper>
                      <Link component={RouterLink} to={`/member/${member.id}`}>
                        <Button
                          variant="contained"
                          color="primary"
                          endIcon={<EastIcon />}
                        >
                          Xem thêm
                        </Button>
                      </Link>
                    </Box>
                  </ShowOnView>
                </Grid>
                <Grid item md={6}>
                  <ShowOnView direction="right">
                    <DynamicImage path={member.image} alt="thinh" />
                  </ShowOnView>
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
