import React from 'react';
import ReactQuill from 'react-quill';
import { Button, InputNumber, Row, Col, Typography, List } from 'antd';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './assignmentsubmissions.css';

const { Text } = Typography;

function AssignmentSubmissions(props: AssignmentProps): React.ReactElement {
  const { user } = props;

  const onChange = (e: any) => {
    console.log('selected student');
  };

  const onHover = (e: any) => {
    console.log('hovering student');
  };

  return (
    <>
      <Row>
        <Col span={2} />
        <Col
          span={5}
          className="sidebar"
          onClick={onChange}
          onMouseOver={onHover}
        >
          <List size="small">
            <List.Item>Student1</List.Item>
            <List.Item>Student2</List.Item>
            <List.Item>Student3</List.Item>
            <List.Item>Student4</List.Item>
            <List.Item>Student5</List.Item>
            <List.Item>Student6</List.Item>
            <List.Item>Student7</List.Item>
            <List.Item>Student8</List.Item>
            <List.Item>Student9</List.Item>
            <List.Item>Student10</List.Item>
            <List.Item>Student11</List.Item>
            <List.Item>Student12</List.Item>
            <List.Item>Student13</List.Item>
            <List.Item>Student14</List.Item>
            <List.Item>Student15</List.Item>
          </List>
        </Col>
        <Col span={1} />
        <Col span={14}>
          <Row className="assignment">
            <Col span={4}>Student Name</Col>
            <Col span={10} />
            <Col span={2}>
              <Text>Stars:</Text>
            </Col>
            <Col span={4}>
              <InputNumber min={0} max={5} style={{ margin: '0 16px' }} />
            </Col>
            <Col span={4}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                Save
              </Button>
            </Col>
          </Row>
          <Row className="text">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nisl eros, tempus quis laoreet at, finibus ac lectus. Sed egestas
              ipsum non justo viverra, non aliquam elit rutrum. Donec id ligula
              non tortor tempor scelerisque. Nullam ut est gravida, luctus
              ligula fringilla, vehicula lorem. Donec ac egestas risus, vitae
              pulvinar orci. Vestibulum blandit tincidunt diam, sit amet
              accumsan leo laoreet et. Pellentesque efficitur turpis sed nunc
              pharetra venenatis. Cras eu pharetra libero. Etiam ut eleifend
              risus. Suspendisse commodo sapien eu velit sagittis hendrerit.
              Quisque a convallis mi. Pellentesque eget elementum ligula. Morbi
              commodo, tellus non consectetur venenatis, erat neque feugiat
              odio, ac sagittis tortor metus et ante. Ut laoreet a augue
              vestibulum placerat. Pellentesque lacus turpis, consectetur et
              molestie ac, sagittis eu dolor. Donec congue ut magna et feugiat.
              Morbi ut nunc vitae purus vehicula tristique. Duis et tempor
              neque. Nullam rhoncus a diam vel lobortis. Etiam eleifend
              facilisis accumsan. Sed eget laoreet enim. Morbi ullamcorper orci
              at eros semper, in blandit mauris sodales. Integer nec mollis
              sapien. Mauris magna tellus, molestie vitae purus a, porta
              eleifend arcu. Donec in ante at mauris posuere congue. Curabitur
              sed lorem varius, fermentum ligula id, tempor nibh. Cras
              consectetur volutpat orci, sed blandit tortor aliquam ut.
              Pellentesque finibus magna nec diam sagittis, quis pulvinar dolor
              dapibus. Nunc in suscipit magna, at ultricies augue. Donec
              ultricies sapien hendrerit felis dictum molestie. Proin sagittis
              in leo sed tincidunt. Nam aliquet placerat mauris, a lobortis
              nulla feugiat vel. Integer blandit ullamcorper magna at porta.
              Aenean sed luctus metus. Ut est diam, condimentum ut nunc sed,
              venenatis faucibus mauris. Suspendisse eget lacus efficitur,
              eleifend lorem vitae, efficitur lacus. Nulla varius sem vitae
              viverra tempor. Ut ac dolor scelerisque, varius leo id, ultrices
              nunc. Maecenas sit amet euismod magna, quis cursus nunc. Nunc
              vitae scelerisque nibh, sed auctor lorem. Nullam porttitor eros
              nec eros consectetur gravida. Duis sed nibh non urna pellentesque
              dapibus eget non tortor. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Ut vitae bibendum
              dolor. Curabitur ullamcorper laoreet nunc, a efficitur elit
              consectetur vel. Ut congue nec elit id cursus. Aenean sagittis
              dolor lobortis finibus vulputate. Aliquam erat volutpat. In
              euismod ante eget libero dapibus, id efficitur sapien lobortis.
              Morbi quis consectetur orci. Phasellus pretium mi in metus
              euismod, in fringilla est tempor. Sed at sodales augue.
              Pellentesque tempus id lorem a accumsan. Cras mattis massa ut elit
              rhoncus vulputate. Aliquam ac venenatis tortor, eget rutrum leo.
              Quisque quis magna vitae sem elementum pulvinar. Nunc ultricies
              nisi quis lorem auctor tristique. Aenean nec tincidunt lorem.{' '}
            </div>
          </Row>
        </Col>
        <Col span={2} />
      </Row>
    </>
  );
}

export default AssignmentSubmissions;
