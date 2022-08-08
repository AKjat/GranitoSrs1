import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import axios from "axios";
import ImgSlider from "../components/ImgSlider";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
  },
  tagBox: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.2),
    boxShadow:
      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

    "& .tag_heading": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(1),
      // borderRadius: theme.spacing(1),
      borderColor: theme.palette.primary.main,
      borderLeftStyle: "solid",
      border: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
}));

function Home(props) {
  const [mostDemanding, setMostDemanding] = React.useState([]);
  const [newArrival, setNewArrival] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  const classes = useStyles();
  return (
    <Box marginTop={0.05}>
      {/* <Slide/> ---> landing Page Slider with play and pause */}
      <ImgSlider />
    </Box>
  );
}

export default Home;
