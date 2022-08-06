import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Divider, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProductDialogue from '../Ui/ProductDialogue';
import {useState} from 'react';
import productDetails from '../../data/Details';
import Product from './Product';




export default function ProductCard(props) {
    
    // const details = props.details;
  const imgClick = () => {
    alert("See Product Details");
  };

  // Product Dialogue state
  
  // const [open, setOpen] = useState(false);  
  // const handleClickOpen=()=>{
  //   setOpen(true);
  // }  
  
  
  return (
    <Grid container spacing={2}>
      
  </Grid>
    
  );
}
