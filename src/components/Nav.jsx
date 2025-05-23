import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <NavLink
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/recipes"
            >
                Recipes
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/favroite"
            >
                Favroite
            </NavLink>
        </div>
    );
};

export default Nav;
