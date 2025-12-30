import type { Categories } from '../../types';
import { useFetch } from '../../hooks/useFetch';
import './HomePage.css'
import { Link } from 'react-router-dom';

export function HomePage() {

  const { data, loading, error } = useFetch<{ categories: Categories[] }>("https://www.themealdb.com/api/json/v1/1/categories.php");

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
      <h2>Categories</h2>
      <div className='container'>
        {data?.categories.map((category) => {
          return (
            <div className="category-card" key={category.idCategory}>
              <img src={category.strCategoryThumb} />
              <Link to={`/category/${category.strCategory}`}>{category.strCategory}</Link>
              <p>{category.strCategoryDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}