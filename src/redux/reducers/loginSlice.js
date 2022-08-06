import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const loginSlice = createSlice({
    name: "auth",
    initialState : {
        user: {
            // phone_number:null,
            // otp:null
        },
        isLoggedIn: false,
        loggedUser:null,
        error: null,
        success: false
    },
    reducers: {
        setOtpSend(state,{payload}){
            state.user = {phone_number: payload}
            return state
        },
        setVerifyOtp(state,{payload}){
            state.user = {phone_number: payload.phone_number, otp: payload.otp}
            return state
        },
        logOut(state, {payload}){
            state.user = null
            state.isLoggedIn = false
            state.loggedUser = null
            return state
        },
        setLogin(state, {payload}){
            state.isLoggedIn = true
            return state
        },
        setUser(state, {payload}){
            state.loggedUser = payload
            return state
        },

        setStatus(state, {payload}){
            state.error = payload.error
            state.success = payload.success
        },
        // setError(state,{payload}){
        //     state.error = payload
        //     state.success = false
        //     return state
        // },
        // setSuccess(state, {payload}){
        //     state.success = payload
        //     if(payload === true){
        //         state.error = null}
        //     else{
        //         return
        //     }
        //     return state
        // },
        resetState(state){
            state.error = null
            state.success = false
            state.user = null
        }
    }
})
export default loginSlice;
export const loginActions = loginSlice.actions

export const sendOtp = () => {
    return function (dispatch, getState) {
        const {login} = getState()
        axios
        .post(`login/`, login.user)
        .then((res)=>{
            // dispatch(loginActions.setUser(res.data))
            // dispatch(filterActions.setFilter(res.data.results))
            // dispatch(filterActions.setLoading(false))
            dispatch(loginActions.setStatus({error:null, success:true}))
            console.log("Send OOTTTPPPP",res.data)
        })
        .catch((error)=>{
            console.log("ErrorrSend Otp", error.response.data)
            dispatch(loginActions.setStatus({error:error.response.data, success:false}))
        })
    }
}
export const verifyOTP = () => {
    return function (dispatch, getState){
        const {login} = getState()
        axios
        .post('login/', login.user)
        .then((res)=>{
            console.log(res.data, "Verify__OTP")
            dispatch(loginActions.setUser(res.data))
            dispatch(loginActions.setLogin())
            dispatch(loginActions.setStatus({error:null, success:true}))
        })
        .catch((error)=>{
            console.log(error.response.data)
            dispatch(loginActions.setStatus({error:error.response.data, success:false}))
        })
    }
}

export const logOut = () => {
    return function (dispatch, getState){
        const {loginSlice} = getState()
        axios
        .get('logout')
        .then((res)=>{
            console.log(res.data)
            dispatch(loginActions.setUser(null))
            dispatch(loginActions.logOut())
        })
        .catch((error)=>{
            console.log("LogOut", error)
            dispatch(loginActions.setStatus({error:error.response.data, success:false}))
        })
    }
}


