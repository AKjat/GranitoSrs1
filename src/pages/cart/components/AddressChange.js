import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Alert,
  Autocomplete,
  Box,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import {Country, State, City} from "country-state-city"


const options = [
  <Box display="flex" alignItems="center">
    <Typography>m</Typography>
    <Typography
      style={{ fontSize: 9, lineHeight: 1, textAlignVertical: "top" }}
    >
      2
    </Typography>
  </Box>,
  <Box display="flex" alignItems="center">
    <Typography style={{ fontSize: 15 }}>ft</Typography>
    <Typography
      style={{ fontSize: 9, lineHeight: 1, textAlignVertical: "top" }}
    >
      2
    </Typography>
  </Box>,
];
export default function AddressChange() {
  const [open, setOpen] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState()
  const [stateCode, setStateCode] = React.useState()
  const [details, setDetails] = React.useState({
    name: "",
    companyName: "",
    mobileNumber: 0 ,
    city: "",
    state: "",
    country: "",
    pinCode: 0
  })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCountryChange =(event, value)=>{
      console.log(value,"valllT")
      setCountryCode(value.isoCode)
  }
  const handleStateChange =(event, value)=>{
      console.log(value,"valllT")
      setStateCode(value.isoCode)
  }


  return (
    <div>
      <Button onClick={handleClickOpen}>Change Address</Button>
      <Dialog open={open} onClose={handleClose}>
        
        <DialogTitle>Change Shipping Address</DialogTitle>
        <DialogContent>
            <Grid container spacing={1}>
                <Grid item xs={4}><Typography>Customer Details</Typography></Grid>
                <Grid item xs={5}><Typography>Address Details</Typography></Grid>
                <Grid item xs={4}></Grid>
            </Grid>
          <Grid container spacing={1} alignItems="baseline">
            <Grid item xs={4}>
              <Box display="flex" alignItems="center" marginTop={1}>
                <TextField fullWidth name="name"  label="Name" />
              </Box>
              <Box display="flex" alignItems="center" marginTop={1}>
                <TextField fullWidth name="companyName" label="Company Name" />
              </Box>
              <Box display="flex" alignItems="center" marginTop={1}>
                <TextField fullWidth name="mobileNumber" label="Mobile Number" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" alignItems="center" marginTop={1}>
              <Autocomplete
                             options={Country.getAllCountries()}
                             onChange={handleCountryChange}
                             fullWidth
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="Country"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
              </Box>
              <Box display="flex" alignItems="center" marginTop={1}>
              <Autocomplete
                             options={State.getStatesOfCountry(countryCode)}
                             onChange={handleStateChange}
                             fullWidth
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="State"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
              </Box>
              <Box display="flex" alignItems="center" marginTop={1}>
              <Autocomplete
                             options={City.getCitiesOfState(countryCode,stateCode)}
                            //  onChange={handleAutoChange("origin")}
                             fullWidth
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="City"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
              </Box>
            </Grid>
           <Grid item xs={4}>
            <Box display="flex" alignItems="center" marginTop={1}>
                <TextField fullWidth name="pinCode" label="Pin Code" />
              </Box>
           </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              setOpen(!open);
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
