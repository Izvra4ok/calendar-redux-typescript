import React, {useState} from 'react';
import {Button, Form, Input, Row, Select} from "antd";
import {DatePicker} from "antd/lib";
import {UserTypes} from "../Types/UserTypes";
import {EventTypes} from "../Types/EventTypes";
import {Dayjs} from "dayjs";
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {rules} from "../utils/rules";


interface EventFormProps {
    guests: UserTypes[],
    submit: (event: EventTypes) => void,
}


const EventForm: React.FC<EventFormProps> = ({guests, submit}) => {

    const [form] = Form.useForm();
    const {user} = useTypedSelector(state => state.auth)
    const [event, setEvent] = useState<EventTypes>({
        author: "",
        guest: "",
        date: "",
        description: "",
    } as EventTypes);

    const selectDate = (date: Dayjs | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    };

    const submitForm = () => {
        submit({...event, author: user.username})
        form.resetFields();
    }

    return (
        <Form form={form} onFinish={submitForm}
              name="basic"
              labelCol={{span: 8}}
              wrapperCol={{span: 16}}
              initialValues={{remember: true}}
              autoComplete="off">

            <Form.Item
                label="Description event"
                name="description"
                rules={[rules.maxLength(),rules.minLength(),rules.required()]}
            >
                <Input onChange={e => setEvent({...event, description: e.target.value})} value={event.description}/>
            </Form.Item>

            <Form.Item
                label="Date event"
                name="date"
                rules={[rules.required(),rules.isDateAfter("The date was before")]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>


            <Form.Item
                label="Choice person"
                name="guest"
                rules={[{required: true, message: 'Please choice person'}]}>
                <Select style={{width: 150}} onChange={(guest: string) => setEvent({...event, guest})}>
                    {guests.map(guest =>
                        <Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>)}
                </Select>
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