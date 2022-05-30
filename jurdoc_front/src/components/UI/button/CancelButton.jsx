import React from 'react';
import classes from './MyButton.module.css'

const CancelButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.cancelBtn}>
            {children}
        </button>
    );
};

export default CancelButton;