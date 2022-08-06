import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../redux';
import { Alert, Autocomplete, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {Country} from "country-state-city"
import { sendOtp, verifyOTP } from '../../redux/reducers/loginSlice';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Shree Ram Stones
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles= makeStyles((theme)=>({
  // form: {
  //   [theme.breakpoints.down("md")]: {
  //     width:"100%"
  //   },
  //      [theme.breakpoints.up("md")]: {
  //       width:"60%"
  //     },
  // },
  form: {
    [theme.breakpoints.down("md")]: {
      width:"100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
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

const theme = createTheme();

export default function SignIn() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const countries = Country.getAllCountries()
    const isLoggedIn = useSelector(state=>state.login.isLoggedIn)
    const loggedUser = useSelector(state=>state.login.loggedUser)
    let success = useSelector(state=>state.login.success) 
    // console.log
    const [viewOTPform, setViewOTPform] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState({
      mobile:"",
      otp:null
    })
    const [countCode, setCountCode] = React.useState()
    const [mobile, setMobile] = React.useState()
    const [data, setData] = React.useState({
      phone_number:"",
      otp:null
    })
    // const isLoggedIn = useSelector(state=>state.login.isloggedIn)
    React.useEffect(() => { 
      setViewOTPform(false)
      dispatch(loginActions.setStatus({error:null,success:false}))
    }, []);
    React.useEffect(() => { 
      if(loggedUser!==null){navigate('/')}
    }, [loggedUser!==null]);
    React.useEffect(() => { 
      setViewOTPform(false)
      
    }, ["signUpError !== null"]);
    let count = 1
    React.useEffect(() => { 
      console.log(count++)
      
    }, [1000,3000]);
    const handleCountryCode = (e, value) => {
      console.log(value.phonecode,"dsvsdvsdvsdv")
      setCountCode(value.phonecode)
    }
    console.log("Dattta",data)

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
      console.log({event:e.target.value,value:v,name:e.target.name})
      
        if(e.target.value.length<4){
          setErrorMessage({...errorMessage, otp: "minimum 4 digits OTP required"})
        }
        else{
          setErrorMessage({...errorMessage, otp: ""})
          setData({...data, otp: parseInt(e.target.value)})
        }
      
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if(errorMessage.mobile === ""){
          setViewOTPform(true)
          dispatch(loginActions.setOtpSend(data.phone_number))
          dispatch(sendOtp())
      }
      else{
          setViewOTPform(false)
      }
      // dispatch(loginActions.login())
    };
    const handleOTPSubmit = (event) => {
      event.preventDefault();
      dispatch(loginActions.setVerifyOtp({phone_number:data.phone_number, otp: data.otp}))
      dispatch(verifyOTP())

    }

  return (
      <Container component="main" >
        <CssBaseline />
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
          {isLoggedIn === true && <Alert onClose={() => {}}>You have been succesfully logged in!</Alert> }
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
            or
          <Typography component={Link} to="/signup" variant="h6" sx={{border: "1px solid grey", borderRadius: "10px"}}>
            Sign Up
          </Typography>
          {/* <Typography variant="caption" >
            or Sign Up
          </Typography> */}
          {!success?(<Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 2 }} >
            <PhoneInput
                  // country={'us'}
                  // value={this.state.phone}
                  // onChange={phone => this.setState({ phone })}
                  isValid={false}
                  defaultErrorMessage='hllo'
                  name="phone"
                  country={'in'}
                  onChange={handlePhoneChange}
                />
            {/* <Box display="flex" justifyContent="space-between" className={classes.box} >
                        <Autocomplete
                            sx={{width:"40%"}}
                            autoHighlight
                            options={countries}
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
              margin="normal"
              required
              sx={{width:"55%"}}
              label="Mobile Number"
              error={errorMessage.mobile!==""?true:false}
              helperText={errorMessage.mobile!==""&&errorMessage.mobile}
              onChange={handleChange}
              type="number"
              name="mobile"
              autoComplete="mobile"
              autoFocus
            />
            </Box> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send OTP
            </Button>
          </Box>):(
            <Box component="form" onSubmit={handleOTPSubmit}  sx={{ mt: 1 }}>
            {/* {signUpError &&<Typography color="error">{signUpError}</Typography>} */}
           <TextField 
             label="OTP"
             name='otp' 
             type="password" 
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
              // onClick={resendOTP}
            >
              Resend OTP
            </Button>
          </Box>
          )}
          
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}



















// import {
//   Box,
//   Button,
//   Card,
//   FormControl,
//   FormGroup,
//   FormHelperText,
//   Input,
//   InputLabel,
//   Typography,
// } from "@mui/material";
// import React from "react";

// const SignIn = () => {
//     const submitHandler=(e)=>{
//         e.preventDefault();
//         console.log("submitted")
//     }
//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       marginTop={2}
//       whiteSpace={4}
//     >
//       <Card>
//         <Box padding={5} boxShadow={1}>
//           <Box justifyContent="center" marginBottom={10}>
//             <Typography variant="h6">
//               Sign in using your Mobile number
//             </Typography>
//           </Box>
//           <FormGroup onSubmit={submitHandler}>
//             <FormControl>
//               <InputLabel htmlFor="my-input">Mobile number</InputLabel>
//               <Input required id="my-input" type="number" aria-describedby="my-helper-text" />
//               <FormHelperText id="my-helper-text">
//                 We'll never share your number.
//               </FormHelperText>
//             </FormControl>
//             <Button variant="outlined" type="submit">Sign In</Button>
//           </FormGroup>
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default SignIn;
