import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import type { FavoriteMeal, Recipe } from "../../types";
import { useState } from "react";
import "./RecipeDetail.css"
import { FavoritesContext } from "../../context/FavoritesContext";
import { useContext } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Spinner } from "../../components/Spinner";
import { ErrorMessage } from "../../components/ErrorMessage";

export function RecipeDetailPage() {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch<{ meals: Recipe[] }>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
  const favoritesContext = useContext(FavoritesContext);
  const [storedRecipes, setStoredRecipes] = useLocalStorage<FavoriteMeal[]>("favorites", []);
  const [favorites, setFavorites] = useState<FavoriteMeal[]>(storedRecipes);
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    if (!favorites.find(favorite => favorite.id === recipeId)) {
      return false;
    } else return true;
  });

  if (!favoritesContext) {
    return (
      <ErrorMessage />
    )
  }

  const { addFavorite, removeFavorite } = favoritesContext;

  if (loading) {
    return (
      <div className="loading">
        Loading recipes...
        <Spinner />
      </div>
    )
  }
  if (error) {
    return (
      <div>
        <ErrorMessage />
        Error: {error.message}
      </div>
    )
  }

  function handleFavorite() {
    if (!isFavorite) {
      addFavorite(data!.meals[0].idMeal, data!.meals[0].strMeal, data!.meals[0].strMealThumb);
      setIsFavorite(true);
    } else {
      removeFavorite(data!.meals[0].idMeal);
      setIsFavorite(false);
    }
  }

  return (
    <div className='container'>
      <div className="recipe-full" key={data?.meals[0].idMeal}>
        <div className="recipe-head">
          <img src={data?.meals[0].strMealThumb} />
          <h1>{data?.meals[0].strMeal}</h1>
          <button onClick={handleFavorite}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
        </div>
        <div className="recipe-body">
          <div className="ingredients">
            <h2>Ingredients</h2>
            {(data?.meals[0].strIngredient1) && <p>{data?.meals[0].strMeasure1} {data?.meals[0].strIngredient1}</p>}
            {(data?.meals[0].strIngredient2) && <p>{data?.meals[0].strMeasure2} {data?.meals[0].strIngredient2}</p>}
            {(data?.meals[0].strIngredient3) && <p>{data?.meals[0].strMeasure3} {data?.meals[0].strIngredient3}</p>}
            {(data?.meals[0].strIngredient4) && <p>{data?.meals[0].strMeasure4} {data?.meals[0].strIngredient4}</p>}
            {(data?.meals[0].strIngredient5) && <p>{data?.meals[0].strMeasure5} {data?.meals[0].strIngredient5}</p>}
            {(data?.meals[0].strIngredient6) && <p>{data?.meals[0].strMeasure6} {data?.meals[0].strIngredient6}</p>}
            {(data?.meals[0].strIngredient7) && <p>{data?.meals[0].strMeasure7} {data?.meals[0].strIngredient7}</p>}
            {(data?.meals[0].strIngredient8) && <p>{data?.meals[0].strMeasure8} {data?.meals[0].strIngredient8}</p>}
            {(data?.meals[0].strIngredient9) && <p>{data?.meals[0].strMeasure9} {data?.meals[0].strIngredient9}</p>}
            {(data?.meals[0].strIngredient10) && <p>{data?.meals[0].strMeasure10} {data?.meals[0].strIngredient10}</p>}
            {(data?.meals[0].strIngredient11) && <p>{data?.meals[0].strMeasure11} {data?.meals[0].strIngredient11}</p>}
            {(data?.meals[0].strIngredient12) && <p>{data?.meals[0].strMeasure12} {data?.meals[0].strIngredient12}</p>}
            {(data?.meals[0].strIngredient13) && <p>{data?.meals[0].strMeasure13} {data?.meals[0].strIngredient13}</p>}
            {(data?.meals[0].strIngredient14) && <p>{data?.meals[0].strMeasure14} {data?.meals[0].strIngredient14}</p>}
            {(data?.meals[0].strIngredient15) && <p>{data?.meals[0].strMeasure15} {data?.meals[0].strIngredient15}</p>}
            {(data?.meals[0].strIngredient16) && <p>{data?.meals[0].strMeasure16} {data?.meals[0].strIngredient16}</p>}
            {(data?.meals[0].strIngredient17) && <p>{data?.meals[0].strMeasure17} {data?.meals[0].strIngredient17}</p>}
            {(data?.meals[0].strIngredient18) && <p>{data?.meals[0].strMeasure18} {data?.meals[0].strIngredient18}</p>}
            {(data?.meals[0].strIngredient19) && <p>{data?.meals[0].strMeasure19} {data?.meals[0].strIngredient19}</p>}
            {(data?.meals[0].strIngredient20) && <p>{data?.meals[0].strMeasure20} {data?.meals[0].strIngredient20}</p>}
          </div>
          <h2>Instructions</h2>
          <p>{data?.meals[0].strInstructions}</p>
          <h3>Area: {data?.meals[0].strArea}</h3>
          <h3>Category: {data?.meals[0].strCategory}</h3>
          <h3>Source: <a href={data?.meals[0].strSource}>{data?.meals[0].strSource}</a></h3>
          <h3>Video: <a href={data?.meals[0].strYoutube}>{data?.meals[0].strYoutube}</a></h3>
        </div>
      </div>
    </div>
  );
}