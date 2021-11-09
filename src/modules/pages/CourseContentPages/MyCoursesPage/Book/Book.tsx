import React from "react";

import { Typography, Layout } from "antd";
import { BookProps, BOOK_COLORS, CSS_COLORS } from "./types";
import "./book.css";

const { Title } = Typography;
const { Content } = Layout;
function Book(props: BookProps): React.ReactElement {

  const { course } = props;

  const bookColor = CSS_COLORS[Math.floor(Math.random() * (CSS_COLORS.length))];

  const handleOnClick = () => {
    console.log("BOOK CLICKED");
  }
  return (

    <Content className="book" onClick={handleOnClick} >
      <Content className="back" style={{background: bookColor}} ></Content>
      <Content className="page6"></Content>
      <Content className="page5"></Content>
      <Content className="page4"></Content>
      <Content className="page3"></Content>
      <Content className="page2">
        <Title level={3} className="page-title">{course.description}</Title>
      </Content>
      <Content className="page1"></Content>
      <Content className="front" style={{background: bookColor}}>
        <Title level={2} className="book-title">{course.name}</Title>
      </Content>

    </Content>
  )
}

export default Book;
