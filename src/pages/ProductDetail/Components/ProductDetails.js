import React, {useState, useEffect} from "react";
import { Box,  Divider, Grid,  Skeleton, Typography, Button } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import { Link } from "react-router-dom";



const ProductDetails = ({product, loading}) => {

  const productA = product?product:null
  const [item, setItem] = useState();
  useEffect(() => {
    setItem(productA)
  }, [productA]);
  return (
    <Box overflow="hidden">
      <Box>
        <Typography variant="h5" gutterBottom>
          {item?.name}
        </Typography>
        
      </Box>
      
      
      <Grid container alignItems="center" >
        <Grid item xs={4}>
          <Box sx={{borderRadius: "100%", backgroundColor: 'gainsboro', display: 'inline-flex', padding:1, alignItems:"center" }} >
            <CurrencyRupeeIcon sx={{color:"green"}}/>
            {/* <MonetizationOnIcon sx={{color:"green"}}/> */}
            <Typography variant="h6" color="green">{item?.price}</Typography>
          </Box>
        </Grid>
        {/* <Grid item xs={3}>
          <Typography sx={{opacity: "0.7"}} variant="body1">
          Available Pieces : {" "}
          </Typography>
        </Grid>
        <Grid item xs={5}>
              {loading?(<Skeleton width="100px"></Skeleton>):
              ( <Typography marginLeft={1} variant="body1" >{item?.available_pieces} </Typography>)}
        </Grid>   */}
        <Grid item xs={3}>
        <Button variant="outlined" component={Link} to="/transportestimate">
        Transport Estimate
      </Button>
            {/* <TransportationCostEstimate /> */}
        </Grid>  
      </Grid>
      

      <Grid
        container
        marginTop={1}
        spacing={3}
        direction="row"
        justifyContent="space-around"
        marginLeft={0}
        bgcolor="gainsboro"
      >
        <Grid
          item
          xs={4}
          justifyContent="center"
          sx={{ paddingLeft: "0 !important" }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            alignItems="center"
          >
            <Grid item>
              <CalendarViewWeekIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">Available pieces</Typography>
            </Grid>
            <Grid item>
              <Divider width="60px" light={true} />
            </Grid>
            <Grid item>
              {loading?(<Skeleton width="70px"></Skeleton>):(<>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body1" >{item?.available_pieces}</Typography>
                {/* <Typography
                  variant="body2"
                  style={{ textDecoration: "line-through", opacity: "0.6" }}
                >
                  ₹{"  "}950
                </Typography> */}
              </Box>
              </>)}
              
              
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ paddingLeft: "0 !important" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            alignItems="center"
          >
            <Grid item>
              <SquareFootIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">Square Feet</Typography>
            </Grid>
            <Grid item>
              <Divider width="40px" light={true} />
            </Grid>
            <Grid item>
              {loading?(<Skeleton width="70px"></Skeleton>):
              (<Typography variant="body2">{item?.quantity} Sq. Ft.</Typography>)}
              
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ paddingLeft: "0 !important" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            alignItems="center"
          >
            <Grid item>
              <LineWeightIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">Thickness</Typography>
            </Grid>
            <Grid item>
              <Divider width="40px" light={true} />
            </Grid>
            <Grid item>
            {loading?(<Skeleton width="70px"></Skeleton>):
              (<Typography variant="body2">{item?.thickness} MM</Typography>)}
              
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container alignItems="center" >
        <Grid item xs={3}>
          <Typography sx={{opacity: "0.7"}} variant="body1" >
          Color : {" "}
          </Typography>
        </Grid>
        <Grid item xs={9}>
              {loading?(<Skeleton width="70px"></Skeleton>):
              (<Typography marginLeft={1} variant="body1" >{item?.color?.name}</Typography>)}
            
        </Grid>  
      </Grid>
      <Divider/>
      <Grid container alignItems="center" >
        <Grid item xs={3}>
          <Typography sx={{opacity: "0.7"}} variant="body1" >
          Usage : {" "}
          </Typography>
        </Grid>
        <Grid item xs={9} display="flex">
            {/* {loading?(<Skeleton width="70px"></Skeleton>):
              ()} */}
              {item?(item.usage.map((d)=>(
              <Typography key={d.id} marginLeft={1} variant="body1">
                {d.name}
              </Typography>
            )))
            :
              <Skeleton width="70px"></Skeleton>}

            
        </Grid>  
      </Grid>
      
      <Divider/>
      <Grid container alignItems="center" >
        <Grid item xs={3}>
          <Typography sx={{opacity: "0.7"}} variant="body1">
          Origin : {" "}
          </Typography>
        </Grid>
        <Grid item xs={9}>
              {loading?(<Skeleton width="70px"></Skeleton>):
              (<Typography marginLeft={1} variant="body1" >{item?.origin}</Typography>)}
            
        </Grid>  
      </Grid>
      <Divider />

    </Box>
  );
};

export default ProductDetails;