const RecipeCard = () => {
  return (
    <li>
      <div className="recipe-card">
        <h2>Framed Eggs</h2>
        <div className="recipe-description">
          <img src="images/framed-egg.jpg" />
          <p>
            Egg in frame or toad in the hole—whatever you choose to call it, this recipe
            is a super fun way to spruce up the classic eggs and toast breakfast. Leave
            the yolks slightly runny so you can dip those crusty cutouts and sop up all
            the golden goodness on your plate!
          </p>
        </div>
        <ul className="recipe-step-indicator">
          <li className="active">1</li>
          <li className="">2</li>
          <li className="">3</li>
          <li className="">4</li>
          <li className="">5</li>
          <li className="">6</li>
        </ul>
        <div className="recipe-step">
          <p>
            Cut out center of each bread slice using a 2 1/2- to 3-inch heart, round,
            or other shaped cookie cutter. Set slices aside, reserving both bread and cutouts.
          </p>
          <img src="/images/framed-egg-1.jpg" alt="Step 1" />
        </div>
        <div className="command-bar">
          {/* Placeholder to keep flex style */}<span></span><button>Next</button>
        </div>
      </div>
    </li>
  )
}

export default RecipeCard
