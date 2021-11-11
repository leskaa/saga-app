import React from 'react';

import { Typography, Layout } from 'antd';
import { useNavigate } from 'react-router';
import { BookProps } from './types';
import './book.css';

const { Title } = Typography;
const { Content } = Layout;
function Book(props: BookProps): React.ReactElement {
  const { course } = props;
  const navigate = useNavigate();

  const colors = [
    '#84C2E8',
    '#91D5FF',
    '#C8A7BA',
    'FF7875',
    '#FFB597',
    '#FFD3A8',
    '#FFF1B8',
    '#8096A2',
    '#003A8C',
    '#002766',
  ];
  const bookColor = colors[Math.floor(Math.random() * colors.length)];

  const handleOnClick = () => {
    navigate(`/adventure/${course.id}`);
  };
  return (
    <Content className="book" onClick={handleOnClick}>
      <Content className="back" style={{ background: bookColor }} />
      <Content className="page6" />
      <Content className="page5" />
      <Content className="page4" />
      <Content className="page3" />
      <Content className="page2">
        <Title level={3} className="page-title">
          {course.description}
        </Title>
      </Content>
      <Content className="page1" />
      <Content className="front" style={{ background: bookColor }}>
        <Title level={2} className="book-title">
          {course.name}
        </Title>
      </Content>
    </Content>
  );
}

export default Book;
