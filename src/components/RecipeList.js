import React from "react";

const RecipeList = props => {
  const { recipes } = props;
  return (
    <div>
      {recipes.recipeList.map(recipe => {
        return (
          <div onClick={() => props.selectRecipe(recipe)} key={recipe}>
            {recipe}
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
