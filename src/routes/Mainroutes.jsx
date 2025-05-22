import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Products from "../components/Products";
import Services from "../components/Services";
import ServiceDetails from "../components/ServiceDetails";
import ProductDetails from "../components/ProductDetails";
import ProductDesc from "../components/ProductDesc";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/details" element={<ProductDetails />} />
            <Route path="/products/desc/:name" element={<ProductDesc />} />

            <Route path="/services" element={<Services />}>
                <Route path="/services/details" element={<ServiceDetails />} />
            </Route>

            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default Mainroutes;
