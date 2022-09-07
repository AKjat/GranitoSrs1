import { AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MobileDrawer from './MobileDrawer';
import SimpleBottomNavigation from './mobileNavigation';

const useStyles= makeStyles((theme)=>({
    mobileView: {
         
        
        [theme.breakpoints.down('md')]: {
            display: 'block'
          },
          [theme.breakpoints.up('md')]: {
            display: 'none'
          }
    },
    
}))
const MobileAppbar = ({loggedUser, handleLogout}) => {
    const classes = useStyles();
  return (
    <div   className={classes.mobileView}>
      {/* <MobileDrawer loggedUser={loggedUser} handleLogout={handleLogout}/> */}
      <SimpleBottomNavigation/>
    </div>
  );
}

export default MobileAppbar;
