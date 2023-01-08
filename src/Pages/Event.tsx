import React, {useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import CalendarContainer from "../components/CalendarContainer";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {EventTypes} from "../Types/EventTypes";


const Event: React.FC = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const {user,isAuth} = useTypedSelector(state => state.auth);

    const {guests, events, error} = useTypedSelector(state => state.event);

    const {fetchGuests, createEvent, fetchEvents} = useActions();

    const addNewEvent = (event: EventTypes) => {
        createEvent(event)
        setModalVisible(false)
    };

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    if (!isAuth) {
        return <h2>Loading...</h2>
    }

    return (
        <Layout style={{padding: "10px", position: "relative"}}>
            {error}
            <CalendarContainer events={events}/>

            <Row justify="center" style={{position: "sticky", bottom: "50px", zIndex: "10", color: "red"}}>
                <Button style={{color: "blue", fontWeight: 700}}
                        onClick={() => setModalVisible(true)}>Add event</Button>

            </Row>

            <Modal title="NEW Event" open={modalVisible} onCancel={() => setModalVisible(false)} footer={null}>
                <EventForm guests={guests} submit={addNewEvent}/>
            </Modal>
        </Layout>
    );
};

export default Event;