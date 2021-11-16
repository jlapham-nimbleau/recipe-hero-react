import { useState } from "react";
import RecipeStep from "./RecipeStep";

const RecipeCard = ({ recipe }) => {
  const { title, description, imageUrl, steps } = recipe;
  const [activeStep, setActiveStep] = useState(1);
  const nextHandler = () => setActiveStep(activeStep + 1);

  return (
    <li>
      <div className="recipe-card">
        <h2>{title}</h2>
        <div className="recipe-description">
          <img src={`/images/${imageUrl}`} alt={title} />
          <p>
            {description}
          </p>
        </div>
        <ul className="recipe-step-indicator">
          {steps.map(({ stepNumber }, index) => (
            <li
              key={`${index}-${stepNumber}`}
              className={activeStep === stepNumber ? "active" : ""}>
              {stepNumber}
            </li>
          ))}
        </ul>
        {/* TODO: This feels dodgy; should maybe have an `activeStepIndex` state prop as well */}
        <RecipeStep step={steps[activeStep - 1]} />
        <div className="command-bar">
          {/* Placeholder to keep flex style */}<span></span><button onClick={nextHandler}>Next</button>
        </div>
      </div>
    </li>
  )
}

export default RecipeCard
