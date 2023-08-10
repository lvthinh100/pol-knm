import React from "react";
import { AppBar, Container, Toolbar, Box, Link, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";

import Logo from "../Logo";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", mb: 4 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo />
          <Box display="flex" flexGrow={1}>
            <Link component={RouterLink} to="/">
              <Button
                variant="text"
                color="secondary"
                startIcon={<AccessibleForwardIcon />}
              >
                About us
              </Button>
            </Link>
            <Link component={RouterLink} to="/">
              <Button
                variant="text"
                color="secondary"
                startIcon={<AccessibleForwardIcon />}
              >
                Production
              </Button>
            </Link>
            <Link component={RouterLink} to="/">
              <Button
                variant="text"
                color="secondary"
                startIcon={<AccessibleForwardIcon />}
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
