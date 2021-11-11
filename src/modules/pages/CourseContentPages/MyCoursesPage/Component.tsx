import React from 'react';
import useSWR from 'swr';
import { Layout, Spin } from 'antd';
import Book from './Book';
import { Course } from '../../../general/types';
import { apiEndpoint } from '../../../root/constants';

const { Content } = Layout;
function MyCoursesPage(): React.ReactElement {
  // TODO: add effect to populate componet state with courses
  const { data, error } = useSWR(`${apiEndpoint}/courses`);

  if (data === undefined) {
    return <Spin size="default" />;
  }
  return (
    <Content style={{ height: '100%', overflow: 'scroll', padding: '4em' }}>
      {data.map((course: Course) => (
        <Book course={course} />
      ))}
    </Content>
  );
}

export default MyCoursesPage;
