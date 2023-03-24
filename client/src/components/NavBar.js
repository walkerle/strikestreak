import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar({ user, setUser }) {

  let navigate = useNavigate()

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok) {
        navigate("/")
        setUser(null);
        console.log("Logged out") // Remove on final release
      }
    })
  }

  if(!user) {
    return (
      <nav>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/signup'>SIGNUP</NavLink>
        <NavLink to='/login'>LOGIN</NavLink>
      </nav>
    )
  } else {
    return (
      <nav>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/mystats'>MY STATS</NavLink>
        <NavLink to='/mysessions/sessions'>MY SESSIONS</NavLink>
        <NavLink to='/friendslist'>FRIENDS LIST</NavLink>
        <NavLink onClick={handleLogout}>LOGOUT</NavLink>
      </nav>
    )
  }
}

export default NavBar;