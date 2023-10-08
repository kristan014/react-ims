import React, { Component } from "react";
import adminLayout from "../../hoc/adminLayout"

class LoyaltyCardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return <div>LoyaltyCardPage</div>;
  }
}

export default adminLayout(LoyaltyCardPage);
