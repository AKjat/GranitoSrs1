import React from "react";
// import SearchAppBar from "./search/SearchSection";
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Tooltip,
  IconButton,
  Badge,
  ThemeProvider,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import MobileAppbar from '../mobileNavigation/MobileAppbar';

import NewSearch from "./search/NewSearch";

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useDispatch, useSelector } from "react-redux";
import PhoneIcon from '@mui/icons-material/Phone';
import { loginActions, logOut } from "../../redux/reducers/loginSlice";
import ProfileMenu from './profileMenu/Menu'


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
      objectFit: "contain"
    }
  }
}));
const Header = () => {
  // const isLoggedIn = useSelector(state=>state.login.isloggedIn)
  const classes = useStyles();
  const dispatch = useDispatch()
  const loggedUser = useSelector(state=>state.login.loggedUser)
  console.log("fssdvLOOOG", loggedUser)
  const totalCartItems = useSelector(state=> state.cart.totalQuantity)
  
  const handleLogout =() => {
      dispatch(logOut())
  }
  return (
    <AppBar elevation={5} color="secondary" position="sticky">
      <Toolbar className={classes.root}>
        <Grid
          container
          spacing={2}
          // sx={{ innerHeight: "100px" }}
          // container
          // flexDirection='row'
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2} className={classes.hideD}>
              <MobileAppbar loggedUser={loggedUser} handleLogout={handleLogout} />
          </Grid>
          <Grid component={Link} to="/" item xs={3} sm={3} md={2}  lg={1}>
            <Box className={classes.logoBox}>
            <img style={{height: "100%", width: "100%", objectFit: "contain"}} src="/img/logo/logo1.png" alt="" />
            </Box>
          </Grid>
          <Grid item   xs={3} sm={3} md={3} lg={4}>
            <Box>
              {/* <SearchAppbar/> */}
            {/* <SearchSection /> */}
            <NewSearch/>
              {/* <SearchBar/> */}
            </Box>
          </Grid>

          <Grid className={classes.hide} item xs={1} lg={1}>
            <Box>
              {loggedUser? 
                // <Button
                //   variant="contained"
                //   color="primary"
                //   size="small"
                //   onClick={handleLogout}
                //   endIcon={<PersonIcon />}
                // >
                //   Logout
                // </Button> 
                <ProfileMenu loggedUser={loggedUser} handleLogout={handleLogout}/>
                :
                  <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  color="primary"
                  size="small"
                  endIcon={<PersonIcon />}
                >
                  Login
                </Button>
              }
            </Box>
          </Grid>
          <Grid className={classes.hide} item xs={1} lg={1}>
              <Box>
                <Badge badgeContent={totalCartItems} color="primary">
                {/* { isLoggedIn?  */}
                <Button
                component={Link}
                to="/cart"
                size="small"
                variant="outlined"
                endIcon={<LocalShippingIcon />}
              >
                Truck
                </Button>
                {/* :<Button
                component={Link}
                to="/login"
                size="small"
                variant="outlined"
                endIcon={<LocalShippingIcon />}
              >
                Truck
                </Button>} */}
                </Badge>
              </Box>
            </Grid> 
          
          <Grid item xs={2}  marginRight={1} >
                <Box className={classes.hide}>
                <Button  variant="outlined" startIcon={<PhoneIcon/>} size="small">Call Now</Button>
                </Box>
                <Box  className={classes.hideD}>
                <IconButton color="primary" ><PhoneIcon/></IconButton>
                </Box>
            </Grid>

         
        </Grid>
        {/* <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
