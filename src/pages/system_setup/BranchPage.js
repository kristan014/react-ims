import React, { Component } from "react";
import adminLayout from "../../hoc/adminLayout";
import TableComponent from "../../components/Datatables/TableComponent";
import FormComponent from "../../components/Forms/FormComponent";

class BranchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: "",
      // Used for Forms
      labels: {
        id: "id",
        branch_name: "Branch Name",
        manager: "Manager",
        contact_no: "Contact No",
        email: "Email",
        region: "Region",
        barangay: "Barangay",
        city: "City",
        zip_code: "Zip Code",
        street_name: "Street Name",
        unit_floor: "Unit Floor",
      },
      values: {
        id: "",
        branch_name: "",
        manager: "",
        contact_no: "",
        email: "",
        region: "",
        barangay: "",
        city: "",
        zip_code: "",
        street_name: "",
        unit_floor: "",
      },

      // assign to column component of Datatables
      tableColumn: [
        {
          name: "Branch Name",
          selector: (row) => row.branch_name,
          sortable: true,
          width: "30%",
        },
        {
          name: "Email",
          selector: (row) => row.email,
          sortable: true,
          width: "20%",
        },
        {
          name: "Location",
          selector: (row) => `${row.region} ${row.city} ${row.barangay}`,
          sortable: true,
          width: "30%",
        },
      ],
    };

    // createRef is used to call a method from child component
    this.child = React.createRef();
  }

  //solved the no-op mount error
  componentDidMount() {
    this.load();
  }

  // call the api source
  load = async () => {
    let component = (await import("../../api/Branch")).default;
    this.setState({ component: component });

  };

  // update state of forms on every onChange of fields
  setValues = (name, value) => {
    this.setState({ values: { ...this.state.values, [name]: value } });
  };

  getValues = (values) => {
    this.setState({ values: values });
  };

  render() {
    return (
      <div>
        {this.state.component !== "" && <this.state.component ref={this.child} />}

        <h1>Branches</h1>
        <FormComponent
          labels={this.state.labels}
          values={this.state.values}
          setValues={this.setValues}
          child={this.child}
        />

        <TableComponent
          title={"Branches"}
          tableColumn={this.state.tableColumn}
          getValues={this.getValues}
          child={this.child}
          apiSource={import("../../api/Branch")}
          component={this.state.component}
        />
      </div>
    );
  }
}

export default adminLayout(BranchPage);
