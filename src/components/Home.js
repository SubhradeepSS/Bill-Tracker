import React from 'react'
import Bill from './Bill'
import ExistingBill from './ExistingBill'

export default class Home extends React.Component{
    constructor() {
        super()
        this.state = {
            bills: []
        }
        this.addBill = this.addBill.bind(this)
    }

    addBill(bill){
        this.setState(prev => {
            const bills = prev.bills.slice()
            return {
                bills: bills.concat(bill)
            }
        })
    }

    deleteBill(delete_bill_idx) {
        this.setState(prev => {
            const bills = prev.bills.slice()
            bills.splice(delete_bill_idx, 1)
            return {
                bills: bills
            }  
        })
    }

    render(){
        const bills = this.state.bills.map((bill, idx) => 
                <ExistingBill
                    key={bill.billNo} 
                    data={bill}
                    onDelete={() => this.deleteBill(idx)} 
                />
            )
        return (
            <div>
                <Bill addBill={this.addBill}/>
                <h1>Existing Bills</h1>
                {
                    bills.length ? bills : "No bills added"
                }
            </div>
        )
    }
}