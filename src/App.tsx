import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';

function App() {
  const [mealData, setMealData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
      if (!response.ok) {
        throw new Error("Network is not responding");
      }
      const data = await response.json();
      console.log(data);
      return data;
    }
    catch (error) {
      console.error("Fetch error:", error);
    }
  }

  fetchData()
    .then(data => {
      setMealData(data);
    })
    .catch(error => console.error("Fetch error:", error));

  return (
    <>
      <div>
        <FavoritesContext.Provider value={{}}>
          <NavBar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </FavoritesContext.Provider>
      </div>
    </>
  )
}

export default App
