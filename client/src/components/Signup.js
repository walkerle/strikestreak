import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../app/services/userApi';

function Signup({ setJoinFriends }) {

  let navigate = useNavigate();

  const [createUser] = useCreateUserMutation();

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

    createUser(signupForm);
    navigate(`/mystats`);
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
      {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")} */}
      <h2>CREATE AN ACCOUNT</h2>
      <form onSubmit={handleSubmit}>
        Username:
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Enter Username"
          value={signupForm.username}
        />
        Email:
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Enter Email"
          value={signupForm.email}
        />
        Password:
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter Password"
          value={signupForm.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup;