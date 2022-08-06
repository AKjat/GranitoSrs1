import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Popper,
  alpha,
} from "@mui/material";

// third-party
import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";

// project imports
import Transitions from "./Transitions";

// assets
import { IconAdjustmentsHorizontal, IconSearch, IconX } from "@tabler/icons";
import { shouldForwardProp } from "@mui/system";
import { withStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { orange, red } from "@mui/material/colors";
import './NewSearch.css'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { filterActions } from "../../../pages/products/Reducers/filterSlice";


const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
  zIndex: 1100,
  width: "100%",
  top: "-65px !important",
  padding: "0 12px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));
const styles = (theme) => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

const SearchBar = ({ popupState, handleSearch }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState("")
  const handleChange = (event, value) => {
      setValue(event.target.value)
    }
  // bindToggle(popupState)
  return (
    <Box display="flex" alignItems="center" justifyContent="center" sx={{backgroundColor: "white", height: "70px", width: "100vw"}}>
    <Box
      sx={{

        margin: "1px",
        position: "absolute",
        borderRadius: theme.shape.borderRadius,
        borderColor: theme.palette.primary,
        border: "1.5px solid orange ",
        borderStyle: "inset",
        zIndex: "1100",
        // marginTop: "19px",
        backgroundColor: alpha(orange[200], 1),
        "&:hover": {
          backgroundColor: alpha(orange[300], 1),
        },
        display: "flex",
      }}
    >
      <InputBase
        type="search"
        value={value}
        onChange={handleChange}
        onKeyDown={(e)=>{if(e.key=="Enter"){handleSearch(value);bindToggle(popupState)}}}
        fullWidth={true}
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search Products"
        inputProps={{ "aria-label": "search products" }}
      />
      <IconButton {...bindToggle(popupState)} type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Box>
        <IconButton
        {...bindToggle(popupState)}
          sx={{
            p: "10px",
            color: alpha(red[700], 1),
            "&:hover": {
                transform: "scale(1.2)"
            }
          }}
          aria-label="search"
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
    </Box>
  );
};

const SearchWebBar = ({ handleSearch }) => {
    const [value, setValue] = React.useState("")
    const handleChange = (event, value) => {
      console.log({event:event.target.value, value:value})
      setValue(event.target.value)
    }
    const theme = useTheme();
    return (
      <Box
        sx={{
          position: "relative",
          borderRadius: theme.shape.borderRadius,
          border: "1.5px solid orange",
          borderStyle: "inset",
          zIndex: "1100",
          backgroundColor: alpha(orange[200], 1),
          "&:hover": {
            backgroundColor: alpha(orange[300], 1),
          },
          display: "flex",
        }}
      >
        <InputBase
        fullWidth={true}
          value={value}
          onChange={handleChange}
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search Products"
          onKeyDown={(e)=>{if(e.key=="Enter"){handleSearch(value)}}}
          // inputProps={{ "aria-label": "search products" }}
        />
        <IconButton  type="submit" sx={{ p: "10px" }} aria-label="search"  onClick={()=>handleSearch(value)}>
          <SearchIcon />
        </IconButton>
      </Box>
    );
  };



const NewSearch = ({ classes }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSearch = (value) => {
    if (value !== ""){
        dispatch(filterActions.setSearchField(value))
        navigate("/products")
      }
  }
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <PopupState variant="popper" popupId="demo-popup-popper">
          {(popupState) => (
            <>
              <Box  >
                <IconButton {...bindToggle(popupState)} size="medium"
                  sx={{backgroundColor: "grey",  position: 'absolute', right: '20%', bottom: '18px',transform:'scale(1.2)'}}
                >
                  {" "}
                  <SearchIcon />{" "}
                </IconButton>
              </Box>
              <PopperStyle {...bindPopper(popupState)} transition>
                {({ TransitionProps }) => (
                  <>
                    <Transitions
                      type="zoom"
                      {...TransitionProps}
                      sx={{ transformOrigin: "center top" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid item xs>
                          <SearchBar popupState={popupState} handleSearch={handleSearch} />
                        </Grid>
                      </Grid>
                    </Transitions>
                  </>
                )}
              </PopperStyle>
            </>
          )}
        </PopupState>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <SearchWebBar handleSearch={handleSearch} />
      </Box>
    </>
  );
};

NewSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewSearch);
