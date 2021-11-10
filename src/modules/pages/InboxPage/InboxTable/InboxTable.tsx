import React, { useMemo } from 'react';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { InboxTableProps } from './types';
import { Message } from '../../../general/types';
import { dateOptions } from '../../../root/constants';
import './inboxtable.css';

const { Column } = Table;

const messageColumns: ColumnsType<Message> = [
  {
    key: 'sender',
    title: 'Sender',
    dataIndex: 'sender',
  },
  {
    key: 'subject',
    title: 'Subject',
    dataIndex: 'subject',
  },
  {
    key: 'content',
    title: 'Content',
    dataIndex: 'content',
  },
  {
    key: 'createdAt',
    title: 'Received At',
    dataIndex: 'createdAt',
    render: (value, record) => (
      <>{record.createdAt.toLocaleDateString('en-US', dateOptions)}</>
    ),
  },
];

function InboxTable(props: InboxTableProps): React.ReactElement {
  const { messages, selectedMessage, handleDeleteClick, handleRowClick } =
    props;

  const getSelectedMessages = useMemo(() => {
    return [selectedMessage.id];
  }, [selectedMessage]);

  const deleteColumn: ColumnsType<Message> = [
    {
      title: 'Action',
      key: 'delete',
      render: (value, record) => (
        <Button type="primary" onClick={() => handleDeleteClick(record)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Table<Message>
      className="inbox-table-container"
      rowKey="id"
      key="id"
      scroll={{ y: '100vh' }}
      pagination={false}
      columns={[...messageColumns /* ...deleteColumn */]}
      dataSource={messages}
      rowSelection={{
        type: 'radio',
        selectedRowKeys: getSelectedMessages,
      }}
      bordered
      onRow={(record) => {
        return {
          onClick: () => handleRowClick(record),
        };
      }}
    />
  );
}

export default InboxTable;
