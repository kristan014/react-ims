import React, { Component } from "react";

export class FormButtons extends Component {

  render() {
    const { type, color, name, show } = this.props;
    return (
      show === true && (
        <button
          type={type}
          className={`btn ${color}`}
        >
          {name}
        </button>
      )
    );
  }
}

export default FormButtons;
