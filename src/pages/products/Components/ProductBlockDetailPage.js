import { Divider, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./productHeader.css";

const useStyles = makeStyles((theme) => ({
  boxImgSm: {
    [theme.breakpoints.down("md")]: {
      height: "25vh !important",
    },
    [theme.breakpoints.up("md")]: {
      height: "55vh !important",
    },
  },
  boxImgBig: {
    zIndex: "1000",
  },
  imgList: {
    "& img": {
      cursor: "pointer",

      opacity: "0.6",
      [theme.breakpoints.down("md")]: {
        height: 40,
      },
      [theme.breakpoints.up("md")]: {
        height: 50,
      },
    },
    "& img:hover": {
      opacity: "1",
    },
  },
}));

const ProductBlockDetailPage = ({ product }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" spacing={1}>
        {product?.block_photos?.map((block, index) => (
          <Grid item xs={12} md={12} lg={4}>
            {block?.website_media?.split(".").pop() == "mp4" ? (
              <div>
                <video autoplay="true" loop="true"  controls="true"  className="d-block w-100">
                  <source src={block?.website_media} type="video/mp4"></source>
                </video>
              </div>
            ) : (
              <div >
                <img
                  className="d-block w-100"
                  // src={`https://easystone.in/api/whatsapp_media/${block?.media_id}/${block?.fileName}`}
                  src={block?.website_media}
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductBlockDetailPage;
