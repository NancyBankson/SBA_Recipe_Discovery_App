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

  return (
    <>
      <div>
        {/* <FavoritesContext.Provider> */}
            <Navbar />
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
            </Routes>
        {/* </FavoritesContext.Provider> */}
      </div>
    </>
  )
}

export default App
