import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Form, Input, Button, DatePicker, TimePicker, Select, Space, Row, Col, Slider, InputNumber} from 'antd';
import 'react-quill/dist/quill.snow.css';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

function AddCoursePage(): React.ReactElement {

    const [inputValue, setInputValue] = useState(4);

    const [form] = Form.useForm();

    const format = 'HH:mm';

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', { 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
            ['link', 'code-block'],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
        'list', 'bullet', 'indent', 'text alignment',
        'link', 'code block'
    ];

    const { Option } = Select;

    const onChange = (value : number) => {
        setInputValue(value);
    };

    return (
        <React.Fragment>

            <header className="App-header">
                <h1>
                    Add Course
                </h1>
                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                >
                    <Form.Item
                        name="coursename"
                        label="Course Name"
                        rules={[{ required: true, message: 'Please give your course a name!' }]}
                    >
                        <Input placeholder="New Course" />
                    </Form.Item>

                    <Form.List 
                    name="units">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'unitname']}
                                            label = "Unit Name"
                                            fieldKey={[fieldKey, 'unitname']}
                                            rules={[{ required: true, message: 'Missing unit name' }]}
                                        >
                                            <Input placeholder="New Unit" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'map']}
                                            label = "Map"
                                            fieldKey={[fieldKey, 'map']}
                                        >
                                            <Select defaultValue="Liquid">
                                                <Option value="BusyBee">Busy Bee</Option>
                                                <Option value="AutumnRoad">Autumn Road</Option>
                                                <Option value="Liquid">Liquid</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'description']}
                                            label = "Description"
                                            fieldKey={[fieldKey, 'description']}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add Unit
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>

                    <Input.Group compact>
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
                        <Form.Item
                            name="prize description"
                            label="Prize Description"
                        >
                            <Input placeholder="Description" />
                        </Form.Item>
                    </Input.Group>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Add Course</Button>
                    </Form.Item>
                </Form>
            </header>
        </React.Fragment>
    );
};

export default AddCoursePage;
