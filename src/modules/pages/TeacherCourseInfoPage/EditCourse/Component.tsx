import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import {
  Form,
  Input,
  Button,
  Select,
  Space,
  Row,
  Col,
  Slider,
  InputNumber,
} from 'antd';
import 'react-quill/dist/quill.snow.css';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import { EditCourseProps } from './types';

function EditCourse(props: EditCourseProps): React.ReactElement {
  const { user } = props;

  const [inputValue, setInputValue] = useState(4);

  const [form] = Form.useForm();

  const format = 'HH:mm';

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        { color: [] },
        { background: [] },
      ],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
        { align: [] },
      ],
      ['link', 'code-block'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'color',
    'background',
    'list',
    'bullet',
    'indent',
    'text alignment',
    'link',
    'code block',
  ];

  const { Option } = Select;

  const onChange = (value: number) => {
    setInputValue(value);
  };

  return (
    <>
      <Row>
        <Col span={3} />
        <Col span={18}>
          <Form form={form} layout="vertical" requiredMark={false}>
            <Form.Item
              name="coursename"
              label="Course Name"
              rules={[
                { required: true, message: 'Please give your course a name!' },
              ]}
            >
              <Input placeholder="New Course" />
            </Form.Item>

            <Form.List name="units">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: 'flex', marginBottom: 8 }}
                      align="baseline"
                    >
                      <Row>
                        <Col span={6}>Set Name</Col>
                        <Col span={6}>Map</Col>
                        <Col span={6}>Description</Col>
                        <Col span={6} />
                      </Row>
                      <Row>
                        <Col span={6}>
                          <Form.Item
                            {...restField}
                            name={[name, 'unitname']}
                            fieldKey={[fieldKey, 'unitname']}
                            rules={[
                              { required: true, message: 'Missing set name' },
                            ]}
                          >
                            <Input placeholder="New Unit" />
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <Form.Item
                            {...restField}
                            name={[name, 'map']}
                            fieldKey={[fieldKey, 'map']}
                          >
                            <Select defaultValue="Liquid">
                              <Option value="BusyBee">Busy Bee</Option>
                              <Option value="AutumnRoad">Autumn Road</Option>
                              <Option value="Liquid">Liquid</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <Form.Item
                            {...restField}
                            name={[name, 'description']}
                            fieldKey={[fieldKey, 'description']}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Col>
                      </Row>
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Unit
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
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
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
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
                        onChange={onChange}
                      />
                    </Col>
                  </Row>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Course
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={3} />
      </Row>
    </>
  );
}

export default EditCourse;
