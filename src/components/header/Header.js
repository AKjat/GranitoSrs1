import React from "react";
// import SearchAppBar from "./search/SearchSection";
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import MobileAppbar from "../mobileNavigation/MobileAppbar";


import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../pages/login/Reducers/loginSlice";
import MobileAppbarRight from "../mobileNavigation/MobileAppbarRight";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      height: "70px",
    },
    [theme.breakpoints.up("md")]: {
      height: "80px",
    },
  },
  hide: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  hideD: {
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logoBox: {
    [theme.breakpoints.down("md")]: {
      height: "40px",
    },
    [theme.breakpoints.up("md")]: {
      height: "60px",
    },
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "contain",
    },
  },
}));
const Header = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.login.loggedUser);
  console.log("fssdvLOOOG", loggedUser);
  const totalCartItems = useSelector((state) => state.cart.totalQuantity);

  const handleLogout = () => {
    dispatch(logOut());
  };

  const filterItem = (Categ) => {
    props.handleCateg(Categ);
    console.log(Categ);
  };
  const filterIte = (cat) => {
    props.handleAll(cat);
  };

  return (
    <AppBar elevation={5} color="secondary" position="sticky">
      <Toolbar className={classes.root}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2} className={classes.hideD}>
            <MobileAppbar  handleLogout={handleLogout} />
          </Grid>
          <Grid component={Link} to="/" item xs={3} sm={3} md={2} lg={3}>
            <Box className={classes.logoBox}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" ,justifyContent:'center'}}
                src="/img/logo/logo1.png"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={2} className={classes.hideD}>
            <MobileAppbarRight  handleLogout={handleLogout} />
          </Grid>
          <Grid
            xs={9}
            lg={6}
            container
            justifyContent="space-around"
            alignItems="center"
            item
          >
            {/* <Grid className={classes.hide} item xs={1} lg={1}>
              <Box>
                <Button
                  id="home"
                  color="primary"
                  component={Link}
                  to="/"
                  className={classes.items}
                >
                  Home
                </Button>
              </Box>
            </Grid> */}
            <Grid className={classes.hide} item xs={1} lg={1}>
              <Box color='primary'>
                {/* <HoverMenu filterItem={filterItem} filterIte={filterIte} /> */}
                <Button
                  id="about"
                  className={classes.items}
                  component={Link}
                  to="/product"
                >
                  Products
                </Button>
              </Box>
            </Grid>
            {/* <Grid className={classes.hide} item xs={1} lg={1}>
              <Box>
                <Button
                  id="about"
                  color="primary"
                  className={classes.items}
                  component={Link}
                  to="/about"
                >
                  About
                </Button>
              </Box>
            </Grid> */}
            {/* <Grid className={classes.hide} item xs={1} lg={1}>
              <Box>
                <Button
                  id="home"
                  color="primary"
                  component={Link}
                  to="/blog"
                  className={classes.items}
                >
                  Blog
                </Button>
              </Box>
            </Grid> */}
            <Grid className={classes.hide} item xs={1} lg={2}>
              <Box>
                <Button
                  id="home"
                  color="primary"
                  component={Link}
                  to="/contact"
                  className={classes.items}
                >
                  Contact-Us
                </Button>
              </Box>
            </Grid>
          </Grid>
          
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
