import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState : {
        itemList: [],
        totalQuantity: 0,
    },
    reducers: {
        // addCart(state, action){
        //     const newItem = action.payload
        //     const existingItem = state.itemList.find(item=>item.id === action.payload)
        //     if(existingItem){

        //     }
        // }
        addCart(state, action){
            const newItem = action.payload
            // check if already in list or not
            const existingItem = state.itemList.find(item=>item.id === newItem.id)
            if(existingItem){
                // alert("item already in cart")
                // existingItem.quantity=existingItem.quantity
                // existingItem.quantity++;
                alert("item already in cart")
            }
            else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price*newItem.quantity
                })
                state.totalQuantity++
            }
        },
        removeCart(state, action){
            const id = action.payload;
            state.itemList = state.itemList.filter(item=>item.id !== id);
            state.totalQuantity--
            // const existingItem = state.itemList.find(item=> item.id===id);
            // if(existingItem.quantity === 1){
            //     state.itemList = state.itemList.filter(item=>item.id !== id);
            // }else{
            //     existingItem.quantity--
            //     existingItem.totalPrice -= existingItem.price
            // }
        },
        setQuantity(state, action){
            const id = action.payload.id
            const quantity = action.payload.qty1
            const existingItem = state.itemList.find(item=>item.id === id)
            if(existingItem){
                existingItem.quantity=quantity
                existingItem.totalPrice=quantity*existingItem.price

            }
        },
        // addCart(state, action){
        //     const newItem = action.payload
        //     // check if already in list or not
        //     const existingItem = state.itemList.find(item=>item.id === newItem.id)
        //     if(existingItem){
        //         // alert("item already in cart")
        //         // existingItem.quantity=existingItem.quantity
        //         // existingItem.quantity++;
        //         existingItem.quantity += newItem.quantity;
        //         existingItem.totalPrice = existingItem.price*existingItem.quantity;
        //     }
        //     else{
        //         state.itemList.push({
        //             id: newItem.id,
        //             price: newItem.price,
        //             quantity: newItem.quantity,
        //             name: newItem.name,
        //             image: newItem.img,
        //             totalPrice: newItem.price*newItem.quantity
        //         })
        //         state.totalQuantity++
        //     }
        // },
        // removeCart(state, action){
        //     const id = action.payload;
        //     state.itemList = state.itemList.filter(item=>item.id !== id);
        //     state.totalQuantity--
        //     // const existingItem = state.itemList.find(item=> item.id===id);
        //     // if(existingItem.quantity === 1){
        //     //     state.itemList = state.itemList.filter(item=>item.id !== id);
        //     // }else{
        //     //     existingItem.quantity--
        //     //     existingItem.totalPrice -= existingItem.price
        //     // }
        // },
        // setQuantity(state, action){
        //     const id = action.payload.id
        //     const quantity = action.payload.qty1
        //     const existingItem = state.itemList.find(item=>item.id === id)
        //     if(existingItem){
        //         existingItem.quantity=quantity
        //         existingItem.totalPrice=quantity*existingItem.price

        //     }
        // },
        
    }
})
export default cartSlice;