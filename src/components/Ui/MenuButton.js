import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowBackIos';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { ExpandLess, ExpandMore } from '@mui/icons-material';


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <>
    <Button onMouseOver={handleClick}  size='small' variant='containe' className='button' endIcon={open ? <ExpandLess /> : <ExpandMore />} >Indian Marbles</Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
        >
          <MenuItem onClick={handleClose}>Black Marbles</MenuItem>
          <MenuItem onClick={handleClose}>White Marbles</MenuItem>
          <MenuItem onClick={handleClose}>Gold Marbles</MenuItem>
          <MenuItem onClick={handleClose}>Makrana Marbles</MenuItem>
          <MenuItem onClick={handleClose}>Brown Marbles</MenuItem>
          <MenuItem onClick={handleClose}>Pink Marbles</MenuItem>
          <MenuItem onClick={handleClose}>Green Marbles</MenuItem>
        </Menu>
        </>
  );
}
