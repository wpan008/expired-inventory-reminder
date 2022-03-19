import { Table } from 'antd';
import React from 'react';

interface Props {
  todos: Item[];
}

const columns = [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '名称',
    dataIndex: 'text',
    key: 'text'
  },
  {
    title: '过期',
    dataIndex: 'expiry',
    key: 'expiry',
    render: ((date:Date) => {
      return date.toLocaleDateString();
    })
  },
  {
    title: '备注',
    dataIndex: 'comment',
    key: 'comment',
  }
];

export const InventoryList: React.FC<Props> = ({ todos }) => {
  return (
    <Table columns={columns} dataSource={todos} />
  );
};