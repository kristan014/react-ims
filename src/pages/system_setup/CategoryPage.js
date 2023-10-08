import React, { Component } from "react";
import adminLayout from "../../hoc/adminLayout"

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return <div>Category</div>;
  }
}

export default adminLayout(CategoryPage);
