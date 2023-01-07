import React from 'react';
import {Calendar} from 'antd';
import {EventTypes} from "../Types/EventTypes";


interface CalendarTypes {
    events: EventTypes[]
}

const CalendarContainer: React.FC<CalendarTypes> = () => {

    return <Calendar/>;
};

export default CalendarContainer;