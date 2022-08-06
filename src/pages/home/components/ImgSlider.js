import React from "react";
import {Link} from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../products/Reducers/filterSlice";

const useStyles = makeStyles((theme) => ({
  imgB: {
    objectFit: "cover",
  },
  capitalize: {
    textTransform: 'uppercase'
  },
  root: {
    marginTop: theme.spacing(1)
  },
  textBox: {
    backgroundColor: "rgba(144, 143, 144, 0.51)",
    borderRadius: "20px 20px 0 0",
    padding: theme.spacing(1), 
  }
}));

const ImgSlider = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const handleProductsClick = () => {
    dispatch(filterActions.remAllSearches())
  }
  return (
    <Box className={classes.root}>
      <Carousel>
        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/product/NewGold/1.jpg"
            alt="First slide"
            height={400}
          />
          <Carousel.Caption className={classes.textBox}>
            <Grid container alignItems='center' justifyContent='space-between' spacing={1} >
              <Grid item>
            <p className={classes.capitalize}>An Excellence that realizes dreams</p>
            <h1 className={classes.capitalize}> Always in the pursuit of the Impossible </h1>
              </Grid>
              <Grid item>
                <Button variant="contained"  LinkComponent={ Link } to='/products' onClick={handleProductsClick}> See Our Products </Button>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/product/alaskagold/1.jpg"
            alt="Second slide"
            height={400}
          />
          <Carousel.Caption className={classes.textBox}>
          <Grid container alignItems='center' justifyContent='space-between' spacing={1} >
              <Grid item>
            <p className={classes.capitalize}>The most astonishing materials in unusual colours & designs </p>
            <h1 className={classes.capitalize}> Witness Mother nature's finest creations </h1>
              </Grid>
              <Grid item>
                <Button variant="contained" LinkComponent={ Link } to='/products' onClick={handleProductsClick}> See Our Products </Button>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/product/red/1.jpg"
            alt="Third slide"
            height={400}
          />
          <Carousel.Caption className={classes.textBox}>
          <Grid container alignItems='center' justifyContent='space-between' spacing={1} >
              <Grid item>
              <p className={classes.capitalize}>
              Celebrate the luxury of nature and timeless legacy with our natural stone collection
            </p>
            <h1 className={classes.capitalize}>The Bliss of nature with a dash of splendor</h1>
              </Grid>
              <Grid item>
                <Button variant="contained" LinkComponent={ Link } to='/products' onClick={handleProductsClick}> See Our Products </Button>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </Box>
  );
};

export default ImgSlider;
