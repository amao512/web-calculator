import React from 'react';
import CalcButton from '../common/CalcButton/CalcButton';
import s from './calcForm.module.scss';

const CalcForm = ({ getValue, forms }) => {
    return (
        <div className={s.calcForm}>
            { forms.map(f => <CalcButton key={f.id} styles={f.styles} getValue={getValue}>{f.value}</CalcButton> ) }
        </div>
    )
}

export default CalcForm;