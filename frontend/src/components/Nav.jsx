import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const { user } = useSelector((state) => state.userReducer);
    return (
        <div className="mb-5 flex gap-x-10">
            <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/"
            >
                Products
            </NavLink>

            {user ? (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-red-400" : ""
                        }
                        to="/settings"
                    >
                        User Setting
                    </NavLink>
                    {user?.isAdmin && (
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "text-red-400" : ""
                            }
                            to="/create-product"
                        >
                            Create Product
                        </NavLink>
                    )}
                </>
            ) : (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-red-400" : ""
                        }
                        to="/signin"
                    >
                        Signin
                    </NavLink>
                </>
            )}

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
