import React, { Component } from "react";
// import Branch from "../../api/Branch";

export class RowComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
    this.load = this.load.bind(this);

  }

  load = async () => {
    let Branch = (await import("../../api/Branch")).default;
    this.setState({ component: Branch })
    // this.state.component = Branch
  };


  render() {
    return (
   
      this.state.component !== '' &&
      <>
      <button onLoad={this.load}></button>
        <this.state.component updateRowState={this.props.updateRowState} />
      </>
    );
  }
}

export default RowComponent;
