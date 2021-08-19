import { useState } from 'react';
import './App.css';
import AlertExample from './components/AlertExample';
import { AlertManager, useAlertReducer } from './components/AlertManager';

const App = () => {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div>
      <AlertExample setSubmitted={setSubmitted} />
      <AlertManager />
    </div>

  );
}

export default App;
