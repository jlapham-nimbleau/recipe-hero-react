import "./App.css";
import { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import Search from "./Search";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then(response => response.json())
      .then(data => {
        setRecipes(data.recipes);
      })
  }, []);

  const filterOutIngredient = (ingredient) => {
    // TODO: Finish implementing this logic -- apply filtered result to `recipes`
    // TODO: Use state for original recipes? Probably for filtered results might be better?
    const filtered = recipes.filter((recipe) => !recipe.ingredients.includes(ingredient));
    console.log(`Filtered recipes: $${JSON.stringify(filtered)}`);
  }

  return (
    <div id="the-app">
      <header className="app-header">
        <h1>Recipe Hero</h1>
      </header>
      <main>
        <Search filterOutHandler={filterOutIngredient} />

        {displayedRecipes.length > 0
          ? <RecipeList recipes={displayedRecipes} />
          : <span>No recipes found.</span>
        }
      </main>
    </div>
  )
}

export default App
