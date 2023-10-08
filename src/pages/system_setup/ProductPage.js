import React, { Component } from 'react'
import adminLayout from "../../hoc/adminLayout"

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>ProductPage</div>
    )
  }
}

export default adminLayout(ProductPage);
