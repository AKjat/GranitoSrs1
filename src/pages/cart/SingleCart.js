import { Box, Grid, IconButton, Typography, Divider, CardActionArea } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux";
import RefreshIcon from '@mui/icons-material/Refresh';
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
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
  },
}));

const SingleCart = ({ d }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState()
  const id = d.id
  const [value, setValue] = useState(0);
  React.useEffect(() => { 
    getProduct()
    
  }, [d]);

  const getProduct = () => {
    axios.get(`products/${id}`)
    .then((response)=>{
      
      const product = response.data
      setProduct(product)
      setValue(product.quantity)
    })
  }
  
  let val = parseFloat(value)
  console.log(value, "valueQuantity")
  const setChange = (t) => {
    setValue(t.value);
    dispatch(cartActions.setQuantity({
      id:id,
      qty1:parseFloat(t.value)
    }))
    console.log(val)
  };
  
  console.log(value)
  const classes = useStyles();
 
  
  const handleRemoveCart = () => {
    dispatch(cartActions.removeCart(id))
  }
  const totalPrice = product?.quantity*product?.price

 console.log(totalPrice, "product")
//  console.log(product.quantity, "producQuantt")
  return (
    <>
      <Box className={classes.hideD}>
        <Grid container marginTop={1} spacing={1} padding={1}>
          <Grid item xs={4}>
            <Box sx={{ height: "150px", }} component={Link} to={`/products/${id}`}>
              <img style={{ objectFit: "cover", width: "100%", height: "100%",  borderRadius:10 }} src={product?.images[0]?.image} alt="Cart" />
            </Box>
          </Grid>
          
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box >
              <Typography>{product?.name}</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">Price:</Typography>
              <Typography variant="subtitle2" color="green">
              ₹{d.price}
              </Typography>
              <Typography variant="caption" > /sq foot  </Typography>
              
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" >
            <Typography variant="subtitle2">Quantity: </Typography>
              
              <input
                type="text"
                style={{ width: "40%" }}
                value={value}
                onChange={(e) => setChange(e.target)}
                disabled={true}
              />
              
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle2">SubTotal:</Typography>
                <Typography variant="subtitle2" color="green">
                ₹{d.totalPrice}
                  {/* ${d.price * value} */}
                </Typography>
              </Box>
          </Grid>
          <Grid item xs={2} display="flex" flexDirection="column" justifyContent="space-between">
            <IconButton onClick={handleRemoveCart}>
              <CloseIcon color="error" />
            </IconButton>
            {/* <Box>
              <IconButton>
                <Typography variant="h5"></Typography>
              </IconButton>
            </Box> */}
          </Grid>
        </Grid>
        <Divider />
      </Box>

      <Grid item className={classes.hideM}>
        <Grid container alignItems="center" minHeight={70}>
          <Grid item xs={2} display="flex">
            <Box>
              <IconButton onClick={handleRemoveCart}>
                <CloseIcon color="error" />
              </IconButton>
            </Box>
            <Box height={40} width={60} component={Link} to={`/products/${id}`}>
              <img
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                src={product?.images[0]?.image}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1"> {product?.name} </Typography>
          </Grid>
          <Grid item xs={2} display="flex" alignItems="center" justifyContent="flex-start">
            <Typography variant="body1" color="green">
              {" "}
              ₹{product?.price}{" "}
            </Typography>
            
          </Grid>
          <Grid item xs={3}>
            <input
              type="number"
              min="1"
              style={{ width: "40%" }}
              value={value}
              onChange={(e) => setChange(e.target)}
              disabled
            />
            
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" color="green">
              {" "}
              ₹{totalPrice}
              {/* ${d.price * value}{" "} */}
            </Typography>
            
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleCart;
