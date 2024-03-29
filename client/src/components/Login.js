import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLoginUserMutation } from '../app/services/userApi';

function Login({onLogin, errors}) {

  // Redux method
  // const [loginUser] = useLoginUserMutation();

  // let navigate = useNavigate();

  // Error handling
  const {error} = errors;
  // console.log(error)

  const initialForm = {
    email: "",
    password: ""
  }

  // React state
  const [loginForm, setLoginForm] = useState(initialForm)

  const handleChange = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Redux method
    // loginUser(loginForm);

    // navigate(`/stats`);

    onLogin(loginForm);

    setLoginForm(initialForm);
  }

  return (
    <div>
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
      <br/>
      {(error ? <div className='errors'><h4 style={{color:'red'}}>{error.toUpperCase()}</h4></div> : "")}
    </div>
  )
}

export default Login;