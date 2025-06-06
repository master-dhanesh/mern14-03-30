import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";

const RecipeTemplate = (props) => {
    const { id, image, chef, title, desc } = props.recipe;
    const { fav, setfav } = useContext(recipecontext);

    const FavHandler = () => {
        const copyfav = [...fav];
        copyfav.push(props.recipe);
        setfav(copyfav);
        localStorage.setItem("fav", JSON.stringify(copyfav));
        toast.success("added to favroite!");
    };
    const UnFavHandler = () => {
        const favfilter = fav.filter((f) => f.id != id);
        setfav(favfilter);
        localStorage.setItem("fav", JSON.stringify(favfilter));
        toast.error("removed from favroite!");
    };
    console.log(fav);

    return props.recipe ? (
        <div className="relative w-[23vw] mr-5 mb-5 shadow overflow-hidden rounded">
            {fav.find((f) => f.id == id) ? (
                <i
                    onClick={UnFavHandler}
                    className="absolute top-[50%] right-[5%] text-3xl text-red-400 ri-heart-fill"
                ></i>
            ) : (
                <i
                    onClick={FavHandler}
                    className="absolute top-[50%] right-[5%] text-3xl text-red-400  ri-heart-line"
                ></i>
            )}

            <img className="w-full h-[30vh] object-cover" src={image} alt="" />
            <h1 className="pl-3 text-3xl mt-3">{title}</h1>
            <p className="pl-3 text-red-400">{chef}</p>
            <p className="pl-3 pb-4 mt-3">
                {desc.slice(0, 100)}...{" "}
                <span className="text-blue-400">more</span>
            </p>
            <Link
                to={`/recipes/detail/${id}`}
                className="text-center block rounded text-white w-full py-2 px-4  bg-blue-400"
            >
                More Details
            </Link>
        </div>
    ) : (
        "loading..."
    );
};

export default RecipeTemplate;
