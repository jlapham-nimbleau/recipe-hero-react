import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons"

const IngredientItem = ({ title, minusHandler }) => {
  return (
    <li className="recipe-ingredient">
      <span>{title}</span>
      <span onClick={() => minusHandler(title)}>
        <FontAwesomeIcon icon={faMinusCircle} className="icon" />
      </span>
    </li>
  )
}

export default IngredientItem
