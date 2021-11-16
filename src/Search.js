import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import IngredientItem from "./IngredientItem";

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

const Search = () => {
  const minusHandler = (ingredient) => {
    console.log(`[minusHandler] ${ingredient}`);
  }

  return (
    <section className="ingredient-search">
      <h2>Search Recipes By Ingredient</h2>
      <form className="ingredient-picker">
        <select placeholder="Add an ingredient">
          <option disabled="">Pick an ingredient</option>
        </select>
        <button>
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </button>
      </form>
      <ul className="ingredients">
        {ingredients.map(({ title }, index) => (
          <IngredientItem
            key={`${index}-${title}`}
            title={title}
            minusHandler={minusHandler}
          />
        ))}
      </ul>
    </section>
  )
}

export default Search
