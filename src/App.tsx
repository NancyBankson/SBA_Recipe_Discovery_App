import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import type { Recipe, FetchObj } from './types';
import { FavoritesContext } from './context/FavoritesContext';
import { useFetch } from './hooks/useFetch';
import { Navbar } from './components/Navbar';
import { RecipeDetailPage } from './pages/RecipeDetailPage/RecipeDetailPage';
import { HomePage } from './pages/HomePage/HomePage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';

function App() {
  // const [recipes, setRecipes] = useState(null);
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  // const [dataObj, setDataObj] = useState<FetchObj>({} as FetchObj);
  // const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/categories.php");

  // setUrl("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Network is not responding");
  //       }
  //       const data = await response.json();
  //       return data;
  //     }
  //     catch (error) {
  //       console.error("Fetch error:", error);
  //     }
  //   }

  //   fetchData()
  //     .then(data => {
  //       console.log(data);
  //       setDataObj(data);
  //       console.log(dataObj.meals);
  //       setRecipes(dataObj.meals);
  //     })
  //     .catch(error => console.error("Fetch error:", error));
  // }, [url]);



  // let allRecipes: unknown = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

  // setRecipes(allRecipes);

  return (
    <>
      <div>     
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />          
          </Routes>   
      </div>
    </>
  )
}

export default App
