import React, { Component } from "react";
import adminLayout from "../../hoc/adminLayout"

class BranchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div>BranchPage</div>;
  }
}

export default adminLayout(BranchPage);

