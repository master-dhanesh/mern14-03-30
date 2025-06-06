import { useContext } from "react";
import { Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import RecipeTemplate from "../components/RecipeTemplate";

const Recipes = () => {
    const { data } = useContext(recipecontext);

    const showrecipies = data.map((recipe) => (
        <RecipeTemplate key={recipe.id} recipe={recipe} />
    ));

    return (
        <div className="w-full flex flex-wrap ">
            <Link
                className="absolute right-[10%] bg-green-400 px-4 py-2 rounded"
                to="/recipes/create-recipe"
            >
                Create Recipe
            </Link>
            {data.length > 0 ? showrecipies : "No recipes found!"}
        </div>
    );
};

export default Recipes;
