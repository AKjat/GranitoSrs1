import { Box, Button, Divider, Tab, Tabs, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'

// import { Link as LinkScroll } from "react-scroll";
import HoverMenu from '../Ui/new/HoverMenu';

const useStyles = makeStyles((theme) => ({
  Tabs:{
    "& .MuiTab-root":{
      padding: '0 16px',
      [theme.breakpoints.down('sm')]:{
        padding: '0'
      }
    }
  },
  hideM: {
    [theme.breakpoints.down('md')]: {
        display: "none"
      },
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      },
      alignItems: "center",
      justifyContent: "space-between"    
  },
  items: {
      padding:theme.spacing(2)
  }
}));

const HomeCateg = (props) => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const filterItem=(Categ)=>{
       props.handleCateg(Categ)
        console.log(Categ)
    }
    const filterIte=(cat)=>{
        props.handleAll(cat)
    }    
    const handleChange = ( event, newValue) => {         
        setValue(newValue);
      };
  return (
    
    <Box className={classes.hideM} sx={{ width: '100%', bgcolor: '#e59b0e',padding: '0' }}>
        <Box sx={{width: "20vw"}}></Box>
        <Button id="home" color="secondary" component={Link} to='/' className={classes.items}>Home</Button>
        <HoverMenu filterItem={filterItem} filterIte={filterIte} />
        <Button id="about" color="secondary" className={classes.items}>About</Button>
        <Box sx={{width: "20vw"}}></Box>
      {/* <Tabs className={classes.Tabs} value={value} onChange={handleChange} indicatorColor='secondary' textColor='secondary' selectionFollowsFocus={true} centered>
        
        <Tab component={Link} to='/'  label="Home" />
        <Tab component={Link} to='/products'  label={<HoverMenu filterItem={filterItem} filterIte={filterIte}/>} />
        <Tab component={Link} to='/about'  label="About" />
        <Tab component={Link} to='/contact'  label="Contact" />
      </Tabs> */}
    </Box>
    //   <Box sx={{ width: '100%', bgcolor: '#e59b0e' }}>
    //   <Tabs value={value} onChange={handleChange} indicatorColor='secondary' textColor='secondary' selectionFollowsFocus={true} centered>
        
    //     <Tab component={Link} to='/'  label="Home" />
        
    //     {/* <HoverMenu/> */}
    //     <Tab  component={Link} to='/products'  label="Products" />
    //     <Tab component={Link} to='/'  label="Contact" />
        
    //     <LinkScroll
    //           component={Tab}
    //           activeClass="active"
    //           to="section1"
    //           spy={true}
    //           smooth={true}
    //           offset={0}
    //           duration={400} 
    //           label="About Us"
    //         >
    //           {/* <Tab label="About Us" ></Tab> */}
              
    //         </LinkScroll>
        
    //   </Tabs>
    // </Box>
    
  );
}

export default HomeCateg;
