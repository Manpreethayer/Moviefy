import { React } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { colors } from "../../utils/Colors";



const navbarStyle = {
  background: `${colors.themeDarkPrimary}`,
  color: "#000",
};

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={navbarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, ${colors.primaryDarkColor}, ${colors.primaryColor})`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Moviefy
          </Typography>

          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, ${colors.primaryDarkColor}, ${colors.primaryColor})`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Moviefy
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
