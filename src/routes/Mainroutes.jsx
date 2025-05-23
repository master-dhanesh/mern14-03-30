import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Recipe from "../components/Recipe";
import About from "../pages/About";
import Favroite from "../pages/Favroite";
import Create from "../pages/Create";
import PageNotFound from "../pages/PageNotFound";
import Update from "../pages/Update";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/create-recipe" element={<Create />} />
            <Route path="/recipes/detail/:id" element={<Recipe />} />
            <Route path="/recipes/update-recipe/:id" element={<Update />} />
            <Route path="/about" element={<About />} />
            <Route path="/favroite" element={<Favroite />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default MainRoutes;
