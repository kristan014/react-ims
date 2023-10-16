import React, { Component } from "react";

export class ActionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: "",
    };

    this.child = React.createRef();
  }

  //solved the no-op mount error
  componentDidMount() {
    this.load();
  }

  // call the api source that will be displayed to the pages
  load = async () => {
    let component = (await this.props.apiSource).default;
    this.setState({ component: component });
  };

  actionState = (id, btn) => {
    if (btn === "btn-danger") {
      this.child.current.delete();
    } else if (btn === "btn-success") {
      console.log(this.props.values)
      this.child.current.update();
    } else {
      this.child.current.getOne();
    }
  };

  render() {
    const { id, btnColor, btnIcon } = this.props;

    return (
      <>
        {this.state.component !== "" && (
          <this.state.component
            setState={this.props.setState}
            ref={this.child}
          />
        )}

        <button
          type="button"
          className={`btn ${btnColor} waves-effect`}
          onClick={(e) => this.actionState(id, btnColor)}
        >
          <i className={`fa ${btnIcon}`}></i>
        </button>
      </>
    );
  }
}

export default ActionComponent;
