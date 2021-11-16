const RecipeStep = ({ step }) => {
  const { stepNumber, description, imageUrl } = step;

  return (
    <div className="recipe-step">
      <p>
        {description}
      </p>
      <img src={imageUrl} alt={`Step ${stepNumber}`} />
    </div>
  )
}

export default RecipeStep
