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

  componentDidMount() {
    this.load()
  }

  load = async () => {
    let Branch = (await import("../../api/Branch")).default;
    this.setState({ component: Branch })
  };


  render() {
    return (
        <>
        {this.state.component !== '' && <this.state.component updateRowState={this.props.updateRowState} />}
      </>
    );
  }
}

export default RowComponent;
