import { Component } from "react";

class Branch extends Component {

  // for datatables
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

  // for getting specific row
  getOne = async(id)  => {

    try {
      await fetch(`http://localhost:3612/api/v1/branch/${id}`, {
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
          this.props.getValues(data.data);

          // }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // create
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

  // update
  update = (request) => {
    let id = request.id
    delete request['id']
    try {
      fetch(`http://localhost:3612/api/v1/branch/${id}`, {
        headers: new Headers({
          Accept: "application/json; charset=UTF-8",
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
          "Content-Type": "application/json",
        }),
        method: "put",
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

  // delete
  delete = (id) => {
    try {
      fetch(`http://localhost:3612/api/v1/branch/${id}`, {
        headers: new Headers({
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        }),
        method: "delete",
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

  render() {
    return null;
  }
}

export default Branch;
