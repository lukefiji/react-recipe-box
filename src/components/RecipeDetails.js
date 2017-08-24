import React, { Component } from "react";
import IngredientsList from "./IngredientsList";
import InstructionsList from "./InstructionsList";

class RecipeDetails extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: [],
      instructions: []
    };
  }

  componentDidMount() {
    const { recipeDetails } = this.props;

    // Check for ingredients and add it to local state
    if (recipeDetails && recipeDetails.ingredients) {
      this.setState({ ingredients: recipeDetails.ingredients });
    }

    // Check for instructions and add it to local state
    if (recipeDetails && recipeDetails.instructions) {
      this.setState({ instructions: recipeDetails.instructions });
    }
  }

  render() {
    const { recipe, recipeDetails } = this.props;

    // Check for recipe instructions
    let instructions = "No instructions";
    if (recipeDetails && recipeDetails.instructions) {
      instructions = recipeDetails.instructions.map((instruction, i) =>
        <div key={instruction}>
          {i + 1}. {instruction}
        </div>
      );
    }

    return (
      <div className="recipe__details">
        <div>
          Selected Recipe: {recipe}
        </div>
        <div className="ingredients">
          <IngredientsList ingredients={this.state.ingredients} />
        </div>
        <div className="instructions">
          <InstructionsList instructions={this.state.instructions} />
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
