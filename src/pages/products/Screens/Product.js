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
import "../Components/productHeader.css";
import LoadingSpinner from "../../Loader/LoadingSpinner";
import { WindowSharp } from "@mui/icons-material";
import { saveWebsiteForm } from "../../../redux/reducers/WebsiteDataSave";
import { WebsiteFormActions } from "../../../redux/reducers/WebsiteDataReducer";

const Product = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products);
  const productCount = useSelector((state) => state.productCount);
  const block = useSelector((state) => state.productBlock);
  const refresing = useSelector((state) => state.refreshing);

  React.useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getProductCount());
    dispatch(getproduct());
    const array = window.location.href.split("/");
    const product = array[array.length - 2];
    const name = product == "product_block_page" ? "product" : "block";
    dispatch(WebsiteFormActions.setWebsite({ name: name, value: array.pop() }));
    dispatch(saveWebsiteForm());
  }, []);
  const loc = window.location.href;

  return (
    <>
      <ProductHeader />
      {refresing == true ? (
        <LoadingSpinner />
      ) : (
        <Grid container>
          {product?.map((product, index) => (
            <Grid item padding={1} xs={12} sm={12} lg={4}>
              <Card style={{ boxShadow: " 3px 3px 5px #feb74d" }}>
                <CardActionArea
                  component={Link}
                  to={`/product_block_page/${product.id}`}
                  className="products"
                >
                  <BlockPhotos product={product} />
                </CardActionArea>
                <CardContent
                  sx={{
                    padding: "5px !important",
                    paddingBottom: "5px !important",
                  }}
                >
                  <Grid container>
                    <Grid item xs={9} md={9} lg={9}>
                      <Typography
                        variant="h6"
                        component="div"
                        className="Product-header"
                        sx={{
                          textAlign: "left !important",
                        }}
                      >
                        <b>{product.product_name}</b>
                      </Typography>
                      <Typography
                        // variant="h6"
                        component="div"
                        className="Box-body"
                        sx={{
                          textAlign: "left !important",
                        }}
                      >
                        Slabs | Block
                      </Typography>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                      <RWebShare
                        data={{
                          text: "Visit to Shree Ram Stone & Co.",
                          url: loc,
                          title: "Share",
                        }}
                        onClick={() => console.log("shared successfully!")}
                      >
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                        >
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
      )}
    </>
  );
};

export default Product;
