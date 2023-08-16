import React from "react";
import {
  Container,
  Grid,
  Typography,
  Stack,
  Box,
  CardMedia,
  Divider,
  Button,
} from "@mui/material";

import hcmus from "../../assets/img/hcmusbg.jpg";
import contact from "../../assets/img/contact.png";

import TimeLine from "./TimeLine";

const AboutUs = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h2">
              We build Bridges between companies and customer
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Stack height="100%" direction="column" justifyContent="flex-end">
              <Typography variant="subtitle1" alignSelf="flex-end">
                To build software that gives customer-facing teams at small and
                medium sized business the ability to create fruitful and
                enduring relationships with customer
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box mb={5}>
        <CardMedia component="img" src={hcmus} sx={{ height: "400px" }} />
      </Box>

      <Container maxWidth="lg">
        <Divider sx={{ marginBottom: 3 }} />
        <Grid container spacing={5}>
          <Grid item md={5}>
            <Typography variant="h3">Cách thức làm việc</Typography>
          </Grid>
          <Grid item md={7}>
            <Typography>
              Text về cách thức làm việc nhóm.Text về cách thức làm việc
              nhómText về cách thức làm việc nhómText về cách thức làm việc
              nhómText về cách thức làm việc nhómText về cách thức làm việc
              nhómText về cách thức làm việc nhómText về cách thức làm việc nhóm
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Divider />
          </Grid>
          <Grid item md={5}>
            <Typography variant="h3">Công cụ sử dụng</Typography>
          </Grid>
          <Grid item md={7}>
            <Typography>
              Text về các công cụ làm việc nhóm.Text về các công cụ làm việc
              nhóm.Text về các công cụ làm việc nhóm.Text về các công cụ làm
              việc nhóm.Text về các công cụ làm việc nhóm.Text về các công cụ
              làm việc nhóm.Text về các công cụ làm việc nhóm.Text về các công
              cụ làm việc nhóm.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Divider />
          </Grid>
          <Grid item md={5}>
            <Typography variant="h3">Kế hoạch thực hiện</Typography>
          </Grid>
          <Grid item md={7}>
            <Box>
              <TimeLine />
            </Box>
          </Grid>
          <Grid item md={12}>
            <Divider />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "secondary.main", py: 4, my: 4 }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={6} sx={{ color: "white" }}>
              <Stack justifyContent="center" height="100%" direction="column">
                <Typography variant="h3">
                  Bạn có thắc mắc ? Hãy liện hệ ngay với chúng tôi để được giải
                  đáp.
                </Typography>
                <Typography variant="subtitle1" my={3}>
                  Bạn có thể tìm hiểu thêm về các thành viên trong nhóm hoặc bất
                  cứ thứ gì bạn muốn biết. Chúng tôi luôn sẵn sàng trả lời.
                </Typography>

                <Divider color="white" sx={{ mb: 2 }} />

                <Box>
                  <Button variant="contained" color="primary">
                    LIÊN HỆ NGAY
                  </Button>
                </Box>
              </Stack>
            </Grid>

            <Grid item md={6}>
              <Box sx={{ p: 1, textAlign: "center" }}>
                <CardMedia
                  component="img"
                  src={contact}
                  sx={{ width: "60%", mx: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
