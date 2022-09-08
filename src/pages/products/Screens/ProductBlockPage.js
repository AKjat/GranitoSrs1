import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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
import {
  getProductBlock,
  productBlockActions,
} from "../Reducers/productBlockReducer";
import { RWebShare } from "react-web-share";
import ShareIcon from "@mui/icons-material/Share";
import "../Components/productHeader.css";
import LoadingSpinner from "../../Loader/LoadingSpinner";

import LineWeightIcon from "@mui/icons-material/LineWeight";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";

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
  const refresing = useSelector((state) => state.refreshing);
  const thickness = useSelector((state) => state.productBlockDetail);


  React.useEffect(() => {
    dispatch(productBlockActions.clearProductBlock());
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getProductBlock(id));
  }, [id]);

  const loc = window.location.href;
  return (
    <>
      <Box>
        <img
          className="d-block w-100"
          src={product?.image}
          sx={{ objectFit: "contain" }}
        />
      </Box>
      <Box margin={2}>
        <Typography alignItems={"stretch"}>{product?.description}</Typography>
      </Box>
      {refresing == true ? (
        <LoadingSpinner />
      ) : (
        <Grid container>
          {product?.blocks?.map((block, index) => (
            <Grid item padding={2} xs={12} sm={12} lg={4}>
              <Card>
                <CardActionArea
                  component={Link}
                  to={`/product_block_detail_page/${block.id}`}
                >
                  {/* <BlockPhotos product={product}/> */}
                  <img
                    className="d-block w-100"
                    // src={`https://easystone.in/api/whatsapp_media/${block?.block_photos[0]?.media_id}/${block?.block_photos[0]?.fileName}`}
                    // height={300}
                    src={block?.block_photos[0]?.website_media}
                    style={{ objectFit: "contain", height: 300 }}
                  />
                </CardActionArea>
                <Divider />
                <CardContent
                  sx={{
                    padding: "1px !important",
                    paddingBottom: "1px !important",
                  }}
                >
                  <Grid container>
                    <Grid item xs={9} md={9} lg={9}>
                      <Typography variant="button" className="Product-detail">
                        Block No. = <b>{block?.block_number}</b>
                      </Typography>
                      
                      {/* <Typography variant="button" className="Product-detail">
                        Slabs = <b>{block?.slabs}</b>
                      </Typography> */}
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
                  <Grid
                    container
                    marginTop={1}
                    // spacing={3}
                    direction="row"
                    justifyContent="space-around"
                    // marginLeft={0}
                    bgcolor="gainsboro"
                  >
                    <Grid
                      item
                      xs={4}
                      justifyContent="center"
                      sx={{ paddingLeft: "0 !important" }}
                    >
                      <Box
                        sx={{ display: "flex", flexDirection: "column" }}
                        alignItems="center"
                      >
                        <Grid item>
                          <CalendarViewWeekIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">No. of Slabs</Typography>
                        </Grid>
                        <Grid item>
                          <Divider width="60px" light={true} />
                        </Grid>
                        <Grid item>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography variant="body1">
                              {" "}
                              {block?.slabs}
                            </Typography>
                          </Box>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ paddingLeft: "0 !important" }}>
                      <Box
                        sx={{ display: "flex", flexDirection: "column" }}
                        alignItems="center"
                      >
                        <Grid item>
                          <SquareFootIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">Size</Typography>
                        </Grid>
                        <Grid item>
                          <Divider width="40px" light={true} />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">
                            {block?.slab_length} X {block?.slab_height}
                          </Typography>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ paddingLeft: "0 !important" }}>
                      <Box
                        sx={{ display: "flex", flexDirection: "column" }}
                        alignItems="center"
                      >
                        <Grid item>
                          <LineWeightIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">Thickness</Typography>
                        </Grid>
                        <Grid item>
                          <Divider width="40px" light={true} />
                        </Grid>
                        <Grid item>
                          <Typography variant="body2">
                            {thickness?.block_thickness} MM
                          </Typography>
                        </Grid>
                      </Box>
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

export default ProductBlockPage;
