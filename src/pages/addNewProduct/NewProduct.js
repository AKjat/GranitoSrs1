import {
  Autocomplete,
  Button,
  Container,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  Box
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import InputMask from "react-input-mask";
import ProductStepper from "./components/Stepper"

const useStyles = makeStyles((theme) => ({
  stack: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(40),
      paddingRight: theme.spacing(40),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}));

const NewProduct = () => {
  const classes = useStyles();
  return (
    <Container sx={{ marginTop: 2 }}>
      <ProductStepper/>
      
    </Container>
  );
};

export default NewProduct;
