import { Box, Grid, Skeleton, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
// import ReactImageMagnify from 'react-image-magnify';

const useStyles = makeStyles((theme)=>({
    boxImgSm:{
            [theme.breakpoints.down('md')]: {
                height: '25vh !important',
              },
              [theme.breakpoints.up('md')]: {
                height: '55vh !important',
              }   
    },
    boxImgBig:{
        zIndex: '1000'
    },
    imgList: {
        "& img":{
            cursor: 'pointer',
            
            opacity: '0.6',
            [theme.breakpoints.down('md')]: {
                height: 40,
              },
              [theme.breakpoints.up('md')]: {
                height: 50,
              }
        },
        "& img:hover":{
            opacity: '1'
        }
    }
}))

const ImagSelect = ({product, loading}) => {

    // const [src, setsrc] = useState("/img/product/AlaskaGold/1.jpg");
    
    const images = product?.images
    const firstImage = images?images[0]?.image:null

    const [src, setsrc] = useState("");
    useEffect(() => {
      setsrc(firstImage)
    }, [firstImage]);

   
    const imgClick =(url)=>{
        setsrc(url)
    }
   
    const classes= useStyles();
  return (
    <Grid container direction='column' alignItems='center' spacing={1}>
        <Grid item >
            {loading?(<Skeleton variant="rectangular"  height={200}></Skeleton>):(

<Box >
{/* <ReactImageMagnify imageClassName={classes.boxImgSm} 
                    enlargedImageClassName={classes.boxImgBig}
{...{           
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: src,
                    required: false
                    
                    
                },
                largeImage: {
                  
                    src: src,
                    width: 1447,
                    height: 1150,
                    
                },
                enlargedImagePosition:"over",
                enlargedImageContainerDimensions:{width: '135%', height: '100%'},
                shouldUsePositiveSpaceLens: true,
                isHintEnabled:true,
                enlargedImageContainerStyle: {zIndex: 10,
                                              borderRadius: 2,
                                            boxShadow: 10}
            }} /> */}

    
    </Box>
            )}
           
        </Grid>
        <Grid item>
            <Grid container spacing={1} className={classes.imgList}>
                {!loading && <Stack direction="row" > <Skeleton height={50} variant="rectangular"></Skeleton>
                    <Skeleton variant="rectangular" height={50}></Skeleton>
                    <Skeleton variant="rectangular" height={50}></Skeleton>
                 </Stack>}
                {images && images.map((d, index)=>(<Grid item key={index}>
                <img onMouseOver={()=>imgClick(d.image)}  src={d?.image} alt="" />
               
                </Grid> ))}
                
            </Grid>
        </Grid>
    </Grid>
  );
}

export default ImagSelect;
