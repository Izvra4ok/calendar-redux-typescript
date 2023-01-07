import React, {useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import CalendarContainer from "../components/CalendarContainer";
import EventForm from "../components/EventForm";


const Event: React.FC = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Layout style={{padding: "10px"}}>
            <CalendarContainer events={[]}/>
            <Row justify="center">
                <Button onClick={() => setModalVisible(true)}>Add event</Button>

            </Row>
            <Modal title="NEW Event" open={modalVisible} onCancel={() => setModalVisible(false)} footer={null}>
                <EventForm/>
            </Modal>
        </Layout>
    );
};

export default Event;