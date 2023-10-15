import { Component } from "react";

class Branch extends Component {
  getDataTable = async (apiItem) => {
    // console.log(localStorage.getItem('TOKEN'))
    try {
      await fetch(`http://localhost:3612/api/v1/branch/datatable`, {
        headers: new Headers({
          Accept: "application/json; charset=UTF-8",
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          // if (data.success) {
          // console.log(data)
          this.props.updateRowState(data.data);

          // }
        });
    } catch (error) {
      console.log(error);
    }
  };

  getOne = () => {};

  create = (request) => {
    try {
      fetch("http://localhost:3612/api/v1/branch", {
        headers: new Headers({
          Accept: "application/json; charset=UTF-8",
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          "Content-Type": "application/json",
        }),
        method: "post",
        body: JSON.stringify(request),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  update = () => {};

  delete = () => {};

  render() {
    return null;
  }
}

export default Branch;
