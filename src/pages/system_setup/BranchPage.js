import React, { Component } from "react";
import adminLayout from "../../hoc/adminLayout"
import TableComponent from "../../components/Datatables/TableComponent";
import FormComponent from "../../components/Forms/FormComponent";

class BranchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labels:{
        branch_name: 'Branch Name',
        manager: 'Manager',
        contact_no: 'Contact No',
        email: 'Email',
        region: 'Region',
        barangay: 'Barangay',
        city: 'City',
        zip_code: 'Zip Code',
        street_name: 'Street Name',
        unit_floor: 'Unit Floor',
      },
      values:{
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
      }
    };
  }

  render() {
    return (<div>
     <h1>Branches</h1>
      <FormComponent labels={this.state.labels} values={this.state.values}/>
      <TableComponent />

    </div>);
  }
}

export default adminLayout(BranchPage);

