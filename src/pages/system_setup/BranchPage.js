import React, { Component } from "react";
import adminLayout from "../../hoc/adminLayout"
import TableComponent from "../../components/Datatables/TableComponent";
import FormComponent from "../../components/Forms/FormComponent";

class BranchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      branch_name: '',
      manager: '',
      contact_no: '',
      email: '',
      region: '',
      barangay: '',
      city: '',
      zip_code: '',
      street_name: '',
      unit_floor: '',
    };
  }

  render() {
    return (<div>
     <h1>Branches</h1>
      <FormComponent />
      <TableComponent />

    </div>);
  }
}

export default adminLayout(BranchPage);

