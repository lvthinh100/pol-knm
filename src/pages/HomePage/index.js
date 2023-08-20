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
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 3 }}
              textAlign="center"
            >
              <Typography>
                Một sản phẩm của đồ án môn học:{" "}
                <Typography component="span" fontWeight="bold" color="primary">
                  Kỹ Năng Mềm
                </Typography>
              </Typography>
              <Typography>
                Giáo viên hướng dẫn:{" "}
                <Typography component="span" fontWeight="bold" color="primary">
                  Đỗ Thị Thanh Hà{" "}
                </Typography>
              </Typography>
            </Box>
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
            maxWidth="620px"
            display="block"
            margin="0 auto"
            color="#666"
            mt={2}
          >
            Công việc chiếm một phần lớn cuộc sống mỗi người và cách duy nhất để
            hài lòng là làm những gì mà mình nghĩ là to lớn. Và cách duy nhất để
            làm những công việc tuyệt vời đó là yêu những gì mình làm. Nếu bạn
            không tìm thấy lý tưởng này, hãy tiếp tục tìm kiếm, đừng nản lòng.
            Trái tim sẽ chỉ lối cho bạn và mọi chuyện sẽ tốt dần theo thời gian.
            Vì thế hãy quyết tâm đến cùng. Đừng bỏ cuộc
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
          <Typography variant="h3" my={2}>
            Sản phẩm của nhóm
          </Typography>
          <Typography
            variant="subtitle1"
            maxWidth="720px"
            display="block"
            margin="0 auto"
            color="#666"
            mt={2}
          >
            Chào mừng bạn đến với video về các cuộc phỏng vấn ngắn về "The real
            value of Life" - một cuộc hành trình thú vị để đi tìm giá trị thực
            sự của cuộc sống. Trong thế giới vội vã và phức tạp của ngày nay,
            chúng ta thường bị cuốn vào cuộc đua với thời gian và công việc, bỏ
            qua những khoảnh khắc quý báu và ý nghĩa trong cuộc sống. Video này
            là một cơ hội để chúng mình chia sẻ những câu chuyện tuyệt vời,
            những kinh nghiệm đáng nhớ, và quan điểm sâu sắc về ý nghĩa thực sự
            của cuộc sống.
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
                  <Typography>
                    <Typography component="span" color="primary">
                      Kịch bản:{" "}
                    </Typography>{" "}
                    Lâm Nguyễn Ngọc Mỹ
                  </Typography>
                  <Typography>
                    <Typography component="span" color="primary">
                      Phỏng vấn:{" "}
                    </Typography>
                    Lâm Nguyễn Ngọc Mỹ, Trương Huỳnh Đức Hoàng, Lê Văn Thịnh, Lê
                    Nguyên Khang, Lâm Nhựt trường
                  </Typography>
                  <Typography>
                    <Typography component="span" color="primary">
                      Poster:{" "}
                    </Typography>{" "}
                    Lê Nguyên Khang, Lâm Nhựt Trường
                  </Typography>
                  <Typography>
                    {" "}
                    <Typography component="span" color="primary">
                      Editor:{" "}
                    </Typography>{" "}
                    Đặng Nguyễn Thanh Tín
                  </Typography>
                  <Typography>
                    <Typography component="span" color="primary">
                      Camera:{" "}
                    </Typography>{" "}
                    Lâm Nguyễn Ngọc Mỹ, Lê Nguyên Khang
                  </Typography>
                  <Typography>
                    <Typography component="span" color="primary">
                      Web:{" "}
                    </Typography>{" "}
                    Lê Văn Thịnh
                  </Typography>
                  <Typography>
                    <Typography component="span" color="primary">
                      Content:{" "}
                    </Typography>{" "}
                    Trương Huỳnh Đức Hoàng
                  </Typography>
                  <Typography>
                    {" "}
                    <Typography component="span" color="primary">
                      Trình bày:{" "}
                    </Typography>{" "}
                    Lâm Nguyễn Ngọc Mỹ
                  </Typography>
                  <Typography>
                    <Typography component="span" color="primary">
                      Logo:{" "}
                    </Typography>{" "}
                    Lê Nguyên Khang
                  </Typography>
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
            Chào mừng đến với nhóm của chúng mình - một tập hợp đa dạng về tính
            cách và kinh nghiệm, nhưng chúng mình hòa quyện thành một đội ngũ
            đầy sức mạnh. Với sự hiện diện của 6 thành viên, bao gồm 5 anh chàng
            và một cô gái, chúng mình đã tạo nên một tổ hợp độc đáo về khía cạnh
            tư duy và góc nhìn.
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
