import React, { Component } from 'react'
import adminLayout from "../../hoc/adminLayout"


class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>UserPage</div>
    )
  }
}

export default adminLayout(UserPage);
