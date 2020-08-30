import React from 'react'
import { Table } from 'antd';

const columns = [
        {
            title: 'Bill Number',
            dataIndex: 'bill_no',
        },
        {
            title: 'Bill For',
            dataIndex: 'bill_for',
        },
        {
            title: 'Date Paid',
            dataIndex: 'date_paid',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            sorter: {
            compare: (a, b) => a.amount - b.amount,
            },
        },
    ];


export default function BillLayout(props){
    return (
        <Table 
            columns={columns} 
            dataSource={props.data} 
        />
    )
}
