import { Autocomplete, Avatar, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Country, State, City} from 'country-state-city'
import { makeStyles, styled } from '@mui/styles';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, signupActions } from '../../redux/reducers/signupslice';
import { loginActions } from '../../redux';
import { sendOtp, verifyOTP } from '../../redux/reducers/loginSlice';
import { Copyright } from '../login/SignIn';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'
import { useNavigate } from 'react-router-dom';

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  });

  const useStyles= makeStyles((theme)=>({
    form: {
      [theme.breakpoints.down("md")]: {
        width:"100%",
      },
      [theme.breakpoints.up("md")]: {
        width: "60%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems:"center"
    },
    box: {
      [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        alignItems:"center"
      },
      [theme.breakpoints.up("md")]: {
        flexDirection:"row",
        justifyContent:'space-between'
      },
    },
    
  }))

const SignUp = () => {
  const classes = useStyles()
  const navigate = useNavigate()
    const signUpError = useSelector(state=>state.signup.error)
    const success = useSelector(state=> state.signup.success)
    console.log("SIGNUp ErrOR", signUpError)
    const [errorMessage, setErrorMessage] = React.useState({
        mobile:"",
        otp:null
    })
    const [countCode, setCountCode] = React.useState()
    // const [mobile, setMobile] = React.useState()
    const [data, setData] = React.useState({
      phone_number:"",
      otp:null
    })
    const [viewOTPform, setViewOTPform] = React.useState(false)
    // const countries = Country.getAllCountries()
    // const ind = Country.getCountryByCode("IN")
    console.log(viewOTPform, "OTPFORM")

    const dispatch = useDispatch()
    const handleCountryCode = (e, value) => {
      console.log(value.phonecode,"dsvsdvsdvsdv")
      setCountCode(value.phonecode)
    }

    const handlePhoneChange = (value) => {
      console.log(parseInt(value),"bbcbc")
      if(value.length<10){
        setErrorMessage({...errorMessage, mobile: "minimum 10 digits required"})
    }
    else{
        setErrorMessage({...errorMessage, mobile:""})
        setData({...data, phone_number: parseInt(value)})
        // setMobile(e.target.value)
    }
    }
    const handleChange =(e,v)=> {
        // console.log({event:e.target.value,value:v,name:e.target.name})
        // if(e.target.name === 'mobile'){
        //   if(e.target.value.length<10){
        //       setErrorMessage({...errorMessage, mobile: "minimum 10 digits required"})
        //   }
        //   else{
        //       setErrorMessage({...errorMessage, mobile:""})
        //       setData({...data, phone_number: parseInt(countCode+e.target.value)})
        //       // setMobile(e.target.value)
        //   }
        // }
        // else if(e.target.name === 'otp'){
          if(e.target.value.length<5){
            setErrorMessage({...errorMessage, otp: "minimum 5 digits OTP required"})
        }
          else{
            setErrorMessage({...errorMessage, otp: ""})
            setData({...data, otp: parseInt(e.target.value)})
          }
    
  }
    useEffect(() => { 
        setViewOTPform(false)
        
      }, []);
    useEffect(() => { 
      if(signUpError){
        setViewOTPform(false)
      }
      else{
        return
      }
        
      }, [signUpError]);

    const handleOTPsend=(event)=>{
        event.preventDefault()
        if(errorMessage.mobile === ""){
          setViewOTPform(true)
          // setData({...data, phone_number: countCode+mobile})
          // dispatch(signupActions.setMobile(countCode+mobile))
          dispatch(signupActions.setMobile(data.phone_number))
          dispatch(signUp())
        }
        else{
          setViewOTPform(false)
        }
    }

    const resendOTP = () => {
      dispatch(loginActions.setOtpSend(data.phone_number))
      dispatch(sendOtp())
    }

    const handleOTPSubmit = (event) => {
      event.preventDefault()
      dispatch(loginActions.setVerifyOtp({phone_number:data.phone_number, otp: data.otp}))
      dispatch(verifyOTP())
    }
    console.log(data,"afdfa data")
  return (
    <Container component="main">

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1, backgroundColor: "green"}}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          {!success?(<Box component="form"  onSubmit={handleOTPsend} sx={{ mt: 1 }}   >
              <PhoneInput
                  // country={'us'}
                  // value={this.state.phone}
                  // onChange={phone => this.setState({ phone })}
                  defaultErrorMessage='hllo'
                  name="phone"
                  country={'in'}
                  onChange={handlePhoneChange}
                />
              {/* <Box display="flex" className={classes.box} >
              <Autocomplete
                            
                             options={countries}
                             sx={{width:"40%"}}
                             autoHighlight
                             getOptionLabel={(option) =>option.phonecode.includes('+')?option.phonecode: "+"+option.phonecode}
                             onChange={handleCountryCode}
                             renderOption={(props, option) => (
                             <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 }}} {...props}>
                               <img src={`https://flagcdn.com/w20/${option.isoCode.toLowerCase()}.png`} alt="" /> {option.name} 
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   margin="normal"
                                   required
                                   label="Code"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />

                <TextField
                   label="Mobile Number"
                   margin="normal"
                   required
                   name="mobile"
                   error={errorMessage.mobile!==""?true:false}
                   helperText={errorMessage.mobile!==""&&errorMessage.mobile}
                   variant="outlined"
                   onChange={handleChange}
                   type="number"
                   fullWidth
                   sx={{width:"55%"}}
                />
              </Box> */}
            <Button
              type="submit"
              fullWidth
              variant="outlined"
            //   onClick={handleOTPsend}
              sx={{ mt: 3, mb: 2 }}
            >
              Send OTP
            </Button>
            {signUpError&&<Typography color="error">{signUpError}</Typography>}
          </Box>):(<>
            <Box component="form" onSubmit={handleOTPSubmit}  sx={{ mt: 1 }}>
              {signUpError &&<Typography color="error">{signUpError}</Typography>}
             <TextField 
               label="OTP"
               name='otp' 
               type="number" 
               error={errorMessage.otp!==""?true:false}
               helperText={errorMessage.otp!==""&&errorMessage.otp}
               onChange={handleChange} 
               fullWidth />
              

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
                fullWidth
              >
                Verify OTP and Login
              </Button>
              <Button
                variant="text"
                onClick={resendOTP}
              >
                Resend OTP
              </Button>
            </Box>
          </>)}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default SignUp