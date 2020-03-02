import React from 'react';
import s from './calcButton.module.scss';

const CalcButton = ({ children, styles, getValue }) => {

    return (
        <div className={s.button} style={styles} onClick={() => getValue(children)}>
            {children}
        </div>
    )
}

export default CalcButton;