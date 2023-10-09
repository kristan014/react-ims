import React, { Component } from 'react'
import Stack from 'react-bootstrap/Stack';
import ActionComponent from './ActionComponent';

class ColumnComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    name: "Title",
                    selector: (row) => row.title,
                    sortable: true,
                    width: "30%"
                },
                {
                    name: "Directior",
                    selector: (row) => row.director,
                    sortable: true,
                    width: "30%"

                },
                {
                    name: "Runtime (m)",
                    selector: (row) => row.runtime,
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

        props.updateState(this.state.columns)

    }

    render() {
        return <></>
    }
}

export default ColumnComponent