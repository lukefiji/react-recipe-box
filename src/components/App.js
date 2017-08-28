import React, { Component } from "react";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

import "../App.css";

const starterData = {};

class App extends Component {
  constructor() {
    super();

    // recipeNames
    this.state = {
      userEditing: false,
      selectedRecipe: "Tomato & Onion Omelette",
      recipeList: ["Tomato & Onion Omelette", "Test 1", "Test 2"],
      details: {
        "Tomato & Onion Omelette": {
          ingredients: ["Tomato", "Onion", "4 Eggs"],
          instructions: [
            "Slice tomatoes and onions.",
            "Scramble eggs.",
            "Mix tomatoes and onions in scrambled eggs and cook."
          ]
        }
      }
    };
  }

  editIngredient = newIngredients => {
    this.setState({});
  };

  selectRecipe = recipe => {
    this.setState({ selectedRecipe: recipe });
  };

  componentDidMount() {
    const recipeData = localStorage.getItem("ReactRecipeBox");
    recipeData
      ? this.setState({ recipeData })
      : this.setState({ recipeData: starterData });
    this.state.recipeList[0]
      ? this.setState({ selectedRecipe: this.state.recipeList[0] })
      : this.setState({ selectedRecipe: "Please create a new recipe" });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Recipe Box</h2>
        </div>
        <RecipeList recipes={this.state} selectRecipe={this.selectRecipe} />
        <RecipeDetails
          recipe={this.state.selectedRecipe}
          recipeDetails={this.state.details[this.state.selectedRecipe]}
          saveIngredient={this.saveIngredient}
        />
      </div>
    );
  }
}

export default App;
