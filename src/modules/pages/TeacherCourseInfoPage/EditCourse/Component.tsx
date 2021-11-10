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
            <Form.List
              name="units"
              rules={[
                {
                  validator: async (_, units) => {
                    if (!units || units.length < 1) {
                      return Promise.reject(
                        new Error('At least 1 chapter is required!')
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field) => (
                    <Form.Item required={false} key={field.key}>
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              'Please input chapter name or delete this field.',
                          },
                        ]}
                        noStyle
                      >
                        <Row>
                          <Col span={6}>
                            <Form.Item>
                              <Input placeholder="New Chapter" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item>
                              <Select defaultValue="Liquid">
                                <Option value="BusyBee">Busy Bee</Option>
                                <Option value="AutumnRoad">Autumn Road</Option>
                                <Option value="Liquid">Liquid</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={13}>
                            <Form.Item>
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={1}>
                            {fields.length > 1 ? (
                              <MinusCircleOutlined
                                style={{ paddingLeft: '30%' }}
                                className="dynamic-delete-button"
                                onClick={() => remove(field.name)}
                              />
                            ) : null}
                          </Col>
                        </Row>
                      </Form.Item>
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: '100%' }}
                      icon={<PlusOutlined />}
                    >
                      Add Chapter
                    </Button>
                    <Form.ErrorList errors={errors} />
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
