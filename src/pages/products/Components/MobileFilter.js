import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {Button} from "@mui/material";
import Divider from "@mui/material/Divider";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  Autocomplete,
  TextField
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RangeSlider from "./FilterComponents/PriceSlider";
import PublicIcon from "@mui/icons-material/Public";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Country } from "country-state-city";
import { filterActions } from "../Reducers/filterSlice";

const useStyles = makeStyles((theme) => ({
  checkForm: {
      "& .MuiFormControlLabel-root": {
        fontSize: "14px",
        "& .MuiTypography-root": {
          fontSize: "inherit"
        }
      }
  }
}));

export default function MobileFilter({handleDelete, colorFilters, colors}) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const getValue = (val) => {
    console.log(val);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const dispatch = useDispatch()
  const filters = useSelector(state=>state.filter.searchData)
  const handleColorCheck = (id) => (event, value) => {
    value? dispatch(filterActions.setSearch({name: "color", value: id}) ) :
            dispatch(filterActions.remSearch({name: "color", value: id}))
  };

  
  const [countryVal, setCountryVal] = React.useState(null)
  const countries = Country.getAllCountries()
  React.useEffect(() => {
    if(filters.hasOwnProperty('origin') == false){
      setCountryVal(null)
    } 
  }, [!filters.hasOwnProperty('origin')]);

  const handleCountryChange = (event, value)=>{
    value? dispatch(filterActions.setSearch({name: "origin", value: value?.name})):
            dispatch(filterActions.remSearch({name: "origin"}))
          setCountryVal(value)
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 320 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
      marginX={2}
    >
      <Grid
        marginTop={1}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography variant="h6" component="h5" align="left">
            Countries
          </Typography>
        </Grid>
        <Grid item>
          <PublicIcon fontSize="small" />
        </Grid>
      </Grid>
      <Divider></Divider>

      <Box marginTop={1}>
      <Autocomplete
                             options={countries}
                             value={countryVal}
                             onChange={handleCountryChange}
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                               <Box component="li" sx={{ mr: 2, flexShrink: 0  }} {...props}>
                                    {option.flag}    {option.name}  
                               </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                               {...params}
                               label="Choose a country"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
      </Box>





      <Grid container marginTop={2} alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h6" component="h5" align="left">
            Price
          </Typography>
        </Grid>
        <Grid item>
          <FilterAltIcon fontSize="small" />
        </Grid>
      </Grid>
      <Divider></Divider>
      <Box>
        <RangeSlider getValue={getValue} />
      </Box>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Button variant="contained" size="small">
            Filter
          </Button>
        </Grid>
        <Grid item marginRight={3}>
          <Typography>Price:</Typography>
        </Grid>
      </Grid>

      <Grid
        marginTop={2}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography variant="h6" component="h5" align="left">
            Colour
          </Typography>
        </Grid>
        <Grid item>
          <FormatPaintIcon fontSize="small" />
        </Grid>
      </Grid>
      <Divider></Divider>
      <FormGroup>
      <Grid container>
            {colors?.map((d) => {
              // console.log(filters.color?filters?.color?.includes(d.id):false,'sjfkjs',d.id)
              return(
              <Grid key={d.id} item xs={6}>
                <FormGroup className={classes.checkForm} >
                  <FormControlLabel
                    control={<Checkbox checked={filters.color?filters?.color?.includes(d.id):false}  size="small" id={`color${d.id}`} onChange={handleColorCheck(d.id)} />}
                    label={d.name}
                    sx={{fontSize: "5px"}}
                    />
                </FormGroup>
              </Grid>
            )})}
              
            {/* <Grid item xs={6}>
              <CheckButton title={"Yellow"} />
              <CheckButton title={"Green"} />
              <CheckButton title={"Grey"} />
              <CheckButton title={"Exotic"} />
            </Grid> */}
          </Grid>
      </FormGroup>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="contained" size="small" endIcon={<FilterAltOutlinedIcon/>}>
            Filter
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
