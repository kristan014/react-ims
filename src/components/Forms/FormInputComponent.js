import React, { Component } from "react";
import { Col } from "react-bootstrap";

export class FormInput extends Component {

  onChange = (e) => {
    console.log(e);
  };

  render() {
    const { label, value } = this.props;

    return (
      <Col md={3}>
        <label>{label}</label>
        <input
          className="form-control"
          type="text"
          value={value}
          onChange={(e) => this.onChange(e)}
        />
      </Col>
    );
  }
}

export default FormInput;
