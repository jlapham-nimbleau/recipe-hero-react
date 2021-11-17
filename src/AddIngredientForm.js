import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// TODO: Handle `disabled` for `option` elements

const AddIngredientForm = ({ ingredients }) => {
  return (
    <form className="ingredient-picker">
      <select placeholder="Add an ingredient">
        <option disabled="">Pick an ingredient</option>
        {ingredients.map(({ title }, index) => (
          <option>{title}</option>
        ))}
      </select>
      <button>
        <FontAwesomeIcon icon={faPlus} className="icon" />
      </button>
    </form >
  )
}

export default AddIngredientForm
