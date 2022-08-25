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
import { getproduct } from "../../products/Reducers/ProductReducer";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";
import { getProductBlockDetail } from "../../products/Reducers/productBlockReducer";

const HomeImgCollections = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products);
  React.useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getproduct());
  }, []);

  return (
    <div>
      <Grid container columnSpacing={6}>
        {product?.slice(0, 6).map((product, index) => (
          <Grid item xs={12} sm={12} lg={4}>
            <Link to={`/product_block_page/${product.id}`}>
              <BlockPhotos product={product} />
            </Link>
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
