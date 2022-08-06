import React from 'react';
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Box, Button, CardActionArea, CardActions, colors, Divider, Grid, Skeleton } from '@mui/material';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme)=>({
    root:{
      "&:hover": {
        backgroundColor: ""
      }
    },
    cardC: {
        padding: "5px"
    },
    typo1: {
        padding: "0px"
    },
    box: {
        display: "flex",
        alignItems: "center",
        "& img": {
            marginLeft: "10px"
        },
        
    }
}))

function SkeletonProduct() {
  
    const classes = useStyles();
    
    
  
  // const { loading = false } = props;
  
  
  return (
    
      
      
    <Card className={classes.root} raised={true} sx={{ maxWidth: 200, overflow: 'hidden', borderRadius: "8px", }} elevation={1}>
    <CardActionArea >
    {/* onClick={() => props.Render({id, name, type, price, color,img ,units: 1})} */}
      <Box >
      
       <Skeleton variant='rectangular'  width="200" height="150px" ></Skeleton>
      
      
      </Box>
      <CardContent className={classes.cardC} >
      <Skeleton  width="200" ></Skeleton>
        
        <Divider/>
        <Box display="flex" marginBottom={1} marginTop={1}>
        <Skeleton variant="rectangular" height="10" width="122px" ></Skeleton>
        <Skeleton sx={{marginLeft:"10px", width: "22px"}} variant="circular" height="22"  ></Skeleton>
        </Box>
         <Skeleton variant="rectangular" height="10" ></Skeleton>
      </CardContent>
    </CardActionArea>
    
  </Card> 
  );
}

export default SkeletonProduct;
