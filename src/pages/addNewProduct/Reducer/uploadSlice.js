import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { uploadImgActions } from "./imageUpload";
const API_URL = "http://localhost:8000/api/products/";

const uploadSlice = createSlice({
    name: "upload",
    initialState : {
        name:"",
        category:"",
        tag:"",
        description:"",
        color:"",
        price:"",
        quantity:"",
        available_pieces:"",
        thickness:"",
        origin:"",
        usage:[],
        height:"",
        width:"",
        finishing:"",
        block_number:"",
        images:[]
    },
    reducers: {
        setInputs(state, {payload, type}){
            state = {...state, [payload.name]: payload.value}
            return state   
        }    
    }
})
export const uploadProductActions = uploadSlice.actions

export const saveProduct = () => {
    return function (dispatch, getState) {
        const {uploadProduct} = getState()
        console.log(uploadProduct,"Post Inputs")
        axios
        .post("products/", uploadProduct)
        // .post("http://localhost:8000/api/categories/", {name:"new Category"})
        .then((res)=>{
            dispatch(uploadProductActions.setInputs(res.data))
            dispatch(uploadImgActions.setProductId(res.data.id))
            console.log("responsePost",res.data)
        })
        .catch((error)=>{
            console.log("Error", error)
        })
    }
}
// export const saveProduct = () => {
//     return function (dispatch, getState) {
//         const {uploadProduct} = getState()
//         axios
//         .post("http://localhost:8000/api/images/", {product: 22, image: "http://localhost:8000/Media_File/images/1_Uvos35i.JPG"})
//         // .post("http://localhost:8000/api/categories/", {name:"new Category"})
//         .then((res)=>{
//             dispatch(uploadProductActions.setInputs(res.data))
//         })
//         .catch((error)=>{
//             console.log("Error", error)
//         })
//     }
// }




export default uploadSlice;