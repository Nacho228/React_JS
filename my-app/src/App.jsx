import React, { useState } from 'react';
import { Register } from './Register';
import { Login } from './Login';
import './App';
import logo from '../src/ReVint.png';
import heart from '../src/hearth.png';


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
    <div>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex items-center justify-center h-screen">

        <div className="homepage-container">
          <div className="buttons-container">
            
            <div className="centered-buttons">
            <button className='custom-button'>Ellos</button>
            <button className='custom-button' >Unisex</button>
            <button className='custom-button' >Ellas</button>
            </div>
            <img src={heart} alt="Heart" className="heart-icon" />
            <button className='custom-button' onClick={showRegisterForm}>SIGN UP</button>
            <button className='custom-button' onClick={showLoginForm}>LOGIN</button>
          </div>
          <div className='news-bar'>Discover What's New</div>
          <div className="auth-form-container">
            {currentForm === 'login' ? <Login onFormSwitch={showRegisterForm} goToHomePage={goToHomePage} /> : null}
            {currentForm === 'register' ? <Register onFormSwitch={showLoginForm} goToHomePage={goToHomePage} /> : null}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App