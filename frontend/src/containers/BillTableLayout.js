import React from 'react'
import { Table, Popconfirm } from 'antd';


export default function BillLayout(props) {
    const columns = [
        {
            title: 'Bill Number',
            dataIndex: 'bill_no',
            sorter: {
                compare: (a, b) => a.bill_no - b.bill_no,
            },
        },
        {
            title: 'Bill For',
            dataIndex: 'bill_for',
        },
        {
            title: 'Date Paid',
            dataIndex: 'date_paid',
            sorter: {
                compare: (a, b) => a.date_paid > b.date_paid,
            },
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            sorter: {
                compare: (a, b) => a.amount - b.amount,
            },
        },
        {
            title: '',
            dataIndex: 'delete',
            render: (text, record) => (
                props.data.length > 0
                    ? <Popconfirm title="Delete the bill??" onConfirm={() => props.onDelete(record.bill_no)}>
                        <a href="javascript;">Delete</a>
                    </Popconfirm>
                    : null
            )
        }
    ];
    return (
        <Table
            columns={columns}
            dataSource={props.data}
        />
    )
}
