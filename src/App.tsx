import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./Routes/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import {useActions} from "./hooks/useActions";
import {UserTypes} from "./Types/UserTypes";


const App = () => {

    const {fetchUserSuccess, setIsAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            fetchUserSuccess({username: localStorage.getItem("username" || "")} as UserTypes);
            setIsAuth(true);
        }
    }, [setIsAuth])


    return (
        <Layout className="App">
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>

        </Layout>
    );
}

export default App;
