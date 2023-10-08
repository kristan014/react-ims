import React, { Component } from "react";
import adminLayout from "../../hoc/adminLayout"

class DiscountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return <div>DiscountPage</div>;
  }
}

export default adminLayout(DiscountPage);
