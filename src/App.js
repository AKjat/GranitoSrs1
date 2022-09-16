import React, { useEffect, useState } from "react";
import "./App.css";
import { createTheme, Divider, Input, ThemeProvider } from "@mui/material";
import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { orange } from "@mui/material/colors";
import ScrollToTop from "./ScrollToTop";
import TransportEstimate from "./pages/TransportFee/screens/TransportEstimate";
import axios from "axios";
import Cookies from "js-cookie";
import Product from "./pages/products/Screens/Product";
import ProductBlockPage from "./pages/products/Screens/ProductBlockPage";
import Contact from "./pages/Contact";
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
import { makeStyles } from "@mui/styles";
import { CustomPhoneInput } from "./components/CustomPhoneInput";
import { useDispatch, useSelector } from "react-redux";
import { WebsiteFormActions } from "./redux/reducers/WebsiteDataReducer";
import {
  checkWebsiteNumber,
  saveWebsiteForm,
} from "./redux/reducers/WebsiteDataSave";

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
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function App(props) {
  let csrftoken = Cookies.get("csrftoken");
  // axios.defaults.baseURL = "https://stonebharat.in/api/";
  axios.defaults.baseURL = "http://192.168.1.5:8000/api/";
  // axios.defaults.baseURL = "http://192.168.43.117:8000/api/";

  axios.defaults.headers.common["X-CSRFToken"] = csrftoken;
  axios.defaults.withCredentials = true;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // google analytics
  // useEffect(() => {
  //   ReactGA.initialize('331570999')
  //   ReactGA.pageview(window.location.pathname + window.location.search);

  // }, [])
  const dispatch = useDispatch();
  const websiteForm = useSelector((state) => state.websiteForm);
  const websiteError = useSelector((state) => state.websiteError);

  const handleChange = (key, value) => {
    dispatch(WebsiteFormActions.setWebsite({ name: key, value: value }));
    console.log(key, value, "bhwdghwyd");
  };
  // const navigate = useNavigate();
  // const _goBack = () => {
  //   navigate(-1);
  //   dispatch(WebsiteFormActions.clearForm());
  // };

  const savingForm = (key, value) => {
    const array = window.location.href.split("/");
    const product = array[array.length - 2];
    const name = product == "product_block_page" ? "product" : "block";
    console.log(product, "popipaspa");
    dispatch(WebsiteFormActions.setWebsite({ name: name, value: array.pop() }));
    dispatch(saveWebsiteForm());
  };

  const [globalTimeOut, setGlobalTimeOut] = useState(null);
  const [checkingNumber, setCheckingNumber] = useState(false);
  const [inValidNumber, setInValidNumber] = useState(false);

  const onNumberChange = (name, value) => {
    setCheckingNumber(true);
    if (globalTimeOut != null) {
      clearTimeout(globalTimeOut);
    }
    let newGlobalTimeOut = setTimeout(() => checkNumber(name, value), 500);
    setGlobalTimeOut(newGlobalTimeOut);
  };
  const checkNumber = (name, value) => {
    dispatch(checkWebsiteNumber(name, value, setCheckingNumber));
  };

  useEffect(() => {
    let whatsapp_number_error = websiteError?.whatsapp_number?.[0]
      ? true
      : false;
    let number_error = websiteError?.number?.[0] ? true : false;
    if (number_error || whatsapp_number_error) {
      setInValidNumber(true);
    } else {
      setInValidNumber(false);
    }
  }, [websiteError]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="*" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
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
          <Route
            exact
            path="/transportEstimate"
            element={<TransportEstimate />}
          />
        </Routes>
        <div>
          <Divider />
        </div>
        {/* <Modal/> */}

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
                For latest update please provide your Whatsapp Number
              </DialogContentText>

              <CustomPhoneInput
                name="whatsapp_number"
                value={websiteForm?.whatsapp_number}
                onChange={(key, value) => {
                  handleChange(key, value);
                  onNumberChange(key, value);
                }}
                error={websiteError?.whatsapp_number?.[0]}
                // required={true}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={savingForm} disabled={checkingNumber || inValidNumber}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
