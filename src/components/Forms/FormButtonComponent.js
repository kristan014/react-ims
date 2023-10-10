import React, { Component } from "react";

export class FormButtons extends Component {
  onSubmit = () => {
    console.log("submit");
  };

  render() {
    const { type, color, name, show } = this.props;
    return (
      show === true && (
        <button
          type={type}
          className={`btn ${color}`}
          onClick={() => this.onSubmit()}
        >
          {name}
        </button>
      )
    );
  }
}

export default FormButtons;
