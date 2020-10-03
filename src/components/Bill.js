import React from 'react'
import BillForm from './BillForm'

export default function Bill(props) {
    const handleSubmit = (e) => {
        e.preventDefault()

        const amount = e.target.elements.amount.value
        const billNo = e.target.elements.billNo.value
        const billFor = e.target.elements.billFor.value
        const datePaid = e.target.elements.datePaid.value

        props.addBill({
            amount: amount,
            billNo: billNo,
            billFor: billFor,
            datePaid: datePaid
        })
    }
 
    return (
            <div>
                <BillForm onSubmit={handleSubmit}/>
                <br/>
            </div>
        )
}