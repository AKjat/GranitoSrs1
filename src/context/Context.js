// import { createContext, useContext, useReducer } from "react";
// import productDetails from "../data/Details";
// import MostDemading from "../data/MostDemanding";
// import NewArrival from "../data/NewArrival";
// import { CartReducer } from "./Reducer";

// const Cart = createContext();

// const Context = ({children})=>{
//     const products = [...productDetails, ...NewArrival, ...MostDemading]
//     const [state, dispatch] = useReducer(CartReducer, {products:products, cart:[]});
//     console.log(products)
//     return <Cart.Provider value={{state, dispatch}}>
//         {children}
//     </Cart.Provider>
// };

// export default Context;

// export const CartState = () => {
//     return useContext(Cart)
// }