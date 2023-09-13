import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useLogoutUserMutation } from '../app/services/userApi';

function NavBar({user, onLogout}) {

  // let navigate = useNavigate()

  // Redux method
  // const [logoutUser] = useLogoutUserMutation();

  const handleLogout = () => {
    // Redux method
    // logoutUser();

    onLogout();
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
        <NavLink to='/mystats'>MY STATS</NavLink>
        <NavLink to='/mysessions'>MY SESSIONS</NavLink>
        <NavLink to='/myfriends'>FRIENDS LIST</NavLink>
        <NavLink to='/' onClick={handleLogout}>LOGOUT</NavLink>
      </nav>
    )
  }
}

export default NavBar;