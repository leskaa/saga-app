import React from 'react';
import ReactQuill from 'react-quill';
import { Form, Input, Button, DatePicker, TimePicker, Select } from 'antd';
import 'react-quill/dist/quill.snow.css';
import moment from 'moment';

function AddAssignmentPage(): React.ReactElement {

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

            <header className="App-header">
                <h1>
                    Add Assignment
                </h1>
                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                >
                    <Form.Item
                        name="assignmentname"
                        label="Assignment Name"
                        rules={[{ required: true, message: 'Please give your assignment a name!' }]}
                    >
                        <Input placeholder="New assignment" />
                    </Form.Item>

                    <Form.Item
                        name="unit"
                        label="Unit"
                        rules={[{ required: true, message: 'Please assign it to a unit!' }]}
                    >
                        <Select>
                            <Option value="Unit1">Unit1</Option>
                            <Option value="Unit2">Unit2</Option>
                            <Option value="Unit3">Unit3</Option>
                        </Select>
                    </Form.Item>

                    <Input.Group compact>
                        <Form.Item
                            name="availabledate"
                            label="Available Date"
                        >
                            <DatePicker defaultValue={moment()} />
                        </Form.Item>

                        <Form.Item
                            name="availabletime"
                            label="Available Time"
                        >
                            <TimePicker format={format} defaultValue={moment()} />
                        </Form.Item>
                    </Input.Group>

                    <Input.Group compact>
                        <Form.Item
                            name="duedate"
                            label="Due Date"
                            rules={[{ required: true, message: 'Due Date is required' }]}
                        >
                            <DatePicker />
                        </Form.Item>

                        <Form.Item
                            name="duetime"
                            label="Due Time"
                            rules={[{ required: true, message: 'Due Time is required' }]}
                        >
                            <TimePicker format={format} />
                        </Form.Item>
                    </Input.Group>

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
                        <Button type="primary" htmlType="submit">Add Assignment</Button>
                    </Form.Item>
                </Form>
            </header>
        </React.Fragment>
    );
};

export default AddAssignmentPage;
