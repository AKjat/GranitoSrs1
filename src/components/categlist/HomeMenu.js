import { AppBar, Box, Button, createTheme, Divider, Grid, Toolbar } from "@mui/material";
import { lightGreen, orange } from "@mui/material/colors";
import { makeStyles, ThemeProvider } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import HoverMenu from "../Ui/new/HoverMenu";
import { Link as LinkScroll } from "react-scroll";
const theme2 = createTheme({
  palette: {
    primary: {
      dark: orange[800],
      main: lightGreen["A700"],
      light: orange[300],
    },
    secondary: {
      dark: "#c2c2c2",
      main: "#fff",
      light: "#f0f0f0",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    height: "48px",
    width: "100%",
    backgroundColor: "#e59b0e",
  },
  button: {
    color: "white",
  },
  hide: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  scrollBtn: {
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: "0.875rem",
    lineHeight: "1.75",
    letterSpacing: "0.02857em",
    color: "white",
    "& a":{
        
    }
  },
}));
const HomeMenu = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme2}>
      <Box>
        <Grid
          className={classes.root}
          container
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={3} className={classes.hide}></Grid>
          <Grid item>
            <Button sx={{ color: "white" }} component={Link} to="/">
              Home
            </Button>
          </Grid>
          {/* <Divider orientation="vertical" variant="middle" sx={{height: "60% !important"}} flexItem/> */}
          <Grid item>
            <HoverMenu />
          </Grid>
          <Grid item >
              <Button sx={{ color: "white" }} component={Link} to="/contact">
              Contact
            </Button>
          </Grid>
          <Grid item className={classes.scrollBtn}>
          <LinkScroll
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              About Us
            </LinkScroll>
            {/* <Button sx={{ color: "white" }} component={Link} to="/about">
              About Us
            </Button> */}
          </Grid>
          <Grid item xs={3} className={classes.hide}></Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default HomeMenu;
