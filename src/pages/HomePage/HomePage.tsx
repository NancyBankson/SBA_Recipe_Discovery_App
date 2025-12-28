// import { useState } from 'react';
import type { Categories } from '../../types';
import { useFetch } from '../../hooks/useFetch';

export function HomePage() {
  // const [categories, setCategories] = useState<Categories[]>([]);
  
  const { data, loading, error }= useFetch<{ categories: Categories[] }>("https://www.themealdb.com/api/json/v1/1/categories.php");

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
  console.log(data);

  return (
    <div>
      <h2>Categories</h2>
      {data?.categories.map((category) => {
        return (
          <div key={category.idCategory}>
              <p>{category.strCategory}</p>
              <p>{category.strCategoryDescription}</p>
              <img src={category.strCategoryThumb} />
          </div>          
        );
      })}
    </div>
  );
}