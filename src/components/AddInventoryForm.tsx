import React, { useState } from 'react';
import {Button, DatePicker, Form, Input} from "antd";
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';

interface Props {
  addTodo: AddTodo;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};

export const AddInventoryForm: React.FC<Props> = ({addTodo}) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const [comment, setComment] = useState('');
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    addTodo(values.id, values.text, values.expiry.toDate(), values.comment);
    form.resetFields();
  };
  return (
    <Form 
      {...layout}
      form={form}
      name="entry-form"
      onFinish={onFinish}
      >
        <Form.Item name="id" label="编号" rules={[{required: true}]}>
          <Input value={id} onChange={(e)=>{
            setId(e.target.value)
          }} />
        </Form.Item>
        <Form.Item name="text" label="产品" rules={[{required: true}]}>
          <Input value={text} onChange={(e)=>{
            setText(e.target.value)
          }} />
        </Form.Item>
        <Form.Item name="expiry" label="过期日期" rules={[{required: true}]}>
          <DatePicker 
            value={moment(startDate)}
            onChange={(date, dateString)=>{
              setStartDate(new Date(dateString));
            }}
          />
        </Form.Item>
        <Form.Item name="comment" label="备注">
          <TextArea rows={4} value={comment} onChange={(e)=>{
            setComment(e.target.value)
          }} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
    </Form>
  );
};