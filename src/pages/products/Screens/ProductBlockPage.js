import React from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  CardActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";
import { getProductBlock } from "../Reducers/productBlockReducer";
import { RWebShare } from "react-web-share";

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
  let { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productBlock);
  React.useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getProductBlock(id));
  }, [id]);

  return (
    <>
      <Box>
        <img
          className="d-block w-100"
          src={product?.image}
          // src="\img\SliderHome\alaskaWhite.jpg"
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <Box margin={5}>
        <Typography alignItems={"stretch"}>{product?.description}</Typography>
      </Box>
      <Grid container>
        {product?.blocks?.map((block, index) => (
          <Grid item padding={5} xs={12} sm={12} lg={6}>
            <Card>
              <CardActionArea
                component={Link}
                to={`/product_block_detail_page/${block.id}`}
              >
                {/* <BlockPhotos product={product}/> */}
                <img
                  className="d-block w-100"
                  src={`https://easystone.in/api/whatsapp_media/${block?.block_photos[0]?.media_id}/${block?.block_photos[0]?.fileName}`}
                  height={300}
                />
                <CardContent>
                  <Grid container>
                    <Grid item xs={12} sm={12} lg={6}>
                      <Typography variant="h6">
                        Block No. = <b>{block?.block_number}</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <Typography variant="h6">
                        Slabs = <b>{block?.slabs}</b>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
              <Divider />
              
              <CardActions>
                <RWebShare
                  data={{
                    text: "Visit to Shree Ram Stone & Co. and Become our new Family",
                    url: "https://shreeramstone.co/product_block_page/",
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
                  to="/product_block_detail_page/hye"
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
    </>
  );
};

export default ProductBlockPage;
