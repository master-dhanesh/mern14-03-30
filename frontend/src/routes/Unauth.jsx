import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Unauth = ({ children }) => {
    const { user } = useSelector((state) => state.userReducer);
    return !user ? children : <Navigate to="/" />;
};

export default Unauth;
