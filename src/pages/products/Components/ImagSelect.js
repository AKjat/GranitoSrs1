import { Box, Grid, Skeleton, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
// import ReactImageMagnify from 'react-image-magnify';

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
  // const images = product?.images
  // const firstImage = images?images[0]?.image:null

  // const [src, setsrc] = useState("");
  // useEffect(() => {
  //   setsrc(firstImage)
  // }, [firstImage]);

  // const imgClick =(url)=>{
  //     setsrc(url)
  // }

  const classes= useStyles();
  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item>
        {/*  {loading ? (
          <Skeleton variant="rectangular" height={200}></Skeleton>
        ) : (*/}
        <Box>
          <img
            src={`https://easystone.in/api/whatsapp_media/${product?.block_photos?.[0]?.media_id}/${product?.block_photos?.[0]?.fileName}`}
            height={"100%"}
            width={"100%"}
            alt=""
          />
        </Box>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          {/* {!loading && (
            <Stack direction="row">
              {" "}
              <Skeleton height={50} variant="rectangular"></Skeleton>
              <Skeleton variant="rectangular" height={50}></Skeleton>
              <Skeleton variant="rectangular" height={50}></Skeleton>
            </Stack>
          )} */}
          {product?.block_photos?.map((block, index) => (
            <Grid item>
              <img
                // onMouseOver={() => imgClick()}
                src={`https://easystone.in/api/whatsapp_media/${block?.media_id}/${block?.fileName}`}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImagSelect;
