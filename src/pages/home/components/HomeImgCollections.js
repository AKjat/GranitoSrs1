import { Grid, Typography } from "@mui/material";
import React from "react";
import ImgSlider from "./HomeImgSlider";

const HomeImgCollections = () => {
  return (
    <div>
      <Grid container columnSpacing={6}>
        <Grid item xs={12} sm={12} lg={4}>
          {/* <ImgSlider /> */}
          <img
            className="d-block w-100"
            src="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
            //   src={d.image}
            //   alt={d.name}
          />
          <Typography align="center">
            <b> Indian Marble </b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <img
            className="d-block w-100"
            src="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
            //   src={d.image}
            //   alt={d.name}
          />{" "}
          <Typography align="center">
            {" "}
            <b> Indian Marble </b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <img
            className="d-block w-100"
            src="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
            //   src={d.image}
            //   alt={d.name}
          />
          <Typography align="center">
            <b> Indian Marble </b>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} lg={4}>
          <img
            className="d-block w-100"
            src="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
            //   src={d.image}
            //   alt={d.name}
          />
          <Typography align="center">
            <b> Indian Marble </b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <img
            className="d-block w-100"
            src="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
            //   src={d.image}
            //   alt={d.name}
          />
          <Typography align="center">
            {" "}
            <b> Indian Marble </b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <img
            className="d-block w-100"
            src="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
            //   src={d.image}
            //   alt={d.name}
          />
          <Typography align="center">
            {" "}
            <b> Indian Marble </b>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeImgCollections;
