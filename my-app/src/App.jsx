import React, { useState } from 'react';
import { Register } from './Register';
import { Login } from './Login';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState(null);

  const showLoginForm = () => {
    setCurrentForm('login');
  };
  const showRegisterForm = () => {
    setCurrentForm('register');
  };

  const goToHomePage = () => {
    setCurrentForm(null);
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="homepage-container">
          <div className="buttons-container">
            <button onClick={showLoginForm}>Log In</button>
            <button onClick={showRegisterForm}>Sign Up</button>
          </div>
        <div className="auth-form-container">
          {currentForm === 'login' ? <Login onFormSwitch={showRegisterForm} goToHomePage={goToHomePage} /> : null}
          {currentForm === 'register' ? <Register onFormSwitch={showLoginForm} goToHomePage={goToHomePage} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
