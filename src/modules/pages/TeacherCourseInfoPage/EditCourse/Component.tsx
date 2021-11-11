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
  Spin,
} from 'antd';
import 'react-quill/dist/quill.snow.css';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import useSWR from 'swr';
import { EditCourseProps } from './types';
import { apiEndpoint } from '../../../root/constants';

function EditCourse(props: EditCourseProps): React.ReactElement {
  const { user, course } = props;

  const [inputValue, setInputValue] = useState(course.starGoal);

  const { data: units } = useSWR(`${apiEndpoint}/courses/${course.id}/units/`);

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

  const onSubmit = (value: any) => {
    console.log(value);
  };

  if (units === undefined) {
    return <Spin size="large" />;
  }

  return (
    <>
      <Row>
        <Col span={3} />
        <Col span={18}>
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
              initialValue={course.name}
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
              name="chapters"
              rules={[
                {
                  validator: async (_, chapters) => {
                    if (!chapters || chapters.length < 1) {
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
                  {fields.map((field: any) => (
                    <Form.Item required={false} key={field.key}>
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            message:
                              'Please input chapter name or delete this field.',
                          },
                        ]}
                        noStyle
                      >
                        <Row>
                          <Col span={6}>
                            <Form.Item
                              name={[field.name, 'name']}
                              fieldKey={[field.key, 'name']}
                            >
                              <Input placeholder="New Chapter" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item
                              name={[field.name, 'map']}
                              fieldKey={[field.key, 'map']}
                            >
                              <Select defaultValue="Liquid">
                                <Option value="BusyBee">Busy Bee</Option>
                                <Option value="AutumnRoad">Autumn Road</Option>
                                <Option value="Liquid">Liquid</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={13}>
                            <Form.Item
                              name={[field.name, 'description']}
                              fieldKey={[field.key, 'description']}
                            >
                              <Input placeholder="Description" />
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
                <Form.Item
                  name="prize description"
                  label="Prize Description"
                  initialValue={course.prize}
                >
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
              <Button type="primary" htmlType="submit" onSubmit={onSubmit}>
                Save
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
