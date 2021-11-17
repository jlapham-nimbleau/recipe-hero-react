import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// TODO: Handle `disabled` for `option` elements

const AddIngredientForm = ({ ingredients }) => {
  const addHandler = (event) => {
    event.preventDefault();
    console.log(`[addHandler] event: ${event.target[0].value}`);
    // TODO: Finish implementing
  }

  return (
    <form className="ingredient-picker" onSubmit={addHandler}>
      <select placeholder="Add an ingredient">
        <option disabled={true}>Pick an ingredient</option>
        {ingredients.map(({ title }, index) => (
          <option key={`${index}-${title}`}>{title}</option>
        ))}
      </select>
      <button>
        <FontAwesomeIcon icon={faPlus} className="icon" />
      </button>
    </form >
  )
}

export default AddIngredientForm
