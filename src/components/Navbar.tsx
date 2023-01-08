import {Layout, Menu, Row} from 'antd';
import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {RoutesNames} from "../Routes/routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
// import {Dispatch} from "redux";
// import {useDispatch} from "react-redux";
// import {AuthActionCreators} from "../Redux/reducers/AuthActionCreators";
import {useActions} from "../hooks/useActions";

const Navbar: React.FC = () => {

    const {isAuth, user} = useTypedSelector(state => state.auth)
    const history = useNavigate();
    const {logout} = useActions();
    // const dispatch: Dispatch<any> = useDispatch();

    const handleLogout = () => {
        // dispatch(AuthActionCreators.logout())
        logout();
        history(RoutesNames.LOGIN)
    };

    useEffect(()=>{

    },[isAuth])

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth && user ?
                    <div style={{display:"flex"}}>
                       <span style={{color: "white"}}>Login: {user.username}</span>
                        <Menu onClick={handleLogout}
                              theme="dark"
                              mode="horizontal"
                              selectable={false}
                              items={new Array(1).fill(null).map((_, index) => {
                                  const key = index + 1;
                                  return {
                                      key,
                                      label: `Sign out`,
                                  };
                              })}/>
                    </div>
                    : <Menu style={{padding: "6px"}} selectable={false} onClick={() => history(RoutesNames.LOGIN)}
                            theme="dark"
                            mode="vertical"
                            items={new Array(1).fill(null).map((_, index) => {
                                const key = index + 2;
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