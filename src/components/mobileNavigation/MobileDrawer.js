import * as React from 'react';
import {useEffect} from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Badge, ButtonGroup, Collapse, Grid} from '@mui/material';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu'
import ProfileMenu from '../header/profileMenu/Menu';
import { productSearchActions } from '../../pages/products/Reducers/productReducer';

const useStyles = makeStyles({
    // [theme.bre]
})
export default function MobileDrawer({loggedUser, handleLogout}) {
  const[cat, setCat] = React.useState([]);
  const totalCartItems = useSelector(state=> state.cart.totalQuantity)
  const [showList, setShowList]=React.useState(false)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // useEffect(() => {
  //   axios
  //      .get(`categories/`)
  //      .then((response)=>setCat(response.data))
  // }, []);
  //   console.log(cat)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    console.log("ANCHHOOOOOR CLOOOSEd")
  };

  const dispatch = useDispatch()
  
  const handleProductsClick=()=>{
    dispatch(productSearchActions.clearSearch())
    setState({...state, 'left': false})
  }
  const handleFilterCateg=(id)=>{
      console.log("Hover", id)
      dispatch(productSearchActions.setSearch({name:"category", value:id}))
      setState({...state, 'left': false})
  }

  const logOut = () => {
    setState({...state, 'left': false})
    handleLogout()
  }
 
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vw' }}
      role="presentation"
      
    >
      
          <Grid container justifyContent='space-between'>
            <Grid component={Link} to='/' item lg={1} marginTop={3} marginLeft={3}>
                <img  height={50} src="img/logo/logo1.png" alt="logo" />
            </Grid>
              <Grid item marginTop={3} marginRight={3} onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)} >
                  <CloseIcon/>
              </Grid>
          </Grid>
         
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      
      <Divider />
      <Grid container marginTop={1} direction="column" spacing={8} alignItems="center" justifyContent="space-between">
            <Grid item >
              <Button variant="contained" LinkComponent={Link} to="/" onClick={toggleDrawer(anchor, false)} sx={{width:"80vw"}}  >Home</Button>
            </Grid>
            <Grid item display="flex" flexDirection='column'>
            
            {/* <Button>
              Products
            </Button> */}
            
            {/* <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ flexGrow: 1, overflowY: "auto" }}
      //   sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >       
            <Button >
            <TreeItem sx={{marginBottom:2}} nodeId={`120`} label="Products" >
                    <TreeItem sx={{marginBottom:1, textDecoration: "none"}}  label="ccsd" nodeId="4"/>
            </TreeItem>
            </Button>
            </TreeView> */}
            
            <ButtonGroup  sx={{justifyContent:'center'}} aria-label="split button"  >
            
            <Button LinkComponent={Link} to="/products"   sx={{borderRadius:"4px 0 0 4px ", width: "calc(80vw - 40px)"}} onClick={()=>handleProductsClick()} >Products</Button>
              <Button sx={{borderRadius:"0 4px 4px 0 "}}
               size="small"
               onClick={()=>setShowList(!showList)}
                 >
                   <ArrowDropDownIcon />
                  </Button>
            </ButtonGroup>
            <Collapse in={showList}>
            <Box display="flex" flexDirection="column" gap={1} disablePadding>
              {cat?.map((d)=>
              
              <Button key={d.id} sx={{color:"black"}} LinkComponent={Link} to={`/products`} onClick={()=>handleFilterCateg(d.id)}>
                {d.name}
              </Button>
              
              )}
              
          
          </Box>
            </Collapse>

            </Grid>
            <Grid item>
              {loggedUser? 
              // <Button variant="outlined"  onClick={logOut} sx={{width:"80vw"}}>Log Out</Button>
              <ProfileMenu loggedUser={loggedUser} handleLogout={handleLogout} />
              :
              <Button variant="outlined" component={Link} to="/login" onClick={toggleDrawer(anchor, false)} sx={{width:"80vw"}}>Sign In</Button>
              }
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{width:"80vw"}}>About Us</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{width:"80vw"}} component={Link} to='/cart' onClick={toggleDrawer(anchor, false)}>Your Orders</Button>
            </Grid>
          </Grid>
      
    </Box>
  );

  return (
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
            
          <Grid container justifyContent='space-around' alignItems='center' height={60} >
            <Grid item>
                <Button startIcon={<Badge  color='primary'><MenuIcon fontSize='medium'/></Badge>} onClick={toggleDrawer("left", true)}></Button>
            </Grid>
            {/* <Grid item >
                
                <Button component={Link} to="/" startIcon={<Badge  color='primary'><HomeIcon fontSize='medium'/></Badge>}></Button>
            </Grid>
            <Grid item>
                
                    <Button  component={Link} to="/cart" startIcon={<Badge badgeContent={totalCartItems} color='primary'><LocalShippingIcon fontSize='medium' /></Badge>}></Button>
                
            </Grid>
            <Grid>
                <Button component={Link} to="/login" startIcon={<Badge  color='primary'><PersonIcon fontSize='medium'/></Badge>}></Button>
            </Grid> */}
          </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor) } 
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
