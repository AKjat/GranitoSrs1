import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ImgSlider from "../components/HomeImgSlider";

import HomeImgCollections from "../components/HomeImgCollections";
import VideoURL from "../components/VideoURL";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
  },
  tagBox: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.2),
    boxShadow:
      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
 
    "& .tag_heading": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(1),
      // borderRadius: theme.spacing(1),
      borderColor: theme.palette.primary.main,
      borderLeftStyle: "solid",
      border: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
  hover: {
    "&:hover": {
      backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
  },
}));

function Home(props) {
  const [mostDemanding, setMostDemanding] = React.useState([]);
  const [newArrival, setNewArrival] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get(`products/`).then((response) => {
      const allproducts = response.data.results;
      console.log(allproducts);
      setMostDemanding(
        allproducts.filter((d) => d.tag.name === "Most Demanding")
      );
      setNewArrival(allproducts.filter((d) => d.tag.name === "Newly Arrival"));
      setLoading(false);
    });
  };
  const classes = useStyles();

  return (
    <Box marginTop={0.05}>
      <ImgSlider />
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button
          component={Link}
          to="/product"
          variant="outlined"
          sx={{ width: "60vw" }}
        >
          <Typography> View Our Collections</Typography>
        </Button>
      </Stack>
      <Grid padding={3}>
        <div>
          <h1>
            <u>Latest Stone Collections</u>
          </h1>
        </div>
      </Grid>
      <Container>
        <HomeImgCollections />
      </Container>
      <Box sx={{ backgroundColor: "#E9EBEA" }}>
        <Grid container paddingLeft={3} paddingTop={3}>
          <Box>
            <h1 style={{ fontsize: "1000" }}>
              High Quality Stones Perfect for Elegant Interiors
            </h1>
          </Box>
        </Grid>
        <Divider />
        <Box>
          <Grid container spacing={3} padding={4}>
            <Grid item xs={12} sm={12} lg={3}>
              <Typography align="center">
                <h5>
                  <u>
                    <b>Our Infrastructure</b>
                  </u>
                </h5>
              </Typography>
              <Typography>
                <h6>
                  Since the commencement of our corporation, we have strong and
                  well-equipped infrastructure unit. This infrastructure unit is
                  fully supported by our skilled and experienced professionals.
                </h6>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={3}>
              <Typography align="center">
                <h5>
                  <u>
                    <b>Product Portfolio</b>
                  </u>
                </h5>
              </Typography>
              <Typography>
                <h6>
                  We are a renowned exporter and wholesaler of Natural stones.
                  Our range includes Marble, Granite, Sandstone and Marble
                  Handicrafts. These products are procured from reliable
                  vendors, which design these in compliance.
                </h6>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={3}>
              <Typography align="center">
                <h5>
                  <u>
                    <b>Our Team</b>
                  </u>
                </h5>
              </Typography>
              <Typography>
                <h6>
                  We are supported by dedicated and talented professionals,
                  which have the vast knowledge of this domain. These are
                  employed by our senior managers after testing them on their
                  qualification and experience.
                </h6>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={3}>
              <Typography align="center">
                <h5>
                  <u>
                    {" "}
                    <b>Quality Standards</b>
                  </u>
                </h5>
              </Typography>
              <Typography>
                <h6>
                  Keeping all quality industrial recommended quality parameters
                  and standards as our prime focus, we manufacture our entire
                  range of products. For quality approved delivery of products.
                </h6>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box marginTop={2}>
        <Typography align="center">
          <h2>Watch Videos</h2>
        </Typography>
        <VideoURL />
      </Box>
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          <img
            className="d-block w-100"
            src="img\SliderHome\home.jpg"
            // width={700}
            //   src={d.image}
            //   alt={d.name}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={6}>
          <img
            className="d-block w-100"
            src="img\SliderHome\world.png"
           
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Typography marginTop={2} align="center">
            <h1>
              Our Marbles are exported over 150+ Countries all over the world
            </h1>
          </Typography>
          <Typography align="justify">
            <h5>
              List of 150+ Countries includes Russia, Iran, Saudi Arabia,
              Taiwan, Peru, UAE, China, USA, France, Italy, Philippines,
              Malaysia, Singapore, Pakistan, Ethiopia, Tanzania, South Africa,
              Egypt, Algeria, Morocco, Spain, Poland, Turkey, Argentina, Brazil,
              Guatemala, Mexico, etc.
            </h5>
          </Typography>
          <img className="d-block w-100" src="img\SliderHome\multistone.jpg" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
