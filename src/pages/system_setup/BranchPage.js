import React, { Component } from "react";
import adminLayout from "../../hoc/adminLayout"
import DataTableComponent from "../../components/DataTableComponent";

class BranchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (<div>
      BranchPage
      <DataTableComponent />

    </div>);
  }
}

export default adminLayout(BranchPage);

