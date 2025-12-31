import { useSearchParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import type { Recipe } from "../../types";
import { Link } from "react-router-dom";

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');
  const { data, loading, error } = useFetch<{ meals: Recipe[] }>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${queryValue}`);

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

  return (
    <div>
      <h2>Search: {queryValue}</h2>
      <div className='container'>
        {data?.meals.map((meal) => {
          return (
            <div className="recipe-card" key={meal.idMeal}>
              <img src={meal.strMealThumb} />
              <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}