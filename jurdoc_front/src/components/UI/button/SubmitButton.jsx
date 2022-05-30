import React from 'react';
import classes from './MyButton.module.css'

const SubmitButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.submitBtn}>
            {children}
        </button>
    );
};

export default SubmitButton;