import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import SubmitButton from "../components/UI/button/SubmitButton";
import AuthService from "../services/auth.service";
import {AuthContext} from "../context/AuthContext";
import cl from './loginForm.module.css'

const Login = () => {


    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isAuth, setAuth] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(password, login);
        AuthService.login(login, password).then(
            () => {
                if (localStorage.getItem('isAuth')) {
                    setAuth(true);
                }
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                });
         }



    return (
        <div className={cl.loginForm}>
            <form>

                <MyInput value={login}
                         type='text'
                         placeholder='Login'
                         onChange = { e => setLogin(e.target.value)}/>

                <MyInput value={password}
                         type='password'
                         placeholder='Password'
                         onChange = {e => setPassword(e.target.value)}/>

                <SubmitButton onClick={handleLogin}> Войти </SubmitButton>

            </form>
        </div>
    );
};

export default Login;