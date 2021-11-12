import React, { useMemo } from 'react';
import { Table, Button, List, Row, Col } from 'antd';
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

  // const getSelectedMessages = useMemo(() => {
  //   return [selectedMessage.id];
  // }, [selectedMessage]);

  // const deleteColumn: ColumnsType<Message> = [
  //   {
  //     title: 'Action',
  //     key: 'delete',
  //     render: (value, record) => (
  //       <Button type="primary" onClick={() => handleDeleteClick(record)}>
  //         Delete
  //       </Button>
  //     ),
  //   },
  // ];

  return (
    <List
      className="inbox-table-container"
      size="small"
      dataSource={messages}
      renderItem={(record: any) => (
        <List.Item
          style={
            selectedMessage === record
              ? { background: '#FF7875', color: 'white' }
              : {}
          }
          onClick={() => handleRowClick(record)}
        >
          <div className="inboxtext">
            <b>{record.sender}</b> - {record.subject}
          </div>
        </List.Item>
      )}
    />
  );
}

export default InboxTable;
