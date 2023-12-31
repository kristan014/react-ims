import React, { Component } from "react";
import DataTable from "react-data-table-component";
import ColumnComponent from "./ColumnComponent";
import RowComponent from "./RowComponent";


export class TableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [],
      rows: []
    };

    
  }

  // update the content of columns
  updateColumnState = (columnItem) => {
    this.setState({ columns: columnItem })
  }

  // update the content of rows
  updateRowState = (rowItem) => {
    this.setState({ rows: rowItem })
  }

  render() {
    return (
      <div className="mt-3">

        {/* Call Column Component to get the columns */}
        <ColumnComponent 
          updateColumnState={this.updateColumnState} 
          tableColumn={this.props.tableColumn} 
          getValues={this.props.getValues} 
          dataSource={this.props.dataSource}

          />

        {/* Call Column Component to get the rows */}
        <RowComponent 
        updateRowState={this.updateRowState} 
        dataSource={this.props.dataSource}
        />

        {/* Call Datatable */}
        <DataTable
          title={this.props.title}
          columns={this.state.columns}
          data={this.state.rows}
          defaultSortFieldID={1}
          pagination
        // selectableRows
        // expandableRows
        />
      </div>
    );
  }
}

export default TableComponent;
