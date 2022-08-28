import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
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

const ImagSelect = ({ product}) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item>
        
        <Carousel>
        {product?.block_photos?.map((block, index) => (
          <Carousel.Item className={classes.imgB} key={index} interval={1000}>
            <img
              className="d-block w-100"
              src={`https://easystone.in/api/whatsapp_media/${block?.media_id}/${block?.fileName}`}
              // height={250}
              style={{ objectFit: "fill", height: 300, width: 500 }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      </Grid>
      {/* <Grid item>
        <Grid container spacing={1}>
          {product?.block_photos?.map((block, index) => (
            <Grid item>
              <img
                // onMouseOver={() => imgClick()}
                src={`https://easystone.in/api/whatsapp_media/${block?.media_id}/${block?.fileName}`}
                style={{ objectFit: "cover", height: 300, width: 500 }}
                // height={200}
              />
            </Grid>
          ))}
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default ImagSelect;
