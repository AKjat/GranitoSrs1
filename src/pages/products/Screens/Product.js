import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Grid padding={5}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <img
            className="d-block w-100"
            src="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
            //   src={d.image}
            //   alt={d.name}
          />
          <CardContent>
            <Typography  variant="h6" component="div">
              Name
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions>
          <Button
            size="small"
            color="primary"
            component={Link}
            to="/product"
            variant="outlined"
            sx={{ width: "60vw" }}
          >
            Share
          </Button>
          <Button
            size="small"
            color="primary"
            component={Link}
            to="/product"
            variant="outlined"
            sx={{ width: "60vw" }}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
