import { Box, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import {Link} from 'react-router-dom'
import HoverMenu from './HoverMenu';

const useStyles = makeStyles((theme) => ({
  Tabs: {
    "& .MuiTab-root": {
      padding: "0 16px",
      [theme.breakpoints.down("sm")]: {
        padding: "0",
      },
    },
  },
  hideM: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    alignItems: "center",
    justifyContent: "space-between",
  },
  items: {
    padding: theme.spacing(2),
  },
}));

const HomeCateg = (props) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const filterItem = (Categ) => {
    props.handleCateg(Categ);
    console.log(Categ);
  };
  const filterIte = (cat) => {
    props.handleAll(cat);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      className={classes.hideM}
      sx={{ width: "100%", bgcolor: "#e59b0e", padding: "0" }}
    >
      <Box sx={{ width: "20vw" }}></Box>
      <Button
        id="home"
        color="secondary"
        component={Link}
        to="/"
        className={classes.items}
      >
        Home
      </Button>
      <HoverMenu filterItem={filterItem} filterIte={filterIte} />
      <Button
        id="about"
        color="secondary"
        className={classes.items}
        component={Link}
        to="/about"
      >
        About
      </Button>
      <Box sx={{ width: "20vw" }}></Box>
      
    </Box>
    
  );
};

export default HomeCateg;
