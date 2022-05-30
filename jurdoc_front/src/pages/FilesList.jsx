import React from 'react';
import cl from './fileList.module.css'
import IconList from "../components/IconList";


const FilesList = () => {
    return (
        <div className={cl.fileList}>
            <h1>Файлы</h1>
            <IconList/>

        </div>
    );
};

export default FilesList;