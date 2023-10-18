import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSumbit = (e) =>     {
        e.preventDefault();
        console.log(email);
    } 

    return (
        <div className="auth-form-container">
        <form onSubmit={handleSumbit}> 
            <label htmlFor="Name">Name</label>
            <input type="name" name="name" id="name" placeholder="Full name"/>
            <label htmlFor="sad">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Your email" id="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e => setPass(e.target.value))} type="password" placeholder="Your password"name="password" id="password" />
            <button>Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login</button>
        </div>
    )
}