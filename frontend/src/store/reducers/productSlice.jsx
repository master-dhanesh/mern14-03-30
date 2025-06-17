import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadproducts: (state, action) => {
            state.products = action.payload;
        },
        smartloadproducts: (state, action) => {
            state.products = [...state.products, ...action.payload];
        },
    },
});

export default productSlice.reducer;
export const { loadproducts, smartloadproducts } = productSlice.actions;
