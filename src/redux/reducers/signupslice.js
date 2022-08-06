import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const signupSlice = createSlice({
    name: "signup",
    initialState : {
        user:{
            password:null,
            last_login: null,
            is_superuser: false,
            first_name: "",
            last_name: "",
            email: "",
            is_staff: false,
            is_active: true,
            date_joined: "",
            phone_number: "",
            name: null,
            company_name: null,
            otp: null,
            counter: null,
            groups: [],
            user_permissions: []
        },
        error:null,
        success:false
    },
    reducers: {
        setMobile(state,{payload}){
            state.user.phone_number = payload
            return state
        },
        setError(state,{payload}){
            state.error = payload
            state.success = false
            return state
        },
        setSuccess(state, {payload}){
            state.success = payload
            if(payload === true){
                state.error = null}
            else{
                return
            }
            return state
        },
        resetState(state){
            state.error = null
            state.success = false
        }

    }
})
export default signupSlice;
export const signupActions = signupSlice.actions


export const signUp = () => {
    return function (dispatch, getState) {
        const {signup} = getState()
        axios
        .post('register/', signup.user)
        .then((res)=>{
            // dispatch(filterActions.setFilter(res.data.results))
            // dispatch(filterActions.setLoading(false))
            // console.log("elol",res.data.results)
            console.log(res.data,"SignUUUUp")
            // dispatch(signupActions.setError(null))
            dispatch(signupActions.setSuccess(true))

        })
        .catch((error)=>{
            console.log("ErrorrSignUUUUP", error.response.data)
            dispatch(signupActions.setError(error.response.data.error))
            dispatch(signupActions.setSuccess(false))
        })
    }
}

