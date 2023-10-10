import React, { Component } from "react";

class Branch extends Component {
  constructor(props) {
    super(props);

    this.getDataTable()

  }

  getDataTable = async () => {
    // console.log(localStorage.getItem('TOKEN'))
    try {
        await fetch('http://localhost:3612/api/v1/branch/datatable', {
            headers: new Headers({
                'Accept': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + localStorage.getItem('TOKEN'), 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                // if (data.success) {
                    console.log(data.data)
                    this.props.updateRowState(data.data)

                // }
            });
    } catch (error) {
        console.log(error)
    }
    

};


  render() {

    return <></>;
  }
}

export default Branch;
