import { useState } from 'react';
import './App.css';
import AlertExample from './components/AlertExample';
import { AlertManager, useAlertReducer } from './components/AlertManager';

const App = () => {
  const [submitted, setSubmitted] = useState(false)
  const [state, dispatch] = useAlertReducer();


  return (
    <div>
      <AlertExample setSubmitted={setSubmitted} dispatch={dispatch}/>
      {submitted === true ? (
        <AlertManager state={state} />
      ) : null}
    </div>

  );
}

export default App;
