# SBA 10 Recipe Discovery App

## Overview

The purpose of this assignment was to build a client-side Recipe Discovery App.  The assignment was built using advanced React knowledge including, custom hooks, context, and React Router.  It also required data to be fetched from an API, creating a need for a useFetch custom hook, and handling of loading time and errors.  The recipe data was obtained from TheMealDB, at "https://www.themealdb.com/."

## Features

Implementation of this project required: 

1. State Management & Data Fetching

  - Use the useState and useEffect hooks to fetch and display data from the API.
  - Your application should manage loading and error states gracefully, displaying appropriate UI indicators to the user (e.g., a loading spinner, an error message).

2. Custom Hooks

You must create and implement at least two custom hooks:

  - useFetch (or similar): A generic custom hook for handling data fetching logic. It should manage the data, loading state, and error state. This hook will be used throughout your application to communicate with the API.
  - useLocalStorage: A custom hook to synchronize a piece of state with the browser’s localStorage. This will be used to persist the user’s list of favorite recipes.

3. Global State with Context API

  - Create a FavoritesContext to manage the user’s list of favorite recipes globally.
  - The context must provide:
    - A list of favorite recipe IDs.
    - A function to add a recipe to favorites.
    - A function to remove a recipe from favorites.
    A function to check if a recipe is already in favorites.
  - This context should use your useLocalStorage hook internally to persist the favorites list across browser sessions.

4. Routing

Your application must include the following pages and routing logic:

  - Home Page (/):
    - Displays a grid or list of all available recipe categories fetched from the API.
    - Each category should be a link that navigates to its respective category page.

  - Category Page (/category/[categoryName]):
    - A dynamic route that displays all recipes belonging to the category specified in the URL (e.g., /category/Seafood).
    - Each recipe shown should be a link to its detailed recipe page.

  - Recipe Detail Page (/recipe/[recipeId]):
    - A dynamic route that fetches and displays the full details for a single recipe (image, ingredients, instructions, etc.).
    - This page must include a button to “Add to Favorites” or “Remove from Favorites”. The button’s state and action should be handled by your FavoritesContext.

  - Favorites Page (/favorites):
    - Displays a list of all recipes that the user has marked as a favorite.
    - If the user has no favorites, this page should display a message prompting them to browse and add some.

  - Search Functionality:
    - A search bar, likely in a shared Navbar, that allows users to search for recipes by name.
    - Submitting a search should navigate the user to a search results page (e.g., /search?query=Arrabiata). This page will display the results of the search query.

5. Components & UI

  - Create reusable, well-styled components (e.g., RecipeCard, Navbar, Spinner, ErrorMessage).
  - The application should be visually appealing and responsive. Use of a CSS framework, CSS-in-JS, or CSS Modules is up to you.

## Tools

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Vite
- React Router

To Run this React application, follow the following steps in the terminal:
npm create vite@latest
cd task-dashboard
npm install
npm run dev

## Reflection

I enjoyed implementing the code for this assignment.  Making a recipe app was a fun way to use all the new skills learned in React.  One of the new things I had to learn was using useSearchParams for the search bar.  It took some time to figure it out, but I'm happy with the search results.  A challenge I faced was using TypeScript with React.  Some of the labs I did, I only used JavaScript, so I found it hard to avoid type errors this time.  I really don't like using TypeScript with React.  It should save time by allowing the developer to deal with compile errors instead of run time errors, but I find that chasing down all the type errors is more time consuming than dealing with run time errors.  The types are much more complicated in React and less intuitive.  I would prefer using JavaScript with React in the future if given a choice, but I'm glad for the exposure.  It's a good skill to have.  Overall, I'm happy with the results of this SBA, but given more time, I would improve the CSS to make it look better.