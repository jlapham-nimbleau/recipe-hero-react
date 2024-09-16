import RecipeCard from "./RecipeCard"

const RecipeList = ({ recipes }) => {
  return (
    <ul className="recipes">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={`${index}-${recipe.name}`}
          recipe={recipe}
        />
      ))}
    </ul>
  )
}

export default RecipeList
