import React from "react";
import { AppBar, Container, Toolbar, Box, Link, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Logo from "../Logo";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", mb: 4 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo />
          <Box display="flex" flexGrow={1} marginLeft={1}>
            <Link component={RouterLink} to="/">
              <Button variant="text" color="secondary" startIcon={<HomeIcon />}>
                Home
              </Button>
            </Link>
            <Link component={RouterLink} to="/about">
              <Button variant="text" color="secondary" startIcon={<InfoIcon />}>
                About us
              </Button>
            </Link>
            <Link component={RouterLink} to="/document">
              <Button
                variant="text"
                color="secondary"
                startIcon={<TextSnippetIcon />}
              >
                Documents
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
