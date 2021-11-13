import React, { useState } from 'react';
import {
  Modal,
  Form,
  Input,
  Button,
  Typography,
  message,
  Row,
  Col,
  Select,
  Slider,
  InputNumber,
  Spin,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import { useNavigate } from 'react-router';
import { CreateCourseModalProps } from './types';
import { apiEndpoint } from '../../../../root/constants';
import EditCourse from '../../../TeacherCourseInfoPage/EditCourse';
import { Map } from '../../../../general/types';

const { Title } = Typography;
const { Option } = Select;

function CreateCourseModal(props: CreateCourseModalProps): React.ReactElement {
  const { user, setVisible, ...rest } = props;

  const [inputValue, setInputValue] = useState(4);
  const { data: maps } = useSWR(`${apiEndpoint}/maps`);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
    fetch(`${apiEndpoint}/courses/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.coursename,
        description: '',
        starGoal: inputValue,
        prize: values.prizedescription,
        mapIds: [values.map],
      }),
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          message.error('There was an issue creating the adventure.', 10);
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        fetch(`${apiEndpoint}/courses/${json.course_id}/units`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: values.coursename,
            description: values.description,
            unitNumber: 1,
            mapId: [values.map],
          }),
          credentials: 'include',
        })
          .then((res) => {
            if (!res.ok) {
              message.error('There was an issue creating the chapter.', 10);
              throw Error(res.statusText);
            }
            message.success('Adventure created!', 10);
            setVisible(false);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  if (maps === undefined) {
    return <Spin size="large" />;
  }

  return (
    <Modal footer={null} {...rest} width="70%">
      <Title className="title" style={{ textAlign: 'center' }}>
        Create Adventure
      </Title>
      <>
        <Row>
          <Col span={1} />
          <Col span={22}>
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              requiredMark={false}
              initialValues={{
                map: 1,
              }}
            >
              <Form.Item
                name="coursename"
                label="Adventure Name"
                rules={[
                  {
                    required: true,
                    message: 'Please name your adventure!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Row>
                <Col span={6}>Chapter Name</Col>
                <Col span={4}>Map</Col>
                <Col span={13}>Description</Col>
                <Col span={1} />
              </Row>
              <Row>
                <Col span={6}>
                  <Form.Item name="name">
                    <Input placeholder="Chapter 1" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item name="map">
                    <Select>
                      {maps.map((map: Map) => (
                        <Option value={map.id}>{map.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={14}>
                  <Form.Item name="description">
                    <Input placeholder="Description" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={16}>
                  <Form.Item name="prizedescription" label="Prize Description">
                    <Input placeholder="Description" />
                  </Form.Item>
                </Col>
                <Col span={2} />
                <Col span={6}>
                  <Form.Item
                    name="prizestars"
                    label="Required Average Stars for Prize"
                  >
                    <Row>
                      <Col span={12}>
                        <Slider
                          min={0}
                          max={5}
                          value={
                            typeof inputValue === 'number' ? inputValue : 0
                          }
                          onChange={setInputValue}
                          step={0.1}
                        />
                      </Col>
                      <Col span={4}>
                        <InputNumber
                          min={0}
                          max={5}
                          style={{ margin: '0 16px' }}
                          step={0.1}
                          value={inputValue}
                          onChange={setInputValue}
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={1} />
        </Row>
      </>
    </Modal>
  );
}

export default CreateCourseModal;
