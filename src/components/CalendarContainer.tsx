import React, {useState} from 'react';
import {Badge, BadgeProps, Calendar} from 'antd';
import {EventTypes} from "../Types/EventTypes";
import dayjs, {Dayjs} from "dayjs";
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";


interface CalendarTypes {
    events: EventTypes[]
}

const CalendarContainer: React.FC<CalendarTypes> = ({events}) => {

    const {user} = useTypedSelector(state => state.auth)

    const dateCellRender = (value: Dayjs) => {
        const formatedData = formatDate(value.toDate())
        const currentDayEvents = events.filter(ev => ev.date === formatedData)

        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div className={"event"}
                         key={index}>{ev.author === user.username || ev.guest === user.username ? ev.description : ""}
                    <hr/></div>)}
            </div>

        );
    };

    return (
        <div>
            <Calendar dateCellRender={dateCellRender}/>;
        </div>
        )

};

export default CalendarContainer;