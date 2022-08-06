import React from 'react';
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, colors, Divider, Grid, Skeleton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {useState} from 'react';


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
        
        
    }
}))

function Product(props) {
  const d = props.d
    const classes = useStyles();
    
  const [open, setOpen] = useState(false);
  const handleClickOpen=()=>{
      setOpen(true)
  }
  // const { loading = false } = props;
  const loading = props.loading
  
  return (
    
      
      
    <Card className={classes.root} raised={true} sx={{ maxWidth: 200, overflow: 'hidden', borderRadius: "8px", }} elevation={1}>
    <CardActionArea LinkComponent={Link} to={`/product/${d.id}`}  >
    {/* onClick={() => props.Render({id, name, type, price, color,img ,units: 1})} */}
      <Box >
        <CardMedia
        component="img"
        height="150"
        width='200'
        image={d.images[0]?.image}
        alt={d.name}
      />
      
      
      </Box>
      <CardContent className={classes.cardC} >
      <Typography className={classes.typo1} gutterBottom variant="h6" component="div">
          {d.name}
        </Typography>
        
        <Divider/>
        <Box className={classes.box}>
          <Typography  variant="body2" >
          Color:
          </Typography>
          <Box sx={{height: "15px", marginLeft:1 ,width: "15px", borderRadius:"100%", border:"1px solid", backgroundColor: `${d.color.name}`}}></Box>
        </Box> 
        <Box className={classes.box} marginTop={1}>
        <Typography variant="body2">Price:  </Typography>     
          <Typography variant="body1" sx={{ml: 1}} >{d.price} ₹</Typography>
          </Box>
        
      </CardContent>
    </CardActionArea>
    {/* <CardActions>
      <Button size="small" color="secondary" variant='contained'>
        Book Now
      </Button>
    </CardActions> */}
    {/* <ProductDialogue  setOpen={setOpen} open={open} name={props.d.name}/> */}
  </Card> 
  );
}

export default Product;
