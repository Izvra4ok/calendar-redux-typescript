import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>

    </React.StrictMode>
);
