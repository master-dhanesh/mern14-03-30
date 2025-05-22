import { Outlet, useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Service</h1>
            <button
                onClick={() => navigate("/services/details")}
                className="bg-white px-4 py-2 rounded text-black"
            >
                Get More Details
            </button>
            <hr className="my-4" />
            <Outlet />
        </div>
    );
};

export default Services;
