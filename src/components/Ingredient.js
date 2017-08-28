import React, { Component } from "react";

class Ingredient extends Component {
  constructor() {
    super();
    this.state = {
      ingredient: "",
      editing: false
    };
  }

  componentDidMount() {
    // Set state as ingredient passed down through props
    this.setState({ ingredient: this.props.ingredient });
  }

  toggleEditMode = () => {
    // Toggle edit mode
    this.setState((state, props) => {
      return {
        editing: !this.state.editing
      };
    });

    // If an edit has been made and has changed
    if (this.state.editing && this.state.ingredient !== this.props.ingredient) {
      console.log("Changed to:", this.state.ingredient);
      this.setState({ ingredient: this.state.ingredient });

      // Update IngredientsList state to reflect change in ingredient
      this.props.saveIngredient(this.props.ingredient, this.state.ingredient);
    }
  };

  handleChange = e => {
    this.setState({ ingredient: e.target.value });
  };

  render() {
    let ingredient = this.state.ingredient;

    if (this.state.editing) {
      ingredient = (
        <input
          type="text"
          value={this.state.ingredient}
          onChange={this.handleChange}
        />
      );
    }

    return (
      <div>
        {ingredient} <button onClick={this.toggleEditMode}>Edit</button>
      </div>
    );
  }
}

export default Ingredient;
