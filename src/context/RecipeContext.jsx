import { createContext, useState } from "react";

export const recipecontext = createContext(null);
const RecipeContext = (props) => {
    const [data, setdata] = useState([
        {
            id: "sdjkn9834njk",
            image: "https://cdn.dummyjson.com/recipe-images/1.webp",
            title: "Classic Margherita Pizza",
            chef: "Punit Yadav",
            category: "dinner",
            desc: "A simple and delicious pizza topped with fresh mozzarella, basil, and a drizzle of olive oil. Perfect for pizza lovers!",
            ingr: "Pizza dough,Tomato sauce,Fresh mozzarella cheese,Fresh basil leaves,Olive oil,Salt and pepper to taste",
            inst: "Preheat the oven to 475°F (245°C).Roll out the pizza dough and spread tomato sauce evenly.Top with slices of fresh mozzarella and fresh basil leaves.Drizzle with olive oil and season with salt and pepper.Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.Slice and serve hot.",
        },
    ]);
    return (
        <recipecontext.Provider value={{ data, setdata }}>
            {props.children}
        </recipecontext.Provider>
    );
};

export default RecipeContext;
