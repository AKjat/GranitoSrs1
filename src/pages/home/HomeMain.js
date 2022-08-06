import { Box, Button, Card, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, {useEffect} from "react";
import ImgSlider from "../../components/Ui/ImgSlider";
import HomeGridCarousel from "../../components/Categories/HomeGridCarousel";
import { Link } from "react-router-dom";
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
  },
  tagBox: {
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(0.2), 
    boxShadow:"0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)", 
    padding:theme.spacing(1), 
    marginLeft:theme.spacing(1), 
    marginRight:theme.spacing(1),
    
    "& .tag_heading":{
      display:"flex" ,
      justifyContent:"space-between" ,
      alignItems:"center",
      marginBottom: theme.spacing(1),
      // borderRadius: theme.spacing(1),
      borderColor: theme.palette.primary.main ,
      borderLeftStyle:"solid",
      border: theme.spacing(1),
      paddingLeft:theme.spacing(1)
    }
  }
}));

function HomeMain(props) {
  const [mostDemanding, setMostDemanding] = React.useState([])
  const [newArrival, setNewArrival] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  useEffect(() => { 
    getProducts()
    
  }, []);
  
  const getProducts = () => {
    axios.get(`products/`)
    .then((response)=>{
      const allproducts = response.data.results
      console.log(allproducts)
      setMostDemanding(allproducts.filter((d)=>d.tag.name === "Most Demanding"))
      setNewArrival(allproducts.filter((d)=>d.tag.name === "Newly Arrival"))
      setLoading(false)
    })
  }
  const classes = useStyles();
  return (
    <Box  marginTop={0.05} >
      {/* <Slide/> ---> landing Page Slider with play and pause */}
      <ImgSlider />
      <Box className={classes.tagBox} >
        <Box className="tag_heading" >
        <Typography variant="h5" component="h5" align="center">
          Newly Arrivals 
        </Typography>
        <Button variant="outlined" component={Link} to="/products" >View All</Button>
        </Box>
        <Divider/>
        <Box marginTop={1}>
          <HomeGridCarousel item={newArrival} loading={loading} />
        </Box>
      </Box>

      <Box className={classes.tagBox}> 
      <Box className="tag_heading" >
        <Typography variant="h5" component="h5" align="center">
          Most Demanding
        </Typography>
        <Button variant="outlined" component={Link} to="/products">View All</Button>
        </Box>
        <Divider />
        <Box marginTop={1}>
          <HomeGridCarousel item={mostDemanding} loading={loading}/>
        </Box>
      </Box>

      {/* <Box>
        <MultiItem/>
      </Box> */}
      

      {/* <Carousel cols={5} showDots loop gap={10} >
        {props.items.slice(0, 7).map((d, i) => (
          <Carousel.Item key={i}>
            <Card>
              <img src={d.img} style={{height: "150px"}}/>
              <div>
                <Typography>{d.name}</Typography>
                
                <span>{d.price}</span>  
              </div>
              
            </Card>
            
          </Carousel.Item>
        ))}
      </Carousel> */}

      {/* <Box id="section1"  height="1000px">
          <h2>About Us</h2>
      </Box> */}
      {/* <Box  marginTop={1} marginBottom={0.2}   boxShadow={1}>
            <Typography   variant="h5" component="h5" align="center">
              Products
            </Typography>
            </Box> */}
      {/* <ProductCard items= {props.items}/> */}
    </Box>
  );
}

export default HomeMain;
