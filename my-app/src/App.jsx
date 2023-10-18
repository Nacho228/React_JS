import React, { useState } from 'react';
import { Register } from './Register';
import { Login } from './Login';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState(null);
  // const [isFormVisible, setIsFormVisible] = useState(false);

  const showLoginForm = () => {
    setCurrentForm('login');
    // setIsFormVisible(true);
  };
  const showRegisterForm = () => {
    setCurrentForm('register');
    // setIsFormVisible(true);
  };

  const goToHomePage = () => {
    setCurrentForm(null);
    // setIsFormVisible(false);
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="homepage-container">
        {/* {isFormVisible && ( */}
          <div className="buttons-container">
            <button onClick={showLoginForm}>Log In</button>
            <button onClick={showRegisterForm}>Sign Up</button>
          </div>
        {/* )} */}
        <div className="auth-form-container">
          {currentForm === 'login' ? <Login onFormSwitch={showRegisterForm} /> : null}
          {currentForm === 'register' ? <Register onFormSwitch={showLoginForm} /> : null}
          {/* {!isFormVisible && <button onClick={goToHomePage}>Go Back to Home</button>} */}
          {/* // currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
