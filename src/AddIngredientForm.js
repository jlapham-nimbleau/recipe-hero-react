import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// TODO: Handle `disabled` for `option` elements

const AddIngredientForm = ({ ingredients, addHandler }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const ingredient = event.target[0].value;
    addHandler(ingredient);
  }

  return (
    <form className="ingredient-picker" onSubmit={onSubmitHandler}>
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
