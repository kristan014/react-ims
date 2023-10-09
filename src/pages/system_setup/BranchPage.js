import React, { Component } from "react";
import adminLayout from "../../hoc/adminLayout"
import TableComponent from "../../components/Datatables/TableComponent";

class BranchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (<div>
      BranchPage
      <TableComponent />

    </div>);
  }
}

export default adminLayout(BranchPage);

