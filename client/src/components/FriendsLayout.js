import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function FriendsLayout() {
  return (
    <div>
      <br/>
      <div className='Headers'>
        <h2>FRIENDS LIST</h2>
      </div>
      <br/>
      <nav className='secondaryNavBar'>
        <NavLink to=''>My Friends</NavLink>
        <NavLink to='find'>Find a Friend</NavLink>
      </nav>
      <br/>
      <Outlet />
    </div>
  )
}

export default FriendsLayout;