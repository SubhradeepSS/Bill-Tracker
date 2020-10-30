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
  const [form] = Form.useForm()
  return (
    <div>
      <Form {...layout} onFinish={props.onSubmit} form={form}>
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
          <Input name="bill_no" />
        </Form.Item>

        <Form.Item
          label="Bill For"
          name="bill_for"
          rules={[
            {
              required: true,
              message: 'Please input for whom bill is paid!',
            },
          ]}
        >
          <Input name="bill_for" />
        </Form.Item>

        <Form.Item
          label="Date paid"
          name="date_paid"
          rules={[
            {
              required: true,
              message: 'Please input date of bill payment!',
            },
          ]}
        >
          <Input name="date_paid" />
        </Form.Item>

        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: 'Please input amount!',
            },
          ]}
        >
          <Input name="amount" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
          type="primary"
          onClick={() => form.resetFields() }
          >
              Clear Form
            </Button>
        </Form.Item>
      </Form>
    </div>
  )
}