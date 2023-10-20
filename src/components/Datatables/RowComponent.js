import React, { Component } from "react";

export class RowComponent extends Component {
 
  //solved the no-op mount error
  componentDidMount = () =>{
    // if child props is not null, call the getDataTable
    this.props.dataSource.current !== null &&
        this.props.dataSource.current.getDataTable(this.props.updateRowState);
  }


  render() {
    return <></>;
  }
}

export default RowComponent;
