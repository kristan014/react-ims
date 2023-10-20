import React, { Component } from 'react'

export class LoadComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      component: ''
    }

    this.dataSource = React.createRef();
  }


  //solved the no-op mount error
  componentDidMount() {
    this.load();
  }

  // call the api source
  load = async () => {
    let component = (await this.props.source).default;
    this.setState({ component: component });
    this.props.setSource({ dataSource: this.dataSource })
  };


  render() {
    return (
      <>
        {this.state.component !== "" && <this.state.component ref={this.dataSource} />}
      </>
    )
  }
}

export default LoadComponent