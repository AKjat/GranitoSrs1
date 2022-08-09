import { createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

const filterSlice = createSlice({
    name: "filter",
    initialState : {
        searchData:{
            // name: "",
            // category: "",
            // tag: "",
            // origin: "",
            // price_min: "",
            // price_max: "",
            // color: [] 
        },
        products: [],
        loading: true
    },
    reducers: {
        setFilter(state, {payload, type}){  
            state.products = payload
            return state
        },
        setSearch(state, {payload, type}){
            if(payload.name === "color"){
                if(state.searchData.hasOwnProperty('color')){
                    let color = state.searchData.color
                    color = [...color, payload.value]
                    state.searchData = {...state.searchData, [payload.name]: color} 
                }
                else{
                    let color = [payload.value]
                    state.searchData = {...state.searchData, [payload.name]: color}
                }
            }
            else {
                state.searchData = {...state.searchData, [payload.name]: payload.value}
            }
            return state
        },
        remSearch(state, {payload, type}){
            if(payload.name === "color"){
                if(state.searchData.color.length > 1){
                    let color = state.searchData.color
                    color= color.filter((d)=>d !== payload.value)
                    state.searchData = {...state.searchData, [payload.name]: color}
                }
                else{
                    delete state.searchData['color']
                }
            }
            else{
                delete state.searchData[payload.name]
            }
            return state
        },
        remAllSearches(state, {payload, type}){
            state.searchData = {"ordering":"price"}
            return state
        },
        setLoading(state, {payload, type}){
            state.loading=payload
        },
        setSearchField(state, {payload, type}){
            state.searchData = {"ordering":"price", "search": payload}
        }
    

        
    }
})
export const filterActions = filterSlice.actions

export const getProducts = () => {
    return function (dispatch, getState) {
        dispatch(filterActions.setLoading(true))
        // axios
        // .get(`products`)
        // .then((res)=>{
        //     dispatch(filterActions.setFilter(res.data.results))
        //     dispatch(filterActions.setLoading(false))
        //     // console.log("elol",res.data.results)
        // })
        // .catch((error)=>{
        //     console.log("Errorr", error)
        // })
    }
}

export const getFilter= (name, value) => {
    return function (dispatch, getState) {
        console.log("gsg", axios.defaults.baseURL)
        
        const {filter} = getState()
        const searchData = filter.searchData
        let url = new URL(`${axios.defaults.baseURL}granito_product/`)
        url.search = new URLSearchParams(searchData);
        dispatch(filterActions.setLoading(true))
        axios
        .get(url)
        // .post("http://localhost:8000/api/categories/", {name:"new Category"})
        .then((res)=>{
            dispatch(filterActions.setFilter(res.data.results))
            dispatch(filterActions.setLoading(false))
            // console.log("Filter",res.data.results)
        })
        .catch((error)=>{
            console.log("Error", error)
        })
    }
}
// export const getFilter= (name, value) => {
//     return function (dispatch, getState) {
//         // const {categoryId} = getState()
//         // console.log(categoryId, "id Categg")
//         axios
//         .get(`http://localhost:8000/api/products/?${name}=${value}`)
//         // .post("http://localhost:8000/api/categories/", {name:"new Category"})
//         .then((res)=>{
//             dispatch(filterActions.setFilter(res.data.results))
//             console.log("Filter",res.data.results)
//         })
//         .catch((error)=>{
//             console.log("Error", error)
//         })
//     }
// }

export const getPriceFilter= (min, max) => {
    return function(dispatch, getState){
        axios
        .get(`http://localhost:8000/api/products/?price_lt=${min}%2C${max}`)
        .then((res)=>{
            dispatch(filterActions.setFilter(res.data.results))
            console.log("PriceFilter", res.data.results)
        })
        .catch((error)=>{
            console.log("Error", error)
        })
    }
}
export default filterSlice ;



