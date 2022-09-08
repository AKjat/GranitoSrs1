import { AppBar, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
const useStyles = makeStyles((theme) => ({
  mobileView: {
    // position: 'fixed',
    // backgroundColor: '#fff',
    // bottom: '0',
    // left: '0',
    // width: '100%',
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const MobileAppbarRight = () => {
  const classes = useStyles();
  return (
    <div className={classes.mobileView}>
      <a href="tel:+91-95715 10000" aria-setsize={1}>
        <CallIcon color="primary" fontSize="medium" />
      </a>
    </div>
  );
};

export default MobileAppbarRight;
