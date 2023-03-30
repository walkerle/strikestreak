import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../app/services/userApi';

function Login({ setJoinFriends }) {

  const [loginUser] = useLoginUserMutation();

  let navigate = useNavigate();

  const initialForm = {
    email: "",
    password: ""
  }

  const [loginForm, setLoginForm] = useState(initialForm)
  // const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    loginUser(loginForm);
    navigate(`/mystats`);
    // fetch("/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body:JSON.stringify(loginForm),
    // })
    // .then((res) => {
    //   if (res.ok) {
    //     res.json()
    //     .then((user) => {
    //       setUser(user);
    //       setOverallStats(user.overall_stat);
    //       setJoinFriends(user.join_friends)
    //       console.log(user); // Remove on final release
    //       navigate('/mystats');
    //     });
    //   } else {
    //     res.json()
    //     .then((json) => setErrors(json.errors));
    //   }
    // });

    setLoginForm(initialForm);
  }

  return (
    <div>
      {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")} */}
      <br/>
      <div className='Headers'>
        <h2>LOGIN</h2>
      </div>
      <br/>
      <div className='homeForm'>
        <form onSubmit={handleSubmit}>
          <strong>Email:</strong>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter Email"
            value={loginForm.email}
          />
          <strong>Password:</strong>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter Password"
            value={loginForm.password}
          />
          <button type="submit" className="moreButton">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login;