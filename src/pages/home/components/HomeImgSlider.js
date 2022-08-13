import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { productSearchActions } from "../../products/Reducers/productReducer";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";
import { getHomeSlider } from "../Reducers/HomeSliderReducer";

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

const ImgSlider = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true);

  const homeslider = useSelector((state) => state.homeSlider);

  useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getHomeSlider());
  }, []);

  return (
    <Box className={classes.root}>
      <Carousel>
        {homeslider?.slice(0,6).map((d, index) => (
          <Carousel.Item className={classes.imgB} key={d.id} interval={1000}>
            <img
              className="d-block w-100"
              // src="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
              src={d.image}
              alt={d.name}
              // height={500}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImgSlider;
