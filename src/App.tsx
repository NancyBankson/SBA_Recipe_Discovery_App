import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import type { Recipe, FetchObj, FavoriteMeal } from './types';
import { FavoritesContext } from './context/FavoritesContext';
import { useFetch } from './hooks/useFetch';
import { Navbar } from './components/Navbar';
import { RecipeDetailPage } from './pages/RecipeDetailPage/RecipeDetailPage';
import { HomePage } from './pages/HomePage/HomePage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [storedRecipes, setStoredRecipes] = useLocalStorage<FavoriteMeal[]>("favorites", []);
  // const [favorites, setFavorites] = useState<FavoriteMeal[]>(storedRecipes);
  const [displayFavorites, setDisplayFavorites] = useState<FavoriteMeal[]>(storedRecipes)

  useEffect(() => {
    setStoredRecipes(displayFavorites);
  }, [displayFavorites]);

  function addFavorite(id: number, title: string, thumbnail: string) {
    const newFavorite: FavoriteMeal = {
      id: id,
      title: title,
      thumbnail: thumbnail
    }
    setDisplayFavorites((prevDisplayFavorites) => [...prevDisplayFavorites, newFavorite]);
    // setStoredRecipes(displayFavorites);
  }

  function removeFavorite(id: number) {
    const newRecipes = displayFavorites.filter((favorite) => favorite.id !== id);
    setDisplayFavorites(newRecipes);
    // setStoredRecipes(displayFavorites);
  }
  
  return (
    <>
      <div>
        <FavoritesContext.Provider value={{addFavorite, removeFavorite, displayFavorites}}>
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
          </Routes>
        </FavoritesContext.Provider>
      </div>
    </>
  )
}

export default App
