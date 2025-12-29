import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import type { Recipe } from "../../types";
import './CategoryPage.css'
import { Link } from "react-router-dom";

export function CategoryPage() {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch<{ meals: Recipe[] }>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);

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
  // console.log(data.meals);

  return (
    <div>
      <h2>Categories</h2>
      <div className='container'>
        {data?.meals.map((meal) => {
          return (
            <div className="recipe-card" key={meal.idMeal}>
              <img src={meal.strMealThumb} />
              <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>
              {/* <h3 id={category.idCategory.toString()} onClick={(event) => handleClick(category.idCategory, event)}>{category.strCategory}</h3> */}
              <p>{meal.strInstructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}