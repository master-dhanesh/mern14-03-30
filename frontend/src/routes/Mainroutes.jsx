import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../pages/Product";
import PageNotFound from "../pages/PageNotFound";
import About from "../pages/About";
import Signin from "../pages/users/Signin";
import Signup from "../pages/users/Signup";
import Unauth from "./Unauth";
import Settings from "../pages/users/Settings";
import Auth from "./Auth";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Product />} />

            <Route
                path="/signin"
                element={
                    <Unauth>
                        <Signin />
                    </Unauth>
                }
            />
            <Route
                path="/signup"
                element={
                    <Unauth>
                        <Signup />
                    </Unauth>
                }
            />

            <Route
                path="/settings"
                element={
                    <Auth>
                        <Settings />
                    </Auth>
                }
            />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Mainroutes;
