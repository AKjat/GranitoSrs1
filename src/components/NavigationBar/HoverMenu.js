import React, { useState, useRef } from "react";
import { Link } from "react-router-dom"
import { makeStyles } from "@mui/styles";
import { Button, MenuItem, Popover, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import axios from "axios";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch } from "react-redux";
import { productSearchActions } from "../../pages/products/Reducers/productReducer";

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  popoverContent: {
    pointerEvents: "auto"
  }
}));

const HoverMenu = ({ loading, login, wrong, clearWrongLogin }) => {
  const dispatch = useDispatch()
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const classes = useStyles();

  const popoverEnter = ({ currentTarget }) => {
    setOpenedPopover(true);
  };

  const popoverLeave = ({ currentTarget }) => {
    setOpenedPopover(false);
  };

  const [categories, setCategories] = useState()
  
  // React.useEffect(() => { 
  //   getCategories()
  // }, []);
  
  // const getCategories = () => {
  //   axios.get(`categories/`)
  //   .then((response)=>{
  //     setCategories(response.data)
  //   })
  // }

  const handleProductsClick=()=>{
    dispatch(productSearchActions.clearSearch())
  }
  const handleFilterCateg=(id)=>{
      dispatch(productSearchActions.setSearch({name:"category", value:id}))
  }

  return (
    <div style={{display: 'flex', alignItems:'center'}}>
        <Button
        color="primary"
        ref={popoverAnchor}
        aria-owns="mouse-over-popover"
        aria-haspopup="true"
        component={Link}
        to="/products"
        // onClick={openedPopover? popoverLeave : popoverEnter}
        onMouseEnter={popoverEnter}
        // onClick={popoverEnter}
        onClick={handleProductsClick}
        onMouseLeave={popoverLeave}
        endIcon={openedPopover ? <ExpandLess /> : <ExpandMore />}
        >
        Products
        </Button>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.popoverContent
        }}
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
      >
        {categories? categories.map((d)=> (
          <Link to={`/products`} key={d.id}>
          <ListItemButton onClick={()=>handleFilterCateg(d.id)}>
          <ListItemIcon sx={{ minWidth: "12px" }} >
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText secondary={d.name} />
        </ListItemButton>
        </Link>
        )) : ""}
      </Popover>
    </div>
  );
};

export default HoverMenu;



















// import React, { useState } from "react";


// import { Button,  createMuiTheme,  Menu, MenuItem } from "@mui/material";
// import { ThemeProvider } from "@mui/styles";
// function HoverMenu() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
  
//     function handleClick(event) {
//       if (anchorEl !== event.currentTarget) {
//         setAnchorEl(event.currentTarget);
//       }
//     }
  
//     function handleClose() {
//       setAnchorEl(null);
//     }
  
//     return (
//       <div >
//         <Button
//           aria-owns={anchorEl ? "simple-menu" : undefined}
//           aria-haspopup="true"
//           onClick={handleClick}
//           onMouseOver={handleClick}
          
//         >
//           Open Menu
//         </Button>
//         <Menu
//           id="simple-menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//           MenuListProps={{ onMouseLeave: handleClose }}
//         >
//           <MenuItem onClick={handleClose}>Profile</MenuItem>
//           <MenuItem onClick={handleClose}>My account</MenuItem>
//           <MenuItem onClick={handleClose}>Logout</MenuItem>
//         </Menu>
//       </div>
//     );
//   }
  
//   export default HoverMenu;