import { useContext } from "react";
import RecipeTemplate from "../components/RecipeTemplate";
import { recipecontext } from "../context/RecipeContext";

const Favroite = () => {
    const { fav } = useContext(recipecontext);

    const showfavs = fav.map((recipe) => (
        <RecipeTemplate key={recipe.id} recipe={recipe} />
    ));

    return (
        <div className="w-full flex flex-wrap ">
            {fav.length > 0 ? showfavs : "No Favroite found!"}
        </div>
    );
};

export default Favroite;
