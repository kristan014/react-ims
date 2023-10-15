import React, { Component } from "react";

export class RowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: ''
    }
    
    // createRef is used to call a method from child component
    this.child = React.createRef();
  }
  
  
  //solved the no-op mount error
  componentDidMount() {
    this.load()
  }

  // call the api source that will be displayed to the pages
  load = async () => {
    let component = (await this.props.apiSource).default;
    this.setState({ component: component })
    this.child.current.getDataTable()
  };


  render() {
    return (
        <>
        {/* if state is not null it will call the component needed for the request */}
        {this.state.component !== '' && <this.state.component updateRowState={this.props.updateRowState} ref={this.child}/>}
      </>
    );
  }
}

export default RowComponent;
