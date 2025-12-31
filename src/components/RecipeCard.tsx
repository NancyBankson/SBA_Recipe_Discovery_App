import type { Recipe } from "../types";

export function RecipeCard( { recipe }: {recipe: Recipe}) {

    return (
        <div>
            <h4>{recipe.strMeal}</h4>
            <p>Category: {recipe.strCategory}</p>
            <p>Area: {recipe.strArea}</p>
            <img src={recipe.strMealThumb}></img>
        </div>
    )
}