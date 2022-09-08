import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {  } from "react";

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
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item xs={12} md={12} lg={6}>
        <Grid item>
          <Carousel controls={false}>
            {product?.block_photos?.map((block, index) => (
              <Carousel.Item
                className={classes.imgB}
                key={index}
                interval={50000}
                
              >
                {block?.mimetype == "image/jpeg" ? (
                  <img
                    className="d-block w-100"
                    // src={`https://easystone.in/api/whatsapp_media/${block?.media_id}/${block?.fileName}`}
                    src={block?.website_media}
                    style={{ objectFit: "contain", height: 300 }}
                  />
                ) : (
                  <video
                    controls
                    autoplay
                    style={{ objectFit: "contain", height: 300, width: 350 }}
                  >
                    <source
                      // src={`https://easystone.in/api/whatsapp_media/${block?.media_id}/${block?.fileName}`}
                      src={block?.website_media}
                      type="video/mp4"
                      style={{ objectFit: "contain", height: 300 }}
                    ></source>
                  </video>
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImagSelect;
