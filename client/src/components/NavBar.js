import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from '../app/services/userApi';

function NavBar({user}) {

  let navigate = useNavigate()

  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = () => {
    logoutUser();
    navigate("/home");
    // fetch("/logout", {
    //   method: "DELETE"
    // })
    // .then(res => {
    //   if(res.ok) {
    //     setUser(null);
    //     console.log("Logged out") // Remove on final release
    //   }
    // })
  }

  if(!user) {
    return (
      <nav id='navBar'>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/signup'>SIGNUP</NavLink>
        <NavLink to='/login'>LOGIN</NavLink>
      </nav>
    )
  } else {
    return (
      <nav id='navBar'>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/stats'>MY STATS</NavLink>
        <NavLink to='/sessions'>MY SESSIONS</NavLink>
        <NavLink to='/friends'>FRIENDS LIST</NavLink>
        <NavLink to='/' onClick={handleLogout}>LOGOUT</NavLink>
      </nav>
    )
  }
}

export default NavBar;