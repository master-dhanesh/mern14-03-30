import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../pages/Product";
import PageNotFound from "../pages/PageNotFound";
import About from "../pages/About";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Mainroutes;
