import React from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";


const Login: React.FC = () => {

    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <LoginForm/>
                    <div>"username": "user",
                        "password": "123456"</div>
                    <div>"username": "admin",
                        "password": "qwerty"</div>
                    <div>"username": "siarhei",
                        "password": "qwerty123"</div>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;