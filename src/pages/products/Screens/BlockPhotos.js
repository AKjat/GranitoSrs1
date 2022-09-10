import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import "./BlockPhotos.css";

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
  // backgroundImage:{
  //   backgroundImage:
  // }
}));

const BlockPhotos = ({ product }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Carousel>
        {product?.blocks?.map((block, index) => (
          <Carousel.Item className={classes.imgB} key={index} interval={1000}>
            <div style={{ height: "300px" }}>
              <div
                class="image-box"
                style={{
                  backgroundImage: `url(${block?.block_photos[0]?.website_media})`,
                  zIndex: -1,
                }}
              >
                {" "}
              </div>
              <div>
                <img
                  className="d-block w-100"
                  src={block?.block_photos[0]?.website_media}
                  style={{
                    objectFit: "contain",
                    top: 0,
                    left: 0,
                    position: "absolute",
                  }}
                  height={300}
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default BlockPhotos;
