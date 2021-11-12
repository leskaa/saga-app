import React, { useMemo } from 'react';
import { Table, Button, List, Row, Col, Avatar, message } from 'antd';
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
  const { messages, selectedMessage, handleRowClick } = props;

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
      size="small"
      dataSource={messages}
      renderItem={(record: any) => (
        <List.Item
          id="hoverable"
          style={
            selectedMessage === record.message
              ? { background: '#FF7875', color: 'white' }
              : {}
          }
          onClick={() => handleRowClick(record)}
        >
          <div className="inboxtext">
            <Avatar
              alt="profile avatar"
              src={record.sender.selected_avatar_url}
              style={{ width: '2em', height: '2em' }}
            />
            <b> {record.sender.name}</b> - {record.message.subject}
          </div>
        </List.Item>
      )}
    />
  );
}

export default InboxTable;
