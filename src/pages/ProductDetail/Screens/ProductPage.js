import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Grid,
  Divider,
  Typography,
  Button,
  Collapse,
  Alert,
  IconButton,
  Skeleton,
  Container
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import ImagSelect from "../Components/ImagSelect";
import ProductDetails from "../Components/ProductDetails";
import SpecialReqDialog from "../Components/SpecialReqDialog";
import Product from "../../../components/product/Product";
import { cartActions } from "../../../redux";


const useStyles = makeStyles((theme) => ({
  hideM: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  relatedBox: {
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(0.2), 
    boxShadow:"0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)", 
    padding:theme.spacing(1), 
    marginLeft:theme.spacing(1), 
    marginRight:theme.spacing(1),
    
    "& .css-iqyuzw":{
      display:"flex" ,
      justifyContent:"space-between" ,
      alignItems:"center",
      marginBottom: theme.spacing(1),
      // borderRadius: theme.spacing(1),
      borderColor: theme.palette.primary.main ,
      borderLeftStyle:"solid",
      border: theme.spacing(1),
      paddingLeft:theme.spacing(1)
    }
  }
}));




const SuccessReq =({success, setSuccess})=>{
  
  return(
    <>
      <Collapse in={success}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccess(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Your Request has been sent.
        </Alert>
      </Collapse>
    </>
  );
}
const ProductPage = (props) => {
  
  
  let { id } = useParams();
  let id1 = parseFloat(id)
  const [product, setProduct] = useState()
  const [relatedProducts, setRelatedProducts] = useState()
  const [category, setCategory] = useState()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  
  //  const selectedProduct = products.filter(x => x.id === id)
  //  const { name, img, price} = selectedProduct[0]
   const costEstimate = useSelector(state=> state.transportEstimate.cost)
   
   
   const classes = useStyles();
   
  //  const baseURL = "http://localhost:8000/api/"
   useEffect(() => { 
    getProduct()
    
  }, [id]);
   useEffect(() => { 
     if(category !== undefined){
      getRelatedProducts()
     }
     else return
    
    
  }, [category,id]);

  const getRelatedProducts = () => {
    axios.get(`products/?category=${category}`)
    .then((response)=>{
      const p = response.data.results
      const rProducts = p.sort(() => Math.random() - 0.5)
      setRelatedProducts(rProducts)
    })
    
  }
  console.log("related", relatedProducts)

  const getProduct = () => {
    axios.get(`products/${id}`)
    .then((response)=>{
      const product = response.data
     
      setCategory(product.category.id)
      setProduct(product)
      setLoading(false)
    })
    
  }
  
  const [success, setSuccess] = React.useState(false);
  
  const handleAddCart= () => {
    dispatch(cartActions.addCart({id, price:product?.price, quantity:product?.quantity}))
  }

  


  

  return (
    <>
    <Box sx={{ marginLeft: "10px", marginRight: "10px",}} >
      {/* <HomeCateg/> */}
      <Box marginX={1} marginTop={2}>
        {/* { <Breadcrumb name={product?.name}/> } */}
        {/* <BreadCrumbs data={[{name: "Products", link: "/products"},{name: product?.name, link:"#"}]}/> */}
        
        <Grid container marginTop={1}>
          <Grid item xs={12} lg={6} marginTop="10px" >
            <ImagSelect  product={product} loading={loading} />
        
            {/* <ImgPick/> */}
          </Grid>
          <Divider
            className={classes.hideM}
            sx={{ height: "400px !important" }}
            orientation="vertical"
          />
          <Grid marginLeft={1} sx={{marginTop: "10px"}} item xs={12} lg={5}>
          <SuccessReq success={success} setSuccess={setSuccess}/>
            <ProductDetails  product={product} loading={loading}/>

            <Box marginTop={1}>
              <Typography variant="body2">Available offers</Typography>
              <Typography fontSize="small">
                <LocalOfferIcon fontSize="small"  /> {"   "} Get some discount on
                purchase of products
              </Typography>
            </Box>
            
            <Divider />

            <Grid
              container
              marginTop={2}
              justifyContent="space-around"
            > 
              
              <Button variant="contained" onClick={handleAddCart} >Add to truck</Button>
              {/* <Button variant="outlined">Special Request*</Button> */}
              <SpecialReqDialog setSuccess={setSuccess} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      </Box>
      <Box  >
        <Box className={classes.relatedBox}>
        <Box display="flex" marginLeft={2}  >
          <Typography variant="h5" alignSelf='center'>Related Products</Typography>
        </Box>
        <Divider/>
        <Grid container spacing={2} padding={1}>
        {relatedProducts?.slice(0, 4).map((d, index) => (
                <Grid item key={index} xs={6} md={4} lg={3}   padding={0}>
                  <Product
                    d={d} 
                  />
                </Grid>
              ))}
        </Grid>
        </Box>
      </Box>
    

    </>
  );
};

export default ProductPage;

