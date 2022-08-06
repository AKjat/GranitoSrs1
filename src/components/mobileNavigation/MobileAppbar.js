import { AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MobileDrawer from './MobileDrawer';

const useStyles= makeStyles((theme)=>({
    mobileView: {
         
        // position: 'fixed',
        // backgroundColor: '#fff',
        // bottom: '0',
        // left: '0',
        // width: '100%',
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
      <MobileDrawer loggedUser={loggedUser} handleLogout={handleLogout}/>
    </div>
  );
}

export default MobileAppbar;
