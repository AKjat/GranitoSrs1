import {
    Box,
    Button,
    Chip,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
    Tabs,
    Tab,
    Pagination,
    Stack,
    PaginationItem,
    Alert
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
  import React, { useEffect, useState } from "react";
  import { Link, useParams } from "react-router-dom";
  import axios from "axios";
  import { useDispatch, useSelector } from "react-redux";
import MobileFilter from "../Components/MobileFilter";
import SkeletonProduct from '../../../components/product/SkeletonProduct';
import Filter from "../Components/Filter";
import Product from "../../../components/product/Product";
import {  getProducts, productSearchActions } from "../Reducers/productReducer";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";
  
  const useStyles = makeStyles((theme) => ({
    hideM: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },
    hideD: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },
  }));
  
  const AkshitProducts = () => {
    const classes = useStyles();
    const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [colors, setColors] = useState();
    const [categories, setCategories] = useState();
  
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    const productsLink = useSelector((state) => state.productLinks);
    const refreshing = useSelector((state) => state.refreshing);
    const loading = useSelector((state)=> state.productSearch)
    const filters = useSelector((state) => state.productSearch);
    const category = categories?.find((d) => d.id === filters.category);
  
    useEffect(() => {
      // getColors();
      // getCategories();
      dispatch(productSearchActions.setSearch({name: "ordering", value: "price"}))
    }, []);
  
    useEffect(() => {
      dispatch(refreshingActions.setRefreshing(true))
      dispatch(getProducts())
    }, []);
    const handlePrev = () => {
      dispatch(getProducts(null, true))
    }
    const handleNext = () => {
      dispatch(getProducts(true))
    }
  
    const handleDelete = (name) => (e, v) => {
      // if (name?.name === "price") {
      //   dispatch(filterActions.remSearch({ name: name.name + "_min" }));
      //   dispatch(filterActions.remSearch({ name: name.name + "_max" }));
      // } else {
      //   dispatch(filterActions.remSearch({ name: name.name, value: name.value }));
      // }
    };
  
    const handleOrdering = (value)=> {
      dispatch(productSearchActions.setSearch({name: "ordering", value: value}))
    }
  
  
    // const LogIn =() => {
    //   if (isLoggedIn){
    //     dispatch(login)
    //   }
    // }
    const getAllProducts = () => {
      axios.get(`products/`).then((response) => {
        const allproducts = response.data.results;
        setItems(allproducts);
      });
    };
  
    const Arr = [1, 2, 3, 4, 5, 6];
  
    const [tabValue, setTabValue] = React.useState(0);
  
    const handleTabChange = (event, newValue) => {
      setTabValue(newValue);
    };
    return (
      <>
        <Box>
          <Paper className="CategPaper">
            {/* <Categ handleCateg={handleCateg} handleAll={handleAll} /> */}
          </Paper>
        </Box>
        <Container>
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item xs={0} md={3} className={classes.hideM}>
              <Filter
                category={category}
                handleDelete={handleDelete}
                // colorFilters={colorFilters}
                // colors={colors}
                // categories={categories}
              />
            </Grid>
  
            <Grid item xs={12} md={9} lg={9} marginTop={1}>

              <Box display="flex" gap={1} alignItems="center" marginTop={1} sx={{  bgcolor: "background.paper", borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="body1">Sort By</Typography>
                {/* <Chip  label="Price -- low to high" clickable={true} clickableColorPrimary  onClick={()=>console.log("clicked")}/>
                  <Chip  label="Price -- low to high" onClick={()=>console.log("clicked")}/> */}
                <Box >
                  <Tabs value={tabValue} onChange={handleTabChange} centered>
                    <Tab label="Price -- low to high" onClick={()=>handleOrdering("price")} />
                    <Tab label="Price -- high to low" onClick={()=>handleOrdering("-price")}/>
                    {/* <Tab label="Item Three" /> */}
                  </Tabs>
                </Box>
              </Box>
              <Box marginTop={1}>
                <Button variant="outlined" component={Link} to="/addproduct">
                  Add New Product
                </Button>
              </Box>
              <Grid container justifyContent="space-between" marginTop={1}>
                
                <Box className={classes.hideD}>
                  <MobileFilter className={classes.hideD} 
                      handleDelete={handleDelete}
                      // colorFilters={colorFilters}
                      // colors={colors}
                  />
                </Box>
              </Grid>
              Number Of Products = {products?.length}
              <Grid container spacing={2} marginTop={0}>
                
                {/* {loading? } */}
                {!refreshing? 
                  products?.map((d, index) => (
                    <Grid
                      item
                      key={index}
                      xs={6}
                      lg={4}
                      sm={4}
                      md={5}
                      padding={0}
                    >
                      <Product d={d} loading={loading} />
                    </Grid>
                  )) :
                    Arr.map((d, index) => (
                    <Grid
                      item
                      key={index}
                      xs={6}
                      lg={4}
                      sm={4}
                      md={5}
                      padding={0}
                    >
                      {" "}
                      <SkeletonProduct />{" "}
                    </Grid>
                  ))}
                  
  
                {/* {products.map((d, index) => (
                  <Grid item key={index} xs={6} lg={4} sm={4} md={5} padding={0}>
                    <Product
                      d={d}
                      index={index}
                    />
                  </Grid>
                ))} */}
              </Grid>
              <Grid container  flexDirection={'row'} spacing={2} marginTop={2}>
                <Grid item xs={2} >
                  <Button onClick={()=>handlePrev()} disabled={productsLink.has}>Previous</Button>
                </Grid>
                <Grid item xs={7}>

                </Grid>
                <Grid item xs={2}>
                  <Button onClick={()=>handleNext()}>Next</Button>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
          
        </Container>
      </>
    );
  };
  
  export default AkshitProducts;
  