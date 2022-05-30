import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";


import {Route, Routes, Navigate, Switch, BrowserRouter, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import Navbar from "./UI/navbar/Navbar";
import Profile from "../pages/Profile";
import FilesList from "../pages/FilesList";




const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    return (

        isAuth
            ?

            <Routes>

                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to='/files' replace/>}
                />
            </Routes>

            :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            element={route.component}
                            path={route.path}
                            // exact={route.exact}
                            key={route.path}
                        />

                    )}
                    <Route
                        path="*"
                        element={<Navigate to='/login' replace/> }
                    />
                </Routes>
    );
};

export default AppRouter;