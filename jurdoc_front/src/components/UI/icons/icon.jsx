import React from 'react';
import cl from './Icon.module.css'
import logo from './sparklesfolderblank_99348.png';

const Icon = () => {
    return (
        <div className={cl.Icon}>
            <div className={cl.Name}>
            <img className={cl.IconImg} src={logo} alt='ssss'/>
            </div>

            <div className={cl.Name}>
                <p>Файл</p>
            </div>
        </div>
    );
};

export default Icon;