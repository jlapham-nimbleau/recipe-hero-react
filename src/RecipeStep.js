const RecipeStep = ({ step }) => {
  const { stepNumber, description, imageUrl } = step;

  return (
    <div className="recipe-step">
      <p>
        {description}
      </p>
      <img src={`/images/${imageUrl}`} alt={`Step ${stepNumber}`} />
    </div>
  )
}

export default RecipeStep
