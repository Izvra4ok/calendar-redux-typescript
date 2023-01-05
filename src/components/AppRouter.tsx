import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../Routes/routes";
import {useTypedSelector} from "../hooks/useTypedSelector";


const AppRouter: React.FC = () => {

        const {isAuth} = useTypedSelector(state => state.auth);


        return (
            <div>
                {
                    isAuth ?
                        <div>
                            <Routes>
                                {privateRoutes.map(route =>
                                    <Route key={route.path} path={route.path}
                                           element={<route.element/>}
                                    />)}
                            </Routes>
                        </div>
                        : <div>
                            <Routes>
                                {publicRoutes.map(route =>
                                    <Route key={route.path} path={route.path}
                                           element={<route.element/>}
                                    />)}
                            </Routes>
                        </div>
                }
            </div>
        )
    }
;

export default AppRouter