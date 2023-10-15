import React, { Component } from 'react'
import Stack from 'react-bootstrap/Stack';
import ActionComponent from './ActionComponent';

class ColumnComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: []
        }

        // update the columns state to update the columns displayed 
        props.updateColumnState(this.state.columns)

        // push the columns defined from the parent component that will be displayed
        this.props.tableColumn.forEach((column)=>{
            this.state.columns.push(column)
        })

        // the last push will be the buttons
        this.state.columns.push(
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
                }
        )
     
    }

    render() {
        return <></>
    }
}

export default ColumnComponent