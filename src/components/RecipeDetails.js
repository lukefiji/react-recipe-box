import React from "react";

const RecipeDetails = props => {
  return (
    <div>
      <div>
        {recipes.details[recipe].ingredients}
      </div>
      <div>
        {recipes.details[recipe].instructions}
      </div>
    </div>
  );
};

export default RecipeDetails;
