import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="mb-5 flex gap-x-10">
            <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/"
            >
                Products
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/signin"
            >
                Signin
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/about"
            >
                About
            </NavLink>
        </div>
    );
};

export default Nav;
