import React from 'react';

import { Typography, Layout } from 'antd';
import { BookProps } from './types';
import './book.css';

const { Title } = Typography;
const { Content } = Layout;
function Book(props: BookProps): React.ReactElement {
  const { course, colorIndex, onBookClick } = props;

  const colors = [
    '#D6AAEF',
    '#DEA0D7',
    '#E993B6',
    '#F59593',
    '#FFB597',
    '#FFD3A8',
    '#FFF1B8',
    '#C8E3DC',
    '#ADDCEE',
    '#91D5FF',
  ];

  return (
    <Content className="book" onClick={onBookClick}>
      <Content className="back" style={{ background: colors[colorIndex] }} />
      <Content className="page6" />
      <Content className="page5" />
      <Content className="page4" />
      <Content className="page3" />
      <Content className="page2">
        <Title level={4} className="page-title" style={{ padding: '5%' }}>
          {course.description}
        </Title>
      </Content>
      <Content className="page1" />
      <Content className="front" style={{ background: colors[colorIndex] }}>
        <Title
          level={3}
          className="book-title"
          style={{ fontFamily: 'Cinzel', padding: '10%' }}
        >
          {course.name}
        </Title>
      </Content>
    </Content>
  );
}

export default Book;
