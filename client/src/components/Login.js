import React, { useState } from 'react';

function Login({ user, setUser }) {

  const initialForm = {
    email: "",
    password: ""
  }

  const [loginForm, setLoginForm] = useState(initialForm)

  const handleChange = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
    setLoginForm(initialForm);
  }

  return (
    <div>
      <h2>Login Component</h2>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        Email:
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Enter Email"
          value={loginForm.email}
        />
        Password:
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginForm.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;