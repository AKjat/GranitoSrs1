import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { productSearchActions } from "../../products/Reducers/productReducer";

const useStyles = makeStyles((theme) => ({
  imgB: {
    objectFit: "cover",
  },
  capitalize: {
    textTransform: "uppercase",
  },
  root: {
    marginTop: theme.spacing(1),
  },
  textBox: {
    backgroundColor: "rgba(144, 143, 144, 0.51)",
    borderRadius: "20px 20px 0 0",
    padding: theme.spacing(1),
  },
}));

const ImgSlider = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleProductsClick = () => {
    dispatch(productSearchActions.clearSearch());
  };
  return (
    <Box className={classes.root}>
      <Carousel>
        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/SliderHome/01.jpg"
            alt="First slide"
            height={500}
          />
        </Carousel.Item>

        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/SliderHome/02.jpg"
            alt="Second slide"
            height={500}
          />
        </Carousel.Item>

        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/SliderHome/03.jpg"
            alt="Third slide"
            height={500}
          />
        </Carousel.Item>
                <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/SliderHome/04.jpg"
            alt="First slide"
            height={500}
          />
        </Carousel.Item>

        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/SliderHome/05.jpg"
            alt="Second slide"
            height={500}
          />
        </Carousel.Item>

        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/SliderHome/02.jpg"
            alt="Third slide"
            height={500}
          />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default ImgSlider;
