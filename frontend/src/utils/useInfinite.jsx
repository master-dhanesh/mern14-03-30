import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { smartloadproducts } from "../store/reducers/productSlice";
import axios from "../api/config";

const useInfinite = () => {
    const { products } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const [hasMore, sethasMore] = useState(true);

    const asyncsmartloadproduct = async (
        limit = 6,
        start = products.length
    ) => {
        try {
            const { data } = await axios.get(
                `/products?_limit=${limit}&_start=${start}`
            );
            if (data.length === 0) {
                sethasMore(false);
                console.log("All Products Fetched");
            } else {
                dispatch(smartloadproducts(data));
                console.log("Products Fetched!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        asyncsmartloadproduct();
    }, []);

    return { products, hasMore, asyncsmartloadproduct };
};

export default useInfinite;
