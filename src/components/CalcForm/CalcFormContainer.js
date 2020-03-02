import React from 'react';
import { v4 } from 'uuid';
import CalcForm from './CalcForm';

const CalcFormContainer = ({ setValue, value, mode }) => {

    const numberStyle = mode ? { background: '#050505', color: '#fff' } : { background: '#F2F5F3' }

    const operationStyle = mode ? {background: '#343434', color: '#fff'} : {background: '#98ceb8', color: '#788475'}

    const forms = [
        { id: v4(), value: 'C', styles: operationStyle },
        { id: v4(), value: '+/-', styles: operationStyle },
        { id: v4(), value: '%', styles: operationStyle },
        { id: v4(), value: '-', styles: operationStyle },
        { id: v4(), value: '7', styles: numberStyle },
        { id: v4(), value: '8', styles: numberStyle },
        { id: v4(), value: '9', styles: numberStyle },
        { id: v4(), value: 'x', styles: operationStyle },
        { id: v4(), value: '4', styles: numberStyle },
        { id: v4(), value: '5', styles: numberStyle },
        { id: v4(), value: '6', styles: numberStyle },
        { id: v4(), value: '-', styles: operationStyle },
        { id: v4(), value: '1', styles: numberStyle },
        { id: v4(), value: '2', styles: numberStyle },
        { id: v4(), value: '3', styles: numberStyle },
        { id: v4(), value: '+', styles: operationStyle },
        { id: v4(), value: '0', styles: mode ? { background: '#050505', color: '#fff', gridColumn: '1/3' } : {background: '#F2F5F3', gridColumn: '1/3'} },
        { id: v4(), value: '.', styles: numberStyle },
        { id: v4(), value: '=', styles: mode ? { background: '#6d6d6d', color: '#fff' } : { background: '#f8dadd', color: '#a2453e' } },
    ]

    const getValue = val => {
        switch(val){
          case 'C':
            setValue('');
            break;
          case '=':
            setValue(eval(value));
            break;
          case '+':
          case '%':
          case '-':
          case '.':
            setValue(value + val);
            break;
          case 'x':
            setValue(value + '*');
            break;
          case '+/-':
            setValue(value + '/');
            break;
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
          case '0':
            setValue(value + val);
            break;
          default:
            setValue(val)
        }
    }

    return <CalcForm getValue={getValue} forms={forms}/>
}

export default CalcFormContainer;