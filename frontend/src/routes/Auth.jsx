import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
    const { user } = useSelector((state) => state.userReducer);
    return user ? children : <Navigate to="/signin" />;
};

export default Auth;
