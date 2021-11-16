import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons"

const IngredientItem = ({ title, minusHandler }) => {
  return (
    <li className="recipe-ingredient">
      <span>{title}</span>
      {/* TODO: This syntax tripped me up for way too long; consult with old man Coberly */}
      <span onClick={() => minusHandler(title)}>
        <FontAwesomeIcon icon={faMinusCircle} className="icon" />
      </span>
    </li>
  )
}

export default IngredientItem
