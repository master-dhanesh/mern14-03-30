import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
};
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        load: (state, action) => {
            // console.log(action);
            state.products = action.payload;
        },
        create: (state, action) => {
            // state is your current state
            // action holds the parameters
            // console.log(action);
            state.products.push(action.payload);
        },
    },
});

export default productSlice.reducer; //data
export const { create, load } = productSlice.actions; // functionality(action)
