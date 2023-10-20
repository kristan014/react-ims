import React, { Component } from "react";

export class ActionComponent extends Component {

  actionState = (id, btn) => {
    if (btn === "btn-danger") {
      this.props.dataSource.current.delete(id);
    } else if (btn === "btn-success") {
      this.props.dataSource.current.getOne(id,this.props.getValues);
    } else {
      this.props.dataSource.current.getOne(id,this.props.getValues);
      
    }
  };

  render() {
    const { id, btnColor, btnIcon } = this.props;

    return (
      <>

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
