import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const NavigateHandler = () => {
        navigate("/products/details");
    };

    return (
        <div>
            <h1>Products</h1>
            <button
                onClick={NavigateHandler}
                className="bg-white px-4 py-2 rounded text-black"
            >
                Get More Details
            </button>
        </div>
    );
};

export default Products;
