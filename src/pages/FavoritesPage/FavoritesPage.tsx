import { useContext } from "react"
import { FavoritesContext } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";
import type { FavoriteMeal } from "../../types";

export function FavoritesPage() {
    const displayFavorites = useContext(FavoritesContext);
    console.log(displayFavorites);
     return (
    <div>
      <h2>Favorites</h2>
      <div className='container'>
        {(displayFavorites) && displayFavorites.map((displayFavorite) => {
          return (
            <div className="recipe-card" key={displayFavorite.id}>
              <img src={displayFavorite.thumbnail} />
              <Link to={`/recipe/${displayFavorite.id}`}>{displayFavorite.title}</Link>
              {/* <h3 id={category.idCategory.toString()} onClick={(event) => handleClick(category.idCategory, event)}>{category.strCategory}</h3> */}
           
            </div>
          );
        })}
      </div>
    </div>
  );
}