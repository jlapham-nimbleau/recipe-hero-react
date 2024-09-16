
import IngredientItem from "./IngredientItem";
import AddIngredientForm from "./AddIngredientForm";

const ingredients = [
  {
    title: "Eggs"
  },
  {
    title: "Bread"
  },
  {
    title: "Cheese"
  },
  {
    title: "Bacon"
  },
];

const Search = ({ filterOutHandler, filterInHandler }) => {
  const minusHandler = (ingredient) => {
    filterOutHandler(ingredient);
  }

  const addHandler = (ingredient) => {
    filterInHandler(ingredient);
  }

  return (
    <section className="ingredient-search">
      <h2>Search Recipes By Ingredient</h2>

      <AddIngredientForm
        ingredients={ingredients}
        addHandler={addHandler}
      />

      <ul className="ingredients">
        {ingredients.map(({ title }, index) => (
          <IngredientItem
            key={`${index}-${title}`}
            title={title}
            minusHandler={minusHandler}
          />
        ))}
      </ul>
    </section >
  )
}

export default Search
