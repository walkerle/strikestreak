import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCreateUserMutation } from '../app/services/userApi';

function Signup({onSignup, errors}) {

  // Redux method
  // const [createUser] = useCreateUserMutation();

  // let navigate = useNavigate();

  const errorsArr = errors.errors;

  const initialForm = {
    username: "",
    email: "",
    password: ""
  }

  const [signupForm, setSignupForm] = useState(initialForm)
  // const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    setSignupForm({...signupForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSignup(signupForm);

    // createUser(signupForm);
    // navigate(`/stats`);
    // fetch("/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body:JSON.stringify(signupForm),
    // })
    // .then((res) => {
    //   if (res.ok) {
    //     res.json()
    //     .then((user) => {
    //       setUser(user);
    //       setOverallStats(user.overall_stat)
    //       setJoinFriends(user.join_friends)
    //       console.log(user); // Remove on final release
    //     });
    //   } else {
      //     res.json()
      //     .then((json) => setErrors(json.errors));
      //   }
    // });

    setSignupForm(initialForm);
  }

  return (
    <div>
      <br/>
      <div className='Headers'>
        <h2>CREATE AN ACCOUNT</h2>
      </div>
      <br/>
      <div className='homeForm'>
        <form onSubmit={handleSubmit}>
          <strong>Username:</strong>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="Enter Username"
            value={signupForm.username}
          />
          <strong>Email:</strong>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter Email"
            value={signupForm.email}
          />
          <strong>Password:</strong>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter Password"
            value={signupForm.password}
          />
          <button type="submit" className="moreButton">Submit</button>
        </form>
      </div>
      <br/>
      {(errorsArr ? <div className='errors'>{errorsArr.map(error => <h4 key={error}>{error.toUpperCase()}</h4>)}</div> : "")}
    </div>
  )
}

export default Signup;