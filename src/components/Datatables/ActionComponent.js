import React, { Component } from 'react'

export class ActionComponent extends Component {
    constructor(props) {
        super(props)

    }

    actionState = (id, btn) => {
        if (btn == "btn-danger") {
            console.log("delete",id)
        }
        else if (btn == "btn-success") {
            console.log("edit",id)

        }
        else {
            console.log("view",id)
        }
    }



    render() {
        const { id, btnColor, btnIcon } = this.props

        return (
            <button type="button"
                className={`btn ${btnColor} waves-effect`}
                onClick={(e) => this.actionState(id, btnColor)}>
                <i className={`fa ${btnIcon}`} ></i>
            </button>
        )
    }
}

export default ActionComponent