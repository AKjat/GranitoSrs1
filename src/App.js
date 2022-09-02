import React from "react";
import "./App.css";
import { createTheme, Input, ThemeProvider, Typography } from "@mui/material";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { orange } from "@mui/material/colors";
import Footer from "./components/main/Footer";
import ScrollToTop from "./ScrollToTop";
import { makeStyles } from "@mui/styles";
import TransportEstimate from "./pages/TransportFee/screens/TransportEstimate";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Home from "./pages/home/Screens/Home";
import SignIn from "./pages/login/Screens/SignIn";
import SignUp from "./pages/signup/Screens/SignUp";
import NewProduct from "./pages/addNewProduct/Screens/NewProduct";
import CartPage from "./pages/cart/Screens/CartPage";
import About from "./pages/About";
import Product from "./pages/products/Screens/Product";
import ProductBlockPage from "./pages/products/Screens/ProductBlockPage";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ProductBlockDetailPage from "./pages/products/Screens/ProductBlockDetailPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HailIcon from "@mui/icons-material/Hail";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const theme = createTheme({
  palette: {
    primary: {
      dark: orange[800],
      main: orange[500],
      light: orange[300],
    },
    secondary: {
      dark: "#c2c2c2",
      main: "#fff",
      light: "#f0f0f0",
    },
  },
  typography: {
    h5: {
      fontSize: "1.7rem",
    },
    h6: {
      fontSize: "1.3rem",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  mobileView: {
    // [theme.breakpoints.down('md')]: {
    //     display: 'block'
    //   },
    //   [theme.breakpoints.up('md')]: {
    //     display: 'none'
    //   }
  },
}));

function App(props) {
  const classes = useStyles();

  let csrftoken = Cookies.get("csrftoken");
  axios.defaults.baseURL = "https://stonebharat.in/api/";
  // axios.defaults.baseURL = "http://192.168.1.23:8000/api/";
  // axios.defaults.baseURL = "http://192.168.43.117:8000/api/";

  axios.defaults.headers.common["X-CSRFToken"] = csrftoken;
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   axios.get('user/')
  //   .then((res)=>{
  //       dispatch(loginActions.setUser(res.data))
  //       dispatch(loginActions.setLogin())
  //       console.log(res.data,"looogogoog")
  //   })
  //   .catch(err=> console.log("ERRRRRRRRR",err.response.data))
  // }, [])

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      {/* <Sidebar /> */}
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route
            exact
            path="/product_block_detail_page/:id"
            element={<ProductBlockDetailPage />}
          />
          <Route
            exact
            path="/product_block_page/:id"
            element={<ProductBlockPage />}
          />
          <Route exact path="/product/" element={<Product />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/addproduct" element={<NewProduct />} />
          <Route
            exact
            path="/transportEstimate"
            element={<TransportEstimate />}
          />
        </Routes>
        <Footer />

        <a
          href="https://wa.me/919119114151"
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon sx={{ justifyItems: "center", color: "white" }} />
        </a>
        <a
          class="form_float"
          rel="noopener noreferrer"
          onClick={handleClickOpen}
        >
          <HailIcon sx={{ justifyItems: "center", color: "white" }} />
        </a>
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>UPDATES</DialogTitle>
            <DialogContent>
              <DialogContentText>
                For latest update please provide your number
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Phone Number"
                type="number"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Save</Button>
            </DialogActions>
          </Dialog>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
