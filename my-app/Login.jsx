import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSumbit = (e) =>     {
        e.preventDefault();
        console.log(email);
    } 

    return (
        <div className="auth-form-container">
        <form onSubmit={handleSumbit}> 
            <label htmlFor="sad">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="ssssssaaaa" id="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e => setPass(e.target.value))} type="password" placeholder="*.*"name="password" id="password" />
            <button>Log in</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}> No tenes una cuenta bolsita?</button>
        </div>
    )
}