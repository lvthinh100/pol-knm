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
import contact from "../../assets/img/tin.jpg";

import TimeLine from "./TimeLine";

const AboutUs = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h2">Power of Life</Typography>
          </Grid>
          <Grid item md={6}>
            <Stack height="100%" direction="column" justifyContent="flex-end">
              <Typography variant="subtitle1" alignSelf="flex-end">
                Sứ mệnh đi tìm câu trả lời về giá trị thật của cuộc sống
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
          <Grid item md={4}>
            <Typography variant="h3">Cách thức làm việc</Typography>
          </Grid>
          <Grid item md={8}>
            <Typography mb={1}>
              • Nhóm của chúng mình hoạt động với sự hòa hợp và sáng tạo. Chúng
              mình tận dụng sự đa dạng về tính cách và kinh nghiệm để thúc đẩy
              sự phát triển chung. Trong quá trình làm việc, chúng mình luôn thể
              hiện sự tôn trọng và lắng nghe ý kiến của nhau, tạo môi trường mở
              để mỗi người đề xuất ý tưởng và giải pháp. nghiệm ý nghĩa.
            </Typography>
            <Typography mb={1}>
              • Chúng mình thường xuyên họp mặt để thảo luận về các nhiệm vụ và
              mục tiêu cụ thể cần thực hiện. Chúng mình phân chia công việc dựa
              trên sở trường và khả năng của từng thành viên. Trong quá trình
              làm việc, chúng mình thường xuyên trao đổi thông tin và phản hồi
              để đảm bảo rằng chúng mình đang đi đúng hướng.
            </Typography>
            <Typography mb={1}>
              • Sự gắn kết trong nhóm của chúng mình được thể hiện qua việc chia
              sẻ kiến thức, hỗ trợ lẫn nhau trong việc giải quyết vấn đề và nâng
              cao khả năng của từng thành viên. Chúng mình cùng nhau thúc đẩy
              tinh thần làm việc tập thể, chia sẻ thông tin một cách minh bạch
              và cùng nhau vui mừng với sự đóng góp của mỗi người.
            </Typography>
            <Typography mb={1}>
              • Sự hợp tác, tôn trọng ý kiến và tập trung vào mục tiêu chung là
              những điểm mạnh của nhóm chúng mình. Chúng mình tin rằng bằng cách
              làm việc cùng nhau một cách hiệu quả, chúng mình sẽ đạt được những
              thành tựu đáng kể và cùng nhau tạo ra những trải
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Divider />
          </Grid>
          <Grid item md={4}>
            <Typography variant="h3">Công cụ sử dụng</Typography>
          </Grid>
          <Grid item md={8}>
            <Typography mb={1}>
              Trong quá trình làm việc nhóm, chúng mình đã sử dụng một loạt công
              cụ hữu ích để tạo sự hiệu quả và sự liên kết trong nhóm.
            </Typography>
            <Typography mb={1}>
              <Typography component="span" color="primary">
                Google Meet
              </Typography>{" "}
              đã giúp chúng mình dễ dàng tổ chức các cuộc thảo luận nhóm, từ
              việc thảo luận ý tưởng đến xem xét tiến độ công việc. Chúng mình
              đã sử dụng nền tảng này để duy trì sự liên lạc và cập nhật trực
              tiếp với nhau.
            </Typography>
            <Typography mb={1}>
              Cả{" "}
              <Typography component="span" color="primary">
                OneDrive và Google Drive
              </Typography>{" "}
              đã chơi một vai trò quan trọng trong việc lưu trữ dữ liệu liên
              quan đến môn học và đồ án. Chúng mình đã tận dụng tính năng chia
              sẻ để dễ dàng cùng nhau truy cập vào các tài liệu, bảng tính và
              tài liệu khác mọi lúc, mọi nơi. Điều này không chỉ giúp tiết kiệm
              thời gian mà còn đảm bảo rằng tất cả thông tin quan trọng được
              truyền đạt một cách đồng nhất trong nhóm.
            </Typography>
            <Typography mb={1}>
              <Typography component="span" color="primary">
                Messenger
              </Typography>{" "}
              cũng đã đóng vai trò quan trọng trong việc thảo luận và giao tiếp
              hàng ngày giữa các thành viên. Bằng cách sử dụng Messenger, chúng
              mình có thể nhanh chóng chia sẻ ý kiến, trao đổi thông tin cần
              thiết và giữ liên lạc trong thời gian thực.
            </Typography>
            <Typography mb={1}>
              Nhờ vào những công cụ này, chúng mình đã tạo nên một môi trường
              làm việc tích cực và hiệu quả, đồng thời thúc đẩy sự gắn kết và
              cộng tác trong nhóm.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Divider />
          </Grid>
          <Grid item md={4}>
            <Typography variant="h3">Kế hoạch thực hiện</Typography>
          </Grid>
          <Grid item md={8}>
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
