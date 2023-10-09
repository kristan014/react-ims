import React, { Component } from "react";
import DataTable from "react-data-table-component";
import Testdata from "../../api/Testdata";
import ColumnComponent from "./ColumnComponent";

export class TableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: []
    };

    this.updateState = this.updateState.bind(this)     
  }
  
  updateState = (columnItem) => {  
    this.setState({columns : columnItem})  
  } 
  
  render() {
    return (
      <>  
      <ColumnComponent updateState={this.updateState}/>
      <DataTable
      title="Movies"
      columns={this.state.columns}
      data={Testdata}
      defaultSortFieldID={1}
      pagination
      selectableRows
      expandableRows
      
      />
     </> 
    );
  }
}

export default TableComponent;
