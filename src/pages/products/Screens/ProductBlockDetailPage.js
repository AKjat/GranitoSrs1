import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Grid,
  Divider,
  Typography,
  Button,
  Collapse,
  Alert,
  IconButton,
  Skeleton,
  Container,
  Table,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ImagSelect from "../Components/ImagSelect";
import SpecialReqDialog from "../Components/SpecialReqDialog";
import Product from "../../../components/product/Product";
import { cartActions } from "../../../redux";
import { getProductBlockDetail } from "../Reducers/productBlockDetailReducer";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";
import ProductDetails from "../Components/ProductDetails";
import HomeImgCollections from "../../home/components/HomeImgCollections";

const useStyles = makeStyles((theme) => ({
  hideM: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  relatedBox: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.2),
    boxShadow:
      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

    "& .css-iqyuzw": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(1),
      borderColor: theme.palette.primary.main,
      borderLeftStyle: "solid",
      border: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
}));

const ProductBlockDetailPage = (props) => {
  let { id } = useParams();

  const dispatch = useDispatch();

  const costEstimate = useSelector((state) => state.transportEstimate.cost);

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const productname = useSelector((state) => state.productBlock);
  const product = useSelector((state) => state.productBlockDetail);
  React.useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getProductBlockDetail(id));
  }, [id]);

  return (
    <>
      <Box sx={{ marginLeft: "10px", marginRight: "10px" }}>
        <Box marginX={1} marginTop={2}>
          <Grid container marginTop={1}>
            <Grid item xs={12} lg={6} marginTop="10px">
              <ImagSelect product={product} loading={loading} />
            </Grid>
            <Grid item xs={12} lg={6} marginTop="10px">
              <ProductDetails
                product={productname}
                block={product}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} lg={12} marginTop="10px">
              <Box sx={{ backgroundColor: "#bbbb", height: 50 }}>
                <Typography padding={1}>
                  <h3>Related Products</h3>
                </Typography>
              </Box>
            </Grid>
            <HomeImgCollections />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductBlockDetailPage;
