import React from 'react'
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
};
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 10,
    },
};

export default function BillFormLayout(props) {
    return (
      <div>
        <Form {...layout} onFinish={props.onSubmit}>
          <Form.Item 
            label="Bill No" 
            name="bill_no"
            rules={[
              {
                required: true,
                message: 'Please input bill number!',
              },
            ]}
          >
            <Input name="bill_no"/>
          </Form.Item>
    
          <Form.Item label="Bill For" name="bill_for">
            <Input name="bill_for"/>
          </Form.Item>
    
          <Form.Item label="Date paid" name="date_paid">
            <Input name="date_paid"/>
          </Form.Item>
    
          <Form.Item label="Amount" name="amount">
            <Input name="amount"/>
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
      )
}