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

  return (
    <div id="the-app">
      <header className="app-header">
        <h1>Recipe Hero</h1>
      </header>
      <main>
        <Search />
        <RecipeList recipes={recipes} />
      </main>
    </div>
  )
}

export default App
