import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle, faPlus } from "@fortawesome/free-solid-svg-icons"

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
          <li key={`${index}-${title}`} className="recipe-ingredient">
            <span>{title}</span>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Search
