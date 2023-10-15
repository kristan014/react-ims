import React, { Component } from "react";
import { Col } from "react-bootstrap";

export class FormInput extends Component {

  
  onChange = (e) => {
    this.props.updateState(e.target.name,e.target.value)
  };

  render() {
    const { label, value, name } = this.props;

    return (
      <Col md={3}>
        <label>{label}</label>
        <input
          className="form-control"
          type="text"
           name={name}
          value={value}
          onChange={(e) => this.onChange(e)}
        />
      </Col>
    );
  }
}

export default FormInput;
