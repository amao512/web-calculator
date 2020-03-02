import React, { useState } from 'react';
import './App.css';
import Operation from './components/Operation/Operation';
import ChangeMode from './components/ChangeMode/ChangeMode';
import CalcFormContainer from './components/CalcForm/CalcFormContainer';

const App = () => {

    const [value, setValue] = useState([]);
    const [mode, setMode] = useState(false);

    const props = { setValue, value, mode }

    return (
      <div className="App" style={mode ? {'background': '#050505'} : {'background': '#fff'}}>
          <ChangeMode mode={mode} setMode={setMode} />
          <Operation {...props} />
          <CalcFormContainer {...props}/>
      </div>
    );
}

export default App;
