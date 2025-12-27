import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { meal } from '../../types';
import { useFetch } from '../../hooks/useFetch';
import { blogObj } from '../../lib/posts';

export function HomePage() {
  const [recipes, setRecipes] = useState([]);
  
  const allRecipes: meal[] = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

  setRecipes(allRecipes);

  return (
    <div>
      <h2>Blog Detail Page</h2>
      {recipes.map((recipe) => {
        return (
          <p key={recipe.idMeal}>
            <RecipeCard />
          </p>
        );
      })}
    </div>
  );
}