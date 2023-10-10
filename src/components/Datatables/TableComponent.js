import React, { Component } from "react";
import DataTable from "react-data-table-component";
import Testdata from "../../api/Testdata";
import ColumnComponent from "./ColumnComponent";
import Branch from "../../api/Branch";

export class TableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [],
      rows: []
    };

    this.updateColumnState = this.updateColumnState.bind(this) 
    this.updateRowState = this.updateRowState.bind(this)     
        
  }
  
  updateColumnState = (columnItem) => {  
    this.setState({columns : columnItem})  
  } 

  updateRowState = (rowItem) => {  
    this.setState({rows : rowItem})  
  } 
  
  render() {
    return (
      <div className="mt-3">  
      <ColumnComponent updateColumnState={this.updateColumnState}/>
      <Branch updateRowState={this.updateRowState}/>
      <DataTable
      title="Movies"
      columns={this.state.columns}
      data={Testdata}
      defaultSortFieldID={1}
      pagination
      selectableRows
      expandableRows
      
      />
     </div> 
    );
  }
}

export default TableComponent;
