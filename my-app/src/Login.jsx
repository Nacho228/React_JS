import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="popup-container">
      <button onClick={props.goToHomePage}>Go back to home</button>
      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            id="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Your password"
            name="password"
            id="password"
          />
          <br />
          <button class="login-button">Log in</button>
          <br></br>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>
          Don't have an account?
        </button>
      </div>
    </div>
  );
};
