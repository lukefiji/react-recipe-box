import React, { Component } from "react";
import Instruction from "./Instruction";

class InstructionsList extends Component {
  constructor() {
    super();

    this.state = { instruction: ["No Instructions"] };
  }

  componentDidMount() {
    if (this.props.instructions) {
      this.setState({ instructions: this.props.instructions });
    }
  }

  render() {
    let instructions = (
      <Instruction
        key="No Instructions"
        instruction="No Instructions"
        editInstruction={this.props.editInstruction}
      >
        No Instructions
      </Instruction>
    );

    if (this.state.instructions) {
      instructions = this.props.instructions.map(instruction =>
        <Instruction
          key={instruction}
          instruction={instruction}
          editInstruction={this.props.editInstruction}
        />
      );
    }

    return (
      <div>
        {instructions}
      </div>
    );
  }
}

export default InstructionsList;
