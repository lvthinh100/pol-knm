import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import YouTube from "react-youtube";

import docs from "../../assets/img/docs.png";
import head1 from "../../assets/img/head1.jpg";
import head2 from "../../assets/img/head2.jpg";
import head3 from "../../assets/img/head3.jpg";
import head4 from "../../assets/img/head4.jpg";
import poster from "../../assets/img/poster.jpg";

import { StyledIconBox } from "./style";
import TEAM_INFO from "../../contents/members";
import CELEB_INFO from "../../contents/celebs";
import DynamicImage from "../../components/DynamicImage";
import Carousel from "react-material-ui-carousel";
import Logo from "../../components/Logo";

const StyledCarouselBox = styled(Box)(({ backgroundImage }) => ({
  height: "80vh",
  background: `${backgroundImage} rgba(0, 0, 0, 0.6)`,
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
  backgroundPosition: "center",
}));

const HomePage = () => {
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
            textAlign: "center",
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
            }}
          >
            <Typography variant="h2">Power of Life</Typography>
            <Typography variant="subtitle1">
              Đồng hành cùng PoL tìm hiểu về
            </Typography>
            <Typography fontSize={100} fontFamily="Signature" mt={4}>
              Real Value of Life
            </Typography>
          </Box>

          <Carousel autoPlay indicators={false} duration={300}>
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
          <Typography variant="h2">"Real Value of Life" là gì ?</Typography>
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
          <Box mt={8}>
            <Grid container direction={i % 2 === 0 ? "row" : "row-reverse"}>
              <Grid item md={6}>
                <DynamicImage path={member.image} alt={member.name} />
              </Grid>
              <Grid item md={6}>
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
              </Grid>
            </Grid>
            <Divider color="primary" sx={{ marginTop: 8 }} />
          </Box>
        ))}
      </Container>

      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="h3" my={2}>
            Sản phẩm của nhóm
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
              sx={{ m: 4, width: "80%" }}
            />
          </Grid>
          <Grid item md={6}>
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
              <Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  fontStyle="uppercase"
                >
                  XEM TẠI ĐÂY
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box width="fit-content" mx="auto">
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
