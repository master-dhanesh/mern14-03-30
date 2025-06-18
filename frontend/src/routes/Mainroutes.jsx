import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import CreateProduct from "../pages/CreateProduct";

const Product = lazy(() => import("../pages/Product"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const About = lazy(() => import("../pages/About"));
const Signin = lazy(() => import("../pages/users/Signin"));
const Signup = lazy(() => import("../pages/users/Signup"));
const Unauth = lazy(() => import("./Unauth"));
const Settings = lazy(() => import("../pages/users/Settings"));
const Auth = lazy(() => import("./Auth"));

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

            <Route
                path="/product-detail/:id"
                element={
                    <Auth>
                        <ProductDetails />
                    </Auth>
                }
            />
            <Route
                path="/create-product/"
                element={
                    <Auth>
                        <CreateProduct />
                    </Auth>
                }
            />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Mainroutes;
