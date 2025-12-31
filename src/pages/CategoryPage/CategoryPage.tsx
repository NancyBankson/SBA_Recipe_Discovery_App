import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import type { Recipe } from "../../types";
import './CategoryPage.css'
import { Link } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { ErrorMessage } from "../../components/ErrorMessage";

export function CategoryPage() {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch<{ meals: Recipe[] }>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);

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

  return (
    <div>
      <h2>{categoryName}</h2>
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