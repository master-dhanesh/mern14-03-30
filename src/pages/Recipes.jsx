import { useContext } from "react";
import { Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
    const { data } = useContext(recipecontext);
    console.log(data);

    return (
        <div>
            <Link
                className="absolute right-[10%] bg-green-400 px-4 py-2 rounded"
                to="/recipes/create-recipe"
            >
                Create Recipe
            </Link>
        </div>
    );
};

export default Recipes;
