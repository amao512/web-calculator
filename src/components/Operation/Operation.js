import React from 'react';
import s from './operation.module.scss';

const Operation = ({ setValue, value, mode }) => {

    const changeValue = e => setValue(e.target.value);

    return (
        <div className={s.operation}>
            <input value={value} className={mode ? s.nightMode : ''} onChange={changeValue}/>
        </div>
    )
}

export default Operation;