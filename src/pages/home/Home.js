import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Categ from "../../components/categlist/Categ";
import ProductCard from "../../components/product/ProductCard";
import ProductDialogue from "../../components/Ui/ProductDialogue";
import productDetails from "../../data/Details";
import HomeMain from "./HomeMain";
import CustomizedMenus from "../../components/Ui/MenuButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Home.css";
import Filterpage from "./filter/Filterpage";
import HomeCateg from "../../components/categlist/HomeCateg";
import HomeMenu from "../../components/categlist/HomeMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  // const [items, setItems] = useState(productDetails);

  // const handleCateg = (categ) => {
  //   const updatedItems = productDetails.filter((curElem) => {
  //     return curElem.type === categ;
  //   });  
  // };
 
  // props.handleCateg(handleCateg)
  // const handleCateg = (categ) => {
  //   const updatedItems = productDetails.filter((curElem) => {
  //     return curElem.type === categ;
  //   });
  //   setItems(updatedItems);
  // };
  // const handleAll = (cat) => {
  //   const pdetails = productDetails.filter((curElem) => {
  //     return curElem;
  //   });
  //   setItems(pdetails);
  // };

  return (
    
      
      <Box>
      <HomeMain  />
      </Box> 
  );
};

export default Home;
