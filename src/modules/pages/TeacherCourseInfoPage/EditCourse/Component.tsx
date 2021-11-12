import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import {
  Form,
  Input,
  Button,
  Space,
  Row,
  Col,
  Slider,
  InputNumber,
  Spin,
  Select,
  message,
} from 'antd';
import 'react-quill/dist/quill.snow.css';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import { EditCourseProps } from './types';
import { apiEndpoint } from '../../../root/constants';
import { Map } from '../../../general/types';

const { Option } = Select;

function EditCourse(props: EditCourseProps): React.ReactElement {
  const { user, course } = props;

  const [inputValue, setInputValue] = useState(course?.starGoal);

  const { data: units } = useSWR(`${apiEndpoint}/courses/${course?.id}/units/`);
  const { data: maps } = useSWR(`${apiEndpoint}/maps`);

  const [form] = Form.useForm();

  const onChange = (value: number) => {
    setInputValue(value);
  };

  const onSubmit = (values: any) => {
    if (values.chapters.length < 1) {
      message.error('Must have at least one unit');
    }
    // use inputValue state for prizestars
    fetch(`${apiEndpoint}/courses/${course?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.coursename,
        description: values.coursedescription,
        starGoal: inputValue,
        prize: values.prizedescription,
        mapIds: values.chapters.map((chapter: any) => {
          return chapter.map;
        }),
      }),
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          message.error('There was an issue creating the adventure.', 10);
          throw Error(response.statusText);
        }
        let updatedChapters = 0;
        values.chapters.forEach((chapter: any, index: number) => {
          if (index < units.length) {
            fetch(
              `${apiEndpoint}/courses/${course?.id}/units/${units[index].id}`,
              {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: chapter.chaptername,
                  description: chapter.description,
                  mapId: chapter.map,
                }),
                credentials: 'include',
              }
            )
              .then((res) => {
                console.log(res);
                if (!res.ok) {
                  message.error('There was an issue creating a unit.', 10);
                  throw Error(res.statusText);
                }
              })
              .catch((err) => console.error(err));
          } else {
            fetch(`${apiEndpoint}/courses/${course?.id}/units`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: chapter.chaptername,
                description: chapter.description,
                mapId: chapter.map,
                unitNumber: index + 1,
              }),
              credentials: 'include',
            })
              .then((res) => {
                if (!res.ok) {
                  message.error('There was an issue creating a unit.', 10);
                  throw Error(res.statusText);
                }
              })
              .catch((err) => console.error(err));
          }
          updatedChapters += 1;
        });
        while (units.length > updatedChapters) {
          fetch(
            `${apiEndpoint}/courses/${course?.id}/units/${units[updatedChapters].id}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            }
          )
            .then((res) => {
              if (!res.ok) {
                message.error('There was an issue deleting a unit.', 10);
                throw Error(res.statusText);
              }
            })
            .catch((err) => console.error(err));
          updatedChapters += 1;
        }
        message.success('Adventure updated!', 10);
      })
      .catch((err) => console.error(err));
  };

  if (units === undefined || maps === undefined || course === undefined) {
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
            onFinish={(e) => onSubmit(e)}
            initialValues={{
              chapters: units.map((unit: any) => {
                return {
                  chaptername: unit.name,
                  map: unit.map_id,
                  description: unit.description,
                };
              }),
              coursename: course.name,
              prizedescription: course.prize,
              coursedescription: course.description,
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
            <Form.Item
              name="coursedescription"
              label="Adventure Description"
              rules={[
                {
                  required: true,
                  message: 'Please describe your adventure!',
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
                      <Row>
                        <Col span={6}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'chaptername']}
                            fieldKey={[field.key, 'chaptername']}
                            validateTrigger={['onChange', 'onBlur']}
                            rules={[
                              {
                                required: true,
                                message: 'Please input chapter name.',
                              },
                            ]}
                          >
                            <Input placeholder="New Chapter" />
                          </Form.Item>
                        </Col>
                        <Col span={4}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'map']}
                            fieldKey={[field.key, 'map']}
                          >
                            <Select defaultValue={1}>
                              {maps.map((map: Map) => (
                                <Option value={map.id}>{map.name}</Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={13}>
                          <Form.Item
                            {...field}
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
