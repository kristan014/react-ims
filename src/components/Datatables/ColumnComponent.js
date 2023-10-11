import React, { Component } from 'react'
import Stack from 'react-bootstrap/Stack';
import ActionComponent from './ActionComponent';

class ColumnComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    name: "branch_name",
                    selector: (row) => row.branch_name,
                    sortable: true,
                    width: "30%"
                },
                {
                    name: "email",
                    selector: (row) => row.email,
                    sortable: true,
                    width: "30%"

                },
                {
                    name: "status",
                    selector: (row) => row.status,
                    sortable: true,
                    right: true,
                    width: "10%"

                },
                {
                    name: "Actions",
                    button: true,
                    width: "20%",
                    right: true,
                    cell: (row) => (
                        <Stack direction="horizontal" gap={1}>
                            <ActionComponent id={row.id} btnColor={"btn-secondary"} btnIcon={"fa-info"}/>
                            <ActionComponent id={row.id} btnColor={"btn-success"} btnIcon={"fa-edit"}/>
                            <ActionComponent id={row.id} btnColor={"btn-danger"} btnIcon={"fa-trash"}/>
                        </Stack>

                    ),
                },
            ]
        }

        props.updateColumnState(this.state.columns)
        // console.log(this.state.columns)
    }

    render() {
        return <></>
    }
}

export default ColumnComponent