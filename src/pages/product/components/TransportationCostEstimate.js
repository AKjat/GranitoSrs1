import { Grid3x3 } from "@mui/icons-material";
import {
    Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { transportActions } from "../../../redux";

const TransportationCostEstimate = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [qty, setQty] = React.useState(0)
  const [val, setVal] = React.useState(0)
  const showCost = useSelector(state=>state.transportEstimate.showCost)
  const handleChange = (event,value) => {
      console.log(value)
      setVal(value.value)
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(transportActions.showCost(false))
    setOpen(false);
  };
  const inputHandler=(e)=>{
    setQty(e.target.value) 
  }
  console.log(qty)
  const cost = qty*val
  
  const submitHandler=()=>{
    // setOpen(!open);
    // dispatch(transportActions.calculate(cost))
    dispatch(transportActions.showCost(true))
  }
  
  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        Transport Estimate
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth sx={{maxHeight: "600px"}}>
        <DialogTitle>Add Details</DialogTitle>
        <DialogContent >
          <Grid container marginTop={1} flex={1} spacing={1}>
            <Grid item xs={7}>
              <Autocomplete
                options={states}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField {...params} label="Select State" />
                )}
              />
              
            </Grid>
            <Grid item xs={5}>
              <TextField onChange={inputHandler} type="number" label="Enter Quantity" value={qty}/>
            </Grid>
          </Grid>
          {showCost?<Typography variant="body1" textAlign="center">Your Estimate Cost: {cost} INR till your doorstep</Typography>:""}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button variant="outlined" onClick={submitHandler}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TransportationCostEstimate;

const states = [
    { label: 'Rajasthan', value: 5 },
    { label: 'Delhi', value: 10 },
    { label: 'Haryana', value: 10 },
    { label: 'Himachal Pradesh', value: 15 },
    { label: 'J & K', value: 18 },
    { label: "Punjab", value: 12 },
    { label: 'Chattisgarh', value: 20 },
    { label: 'Madhya Pradesh',value: 20},
    { label: 'Uttar Pradesh',value: 15},
    { label: 'Uttarakhand',value: 15},
    { label: 'Bihar',value: 18},
    { label: 'Jharkhand',value: 18},
    { label: 'Odisha',value: 20},
    { label: 'West Bengal',value: 15},
    { label: 'Maharashtra',value: 15},
    { label: 'Gujarat',value: 12},
    { label: 'Goa',value: 18},
    { label: 'Karnatka',value: 20},
    { label: 'Aandhra Pradesh',value: 20},
    { label: 'Tamilnadu',value: 22},
    { label: 'Telangana',value: 22},
    { label: 'Kerala',value: 20},
    { label: 'Arunachal Pradesh',value: 25},
    { label: 'Assam',value: 25},
    { label: 'Manipur',value: 40},
    { label: 'Tripura',value: 30},
    { label: 'Nagaland',value: 40},
    { label: 'Sikkim',value: 30},
    { label: 'Mizoram',value: 40},
    { label: 'Meghalaya',value: 40},
  ];
