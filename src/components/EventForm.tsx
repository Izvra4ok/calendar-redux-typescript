import React from 'react';
import {Button, Form, Input, Row, Select} from "antd";
import {DatePicker} from "antd/lib";

const EventForm: React.FC = () => {

    return (
        <Form name="basic"
              labelCol={{span: 8}}
              wrapperCol={{span: 16}}
              initialValues={{remember: true}}
              autoComplete="off">
            <Form.Item
                label="Description event"
                name="description"
                rules={[{required: true, max: 50, message: 'Please input your name event'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Date event"
                name="date"
                rules={[{required: true, message: 'Please input your date event'}]}>
                <DatePicker/>
                <Select style={{width: 150}}
                        options={[
                        {value: 'jack', label: 'Jack',},
                        {value: 'lucy', label: 'Lucy',},
                        {value: 'Yiminghe', label: 'yiminghe',},]}/>
            </Form.Item>

            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;