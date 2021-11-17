import "./App.css";
import { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import Search from "./Search";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then(response => response.json())
      .then(data => {
        setRecipes(data.recipes);
        setDisplayedRecipes(data.recipes);
      })
  }, []);

  const filterOutIngredient = (ingredient) => {
    const filtered = recipes.filter((recipe) => !recipe.ingredients.includes(ingredient));
    setDisplayedRecipes(filtered);
  }

  const filterInIngredient = (ingredient) => {
    // TODO: Implement this logic
    console.log(`[filterInIngredient] ${ingredient}`);
  }

  return (
    <div id="the-app">
      <header className="app-header">
        <h1>Recipe Hero</h1>
      </header>
      <main>
        <Search
          filterOutHandler={filterOutIngredient}
          filterInHandler={filterInIngredient}
        />

        {displayedRecipes.length > 0
          ? <RecipeList recipes={displayedRecipes} />
          : <span>No recipes found.</span>
        }
      </main>
    </div>
  )
}

export default App
