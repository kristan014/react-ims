import React, { Component } from 'react'
import adminLayout from "../../hoc/adminLayout"


class AccessPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>AccessPage</div>
    )
  }
}

export default adminLayout(AccessPage);
