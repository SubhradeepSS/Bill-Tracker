import React from 'react';
import axios from 'axios'

import BillTableLayout from '../containers/BillTableLayout'
import BillFormLayout from '../containers/BillFormLayout'

export default class Bill extends React.Component {
    constructor() {
        super ();
        this.state = {
            bills: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/")
            .then(resp => {
                this.setState({
                    bills: resp.data
                })
            })
    }

    handleSubmit = (values) => {
        const bill_no = values.bill_no
        const amount = values.amount
        const bill_for = values.bill_for
        const date_paid = values.date_paid
        
        axios.post("http://127.0.0.1:8000/", {
            bill_no: bill_no,
            amount: amount,
            bill_for: bill_for,
            date_paid: date_paid
        })

        this.setState(prev => {
            return {
                bills: prev.bills.concat({
                    bill_no: bill_no,
                    amount: amount,
                    bill_for: bill_for,
                    date_paid: date_paid
                })
            }
        })
    }

    render(){
        return (
            <div>
                <BillTableLayout data={this.state.bills}/>
                <br />
                <h1>Add a new bill</h1>
                <BillFormLayout onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}