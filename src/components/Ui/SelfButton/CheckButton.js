import { Box, Checkbox, Grid, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';

function CheckButton({title, img, onChange}) {
    const [check, setcheck] = useState(false);
    const put = () => {
       
        setcheck(!check ? true : false);
        console.log('checked')
        console.log(!check)
    };

    
    
  return (
    <div>
              <ListItemButton onClick={put}  sx={{padding: '0'}} >
                  <Grid container direction='row' alignItems='center' >
                      <Grid item> <Checkbox size='small' checked={check} onChange={onChange} /> </Grid>
                      <Grid item marginRight={1} > {img} </Grid>
                      <Grid item> <ListItemText secondary={title} /> </Grid>
                  </Grid>   
              </ListItemButton>
    </div>
  );
}

export default CheckButton;
