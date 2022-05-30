import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cl from './navbar.module.css'
import CancelButton from "../button/CancelButton";
import AuthService from "../../../services/auth.service";
import {AuthContext} from "../../../context/AuthContext";

const Navbar = () => {
    // const {isAuth, setIsAuth} = useContext(AuthContext);
    //
    // const logout = () => {
    //     setIsAuth(false);
    //     localStorage.removeItem('auth')
    // }
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(localStorage.getItem('isAuth'));
    return (
        <div className={cl.navbar}>
            {localStorage.getItem('isAuth') && <CancelButton onClick={AuthService.logout()}>
                Выйти
            </CancelButton>}
            <div className={cl.navbar__links}>
                <Link to="/files"><h4>Файлы</h4></Link>
                <Link to="/profile"><h4>Профиль</h4></Link>
            </div>
        </div>
    );
};

export default Navbar;