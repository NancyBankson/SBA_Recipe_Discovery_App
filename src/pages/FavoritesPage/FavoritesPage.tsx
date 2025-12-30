import { useContext, useState } from "react"
import { FavoritesContext } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";
import type { FavoriteMeal } from "../../types";

export function FavoritesPage() {
  const { displayFavorites } = useContext(FavoritesContext);
  const [favRecipes, setFavRecipes] = useState<FavoriteMeal[]>([]);

  if (favRecipes.length != displayFavorites.length) {
    for (let i = 0; i < displayFavorites.length; i++) {
      favRecipes.push(displayFavorites[i]);
    }
  }

  return (
    <div>
      <h2>Favorites</h2>
      <div className='container'>
        {(favRecipes) && favRecipes.map((favRecipe) => {
          return (
            <div className="recipe-card" key={favRecipe.id}>
              <img src={favRecipe.thumbnail} />
              <Link to={`/recipe/${favRecipe.id}`}>{favRecipe.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}