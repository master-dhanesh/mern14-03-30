import axios from "../../api/config";
import { loadproducts, smartloadproducts } from "../reducers/productSlice";

export const asyncloadproduct = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/products");
        dispatch(loadproducts(data));
        console.log("Products Fetched!");
    } catch (error) {
        console.log(error);
    }
};

export const asynccreateproduct = (product) => async (dispatch, getState) => {
    try {
        await axios.post("/products", product);
        dispatch(asyncloadproduct());
        console.log("Product Created!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncupdateproduct =
    (id, product) => async (dispatch, getState) => {
        try {
            await axios.patch("/products/" + id, product);
            dispatch(asyncloadproduct());
            console.log("Product Updated!");
        } catch (error) {
            console.log(error);
        }
    };

export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/products/" + id);
        dispatch(asyncloadproduct());
        console.log("User Deleted!");
    } catch (error) {
        console.log(error);
    }
};
