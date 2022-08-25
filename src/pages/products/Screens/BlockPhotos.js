import React, {  } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";


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

const BlockPhotos = ({ product }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Carousel>
        {product?.blocks?.map((block, index) => (
          <Carousel.Item className={classes.imgB} key={index} interval={1000}>
            <img
              className="d-block w-100"
              src={`https://easystone.in/api/whatsapp_media/${block?.block_photos[0]?.media_id}/${block?.block_photos[0]?.fileName}`}
              height={250}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default BlockPhotos;
