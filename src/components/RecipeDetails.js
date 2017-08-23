import React from "react";

const RecipeDetails = ({ recipeDetails, recipe }) => {
  // Check for recipe ingredients
  const ingredients =
    recipeDetails && recipeDetails.ingredients
      ? recipeDetails.instructions
      : "No ingredients";

  // Check for recipe instructions
  const instructions =
    recipeDetails && recipeDetails.instructions
      ? recipeDetails.ingredients
      : "No instructions";

  return (
    <div>
      <div>
        Selected Recipe: {recipe}
      </div>
      <div>
        {instructions}
      </div>
      <div>
        {ingredients}
      </div>
    </div>
  );
};

export default RecipeDetails;
