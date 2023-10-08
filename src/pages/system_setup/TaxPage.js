import React, { Component } from 'react'
import adminLayout from "../../hoc/adminLayout"

class TaxPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>TaxPage</div>
    )
  }
}

export default adminLayout(TaxPage);
