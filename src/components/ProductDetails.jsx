import { useNavigate } from "react-router-dom";
const ProductDetails = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>ProductDetails</h1>
            <button
                onClick={() => navigate(-1)}
                className="bg-white px-4 py-2 rounded text-black"
            >
                Go Back
            </button>
        </div>
    );
};

export default ProductDetails;
