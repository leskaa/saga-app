import React from 'react';
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
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { CreateCourseModalProps } from './types';
import { apiEndpoint } from '../../../../root/constants';
import EditCourse from '../../../TeacherCourseInfoPage/EditCourse';

const { Title } = Typography;
const { Option } = Select;

function CreateCourseModal(props: CreateCourseModalProps): React.ReactElement {
  const { user, ...rest } = props;

  const inputValue = 4;

  const [form] = Form.useForm();

  const onSubmit = (value: any) => {
    console.log(value);
  };

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
              layout="vertical"
              requiredMark={false}
              initialValues={{
                chapters: [
                  { name: 'name1', map: 'AutumnRoad', description: 'abc' },
                  { name: 'name2', map: 'Liquid', description: 'xyz' },
                ],
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
                    <Select defaultValue="Liquid">
                      <Option value="BusyBee">Busy Bee</Option>
                      <Option value="AutumnRoad">Autumn Road</Option>
                      <Option value="Liquid">Liquid</Option>
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
                  <Form.Item name="prize description" label="Prize Description">
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
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button type="primary" htmlType="submit" onSubmit={onSubmit}>
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
