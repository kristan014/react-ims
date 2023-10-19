import React, { Component } from "react";

export class RowComponent extends Component {
  constructor(props) {
    super(props);

    this.props.child.current !== null &&
      this.props.child.current.getDataTable();
    this.load()

  }

  //solved the no-op mount error
  componentDidMount() {
    this.load()
  }

  // call the api source that will be displayed to the pages
  load = async () => {
   this.props.child.current !== null &&
   await  this.props.child.current.getDataTable();
  };

  render() {
    return <>
    { this.props.child.current !== null &&
      this.props.child.current.getDataTable()}
    </>;
  }
}

export default RowComponent;
