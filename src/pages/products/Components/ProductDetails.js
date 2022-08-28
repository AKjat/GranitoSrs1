import React, {  } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import { Link } from "react-router-dom";

const ProductDetails = ({ product, block }) => {
  return (
    <>
      <Box overflow="hidden" margin={1}>
        <Box>
          <Typography variant="h5" gutterBottom>
            {product.product_name} ({block?.block_number})
          </Typography>
        </Box>

        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Box
              sx={{
                borderRadius: "100%",
                backgroundColor: "gainsboro",
                display: "inline-flex",
                padding: 1,
                alignItems: "center",
              }}
            >
              <CurrencyRupeeIcon sx={{ color: "green" }} />
              <Typography variant="h6" color="green">
                {block?.rate}
              </Typography>
            </Box>
          </Grid>

          <Grid display="flex" justifyContent="flex-end" item xs={8}>
            <Button variant="outlined" component={Link} to="/transportestimate">
              Transport Estimate
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          marginTop={1}
          spacing={3}
          direction="row"
          justifyContent="space-around"
          marginLeft={0}
          bgcolor="gainsboro"
        >
          <Grid
            item
            xs={4}
            justifyContent="center"
            sx={{ paddingLeft: "0 !important" }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              alignItems="center"
            >
              <Grid item>
                <CalendarViewWeekIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">Available pieces</Typography>
              </Grid>
              <Grid item>
                <Divider width="60px" light={true} />
              </Grid>
              <Grid item>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body1"> {block?.slabs}</Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ paddingLeft: "0 !important" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              alignItems="center"
            >
              <Grid item>
                <SquareFootIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">Square Feet</Typography>
              </Grid>
              <Grid item>
                <Divider width="40px" light={true} />
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {block?.square_feet} sq.ft
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ paddingLeft: "0 !important" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              alignItems="center"
            >
              <Grid item>
                <LineWeightIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1">Thickness</Typography>
              </Grid>
              <Grid item>
                <Divider width="40px" light={true} />
              </Grid>
              <Grid item>
                <Typography variant="body2">{block?.thickness} MM</Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" marginTop={2}>
          <Grid item xs={3}>
            <Typography sx={{ opacity: "0.7" }} variant="body1">
              Slab Length :{" "}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography marginLeft={1} variant="body1">
              {block?.slab_length}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container alignItems="center" marginTop={2}>
          <Grid item xs={3}>
            <Typography sx={{ opacity: "0.7" }} variant="body1">
              Slab Height :{" "}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography marginLeft={1} variant="body1">
              {block?.slab_height}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container alignItems="center" marginTop={2}>
          <Grid item xs={3}>
            <Typography sx={{ opacity: "0.7" }} variant="body1">
              Usage :{" "}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography marginLeft={1} variant="body1">
              Counter/Vanity Top, Flooring, Cladding, Marble Handicrafts,
              Swimming Pool Areas, Bathroom Walls & Floors, Fireplace Walls,
              External & Internal Aids In Construction
            </Typography>
          </Grid>
        </Grid>

        <Divider />
      </Box>
      <Grid display="flex" justifyContent="flex-end">
        <Button variant="outlined" component={Link} to="/product">
          Back To Products
        </Button>
      </Grid>
    </>
  );
};

export default ProductDetails;
