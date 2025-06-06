import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./reducers/cartSlice";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/cartSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        users: userSlice,
        carts: cartSlice,
    },
});
