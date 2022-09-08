import { Divider, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


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
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item margin={1} xs={10} md={10} lg={5}>
          {product?.block_photos?.map((block, index) => (
            <div>
              <img
                className="d-block w-100"
                // src={`https://easystone.in/api/whatsapp_media/${block?.media_id}/${block?.fileName}`}
                src={block?.website_media}
                style={{ objectFit: "contain" }}
              />
              <Divider sx={{margin:2}}/>

              {/* <video
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
                  </video> */}
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductBlockDetailPage;
