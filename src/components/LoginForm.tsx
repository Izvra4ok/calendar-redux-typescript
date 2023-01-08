import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {RoutesNames} from "../Routes/routes";

const LoginForm: React.FC = () => {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const history = useNavigate();
    const {login} = useActions();
    // const dispatch: Dispatch<any> = useDispatch
    // ();
    const {error, isLoading} = useTypedSelector(state => state.auth);


    const submit = () => {
        // dispatch(AuthActionCreators.login(userName, userPassword))
        login(userName, userPassword)
        history(RoutesNames.EVENT)
    }

    useEffect(() => {

    }, [isLoading, error])

    return (
        <Form name="basic"
              labelCol={{span: 8}}
              wrapperCol={{span: 16}}
              initialValues={{remember: true}}
              autoComplete="off">
            {error && <div style={{color: "red"}}>{error}</div>}
            <Form.Item
                label="UserName"
                name="username"
                rules={[{required: true, min: 2, max: 20, message: 'Please input your username!'}]}
            >
                <Input value={userName}
                       onChange={e => setUserName(e.target.value)}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, min: 5, max: 20, message: 'Please input your password!'}]}
            >
                <Input.Password value={userPassword}
                                onChange={e => setUserPassword(e.target.value)}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button onClick={submit} type="primary" htmlType="submit" unselectable={"on"} loading={isLoading}
                        disabled={isLoading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;