import React, { Component } from "react";

class Instruction extends Component {
  constructor() {
    super();
    this.state = {
      instruction: "",
      editing: false
    };
  }

  componentDidMount() {
    // Set state as instruction passed down through props
    this.setState({ instruction: this.props.instruction });
  }

  toggleEditMode = () => {
    // Toggle edit mode
    this.setState((state, props) => {
      return {
        editing: !this.state.editing
      };
    });

    // If edit has been made and is different from its initial instruction
    if (
      this.state.editing &&
      this.state.instruction !== this.props.instruction
    ) {
      console.log("Changed to:", this.state.instruction);
    }
  };

  handleChange = e => {
    this.setState({ instruction: e.target.value });
  };

  render() {
    let node = this.state.instruction;

    if (this.state.editing) {
      node = (
        <input
          type="text"
          value={this.state.instruction}
          onChange={this.handleChange}
        />
      );
    }

    return (
      <div>
        {node} <button onClick={this.toggleEditMode}>Edit</button>
      </div>
    );
  }
}

export default Instruction;
