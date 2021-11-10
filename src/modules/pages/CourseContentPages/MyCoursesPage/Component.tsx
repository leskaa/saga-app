import React, { useState } from 'react';
import { Layout } from 'antd';
import Book from './Book';
import { Course } from '../../../general/types';
import { dummyCourse } from '../../../general/dummyData';

const { Content } = Layout;
function MyCoursesPage(): React.ReactElement {
  // TODO: add effect to populate componet state with courses
  const [courses, setCourses] = useState<Course[]>([
    dummyCourse,
    dummyCourse,
    dummyCourse,
    dummyCourse,
    dummyCourse,
    dummyCourse,
    dummyCourse,
  ]);

  return (
    <Content style={{ height: '100%', overflow: 'scroll', padding: '4em' }}>
      {courses.map((course) => (
        <Book course={course} />
      ))}
    </Content>
  );
}

export default MyCoursesPage;
