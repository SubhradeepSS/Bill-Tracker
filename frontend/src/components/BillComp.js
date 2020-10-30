import React from 'react';
import axios from 'axios'

import BillTableLayout from '../containers/BillTableLayout'
import BillFormLayout from '../containers/BillFormLayout'


const SERVER = "http://127.0.0.1:8000"

export default class Bill extends React.Component {
    constructor() {
        super()
        this.state = {
            bills: []
        }
    }

    componentDidMount() {
        axios.get(SERVER)
            .then(resp => {
                this.setState({
                    bills: resp.data
                })
            })
    }

    handleSubmit = values => {
        axios.post(SERVER, values)
            .then(() => {
                this.setState(prev => {
                    return {
                        bills: prev.bills.concat(values)
                    }
                })
            })
    }

    handleDelete = bill_no => {
        const bills = [...this.state.bills]
        axios.delete(`${SERVER}/${bill_no}`)
            .then(() => {
                this.setState({ bills: bills.filter(bill => bill.bill_no !== bill_no) })
            })
    }

    render() {
        return (
            <div>
                <BillTableLayout data={this.state.bills} onDelete={this.handleDelete} />
                <br />
                <h1>Add a new bill</h1>
                <BillFormLayout onSubmit={this.handleSubmit} />
            </div>
        )
    }
}