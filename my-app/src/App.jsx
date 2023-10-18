import React, { useState } from 'react';
import { Register } from './Register';
import { Login } from './Login';

import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="auth-form-container">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      </div>
    </div>
  );
}

export default App;
