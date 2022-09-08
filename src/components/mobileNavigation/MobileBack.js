import { makeStyles } from "@mui/styles";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  mobileView: {
    position: "fixed",

    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const MobileBack = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div
      style={{ paddingBottom: "10px !important" }}
      className={classes.mobileView}
    >
      <Button
        sx={{ padding: "20px" }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon color="primary" />
      </Button>
    </div>
  );
};

export default MobileBack;
