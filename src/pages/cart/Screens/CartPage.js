import {
  Box,
  Paper,
  Typography,
  Divider,
  Grid,
  IconButton,
  TextField,
  Button,
  Container,
  Collapse,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import AddressChange from "../components/AddressChange";
import { DeleteForever } from "@mui/icons-material";
import axios from "axios";
import SingleCart from "../components/SingleCart";


const useStyles = makeStyles((theme) => ({
  imgBox: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  priceDetails: {
    [theme.breakpoints.up("md")]: {
      marginTop: "0 !important",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "20px !important",
    },
  },
  hideD: {
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block !important",
    },
  },
  hideM: {
    [theme.breakpoints.up("sm")]: {
      display: "block !important",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  }
}));

const EmptyCart = () => {
  return (
    <>
      <Box marginTop={2} marginLeft={2} marginRight={2}>
        <Paper elevation={1} sx={{ height: "400px" }}>
          <Typography padding={1}>Your Order List</Typography>
          <Divider />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="top"
            alignItems="center"
            height="70vh"
          >
            <Box width={200} height={200}>
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src="img/cart/emptyCart1.jpg"
                alt=""
              />
            </Box>
            <Box
              padding={2}
              marginTop={2}
              display="flex"
              flexDirection="column"
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              <Typography>Your Order List is Empty</Typography>
              <Box marginTop={4}>
                <Button variant="outlined" LinkComponent={ Link } to="/products">See Products</Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

const CartPage = () => {
  // const { state: {products} } = CartState();
  const classes = useStyles();
  const [addr, setAddr] = useState(false);
  const cart = useSelector((state)=> state.cart.itemList)
  const quantity = useSelector(state=>state.cart.totalQuantity)
  
  let total=0;
  cart.forEach((item)=>{
    total+=item.totalPrice
  })
  //   to get Total price of items
  console.log(total)
  
  return (
    <>
      <Box marginTop={2} marginLeft={2} marginRight={2}>
        {quantity===0 ? <EmptyCart/> : 
                      <Grid container justifyContent="space-evenly">
                
                      <Grid item xs={12} md={8} >
                          <Paper elevation={1} sx={{ padding:"1px !important"}} >
                              <Typography padding={1}>Your Order List</Typography>
                              <Divider/>
                              
                              <Box className={classes.hideM}>
                              <Grid container direction="column" >
                                  <Grid item>
                                    <Grid container sx={{backgroundColor: "buttonFace"}}>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={3}><Typography variant="body1" > Product </Typography></Grid>
                                        <Grid item xs={2} display="flex" alignItems="end"  >
                                        <Typography variant="body1" > Price  </Typography>
                                        <Typography variant="caption" > /sq foot  </Typography>
                                        </Grid>
                                        <Grid item xs={3}><Typography variant="body1" > Quantity </Typography></Grid>
                                        <Grid item xs={2}><Typography variant="body1" > SubTotal </Typography></Grid>
                                    </Grid>
                                  </Grid>
      
      
                              </Grid>
                            </Box>
                            <Box sx={{height: "400px", overflow: "scroll"}}>
                              {cart.map((d, index)=>(
                                <SingleCart key={index} d={d}/>
                              ))}
                                  {/* {products.slice(0, 10).map((d, index)=>(
                                    <SingleCart key={index} d={d}/>
                                  ))} */}
                                  </Box>
                          </Paper>
                      </Grid>
                      <Grid item xs={12} md={3} className={classes.priceDetails}>
                              <Paper elevation={1} sx={{height: "400px"}}>
                              <Typography padding={1}>Price Details</Typography>
                              <Divider/>
                              <Box padding={4} >
                              <Grid container >
                                  <Grid item xs={6}><Typography fontSize="medium">SubTotal</Typography></Grid>
                                  <Grid item xs={6}><Typography color="green">₹{total}</Typography> 
                                  </Grid>
                              </Grid>
                              <Grid container marginTop={2} >
                                  <Grid item xs={6}><Typography fontSize="medium">Shipping Cost</Typography>
                                  <AddressChange/>
                                  {/* <Button size="small" >change Address</Button> */}
                                  </Grid>
                                  <Grid item xs={6}><Typography color="green">₹1850</Typography>
                                      <Typography variant="caption" onClick={()=>setAddr(!addr)} >Shipping to Rajasthan, India (305801)</Typography>
                                      
                                      
                                      
                                  </Grid>
                              </Grid>
                              <Grid container >
                                  <Grid item xs={6}><Typography fontSize="medium">GST 18% </Typography></Grid>
                                  <Grid item xs={6}><Typography color="green">₹{total*18/100}</Typography></Grid>
                              </Grid>
                              <Grid container >
                                  <Grid item xs={6}><Typography fontSize="medium">Total</Typography></Grid>
                                  <Grid item xs={6}><Typography color="green">₹{total+1850+total*18/100}</Typography></Grid>
                              </Grid>
                              </Box>
                              
                              </Paper>
                      </Grid>
                  </Grid>
        }
        {/* <EmptyCart /> */}
        
      </Box>
      
    </>
  );
};

export default CartPage;
