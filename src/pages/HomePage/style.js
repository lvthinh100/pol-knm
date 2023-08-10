import { styled, Box, Typography } from "@mui/material";

export const StyledIconBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: 50,
  height: 50,
  borderRadius: 15,
  "& svg": {
    color: "white",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: 7,
}));

export const StyledSectionHeader = styled(Typography)({});
