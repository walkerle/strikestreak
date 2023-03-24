import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser, setOverallStats, setJoinFriends }) {

  let navigate = useNavigate();

  const initialForm = {
    email: "",
    password: ""
  }

  const [loginForm, setLoginForm] = useState(initialForm)
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(loginForm),
    })
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user);
          setOverallStats(user.overall_stat);
          setJoinFriends(user.join_friends)
          console.log(user); // Remove on final release
          navigate('/mystats');
        });
      } else {
        res.json()
        .then((json) => setErrors(json.errors));
      }
    });

    setLoginForm(initialForm);
  }

  return (
    <div>
      {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")}
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