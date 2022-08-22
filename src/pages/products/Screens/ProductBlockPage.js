import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../Reducers/ProductR";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";

const useStyles = makeStyles((theme) => ({
  imgB: {
    objectFit: "contain",
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

const ProductBlockPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products);
  React.useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getproduct());
  }, []);

  return (
    <Box className={classes.root}>
      <Carousel>
        {product?.blocks?.map((block, index) => (
          <Carousel.Item className={classes.imgB} key={index} interval={1000}>
            <img
              className="d-block w-100"
              src={`https://easystone.in/api/whatsapp_media/${block.block_photos[0].media_id}/${block.block_photos[0].fileName}`}
              height={250}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProductBlockPage;
