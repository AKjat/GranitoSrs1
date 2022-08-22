import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BlockPhotos from "../../products/Screens/BlockPhotos";
import { getproduct } from "../../products/Reducers/ProductR";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";

const HomeImgCollections = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products);
  // const link = `${d.blocks.block_photos.media_id}`
  React.useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getproduct());
  }, []);
  return (
    <div>
      <Grid container columnSpacing={6}>
        {product?.slice(0, 6).map((product, index) => (
          <Grid item xs={12} sm={12} lg={4}>
            <a href="/product">
              <BlockPhotos product={product} />
            </a>
            <Typography align="center">
              <b> {product.product_name} </b>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeImgCollections;
