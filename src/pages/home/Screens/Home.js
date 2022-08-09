import {
  Box,
  Button,
  Card,
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
import ImgSlider from "../components/ImgSlider";

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
          to="/about"
          variant="outlined"
          sx={{ width: "60vw" }}
        >
          <Typography> View Our Collections</Typography>
        </Button>
      </Stack>
      <Grid>
        <div>
          <h1>
            <u>Latest Stone Collections</u>
          </h1>
        </div>
      </Grid>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} lg={6}>
            <ImgSlider />
            <h3> Indian Marble</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <ImgSlider />
            <h3> Indian Marble</h3>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} lg={6}>
            <ImgSlider />
            <h3> Indian Marble</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <ImgSlider />
            <h3> Indian Marble</h3>
          </Grid>
        </Grid>
      </Container>
      <Box bac>
        <Grid container Spacing={6}>
          <Grid item xs={12} sm={12} lg={4}>
            <ImgSlider />
            <h3> Indian Marble</h3>
          </Grid>
          <Grid item xs={12} sm={12} lg={8}>
            <ImgSlider />
            <h3> Indian Marble</h3>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
