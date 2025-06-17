import axios from "../api/config";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect, useState } from "react";
import { smartloadproducts } from "../store/reducers/productSlice";

const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

const Product = () => {
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

    return (
        <InfiniteScroll
            dataLength={products.length}
            next={asyncsmartloadproduct}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="flex flex-wrap w-full">
                {products.map((p) => (
                    <Suspense key={p.id} fallback="Loading......">
                        <ProductTemplate p={p} />
                    </Suspense>
                ))}
            </div>
        </InfiniteScroll>
    );
};

export default Product;
