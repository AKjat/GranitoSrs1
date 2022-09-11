import { Autocomplete, Container, Grid, TextField, Typography, Box, InputAdornment, Button } from '@mui/material'
import React, { useState } from 'react'
import {Country, State, City} from 'country-state-city'
import { MaskField } from 'react-mask-field'
import InputMask from 'react-input-mask'
import allSStates from '../Components/StatesValues'
// import BreadCrumbs from '../../../components/Ui/Breadcrumbs'

const TransportEstimate = () => {
  const [allStates, setAllStates] = useState([])
  const [stateVal, setStateVal] = useState(null)
  const [cityVal, setCityVal] = useState(null)
  const [stateCode, setStateCode] = useState()
  const [showCost, setShowCost] = useState(false)
  const [qty, setQty] = useState(0)
  const states = State.getStatesOfCountry('IN')

  const EstimateCost = qty*stateVal?.value

  const handleStateChange =(event, value)=>{
    console.log(value,"valllT")
    setStateCode(value?.isoCode)
    setStateVal(value)
} 
  const handleCityChange =(event, value)=>{
    setCityVal(value)
} 

const handleQuantity = (event, value) => {
    console.log({event: event.target.value, value:value})
    setQty(event.target.value)
}

const handleCostEstimate=()=>{
    setShowCost(true)
}

console.log(State.getStatesOfCountry('IN'))
  return (
    <Container >
      {/* <Box marginTop={1} marginBottom={1}>
        <BreadCrumbs data={[{name: "Transport Estimate", link: "#"}]}/>
      </Box> */}
      <Box display="flex" justifyContent="center">
            <Typography variant='h5' alignSelf='center'>
                Get Your Transportation Cost Estimate
            </Typography>
      </Box>
      <Grid container marginTop={1}>
        <Grid item xs={6}>
          <Box marginTop={1}>
              <Typography variant="body1" >
                  Design your plan with ease by making an estimate transportation cost.
              </Typography>
              <Typography variant="body1" gutterBottom>
                  Start planning your project material total cost with Shree Ram Stones.
              </Typography>
              <Typography variant="body1">
                  Our team will assist you in every aspect of delivery needs.
              </Typography>
          </Box>
          <Box sx={{height: 500}}>
              <img style={{height:"100%", width:"100%", objectFit: "contain"}} src="img/transportCost/transport.png" alt="" />
          </Box>
        </Grid>

        <Grid item xs={6} >
            
            <Grid container direction='column' spacing={1} marginTop={1}>
              <Grid item>
              <Autocomplete
                             options={allSStates}
                             onChange={handleStateChange}
                             value={stateVal}
                             fullWidth
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
                                   label="State"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
              </Grid>
              <Grid item>
                  <Autocomplete
                             options={City.getCitiesOfState('IN',stateCode)}
                             onChange={handleCityChange}
                             value={cityVal}
                             fullWidth
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
                                   label="City"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />

              </Grid>

              <Grid item>
              <InputMask
                  mask="999999"
                  disabled={false}
                  maskChar="_"
                  onChange={(e,v)=>console.log({Event:e.target.value, Value:v})}
                  type='number'
                  >   
                  {() => <TextField label="Postal Code" fullWidth />}
              </InputMask>
                    {/* <TextField fullWidth label='Postal Code' type='number' /> */}
              </Grid>
              <Grid item >
                <Grid container>
                    <Grid item xs={4}>
                    <Autocomplete
                             options={Country.getAllCountries()}
                             fullWidth
                             autoHighlight
                             getOptionLabel={(option) => "+"+option.phonecode}
                             renderOption={(props, option) => (
                             <Box component="li" sx={{ mr: 2, flexShrink: 0  }} {...props}>
                               {option.flag} {option.name} 
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="Code"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField fullWidth label='Mobile Number' type='number'/>
                    </Grid>
                </Grid>
                  
                    
              </Grid>
              <Grid item>
                    <TextField fullWidth label='Enter Your Quantity' type='number' 
                      onChange={handleQuantity}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">square feet</InputAdornment>
                        ),
                      }}
                    />
              </Grid>
              <Grid item>
                      <Button onClick={handleCostEstimate} variant='outlined'>Submit</Button>
              </Grid>
              <Grid item>
              {showCost?<Typography variant="body1" textAlign="center">Your Estimate Cost: {EstimateCost} INR till your doorstep</Typography>:""}
              </Grid>
            </Grid>
            
        </Grid>

        
      </Grid>
         
          
    </Container>

  )
}

export default TransportEstimate

function CustomMaskField({ inputRef, ...otherProps }) {
  return <MaskField ref={inputRef} mask="___-___" replacement="_" {...otherProps} />;
}



