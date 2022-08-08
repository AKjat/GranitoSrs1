import React, { useEffect, useState } from 'react';
import './App.css';
import {  Box, createTheme, ThemeProvider} from "@mui/material";
// import Home from './pages/home/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { orange, red } from '@mui/material/colors';
// import ProductPage from './pages/product/ProductPage';
// import Filterpage from './pages/home/filter/Filterpage';
import HomeCateg from './components/NavigationBar/HomeCateg';
import Footer from './components/main/Footer';
import ScrollToTop from './ScrollToTop';
import { makeStyles } from '@mui/styles';
import TransportEstimate from './pages/TransportFee/screens/TransportEstimate';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginActions } from './redux';
import Cookies from 'js-cookie'
import Home from './pages/home/Screens/Home';
import Products from './pages/products/Screens/Products';
import ProductPage from './pages/ProductDetail/Screens/ProductPage';
import SignIn from './pages/login/Screens/SignIn';
import SignUp from './pages/signup/Screens/SignUp';
import NewProduct from './pages/addNewProduct/Screens/NewProduct';
import CartPage from './pages/cart/Screens/CartPage';
import About from './pages/About';


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


  let csrftoken = Cookies.get('csrftoken')
  axios.defaults.baseURL = 'http://192.168.1.23:8000/'
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
        <Routes>
          
        {/* <Route exact path="/login*" element={<SignInPage/>} /> */}
          
          <Route exact path="*" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          
          <Route exact path="/products/" element={<Products />} />
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
