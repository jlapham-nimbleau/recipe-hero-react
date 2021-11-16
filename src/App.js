import "./App.css";
import RecipeList from "./RecipeList";
import Search from "./Search";

const App = () => {
  return (
  <div id="the-app">
    <header className="app-header">
      <h1>Recipe Hero</h1>
    </header>
    <main>
      <Search />
      <RecipeList />
    </main>
  </div>
  )
}

export default App
