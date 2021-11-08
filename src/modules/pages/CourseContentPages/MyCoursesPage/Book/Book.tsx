import React from "react";

import { Typography } from "antd";
import { BookProps } from "./types";
import "./book.css";

const { Title } = Typography;

function Book(props: BookProps): React.ReactElement {

  const { course } = props;

  const handleOnClick = () => {
    console.log("BOOK CLICKED");
  }
  return (

    <div className="book" onClick={handleOnClick}>
      <div className="back"></div>
      <div className="page6"></div>
      <div className="page5"></div>
      <div className="page4"></div>
      <div className="page3"></div>
      <div className="page2">
        <Title level={3} className="page-title">{course.description}</Title>
      </div>
      <div className="page1"></div>
      <div className="front">
        <Title level={2} className="book-title">{course.name}</Title>
      </div>

    </div>
  )
}

export default Book;
