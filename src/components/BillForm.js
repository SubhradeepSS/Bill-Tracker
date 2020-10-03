import React from 'react'

export default function BillForm(props){
    return (
        <form onSubmit={props.onSubmit}>
                <label>
                    Bill Number
                    <input type="text" name="billNo" />
                </label>

                <label>
                    Bill For 
                    <input type="text" name="billFor" />
                </label>

                <label>
                    Date paid
                    <input type="text" name="datePaid" />
                </label>

                <label>
                    Amount
                    <input type="number" name="amount" />
                </label>
                
                <input type="submit" value="Add" />
        </form>
    )
}