import React, {useEffect, useState} from 'react';
import './styles/App.css'
import Navbar from "./components/UI/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/AuthContext";


const App = () => {
    const [isAuth, setIsAuth] = useState(false);



    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>

            <BrowserRouter>
                <Navbar/>
                <div className='divApp'>

                    {/*<FilesList/>*/}

                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;
