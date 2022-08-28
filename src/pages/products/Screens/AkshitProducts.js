import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
    Tabs,
    Tab,
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
import {  getProducts, productSearchActions } from "../Reducers/productAkshitReducer";
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






















  import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Grid,
  Divider,
  Typography,
  Button,
  Collapse,
  Alert,
  IconButton,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ImagSelect from "../Components/ImagSelect";
import ProductDetails from "../Components/ProductDetails";
import SpecialReqDialog from "../Components/SpecialReqDialog";
import Product from "../../../components/product/Product";
import { getProductBlockDetail } from "../Reducers/productBlockDetailReducer";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";

// const useStyles = makeStyles((theme) => ({
//   hideM: {
//     [theme.breakpoints.down("lg")]: {
//       display: "none",
//     },
//     [theme.breakpoints.up("lg")]: {
//       display: "block",
//     },
//   },
//   relatedBox: {
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(0.2),
//     boxShadow:
//       "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
//     padding: theme.spacing(1),
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),

//     "& .css-iqyuzw": {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: theme.spacing(1),
//       borderColor: theme.palette.primary.main,
//       borderLeftStyle: "solid",
//       border: theme.spacing(1),
//       paddingLeft: theme.spacing(1),
//     },
//   },
// }));

const SuccessReq = ({ success, setSuccess }) => {
  return (
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
};
const ProductBlockDetailPage = (props) => {
  let { id } = useParams();
  // let id1 = parseFloat(id);
  // const [product, setProduct] = useState();
  // const [relatedProducts, setRelatedProducts] = useState();
  // const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const costEstimate = useSelector((state) => state.transportEstimate.cost);

  const classes = useStyles();

  // useEffect(() => {
  //   getProduct();
  // }, [id]);
  // useEffect(() => {
  //   if (category !== undefined) {
  //     getRelatedProducts();
  //   } else return;
  // }, [category, id]);

  // const getRelatedProducts = () => {
  //   axios.get(`products/?category=${category}`).then((response) => {
  //     const p = response.data.results;
  //     const rProducts = p.sort(() => Math.random() - 0.5);
  //     setRelatedProducts(rProducts);
  //   });
  // };

  // const getProduct = () => {
  //   axios.get(`products/${id}`).then((response) => {
  //     const product = response.data;

  //     setCategory(product.category.id);
  //     setProduct(product);
  //     setLoading(false);
  //   });
  // };

  // const [success, setSuccess] = React.useState(false);

  // const handleAddCart = () => {
  //   dispatch(
  //     cartActions.addCart({
  //       id,
  //       price: product?.price,
  //       quantity: product?.quantity,
  //     })
  //   );
  // };
  const product = useSelector((state) => state.productBlockDetail);
  React.useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getProductBlockDetail(id));
  }, [id]);

  return (
    <>
      <Box sx={{ marginLeft: "10px", marginRight: "10px" }}>
        {/* <HomeCateg/> */}
        <Box marginX={1} marginTop={2}>
          {/* { <Breadcrumb name={product?.name}/> } */}
          {/* <BreadCrumbs data={[{name: "Products", link: "/products"},{name: product?.name, link:"#"}]}/> */}

          <Grid container marginTop={1}>
            <Grid item xs={12} lg={6} marginTop="10px">
              <ImagSelect product={product}  />

            </Grid>
            <Divider
              className={classes.hideM}
              sx={{ height: "400px !important" }}
              orientation="vertical"
            />
            <Grid marginLeft={1} sx={{ marginTop: "10px" }} item xs={12} lg={5}>
              {/* <SuccessReq success={success} setSuccess={setSuccess} /> */}
              <ProductDetails product={product} 
              // loading={loading} 
              />

              <Box marginTop={1}>
                <Typography variant="body2">Available offers</Typography>
                <Typography fontSize="small">
                  <LocalOfferIcon fontSize="small" /> {"   "} Get some discount
                  on purchase of products
                </Typography>
              </Box>

              <Divider />

              <Grid container marginTop={2} justifyContent="space-around">
                <Button variant="contained" onClick={handleAddCart}>
                  Add to truck
                </Button>
                <SpecialReqDialog setSuccess={setSuccess} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        {/* <Box className={classes.relatedBox}>
          <Box display="flex" marginLeft={2}>
            <Typography variant="h5" alignSelf="center">
              Related Products
            </Typography>
          </Box>
          <Divider />
          <Grid container spacing={2} padding={1}>
            {relatedProducts?.slice(0, 4).map((d, index) => (
              <Grid item key={index} xs={6} md={4} lg={3} padding={0}>
                <Product d={d} />
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Box>
    </>
  );
};

// export default ProductBlockDetailPage;

  