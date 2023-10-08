import React, { Component } from 'react'
import adminLayout from "../../hoc/adminLayout"

class RolePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>RolePage</div>
    )
  }
}

export default adminLayout(RolePage);
