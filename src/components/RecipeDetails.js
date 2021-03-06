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

  saveIngredient = (oldIngredient, newIngredient) => {
    const { ingredients } = this.state;
    const i = ingredients.indexOf(oldIngredient);

    // Save new ingredient if found in array
    if (i >= 0) {
      this.setState({
        ingredients: [
          ...ingredients.slice(0, i),
          newIngredient,
          ...ingredients.slice(i + 1)
        ]
      });
    }
  };

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
          <IngredientsList
            ingredients={this.state.ingredients}
            saveIngredient={this.saveIngredient}
          />
        </div>
        <div className="instructions">
          <InstructionsList instructions={this.state.instructions} />
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
