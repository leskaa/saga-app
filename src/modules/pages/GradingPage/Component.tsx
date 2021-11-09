import React from 'react';
import ReactQuill from 'react-quill';
import { Form, Input, Select, Table, InputNumber, Rate } from 'antd';
import 'react-quill/dist/quill.snow.css';
import moment from 'moment';

function GradingPage(): React.ReactElement {

    const [form] = Form.useForm();

    const { Option } = Select;

    const columns : any = [
        {
            title: 'First Name',
            dataIndex: 'firstname',
            fixed: 'left',
            sorter: (a : any, b : any) => a.firstname.length - b.firstname.length,
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            fixed: 'left',
            defaultSortOrder: 'descend',
            sorter: (a : any, b : any) => a.lastname.length - b.lastname.length,
        },
        {
            title: 'Assignment 1',
            dataIndex: 'assignment1',
            sorter: (a : any, b : any) => a.assignment1.length - b.assignment1.length,
        },
        {
            title: 'Assignment 2',
            dataIndex: 'assignment2',
            sorter: (a : any, b : any) => a.assignment2.length - b.assignment2.length,
        },
        {
            title: 'Assignment 3',
            dataIndex: 'assignment3',
            sorter: (a : any, b : any) => a.assignment3.length - b.assignment3.length,
        },
        {
            title: 'Assignment 4',
            dataIndex: 'assignment4',
            sorter: (a : any, b : any) => a.assignment4.length - b.assignment4.length,
        },
        {
            title: 'Assignment 5',
            dataIndex: 'assignment5',
            sorter: (a : any, b : any) => a.assignment5.length - b.assignment5.length,
        },
        {
            title: 'Assignment 6',
            dataIndex: 'assignment6',
            sorter: (a : any, b : any) => a.assignment6.length - b.assignment6.length,
        },
        {
            title: 'Assignment 7',
            dataIndex: 'assignment7',
            sorter: (a : any, b : any) => a.assignment7.length - b.assignment7.length,
        },
        {
            title: 'Assignment 8',
            dataIndex: 'assignment8',
            sorter: (a : any, b : any) => a.assignment8.length - b.assignment8.length,
        },
        {
            title: 'Assignment 9',
            dataIndex: 'assignment9',
            sorter: (a : any, b : any) => a.assignment9.length - b.assignment9.length,
        },
        {
            title: 'Assignment 10',
            dataIndex: 'assignment10',
            sorter: (a : any, b : any) => a.assignment10.length - b.assignment10.length,
        },
        {
            title: 'Overall',
            dataIndex: 'overall',
            fixed: 'right',
            sorter: (a : any, b : any) => a.overall.length - b.overall.length,
        },
      ];
      
      const data : any = [
        {
            key: '1',
            firstname: 'Marguerite',
            lastname: 'Brugger',
            assignment1: <InputNumber min={0} max={5} style={{ margin: '0 16px' }}/>
        },
        {
            key: '2',
            firstname: 'Harry',
            lastname: 'Potter'
        },
        {
            key: '3',
            firstname: 'Frodo',
            lastname: 'Baggins'
        },
        {
            key: '4',
            firstname: 'Bilbo',
            lastname: 'Baggins'
        },
      ];

    return (
        <React.Fragment>

            <header className="App-header">
                <h1>
                    Grading
                </h1>

                <Select>
                <Option value="course1" >Course 1</Option>
                <Option value="course2" >Course 2</Option>
                <Option value="course3" >Course 3</Option>
            </Select>

                <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ x: 2000 }}/>
            </header>
        </React.Fragment>
    );
};

export default GradingPage;
