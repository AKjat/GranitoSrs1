import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
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
import ShareIcon from "@mui/icons-material/Share";
import ProductHeader from "../Components/ProductHeader";
import { getProductCount } from "../Reducers/ProductCount";

const Product = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products);
  const productCount = useSelector((state) => state.productCount);
  const block = useSelector((state) => state.productBlock);

  // const link = `${d.blocks.block_photos.media_id}`
  React.useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getProductCount());
    dispatch(getproduct());
    
  }, []);
  console.log(productCount,'jshdsdgysgdysggggggggggdg')
  return (
    <>
    <ProductHeader/>
      <Grid container>
        {product?.map((product, index) => (
          <Grid item padding={1} xs={12} sm={12} lg={4}>
            <Card>
              <CardActionArea
                component={Link}
                to={`/product_block_page/${product.id}`}
              >
                <BlockPhotos product={product} />
              </CardActionArea>
              <CardContent>
                <Grid container>
                  <Grid item xs={9} md={9} lg={9}>
                    <Typography variant="h6" component="div">
                      <b>{product.product_name}</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={3} md={3} lg={3}>
                    <RWebShare
                      data={{
                        text: "Visit to us Shree Ram Stone, walaaa Habibiii",
                        url: "https://shreeramstone.co/product/",
                        title: "Share",
                      }}
                      onClick={() => console.log("shared successfully!")}
                    >
                      <Button size="small" color="primary" variant="contained">
                        <ShareIcon />
                      </Button>
                    </RWebShare>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Product;
