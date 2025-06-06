import { createContext, useState } from "react";

export const recipecontext = createContext(null);
const RecipeContext = (props) => {
    const [data, setdata] = useState(
        JSON.parse(localStorage.getItem("recipe")) || []
    );

    const [fav, setfav] = useState(
        JSON.parse(localStorage.getItem("fav")) || []
    );

    return (
        <recipecontext.Provider value={{ data, setdata, fav, setfav }}>
            {props.children}
        </recipecontext.Provider>
    );
};

export default RecipeContext;
