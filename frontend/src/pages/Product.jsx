import InfiniteScroll from "react-infinite-scroll-component";
import { lazy, Suspense } from "react";
import useInfinite from "../utils/useInfinite";

const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

const Product = () => {
    const { products, hasMore, asyncsmartloadproduct } = useInfinite();

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
            <div className="flex flex-wrap  w-full">
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
