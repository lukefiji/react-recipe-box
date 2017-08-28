import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientsList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.ingredients) {
      this.setState({ ingredients: this.props.ingredients });
    }
  }

  render() {
    let ingredients = (
      <Ingredient
        key="No Ingredients"
        ingredient="No Ingredients"
        editIngredient={this.props.editIngredient}
        saveIngredient={this.props.saveIngredient}
      >
        No Ingredients
      </Ingredient>
    );

    if (this.props.ingredients) {
      ingredients = this.props.ingredients.map(ingredient =>
        <Ingredient
          key={ingredient}
          ingredient={ingredient}
          editIngredient={this.props.editIngredient}
          saveIngredient={this.props.saveIngredient}
        />
      );
    }

    return (
      <div>
        {ingredients}
      </div>
    );
  }
}

export default IngredientsList;
