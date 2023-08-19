import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
  styled,
  IconButton,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CakeIcon from "@mui/icons-material/Cake";
import { useParams } from "react-router-dom";
import cover from "../../assets/img/bg-cover-products.jpg";
import avatar from "../../assets/img/default-avatar.png";
import TEAM_INFO from "../../contents/members";

const StyledChip = styled(Chip)({
  borderWidth: 3,
  marginRight: 15,
});

const Member = () => {
  const { id } = useParams();

  const [member] = TEAM_INFO.members.filter((m) => m.id === id);
  const [memberImg, setMemberImg] = useState("");

  useEffect(() => {
    import(`../../assets/img/${member.image}`).then((module) => {
      setMemberImg(module.default);
    });
  }, [setMemberImg, member]);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          textAlign: "right",
          p: [3, 9],
          marginBottom: -15,
        }}
      >
        <Typography variant="h3" color="white" maxWidth={440} marginLeft="auto">
          Cùng tìm hiểu thêm về các thành viên trong PoL nào.
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Avatar
          alt="khang"
          sx={{
            width: 200,
            height: 200,
            border: "5px solid",
            borderColor: "primary.main",
            backgroundColor: "white",
          }}
          src={memberImg === "" ? avatar : memberImg}
        />
        <Box mt={4}>
          <Grid container spacing={10}>
            <Grid item md={6}>
              <Typography fontWeight="bold" fontSize={30} mb={1}>
                {member.name}
              </Typography>
              <Stack direction="row" alignItems="flex-start">
                <CakeIcon
                  color="secondary"
                  fontSize="small"
                  sx={{ marginRight: 1 }}
                />
                <Typography variant="subtitle1">{member.birth}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <PlaceOutlinedIcon
                  color="secondary"
                  fontSize="small"
                  sx={{ marginRight: 1 }}
                />
                <Typography variant="subtitle1">{member.place}</Typography>
              </Stack>
              <Typography whiteSpace="pre-line">{member.detailDesc}</Typography>
              <Stack direction="row" alignItems="center" spacing={1} my={2}>
                <IconButton
                  LinkComponent="a"
                  target="_blank"
                  href={member.link.github}
                  sx={{ p: 0 }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  LinkComponent="a"
                  target="_blank"
                  href={member.link.github}
                  sx={{ p: 0 }}
                >
                  <CloudCircleIcon />
                </IconButton>
                <IconButton
                  LinkComponent="a"
                  target="_blank"
                  href={member.link.facebook}
                  sx={{ p: 0 }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  LinkComponent="a"
                  target="_blank"
                  href={member.link.youtube}
                  sx={{ p: 0 }}
                >
                  <YouTubeIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography variant="h5">Sở thích</Typography>
                <Box py={1}>
                  {member.hobby.map((h) => (
                    <StyledChip label={h} color="primary" variant="outlined" />
                  ))}
                </Box>
              </Box>
              <Box>
                <Typography variant="h5">Kỹ năng</Typography>
                <Box py={1}>
                  {member.skill.map((h) => (
                    <StyledChip label={h} color="primary" variant="outlined" />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Member;
