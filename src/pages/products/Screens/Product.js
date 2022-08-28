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
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";
import { getproduct } from "../Reducers/ProductReducer";
import BlockPhotos from "./BlockPhotos";
import { RWebShare } from "react-web-share";


const Product = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products);
  // const link = `${d.blocks.block_photos.media_id}`
  React.useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getproduct());
  }, []);

  return (
    <Grid container>
      {product?.map((product, index) => (
        <Grid item padding={5} xs={12} sm={12} lg={4}>
          <Card>
            <CardActionArea component={Link} to={`/product_block_page/${product.id}`}>
              <BlockPhotos product={product}/>
              <CardContent>
                <Typography variant="h6" component="div" align="center">
                  <b>{product.product_name}</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions>
            <RWebShare
                  data={{
                    text: "Visit to us Shree Ram Stone, walaaa Habibiii",
                    url: "https://shreeramstone.co/product/",
                    title: "Share",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ width: "60vw" }}
                  >
                    Share
                  </Button>
                </RWebShare>
              <Button
                size="small"
                color="primary"
                component={Link}
                to={`/product_block_page/${product.id}`}
                variant="outlined"
                sx={{ width: "60vw" }}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;
