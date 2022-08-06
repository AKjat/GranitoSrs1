import React, { useEffect, useState } from 'react';
import './App.css';
import {  Box, createTheme, ThemeProvider} from "@mui/material";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { orange, red } from '@mui/material/colors';
import ProductPage from './pages/product/ProductPage';
import Filterpage from './pages/home/filter/Filterpage';
import HomeCateg from './components/categlist/HomeCateg';
import productDetails from "./data/Details"
import Footer from './components/main/Footer';
import NewArrival from "./data/NewArrival";
import MostDemanding from "./data/MostDemanding"
import CartPage from './pages/cart/CartPage';
import ScrollToTop from './ScrollToTop';
import SignIn from './pages/login/SignIn';
import NewProduct from './pages/addNewProduct/NewProduct';
import { makeStyles } from '@mui/styles';
import TransportEstimate from './pages/transportEstimate/TransportEstimate';
import axios from 'axios';
import SignUp from './pages/signup/SignUp';
import { useDispatch } from 'react-redux';
import { loginActions } from './redux';
import Cookies from 'js-cookie'


const theme = createTheme({
  palette: {
      primary:{
        dark: orange[800],
        main: orange[500],
        light: orange[300]
    },
      secondary:{
        dark: "#c2c2c2",
        main: "#fff",
        light: "#f0f0f0"
    }
  },
  typography: {
      h5: {
        fontSize: '1.7rem',
        
      },
      h6: {
        fontSize: '1.3rem'
      }
  },
  
});

const useStyles= makeStyles((theme)=>({
  mobileView: {
       
      
      // [theme.breakpoints.down('md')]: {
      //     display: 'block'
      //   },
      //   [theme.breakpoints.up('md')]: {
      //     display: 'none'
      //   }
  },
  
}))

function App(props) {
  const classes = useStyles()
  // const {cart,product, addToCartAction, updateCartUnits, RenderProduct} = props;
  
  const AllItems = [...productDetails, ...NewArrival, ...MostDemanding ];
  // const AllItems = [...AllIte, ...MostDemanding]
  const [items, setItems] = useState(AllItems);


  let csrftoken = Cookies.get('csrftoken')
  axios.defaults.baseURL = 'http://localhost:8000/api/'
  axios.defaults.headers.common['X-CSRFToken'] = csrftoken
  axios.defaults.withCredentials = true
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('user/')
    .then((res)=>{
        dispatch(loginActions.setUser(res.data))
        dispatch(loginActions.setLogin())
        console.log(res.data,"looogogoog")
    })
    .catch(err=> console.log("ERRRRRRRRR",err.response.data))
  }, [])
  
  return (
    <Router>
      {/* <Sidebar /> */}
      <ThemeProvider theme={ theme } >
        <ScrollToTop/>
      <Header />
      <HomeCateg />
        <Routes>
          
        {/* <Route exact path="/login*" element={<SignInPage/>} /> */}
          
          <Route exact path="*" element={<Home />} />
          
          <Route exact path="/product/:id" element={<ProductPage />} />
          
          <Route exact path="/products/" element={<Filterpage />} />
            <Route exact path="/login" element={<SignIn/>} />
            <Route exact path="/signup" element={<SignUp/>} />
          {/* <Route exact path="/cart" element={isLoggedIn? <CartPage />:<SignIn/>} /> */}
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/addproduct" element={<NewProduct/>} />
          <Route exact path="/transportEstimate" element={<TransportEstimate/>} />
          
          {/* <Route exact path="/products/filter" element={<Filterpage />} /> */}
          {/* <Route exact path="/products" element={<ProductPage />} />
          <Route exact path="/products/productdetails" element={<ProductDetails />} /> */}
        </Routes>
        <Footer/>
        
        {/* <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
        
        {/* <MobileAppbar /> */}
      </ThemeProvider>
    </Router>
  );
}





export default App;
