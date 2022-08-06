import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { useDispatch, useSelector } from 'react-redux';
import UploadIcon from '@mui/icons-material/Upload';
import { Box, Grid, Input, Stack, Button, TextField, Typography, Autocomplete, InputAdornment, FormGroup, IconButton  } from '@mui/material';
import { saveProduct, uploadProductActions } from '../Reducer/uploadSlice';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import {Country, State, City} from "country-state-city"
import { uploadImgActions } from '../Reducer/imageUpload';


const steps = ['Details', 'Pricing Details', 'Images'];

export default function NewProduct() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const dispatch = useDispatch()
  // -----------------> {Pricing}
  const [discountDisable, setDiscountDisable] = React.useState(true)
    const handleChange = (event, value) => {
        value==="Yes"? setDiscountDisable(false): setDiscountDisable(true)
    }
  // ------------------> {Setting up inputs} <------------------------//
  const uploadForm = useSelector(state=>state.uploadProduct)
  const [images, setImages] = React.useState({product:"", image:""})
  const [inputs, setInputs] = React.useState({
    name: "",
    color: "",
    thickness: null,
    finishing: "",
    category: "",
    origin: "",
    height: null,
    width: null,
    quantity: null,
    usage: [],
    tag: "",
    description: "",
    available_pieces: null,
    images:[]
  });
  const handleTextChange = (event) => {
    const name = event.target.name;
    
    const value = event.target.type === "number"? parseFloat(event.target.value): event.target.value
    
    setInputs((values) => ({ ...values, [name]: value }));
    dispatch(uploadProductActions.setInputs({name:name, value:value}))
  };
  const handleAutoChange = (e) => (event, value) => {
    const name = e;
    if(name === "usage"){
      
      const value1= value.map(x=>x.id)
      setInputs((values) => ({ ...values, [name]: value1 }));
      dispatch(uploadProductActions.setInputs({name:name, value:value1}))
      console.log("AKCateg", value1, name);
    console.log({ event: event, value: value });
    }
    else if(name === "origin"){
      setInputs((values) => ({ ...values, [name]: value.name}))
      dispatch(uploadProductActions.setInputs({name: name, value: value.name}))
    }
    else{
      const value1 = value.id;
      setInputs((values) => ({ ...values, [name]: value1 }));
      dispatch(uploadProductActions.setInputs({name:name, value:value1}))
      console.log("AKCateg", value1, name);
    console.log({ event: event, value: value });
    }
    
  };
  const handleCustomChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const onChange = (name, value) => {
    dispatch(uploadProductActions.setInputs({name:name, value:value}))
  }
  // ---------------------->
  // ----------------------> Fetch Product of particular id <---------------- //
  const productId = useSelector(state=> state.imgUpload.id)
  const allImg = useSelector(state => state.imgUpload.image)

  const handleFileChange = (event,value) => {
    const imgURL = window.URL.createObjectURL(event.target.files[0])
    console.log(event.target,"file-0")
    const formData = new FormData()
    formData.append('product',productId)
    formData.append('image', event.target.files[0], event.target.files[0].name)
    
    // dispatch(saveImg(formData))
    axios
  .post("images/", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
  .then((res)=>{
    dispatch(uploadImgActions.setImages(res.data))
      console.log("responsee",res.data)
  })
  .catch((error)=>{
      console.log("Error", error)
  }) 
  }


  const handleImgDelete = (id) => {
    console.log(id)
    dispatch(uploadImgActions.delImages(id))
    axios
    .delete(`images/${id}`)
    .then((res)=>{
      console.log("responsee",res.data)
    })
    .catch((error)=>{
      console.log("Error", error)
    }) 
  }
  

  


// ---------------->
  
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const twoStepsCompleted = () => {
    return completedSteps() === totalSteps() - 1
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    // dispatch(uploadProductActions.setInputs(inputs))
    twoStepsCompleted() && dispatch(saveProduct(inputs))
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  

  const [categories, setCategories] = React.useState()
  const [tags, setTags] = React.useState()
  const [colors, setColors] = React.useState()
  const [usages, setUsages] = React.useState()
  const [finishings, setFinishings] = React.useState()
  // ---------> Fetching Categories <------------
  React.useEffect(() => { 
    getCategories()
    getTags()
    getUsages()
    getFinishings()
    getColors()
  }, []);
  
  const getCategories = () => {
    axios.get(`categories/`)
    .then((response)=>{
      setCategories(response.data)
    })
  }
  const getTags = () => {
    axios.get(`tags/`)
    .then((response)=>{
      setTags(response.data)
    })
  }
  const getUsages = () => {
    axios.get(`usages/`)
    .then((response)=>{
      setUsages(response.data)
    })
  }
  const getFinishings = () => {
    axios.get(`finishings/`)
    .then((response)=>{
      setFinishings(response.data)
    })
  }
  const getColors = () => {
    axios.get(`colors/`)
    .then((response)=>{
      setColors(response.data)
    })
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} sx={{marginTop:3, marginBottom:1}}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Add New product</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Page=1 Add Basic Details */}
            {activeStep === 0 && 
                <Box marginTop={2}>
                <FormGroup>
                  <Typography variant="h6" alignSelf="start">
                    Basic Details
                  </Typography>
                  <Grid container spacing={1} marginBottom={2} marginTop={1}>
                    <Grid item xs={6} md={4}>
                      <Stack direction="column" spacing={1}>
                        <TextField
                          label="Product Name"
                          name="name"
                          value={uploadForm.name}
                          fullWidth
                          onChange={handleTextChange}
                          required
                        />
                        {/* <CustomTextField
                          label="Product Name"
                          name="name"
                          onChange={onChange}
                          value={uploadForm.name}
                        /> */}
                          {/* <TextField
                              label="Color"
                              value={uploadForm.color}
                              onChange={handleTextChange}
                              name="color"
                          /> */}
                          <Autocomplete
                             options={colors?colors:[]}
                             onChange={handleAutoChange("color")}
                             
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="Color"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
                        <Autocomplete
                             options={Country.getAllCountries()}
                             onChange={handleAutoChange("origin")}
                             
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="Origin"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
                        {/* <TextField
                          label="Origin"
                          onChange={handleTextChange}
                          name="origin"
                          fullWidth
                        /> */}
                        
                        <Autocomplete
                             options={finishings?finishings:[]}
                             onChange={handleAutoChange("finishing")}
                             
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="Finishings"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
                        {/* <Autocomplete
                          onChange={handleAutoChange("finishing")}
                          fullWidth
                          // options={["Polished", "Bush hammered"]}
                          options={finishings? finishings.map(x=>x.name):[]}
                          renderInput={(params) => (
                            <TextField {...params} label="Product Finishing" />
                          )}
                        /> */}
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Stack direction="column" spacing={1}>
                      <Autocomplete
                             options={categories?categories:[]}
                             onChange={handleAutoChange("category")}
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="Category"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
                      <Autocomplete
                              multiple
                             options={usages?usages:[]}
                             onChange={handleAutoChange("usage")}
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="Usage"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
                        {/* <Autocomplete
                          onChange={handleAutoChange("usage")}
                          multiple
                          id="tags-outlined"
                          // options={usages?.map(x=>x.name)}
                          options={[
                            "Flooring",
                            "Wall",
                            "Countertop",
                            "Bathroom",
                            "Bathroom Walls",
                            "Rough",
                          ]}
                          filterSelectedOptions
                          renderInput={(params) => (
                            <TextField {...params} label="Usage" placeholder="" />
                          )}
                        /> */}
                          <Autocomplete
                             options={tags?tags:[]}
                             onChange={handleAutoChange("tag")}
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="Tag"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
                          <TextField
                          onChange={handleTextChange}
                          value={uploadForm.thickness}
                          name="thickness"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">mm</InputAdornment>
                            ),
                          }}
                          label="Thickness"
                          type="number"
                          fullWidth
                        />
                              
                        {/* <Autocomplete
                          options={["New Arrival", "Most Demanding", "All"]}
                          onChange={handleAutoChange("tag")}
                          renderInput={(params) => (
                            <TextField {...params} label="Select Tag" />
                          )}
                        /> */}
          
                        
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack direction="column" spacing={1}>
                        {/* <Autocomplete
                          onChange={handleAutoChange("category")}
                          fullWidth
                          // options={["Marble", "Granite"]}
                          options={categories? categories.map(x=>x.name):[]}
                          renderInput={(params) => (
                            <TextField {...params} label="Category" />
                          )}
                        /> */}

                        
          
                        
          
                        
          
                        <TextField
                          onChange={handleTextChange}
                          name="quantity"
                          label="Quantity"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">sq. feet</InputAdornment>
                            ),
                          }}
                          type="number"
                          fullWidth
                        />
                        
                        <Box display="flex" justifyContent="space-between">
                          <TextField
                            label="Height"
                            onChange={handleTextChange}
                            name="height"
                            type="number"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">cm</InputAdornment>
                              ),
                            }}
                          />
                          <TextField
                            label="Width"
                            onChange={handleTextChange}
                            name="width"
                            type="number"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">cm</InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                        <TextField
                          onChange={handleTextChange}
                          value={uploadForm.description}
                          label="Description"
                          name="description"
                          minRows={3}
                          multiline
                          fullWidth
                        />
                      </Stack>
                    </Grid>
                    
                  </Grid>
                  <Typography variant="h6" alignSelf="start">
                    Inventory Details
                  </Typography>
                  <Grid container spacing={1} marginBottom={1} marginTop={1}>
                    <Grid item xs={6} md={4}>
                      <TextField
                        label="Block Number"
                        fullWidth
                        onChange={handleTextChange}
                        value={uploadForm.block_number}
                        name="block_number"
                      />
                    </Grid>
                    <Grid item xs={6} md={4}>
                    <TextField
                        label="Available Pieces"
                        onChange={handleTextChange}
                        name="available_pieces"
                        value={uploadForm.available_pieces}
                        type="number"
                        fullWidth
                        InputProps={{
                          endAdornment: <InputAdornment position="end"></InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}></Grid>
                  </Grid>
                </FormGroup>
              </Box>
             }
            {activeStep === 2 && 
                <Grid container margin={2} spacing={1}>
                
                {allImg?.map((d, index)=> (
                  <Grid item xs={3} key={index}  >
                    <Box sx={{height:"180px", width: "100%", border: "1px dashed red", position:"relative"}}>
                    <img src={d.image} style={{height:"100%", width: "100%", objectFit: "contain", zIndex: 10, }} alt="" />
                    <IconButton size='large' onClick={()=>handleImgDelete(d.id)}    sx={{position: "absolute",  zIndex: 11, right:0, bottom:0}} color="primary"><DeleteIcon/></IconButton>
                    </Box>
                  </Grid>
                ))}
                <Box sx={{marginTop: 1, display: "flex", justifyContent: "center", width: "100%" }} >
                    <Box >
                        <Input id="image-upload" name='image' onChange={handleFileChange}  type="file" sx={{display: "none"}}></Input>
                        <Button variant="contained" onClick={()=>document.getElementById("image-upload").click()} startIcon={<UploadIcon/>}>Upload</Button>  
                    </Box> 
                </Box>
            </Grid>
            }
            {/* {activeStep === 1 && <FileUpload/> } */}
            {/* page=3 Adding Priceing Details */}
            {/* {activeStep === 2 && <PricingDetails/> } */}
            {activeStep === 1 && 
                <Box marginTop={2}>
                <FormGroup >
                  
                        <Typography variant='h6' alignSelf='start'>Pricing Details</Typography>
                  <Grid container spacing={1} marginBottom={2} marginTop={1}>
                      <Grid item xs={7} md={4}>
                          <Stack direction='column' spacing={1}>
                              <TextField label="Product Cost" value={uploadForm.price} name="price" onChange={handleTextChange} type="number" fullWidth
                                
                                InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">per sq.ft</InputAdornment>
                                ),
                              }}
                              />
                              <Autocomplete
                                options={["Yes", "No"]}
                                onChange={(event, value)=>handleChange(event, value)}
                                renderInput={(params) => (
                                <TextField {...params} label="Discount" />
                                )}
                              />
                              
                              
                              
                          </Stack>
                      </Grid>
                      <Grid item xs={7} md={4}>
                      <Stack direction='column' spacing={1}>
                            

                    <TextField label="Discount Percentage" type="number" fullWidth
                               disabled={discountDisable}
                               InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">%</InputAdornment>
                                ),
                              }}/>
                              <TextField label="Updated Cost" type="number" fullWidth
                                disabled
                                name="price"
                                onChange={handleTextChange}
                                InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">per sq.ft</InputAdornment>
                                ),
                              }}
                              />
                          </Stack>
                      </Grid>
                      <Grid item xs={4}>
                               
                      </Grid>
                  </Grid>  
                </FormGroup>
                </Box>
            }
            
            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    {steps[activeStep ]}  saved
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Save and next'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}