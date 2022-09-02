import { Box, Grid, ImageList } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import VideoURL from "../../home/components/VideoURL";
// import ReactImageMagnify from 'react-image-magnify';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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

const ImagSelect = ({ product }) => {
  const images = product?.block_photos?.map((block, index) => {
    // {block?.mimetype == "image/jpeg" ? ('g'):('a')}
    return {
      original: `https://easystone.in/api/whatsapp_media/${block?.media_id}/${block?.fileName}`,
      thumbnail: `https://easystone.in/api/whatsapp_media/${block?.media_id}/${block?.fileName}`,
    };
  });

  const renderItem = (item) => {
    if (item.original.split(".").pop() == "mp4") {
      return (
        <video
          controls
          autoplay
          style={{ objectFit: "fill", height: 300, width: 600 }}
        >
          <source
            src={item.original}
            type="video/mp4"
          ></source>
        </video>
      );
    } else {
      return (
        <img
          src={item.original}
          style={{ objectFit: "fill", height: 300, width: 600 }}
        />
      );
    }
  };

  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      
      <Grid item>
        <ImageGallery items={images} renderItem={renderItem} />
      </Grid>
    </Grid>
  );
};

export default ImagSelect;
