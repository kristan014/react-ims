import React, { Component } from 'react'
import adminLayout from "../../hoc/adminLayout"

class SupplierPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>SupplierPage</div>
    )
  }
}

export default adminLayout(SupplierPage);
