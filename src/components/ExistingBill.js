import React from 'react'

export default function ExistingBills(props){
    return (
        <div>
            Bill No: {props.data.billNo}<br/>
            Bill For: {props.data.billFor}<br/>
            Bill Paid on: {props.data.datePaid}<br/>
            Bill Amount: {props.data.amount}<br/>
            <button onClick={props.onDelete}>
                Delete
            </button>
            <br/>
            <br/>
        </div>
    )
}