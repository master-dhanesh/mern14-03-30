import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const NavigateHandler = () => {
        navigate("/products/details");
    };

    return (
        <div>
            <h1 className="my-5 font-thin text-3xl ">Products</h1>
            <button
                onClick={NavigateHandler}
                className="bg-white px-4 py-2 rounded text-black"
            >
                Get More Details
            </button>

            <hr className="my-5" />
            <div>
                <h1 className="mb-5 font-thin text-3xl flex justify-between items-center">
                    Products 1{" "}
                    <button
                        onClick={() => navigate("/products/desc/product-1")}
                    >
                        Description
                    </button>
                </h1>

                <h1 className="mb-5 font-thin text-3xl flex justify-between items-center">
                    Products 2{" "}
                    <button
                        onClick={() => navigate("/products/desc/product-2")}
                    >
                        Description
                    </button>
                </h1>

                <h1 className="mb-5 font-thin text-3xl flex justify-between items-center">
                    Products 3{" "}
                    <button
                        onClick={() => navigate("/products/desc/product-3")}
                    >
                        Description
                    </button>
                </h1>
            </div>
        </div>
    );
};

export default Products;
