import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import type { Recipe } from "../../types";
import { Link } from "react-router-dom";

export function RecipeDetailPage() {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch<{ meals: Recipe[] }>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);

  if (loading) {
    return (
      <div>
        Loading recipes...
      </div>
    )
  }
  if (error) {
    return (
      <div>
        Error: {error.message}
      </div>
    )
  }
 console.log(data?.meals[0].strMeal);

  return (
    <div>
      <h2>Recipe Detail</h2>
      <div className='container'>       
            <div className="recipe-card" key={data?.meals[0].idMeal}>
              <img src={data?.meals[0].strMealThumb} />
              <h5>{data?.meals[0].strMeal}</h5>           
              <p>{data?.meals[0].strInstructions}</p>
            </div>
      </div>
    </div>
  );
}