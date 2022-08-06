import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:8000/api/images/";

const imgUploadSlice = createSlice({
    name: "upload",
    initialState :{
        id:"",
        image:[]
    },
    reducers: {
        setImages(state, {payload, type}){
            state.image = [...state.image,{ product: payload.product, image: payload.image, id: payload.id}]
            return state   
        },
        setProductId(state, {payload, type}){
            state.id = payload
        },
        delImages(state, {payload, type}){
            state.image = state.image.filter((d)=>d.id !== payload)
            console.log(payload)
            return state
        }
    }
})

export const uploadImgActions = imgUploadSlice.actions

export const saveImg = () => {
    return function (dispatch, getState) {
        const {uploadImage} = getState()
        axios
        .post("images/", uploadImage, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        // .post("http://localhost:8000/api/categories/", {name:"new Category"})
        .then((res)=>{
            dispatch(uploadImgActions.setImages(res.data))
            console.log("responsee",res.data)
        })
        .catch((error)=>{
            console.log("Error", error)
        })
    }

}

export default imgUploadSlice;