import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'

const Categ = (props) => {
    const [value, setValue] = React.useState(0);
    const filterItem=(categ)=>{
       props.handleCateg(categ)
        console.log(categ)
    }
    const filterIte=(cat)=>{
        props.handleAll(cat)
    }    
    const handleChange = ( event, newValue) => {         
        setValue(newValue);
      };
  return (
    
      <Box sx={{ width: '100%', bgcolor: '#e59b0e', }}>
      <Tabs value={value} onChange={handleChange} indicatorColor='secondary' textColor='secondary' selectionFollowsFocus={true} centered>
        
        <Tab component={Link} to='/products/' onClick={()=>filterIte('')} label="All" />
        <Tab component={Link} to='/products/filter' onClick={()=>filterItem('marble')} label="Marbles" />
        <Tab component={Link} to='/products/filter' onClick={()=>filterItem('granite')} label="Granites" />
        <Tab component={Link} to='/products/filter' onClick={()=>filterItem('limestone')} label="Limestones" />
      </Tabs>
    </Box>
    
  );
}

// export default Categ;
