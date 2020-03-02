import React from 'react';
import s from './changeMode.module.scss';
import logo from './logo.svg'

const ChangeMode = ({ mode, setMode}) => {

    const onChangeMode = val => setMode(val);

    return (
        <div className={s.mode}>
            <img src={logo} className={s.logo} alt='logo' />

            {mode 
            ? (
                <div>
                    <i className="material-icons" 
                       style={{'color': '#fff'}} 
                       onClick={() => onChangeMode(false)}>wb_sunny</i>
                </div>
            ) : (
                <div>
                    <i className="material-icons" onClick={() => onChangeMode(true)}>nights_stay</i>
                </div>
            ) 
            }
            
        </div>
    )
}

export default ChangeMode;