import React, { useEffect, useState } from 'react';
import axios from 'axios'

import BillTableLayout from '../containers/BillTableLayout'
import BillFormLayout from '../containers/BillFormLayout'


const server = "http://127.0.0.1:8000"

export default function Bill() {

    const [bills, setBills] = useState([])

    useEffect(() => {
        let data_loaded = true;
        axios.get(server)
                .then(resp => {
                    if(data_loaded) {
                        setBills(resp.data)
                    }
                })
        return () => data_loaded = false
      }, [])


    const handleSubmit = values => {
        const date_paid = values.date_paid._d
        var mm = date_paid.getMonth() + 1; 
        var dd = date_paid.getDate();
        values.date_paid = [
                            date_paid.getFullYear(),
                                (mm > 9 ? '' : '0') + mm,
                                (dd > 9 ? '' : '0') + dd
                            ].join('-');

        const bills_with_billno = bills.filter(bill => bill.bill_no === values.bill_no)
        const remaining_bills = bills.filter(bill => bill.bill_no !== values.bill_no)

        if (bills_with_billno.length == 0) {
            axios.post(server, values)
                .then(() => setBills(bills.concat(values)))
        }
        else {
            axios.put(`${server}/${values.bill_no}`, values).then(() => {
                setBills(remaining_bills.concat(values))
            })
        }
    }

    const handleDelete = bill_no => {
        const existing_bills = [...bills]
        axios.delete(`${server}/${bill_no}`)
            .then(() => {
                setBills(existing_bills.filter(bill => bill.bill_no !== bill_no))
            })
    }


    return (
        <div>
            <BillTableLayout data={bills} onDelete={handleDelete} />
            <br />
            <h1>Add/Update a bill</h1>
            <BillFormLayout onSubmit={handleSubmit} />
        </div>
    )
}
