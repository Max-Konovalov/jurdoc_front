import React from 'react';
import cl from "./Icon.module.css";
import doc from "./DOC_29680.png";

const DocIcon = () => {
    return (
        <div className={cl.Icon}>
            <div className={cl.Name}>
                <img className={cl.IconImg} src={doc} alt='ssss'/>
            </div>
            <div className={cl.Name}>
                <p>Документ</p>
            </div>
        </div>
    );
};

export default DocIcon;