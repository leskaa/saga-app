import React from 'react';
import ReactQuill from 'react-quill';
import { Form, Input, Button, DatePicker, TimePicker, Select, Row, Col } from 'antd';
import { CourseInfoProps } from "./types";
import 'react-quill/dist/quill.snow.css';
import moment from 'moment';

function AddAssignment(props: CourseInfoProps): React.ReactElement {
    const { user } = props;

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

    return (
        <React.Fragment>
            <Row>
                <Col span = {3}/>
                <Col span = {18}>
                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                >
                    <Row>
                        <Col span={16}>
                            <Form.Item
                                name="assignmentname"
                                label="Quest Name"
                                rules={[{ required: true, message: 'Please name your quest!' }]}
                            >
                                <Input placeholder="New Quest" />
                            </Form.Item>
                        </Col>
                        <Col span = {8}>
                            <Form.Item
                                name="unit"
                                label="Set"
                                rules={[{ required: true, message: 'Please assign it to a set!' }]}
                            >
                                <Select>
                                    <Option value="Unit1">Unit1</Option>
                                    <Option value="Unit2">Unit2</Option>
                                    <Option value="Unit3">Unit3</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span = {4}>
                            <Form.Item
                                name="availabledate"
                                label="Available Date"
                            >
                                <DatePicker defaultValue={moment()} />
                            </Form.Item>
                        </Col>
                        <Col span = {4}>
                            <Form.Item
                                name="availabletime"
                                label="Available Time"
                            >
                                <TimePicker format={format} defaultValue={moment()} />
                            </Form.Item>
                        </Col>
                        <Col span = {8}/>
                        <Col span = {4}>
                            <Form.Item
                                name="duedate"
                                label="Expiration Date"
                                rules={[{ required: true, message: 'Expiration Date is required' }]}
                            >
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        <Col span = {4}>
                            <Form.Item
                                name="duetime"
                                label="Expiration Time"
                                rules={[{ required: true, message: 'Expiration Time is required' }]}
                            >
                                <TimePicker format={format} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        name="description"
                        label="Description"
                    >
                        <div className="text-editor">
                            <ReactQuill
                                theme="snow"
                                modules={modules}
                                formats={formats}
                            />
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Add Quest</Button>
                    </Form.Item>
                </Form>
                </Col>
                <Col span = {3}/>
            </Row>
        </React.Fragment>
    );
};

export default AddAssignment;
