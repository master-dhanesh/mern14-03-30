import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    carts: [
        {
            id: 1,
            userId: 1,
            date: "2020-03-02T00:00:00.000Z",
            products: [
                {
                    productId: 1,
                    quantity: 4,
                },
                {
                    productId: 2,
                    quantity: 1,
                },
                {
                    productId: 3,
                    quantity: 6,
                },
            ],
            __v: 0,
        },
    ],
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
});

export default cartSlice.reducer;
