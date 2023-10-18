import React, { useState } from 'react';
import { Register } from './Register';
import { Login } from './Login';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showLoginForm = () => {
    setCurrentForm('login');
    setIsFormVisible(true);
  };

  const showRegisterForm = () => {
    setCurrentForm('register');
    setIsFormVisible(true);
  };

  const goToHomePage = () => {
    setCurrentForm(null);
    setIsFormVisible(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="homepage-container">
         {currentForm === null && (
          <div className="buttons-container">
            <button onClick={showLoginForm}>Log In</button>
            <button onClick={showRegisterForm}>Sign Up</button>
          </div>
        )}
        {currentForm === 'login' ? (
          <div>
            <Login onFormSwitch={showRegisterForm} />
            <button onClick={goToHomePage}>Go Back to Home</button>
          </div>
        ) : null}
        {currentForm === 'register' ? (
          <div>
            <Register onFormSwitch={showLoginForm} />
            <button onClick={goToHomePage}>Go Back to Home</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
