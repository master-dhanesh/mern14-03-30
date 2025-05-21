import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex justify-center gap-x-10">
            <NavLink
                style={(e) => (e.isActive ? { fontWeight: 900 } : {})}
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                style={(e) => (e.isActive ? { fontWeight: 900 } : {})}
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/products"
            >
                Products
            </NavLink>
            <NavLink
                style={(e) => (e.isActive ? { fontWeight: 900 } : {})}
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/services"
            >
                Services
            </NavLink>
            <NavLink
                style={(e) => (e.isActive ? { fontWeight: 900 } : {})}
                className={(e) => (e.isActive ? "text-red-400" : "")}
                to="/about"
            >
                About
            </NavLink>
        </div>
    );
};

export default Nav;
