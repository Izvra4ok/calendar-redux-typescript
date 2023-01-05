import {Layout, Menu, MenuProps, Row} from 'antd';
import React from 'react';
import {useNavigate} from "react-router-dom";
import {RoutesNames} from "../Routes/routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../Redux/reducers/actionCreators";
import {useActions} from "../hooks/useActions";

const Navbar: React.FC = () => {

    const {isAuth, user} = useTypedSelector(state => state.auth)
    const history = useNavigate();
    const {logout} = useActions();
    // const dispatch: Dispatch<any> = useDispatch();

    const handleLogout = () => {
        // dispatch(AuthActionCreators.logout())
        logout();
    };

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ?
                    <>
                        <Menu onClick={handleLogout}
                              theme="dark"
                              mode="horizontal"
                              items={new Array(1).fill(null).map((_, index) => {
                                  const key = index + 1;
                                  return {
                                      key,
                                      label: `Sign out`,
                                  };
                              })}/>
                        <div style={{color: "white"}}>Login: {user.username}</div>
                    </>
                    : <Menu style={{padding: "6px"}} onClick={() => history(RoutesNames.LOGIN)}
                            theme="dark"
                            mode="vertical"
                            items={new Array(1).fill(null).map((_, index) => {
                                const key = index + 1;
                                return {
                                    key,
                                    label: `Sign in`,
                                };
                            })}/>}
            </Row>
        </Layout.Header>
    );
};

export default Navbar;