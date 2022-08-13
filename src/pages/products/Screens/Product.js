import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";

const Product = () => {
  return (
    <Grid container>
      <Grid item>
        <Card container sx={{ maxWidth: 345 }}>
          <CardActionArea>
            {/* <CardMedia
              component="img"
              height="140"
              image="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
              alt="green iguana"
            /> */}
            <img
            className="d-block w-100"
            src="https://easystone.in/api/whatsapp_media/62ef5682e8fc537f048760fa/5ECB7816E37C22486AD3.jpeg"
            //   src={d.image}
            //   alt={d.name}
          />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Product;
